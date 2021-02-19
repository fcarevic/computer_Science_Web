"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const Professors_1 = __importDefault(require("./model/Professors"));
const Notifications_1 = __importDefault(require("./model/Notifications"));
const NotificationType_1 = __importDefault(require("./model/NotificationType"));
const multer_1 = __importDefault(require("multer"));
const Subject_1 = __importDefault(require("./model/Subject"));
const Student_1 = __importDefault(require("./model/Student"));
const Admins_1 = __importDefault(require("./model/Admins"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/projekatpia');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('Uspesna konekcija');
});
const router = express_1.default.Router();
const OK_STATUS = { 'status': 'ok' };
const NOT_OK_STATUS = { 'status': 'not_ok' };
/************************** STORAGES */
var photoStorage = multer_1.default.diskStorage({
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
var syllabusStorage = multer_1.default.diskStorage({
    destination: function (request, response, cb) {
        let dir = __dirname + '/syllabus';
        cb(null, dir);
    },
    filename: function (request, file, cb) {
        cb(null, file.originalname);
    }
});
var subjectMaterialStorage = multer_1.default.diskStorage({
    destination: function (reqiest, response, cb) {
        let dir = __dirname + '/materials';
        cb(null, dir);
    },
    filename: function (request, file, cb) {
        cb(null, file.originalname);
    }
});
/********************UPLOADERS */
var uploadPhoto = multer_1.default({
    storage: photoStorage
}).single('file');
var uploadMaterial = multer_1.default({
    storage: subjectMaterialStorage
}).single('file');
var uploadSyllabus = multer_1.default({
    storage: syllabusStorage
}).single('file');
/***************** UPLOAD ROUTES */
router.route('/uploadphotos').post((request, response) => {
    try {
        uploadPhoto(request, response, err => {
            if (err) {
                console.log(err);
                response.status(410).json(NOT_OK_STATUS);
            }
            else {
                console.log('uspesno upload photo');
                response.status(200).json(OK_STATUS);
            }
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json(NOT_OK_STATUS);
    }
});
router.route('/materials/upload').post((request, response) => {
    try {
        uploadMaterial(request, response, err => {
            if (err) {
                console.log(err);
                response.status(410).json(NOT_OK_STATUS);
            }
            else {
                console.log('uspesno upload materials');
                response.status(200).json(OK_STATUS);
            }
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json(NOT_OK_STATUS);
    }
});
router.route('/syllabus/upload').post((request, response) => {
    try {
        uploadSyllabus(request, response, err => {
            if (err) {
                console.log(err);
                response.status(410).json(NOT_OK_STATUS);
            }
            else {
                console.log('uspesno upload syllabus');
                response.status(200).json(OK_STATUS);
            }
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json(NOT_OK_STATUS);
    }
});
/*****************  DOWNLOAD ROUTES */
router.route('/downloadphotos/:filename').get((request, response) => {
    var filename = request.params.filename;
    var fullpath = __dirname + '/photos/' + filename;
    response.download(fullpath);
});
router.route('/materials/download/:filename').get((request, response) => {
    var filename = request.params.filename;
    var fullpath = __dirname + '/materials/' + filename;
    response.download(fullpath);
});
/**************  PROFESSORS ROUTES ****/
//dohvata sve zaposlene
router.route('/zaposleni').get((request, response) => {
    Professors_1.default.find({}, (err, professors) => {
        if (err)
            console.log(err);
        else if (professors)
            response.json(professors);
        else
            response.json([]);
    });
});
//dohvata zaposlenog na osnovu username-a
router.route('/zaposleni/:id').get((request, response) => {
    Professors_1.default.findOne({ 'username': request.params.id }, (err, professor) => {
        if (err)
            console.log(err);
        else if (professor)
            response.json(professor);
        else
            response.json({});
    });
});
router.route('/zaposleni/insert').post((request, response) => {
    let professor = request.body.zaposleni;
    Professors_1.default.findOne({ 'username': professor.username }, (err, prof) => {
        if (err)
            console.log(err);
        else if (prof)
            response.json(NOT_OK_STATUS);
        else {
            let profSave = new Professors_1.default(professor);
            profSave.save().then(res => {
                response.json(res);
            });
        }
    });
});
router.route('/zaposleni/update').post((request, response) => {
    let professor = request.body.zaposleni;
    Professors_1.default.update({ 'username': professor.username }, {
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
    }, (err, res) => {
        if (err)
            console.log(err);
        else
            response.json(res);
    });
});
router.route('/zaposleni/delete').post((request, response) => {
    let prof = request.body.zaposleni;
    Professors_1.default.deleteOne({ 'username': prof.username }, err => {
        if (err)
            console.log(err);
    }).then(res => {
        response.json(res);
    });
});
/**************** Notification Routes */
//dohvata sve tipove obavestenja
router.route('/obavestenjatipovi').get((request, response) => {
    NotificationType_1.default.find({}, (err, types) => {
        if (err)
            console.log(err);
        else if (types)
            response.json(types);
        else
            response.json([]);
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
    Notifications_1.default.find({}, (err, notifications) => {
        if (err)
            console.log(err);
        else if (notifications)
            response.json(notifications);
        else
            response.json([]);
    });
});
router.route('/obavestenja/update').post((request, response) => {
    let oldNotification = request.body.oldNotification;
    let notification = request.body.notification;
    Notifications_1.default.update({
        title: oldNotification.title,
        description: oldNotification.description,
        type: oldNotification.type,
        date: oldNotification.date
    }, {
        title: notification.title,
        description: notification.description,
        type: notification.type
    }, (err, res) => {
        if (err)
            console.log(err);
        else
            response.json(res);
    });
});
router.route('/obavestenja/insert').post((request, response) => {
    let notification = request.body.notification;
    notification.date = new Date();
    let notif = new Notifications_1.default(notification);
    notif.save().then((res) => {
        response.json(res);
    });
});
router.route('/obavestenja/delete').post((request, response) => {
    let notification = request.body.notification;
    Notifications_1.default.deleteOne({
        title: notification.title,
        description: notification.description,
        type: notification.type,
        date: notification.date
    }, (err) => {
        if (err)
            console.log(err);
    }).then(res => {
        response.json(res);
    });
});
/**************************STUDENT ROUTES */
router.route('/student/insert').post((request, response) => {
    let student = request.body.student;
    Student_1.default.findOne({ 'username': student.username }, (err, res) => {
        if (err)
            console.log(err);
        else if (res) {
            response.json({ status: 'not_ok', msg: 'Username zauzet' });
        }
        else {
            let st = new Student_1.default(student);
            st.save().then(res => {
                response.json({ 'status': 'ok', msg: 'Uspesno azurirano' });
            });
        }
    });
});
router.route('/student/info/:username').get((request, response) => {
    let username = request.params.username;
    Student_1.default.findOne({ 'username': username }, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(res);
        else
            response.json({});
    });
});
router.route('/student/info/update').post((request, response) => {
    let student = request.body.student;
    Student_1.default.updateOne({ 'username': student.username }, {
        username: student.username,
        password: student.password,
        ime: student.ime,
        prezime: student.prezime,
        indeks: student.indeks,
        tip: student.tip,
        status: student.status
    }).then(res => {
        response.json(res);
    });
});
router.route('/student/info/delete').post((requset, response) => {
    let username = requset.body.username;
    Student_1.default.deleteOne({ 'username': username }).then(res => {
        response.json(res);
    });
});
/**************************SUBJECT ROUTES */
/***************SUBJECT NOTIFICATION ROUTES */
router.route('/subject/notifications/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { notifications: 1 }, (err, res) => {
        if (err) {
            console.log(err);
        }
        else if (res) {
            response.json(res);
        }
        else
            response.json([]);
    });
});
router.route('/subject/notifications/insert').post((request, response) => {
    let date = new Date();
    let code = request.body.code;
    let notification = request.body.notification;
    Subject_1.default.findOneAndUpdate({ 'info.code': code }, { $push: { 'notifications': notification } }).then(e => {
        response.json(e);
    });
});
router.route('/subject/notifications/update').post((request, response) => {
    let code = request.body.code;
    let oldNotification = request.body.oldNotification;
    let notification = request.body.notification;
    Subject_1.default.findOneAndUpdate({
        'info.code': code,
        'notifications.title': oldNotification.title,
        'notifications.description': oldNotification.description,
        'notifications.date': oldNotification.date
    }, {
        $set: {
            'notifications.$.title': notification.title,
            'notifications.$.description': notification.description,
            'notifications.$.date': notification.date
        }
    }, (err, res) => {
        if (err)
            console.log(err);
        else
            response.json(res);
    });
});
router.route('/subject/notifications/delete').post((request, response) => {
    let notification = request.body.notification;
    let code = request.body.code;
    Subject_1.default.updateOne({ "info.code": code }, {
        $pull: {
            "notifications": {
                title: notification.title,
                description: notification.description,
                date: notification.date
            }
        }
    }, (err, res) => {
        if (err)
            console.log(err);
        else
            response.json(res);
    });
});
/*****************SUBJECT INFO ROUTES */
router.route('/subject/info/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { info: 1 }, (err, res) => {
        if (err)
            console.log(err);
        if (res)
            response.json(res.info);
        else
            response.json({});
    });
});
router.route('/subject/info/insert').post((request, response) => {
    let info = request.body.info;
    console.log(info);
    Subject_1.default.findOne({ 'info.code': info.code }, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(NOT_OK_STATUS);
        else {
            let sub = new Subject_1.default({ info: info });
            sub.save().then(res => {
                response.json(res);
            });
        }
    });
});
router.route('/subject/info/update').post((request, response) => {
    let code = request.body.code;
    let info = request.body.info;
    Subject_1.default.update({ 'info.code': code }, { 'info': info }).then(res => response.json(res));
});
/********************SUBJECT MATERIALS ROUTES */
router.route('/subject/materials/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { lectureMaterials: 1, exerciseMaterials: 1 }, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(res);
        else
            response.json([]);
    });
});
router.route('/subject/lectures/materials/insert').post((request, response) => {
    let filename = request.body.filename;
    let code = request.body.code;
    Subject_1.default.update({ 'info.code': code }, {
        $push: {
            lectureMaterials: filename
        }
    }).then(res => { response.json(res); });
});
router.route('/subject/exercises/materials/insert').post((request, response) => {
    let filename = request.body.filename;
    let code = request.body.code;
    Subject_1.default.update({ 'info.code': code }, {
        $push: {
            exerciseMaterials: filename
        }
    }).then(res => { response.json(res); });
});
router.route('/subject/lab/materials/insert').post((request, response) => {
    let code = request.body.code;
    let filename = request.body.filename;
    Subject_1.default.update({ 'info.code': code }, {
        $push: {
            'lab.materials': filename
        }
    }).then(res => { response.json(res); });
});
router.route('/subject/lectures/materials/delete').post((request, response) => {
    let code = request.body.code;
    let filename = request.body.filename;
    console.log(code);
    console.log(filename);
    Subject_1.default.update({ 'info.code': code }, {
        $pull: {
            lectureMaterials: filename
        }
    }).then(res => { response.json(res); });
});
router.route('/subject/exercises/materials/delete').post((request, response) => {
    let code = request.body.code;
    let filename = request.body.filename;
    Subject_1.default.update({ 'info.code': code }, {
        $pull: {
            exerciseMaterials: filename
        }
    }).then(res => { response.json(res); });
});
router.route('/subject/lab/materials/delete').post((request, response) => {
    let code = request.body.code;
    let filename = request.body.filename;
    Subject_1.default.update({ 'info.code': code }, {
        $pull: { 'lab.materials': filename }
    }).then(res => {
        response.json(res);
    });
});
//TODO: DELETE
/******************SUBJECT LAB INFO ROUTES */
router.route('/subject/lab/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { lab: 1 }, (err, res) => {
        if (err)
            console.log(err);
        else if (res) {
            response.json(res);
        }
        else
            response.json({});
    });
});
router.route('/subject/lab/update').post((request, response) => {
    let code = request.body.code;
    let lab = request.body.lab;
    console.log(lab);
    Subject_1.default.updateOne({ 'info.code': code }, {
        'lab': lab
    }).then(res => {
        response.json(res);
    });
});
/*****************SUBJECT PROJECT ROUTES */
router.route('/subject/project/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { project: 1 }, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(res);
        else
            response.json({});
    });
});
router.route('/subject/project/update').post((request, response) => {
    let code = request.body.code;
    let project = request.body.project;
    Subject_1.default.updateOne({ 'info.code': code }, { project: project }).then(res => { response.json(res); });
});
router.route('/subject/project/materials/insert').post((request, response) => {
    let code = request.body.code;
    let filename = request.body.filename;
    Subject_1.default.updateOne({ 'info.code': code }, { $push: { 'project.materials': filename } })
        .then(res => { response.json(res); });
});
/******************SUBJECT SYLLABUS ROUTES */
router.route('/subject/syllabus/update').post((request, response) => {
    let list = request.body.list;
    let code = request.body.code;
    let newlist = request.body.newlist;
    Subject_1.default.updateOne({
        'info.code': code,
        'syllabus.name': list.name,
        'syllabus.date': list.date,
        'syllabus.expireDate': list.expireDate,
        'syllabus.limit': list.limit,
        'syllabus.place': list.place
    }, {
        $set: {
            'syllabus.$.name': newlist.name,
            'syllabus.$.date': newlist.date,
            'syllabus.$.expireDate': newlist.expireDate,
            'syllabus.$.limit': newlist.limit,
            'syllabus.$.place': newlist.place,
            'syllabus.$.active': newlist.active
        }
    }).then(res => {
        response.json(res);
    });
});
router.route('/subject/syllabus/addstudent').post((request, response) => {
    let list = request.body.list;
    let code = request.body.code;
    let username = request.body.username;
    Subject_1.default.updateOne({
        'info.code': code,
        'syllabus.name': list.name,
        'syllabus.date': list.date,
        'syllabus.expireDate': list.expireDate,
        'syllabus.limit': list.limit,
        'syllabus.place': list.place
    }, {
        $push: {
            'syllabus.$.students': username
        }
    }).then(res => response.json(res));
});
router.route('/subject/syllabus/insert').post((request, response) => {
    let code = request.body.code;
    let list = request.body.list;
    Subject_1.default.updateOne({
        'info.code': code
    }, {
        $push: {
            'syllabus': list
        }
    }).then((res) => {
        response.json(res);
    });
});
router.route('/subject/syllabus/:code').get((request, response) => {
    let code = request.params.code;
    Subject_1.default.findOne({ 'info.code': code }, { syllabus: 1 }, (err, res) => {
        if (res)
            console.log(err);
        if (res)
            response.json(res);
        else
            response.json({});
    });
});
/*********************ADMIN ROUTES */
router.route('/admins').get((request, response) => {
    Admins_1.default.find({}, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(res);
        else
            response.json({});
    });
});
router.route('/admins/:username').get((request, response) => {
    let username = request.params.username;
    Admins_1.default.findOne({ 'username': username }, (err, res) => {
        if (err)
            console.log(err);
        else if (res)
            response.json(res);
        else
            response.json({});
    });
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map