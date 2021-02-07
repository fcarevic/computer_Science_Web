import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';
import Professors from './model/Professors';
import Notifications from './model/Notifications';
import NotificationType from './model/NotificationType';
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/projekatpia');
const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Uspesna konekcija');
})

const router = express.Router();





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
        var milis = Date.now() - 3*30*24*60*60*1000;
        Notifications.find({}, (err, notifications) => {
            if (err) console.log(err)
            else if (notifications) response.json(notifications)
            else response.json([]);
        })
    })

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
