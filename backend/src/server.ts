import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';
import Professors from './model/Professors';
import Notifications from './model/Notifications';
import NotificationType from './model/NotificationType';
import multer from 'multer'
import Subject from './model/Subject';
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/projekatpia');
const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Uspesna konekcija');
})

const router = express.Router();

const OK_STATUS = { 'status': 'ok' };
const NOT_OK_STATUS = { 'status': 'not_ok' };

/************************** STORAGES */
var photoStorage = multer.diskStorage({
    destination: function (request, response, cb) {
        let dir = __dirname + '/photos';
        console.log(dir);
        cb(null, dir);
    },

    filename: function (request, file, cb) {
        console.log(file);
        cb(null, file.originalname);
    }
});

/********************UPLOADERS */

var uploadPhoto = multer({
    storage: photoStorage
}).single('file');

/***************** UPLOAD ROUTES */

router.route('/uploadphotos').post((request, response) => {
    try {
        uploadPhoto(request, response, err => {
            if (err) {
                console.log(err);
                response.status(410).json(NOT_OK_STATUS);
            } else {
                console.log('uspesno upload');
                response.status(200).json(OK_STATUS);
            }
        })

    } catch (error) {
        console.log(error);
        response.status(500).json(NOT_OK_STATUS);
    }
});


/*****************  DOWNLOAD ROUTES */

router.route('/downloadphotos/:filename').get((request, response)=>{
    var filename= request.params.filename;
    var fullpath= __dirname+'/photos/'+filename;
    response.download(fullpath);
})
/**************  PROFESSORS ROUTES ****/

//dohvata sve zaposlene
router.route('/zaposleni').get((request, response) => {
    Professors.find({}, (err, professors) => {
        if (err) console.log(err);
        else if (professors) response.json(professors);
        else response.json([]);
    });

});

//dohvata zaposlenog na osnovu username-a
router.route('/zaposleni/:id').get((request, response) => {
    Professors.findOne({ 'username': request.params.id }, (err, professor) => {
        if (err) console.log(err);
        else if (professor) response.json(professor);
        else
            response.json({});
    })
});

router.route('/zaposleni/insert').post((request, response) => {
    let professor = request.body.zaposleni;
    Professors.findOne({ 'username': professor.username }, (err, prof) => {
        if (err) console.log(err);
        else if (prof) response.json(NOT_OK_STATUS);
        else {
            let profSave = new Professors(professor);
            profSave.save().then(res => {
                response.json(res);
            });
        }
    });
});

router.route('/zaposleni/update').post((request, response) => {
    let professor = request.body.zaposleni;
    Professors.update({ 'username': professor.username },
        {


            password: professor.password,
            ime: professor.ime,
            prezime: professor.prezime,
            adresa: professor.adresa,
            mobilni: professor.mobilni,
            website: professor.website,
            podaci: professor.podaci,
            zvanje: professor.zvanje,
            kabinet: professor.kabinet,
            status: professor.status,
            predmeti: professor.predmeti,
            slika: professor.slika
        }
        , (err, res) => {
            if (err) console.log(err);
            else response.json(res);
        });
});

router.route('/zaposleni/delete').post((request, response) => {
    let prof = request.body.zaposleni;
    Professors.deleteOne({ 'username': prof.username }, err => {
        if (err) console.log(err)
    }).then(res => {
        response.json(res);
    });
});




/**************** Notification Routes */

//dohvata sve tipove obavestenja

router.route('/obavestenjatipovi').get((request, response) => {
    NotificationType.find({}, (err, types) => {
        if (err) console.log(err)
        else if (types) response.json(types);
        else response.json([]);
    });
});


//dohvata sva obavestenja
// router.route('/obavestenja').get((request, response) => {
//     var milis = Date.now() - 3*30*24*60*60*1000;
//     Notifications.find({'date': {"$lte": new Date(milis)}}, (err, notifications) => {
//         if (err) console.log(err)
//         else if (notifications) response.json(notifications)
//         else response.json([]);
//     })
// })

router.route('/obavestenja').get((request, response) => {
    var milis = Date.now() - 3 * 30 * 24 * 60 * 60 * 1000;
    Notifications.find({}, (err, notifications) => {
        if (err) console.log(err)
        else if (notifications) response.json(notifications)
        else response.json([]);
    })
});

router.route('/obavestenja/update').post((request, response) => {
    let oldNotification = request.body.oldNotification;
    let notification = request.body.notification;

    Notifications.update(
        {
            title: oldNotification.title,
            description: oldNotification.description,
            type: oldNotification.type,
            date: oldNotification.date
        },

        {
            title: notification.title,
            description: notification.description,
            type: notification.type
        }, (err, res) => {
            if (err) console.log(err);
            else

                response.json(res);
        });
});

router.route('/obavestenja/insert').post((request, response) => {
    let notification = request.body.notification;
    notification.date = new Date();
    let notif = new Notifications(notification);
    notif.save().then((res) => {
        response.json(res);
    })
});

router.route('/obavestenja/delete').post((request, response) => {
    let notification = request.body.notification;
    Notifications.deleteOne({
        title: notification.title,
        description: notification.description,
        type: notification.type,
        date: notification.date
    }, (err) => {
        if (err) console.log(err);
    }).then(res => {
        response.json(res);
    });
})

/**************************SUBJECT ROUTES */

/***************SUBJECT NOTIFICATION ROUTES */

router.route('/subject/notifications/:code' ).get((request, response)=>{
   let code = request.params.code;
   Subject.findOne({'info.code':code},{notifications: 1}, (err,res)=>{
       if(err){
           console.log(err);
        }
       else if(res){
           response.json(res);
       } else response.json([]);
   }) 
});

router.route('/subject/notifications/insert').post((request, response)=>{
    let date= new Date();
    let code = request.body.code;
    let notification = request.body.notification;
    Subject.findOneAndUpdate({'info.code': code}, {$push:{ 'notifications':notification}}).then(e=>{
        response.json(e);
    });
})

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
