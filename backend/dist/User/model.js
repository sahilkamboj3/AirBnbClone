"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../db/index"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield index_1.default.query("SELECT * FROM user_info");
        res.json(query);
    }
    catch (err) {
        console.error(err.message);
    }
}));
app.use('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const query = yield index_1.default.query("SELECT * FROM user_info WHERE user_id in ($1)", [id]);
        res.json(query);
    }
    catch (err) {
        console.error(err.message);
    }
}));
app.use('/postuser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age } = req.body;
        const query = yield index_1.default.query("INSERT INTO user_info (name, age) VALUES ($1, $2) RETURNING *", [name, age]);
        res.json(query);
    }
    catch (err) {
        console.error(err.message);
    }
}));
//# sourceMappingURL=model.js.map