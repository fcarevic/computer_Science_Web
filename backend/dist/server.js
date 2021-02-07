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
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map