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
        predmeti: professor.predmeni
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
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map