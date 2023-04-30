"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
var bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", (req, res, next) => {
    try {
        res.send("index.html");
    }
    catch (error) {
        next(error);
    }
});
app.post("/api/auth", (req, res, next) => {
    console.log('hitting api/auth');
    try {
        console.log(req.body);
        res.send("auth api");
    }
    catch (error) {
        next(error);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map