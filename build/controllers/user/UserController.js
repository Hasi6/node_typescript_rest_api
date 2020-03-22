"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../../decorators");
var database_1 = require("../../database");
var findUser = new database_1.FindUser();
var removeUser = new database_1.DeleteUser();
var saveUser = new database_1.SaveUser();
var editUser = new database_1.EditUser();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // Default Users With Pagination
    UserController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var perPage, page, users, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        perPage = 20;
                        page = 1;
                        return [4 /*yield*/, findUser.findAllUsers(perPage, page)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.status(200).json(users)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //   Get User with Pagination
    UserController.prototype.getUsersWithPagination = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, perPage, page, users, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, perPage = _a.perPage, page = _a.page;
                        return [4 /*yield*/, findUser.findAllUsers(parseInt(perPage), parseInt(page))];
                    case 1:
                        users = _b.sent();
                        return [2 /*return*/, res.status(200).json(users)];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //   Add User
    UserController.prototype.addUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, firstName, image, age, height, gender, user, newUser, response, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, firstName = _a.firstName, image = _a.image, age = _a.age, height = _a.height, gender = _a.gender;
                        if (gender !== "male" && gender !== "female" && gender !== "other") {
                            return [2 /*return*/, res.status(404).json({
                                    errors: [{ msg: "Gender is Invalid, Enter male, female or other" }]
                                })];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, findUser.findUserByEmail(email)];
                    case 2:
                        user = _b.sent();
                        // If User Found On That Email Send Email Found Message
                        if (user) {
                            return [2 /*return*/, res
                                    .status(404)
                                    .json({ errors: [{ msg: "Email Already Taken" }] })];
                        }
                        newUser = {
                            email: email,
                            age: age,
                            firstName: firstName,
                            image: image,
                            height: parseFloat(height),
                            gender: gender
                        };
                        return [4 /*yield*/, saveUser.saveUserInDatabase(newUser)];
                    case 3:
                        response = _b.sent();
                        return [2 /*return*/, res.status(201).json({ newUser: response })];
                    case 4:
                        err_3 = _b.sent();
                        console.error(err_3.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //   Edit User
    UserController.prototype.ediUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, body, gender, user, editedUser, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        body = req.body;
                        gender = body.gender;
                        delete body.email;
                        delete body._id;
                        if (gender !== "male" && gender !== "female" && gender !== "other") {
                            return [2 /*return*/, res.status(404).json({
                                    errors: [{ msg: "Gender is Invalid, Enter male, female or other" }]
                                })];
                        }
                        return [4 /*yield*/, findUser.findUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ errors: [{ msg: "Invalid User Id" }] })];
                        }
                        return [4 /*yield*/, editUser.editUser(id, body)];
                    case 2:
                        editedUser = _a.sent();
                        return [2 /*return*/, res.status(200).json({ editedUser: editedUser })];
                    case 3:
                        err_4 = _a.sent();
                        console.error(err_4.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //   Delete User
    UserController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var message, id, user, isDeleted, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        message = "User Deleted";
                        id = req.params.id;
                        return [4 /*yield*/, findUser.findUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ errors: [{ msg: "Invalid User Id" }] })];
                        }
                        return [4 /*yield*/, removeUser.deleteUserById(id)];
                    case 2:
                        isDeleted = _a.sent();
                        if (!isDeleted) {
                            message = "Something went wrong, Please Try Again later";
                        }
                        return [2 /*return*/, res.status(200).json({ message: message })];
                    case 3:
                        err_5 = _a.sent();
                        console.error(err_5.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        decorators_1.Get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getUsers", null);
    __decorate([
        decorators_1.Get("/perPage=:perPage&page=:page"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getUsersWithPagination", null);
    __decorate([
        decorators_1.Post("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "addUser", null);
    __decorate([
        decorators_1.Put("/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "ediUser", null);
    __decorate([
        decorators_1.Delete("/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "deleteUser", null);
    UserController = __decorate([
        decorators_1.Controller("/users")
    ], UserController);
    return UserController;
}());
