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
var FindProfile_1 = require("../../database/profile/FindProfile");
var CreateProfile_1 = require("../../database/profile/CreateProfile");
var checkUserProfile_1 = require("../../middlewares/checkUserProfile/checkUserProfile");
var DeleteProfile_1 = require("../../database/profile/DeleteProfile");
var EditProfile_1 = require("../../database/profile/EditProfile");
var findProfile = new FindProfile_1.FindProfile();
var createNewProfile = new CreateProfile_1.CreateProfile();
var deleteUserProfile = new DeleteProfile_1.DeleteProfile();
var editUserProfile = new EditProfile_1.EditProfile();
var ProfileController = /** @class */ (function () {
    function ProfileController() {
    }
    // Get Profile
    ProfileController.prototype.getProfiles = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    res.redirect("profiles/perPage=20&page=1");
                }
                catch (err) {
                    console.error(err.message);
                    return [2 /*return*/, res
                            .status(500)
                            .json({ errors: [{ msg: "Internal Server Error" }] })];
                }
                return [2 /*return*/];
            });
        });
    };
    //   Get Profiles With Page Details
    ProfileController.prototype.getProfilesWithPages = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, perPage, page, allProfile, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, perPage = _a.perPage, page = _a.page;
                        return [4 /*yield*/, findProfile.findAllProfiles(parseInt(perPage), parseInt(page))];
                    case 1:
                        allProfile = _b.sent();
                        return [2 /*return*/, res.status(200).json(allProfile)];
                    case 2:
                        err_1 = _b.sent();
                        console.error(err_1.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //   Create Profile
    ProfileController.prototype.createProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, newProfile, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createNewProfile.saveProfileInDatabase(body)];
                    case 2:
                        newProfile = _a.sent();
                        return [2 /*return*/, res.status(201).json({ data: newProfile })];
                    case 3:
                        err_2 = _a.sent();
                        console.error(err_2.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //   Edit Profile
    ProfileController.prototype.editProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, body, editedProfile, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        body = req.body;
                        delete body._id;
                        return [4 /*yield*/, editUserProfile.ediProfile(id, body)];
                    case 1:
                        editedProfile = _a.sent();
                        return [2 /*return*/, res.status(200).json(editedProfile)];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3.mesage);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Delete Profile
    ProfileController.prototype.deleteProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, deleteUserProfile.deleteProfile(id)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            return [2 /*return*/, res.status(200).json({ data: [{ msg: "Profile Deleted" }] })];
                        }
                        return [2 /*return*/, res
                                .status(400)
                                .json({ data: [{ msg: "Some thing wend wrong please try again" }] })];
                    case 2:
                        err_4 = _a.sent();
                        console.error(err_4.message);
                        return [2 /*return*/, res
                                .status(500)
                                .json({ errors: [{ msg: "Internal Server Error" }] })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        decorators_1.Get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "getProfiles", null);
    __decorate([
        decorators_1.Get("/perPage=:perPage&page=:page"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "getProfilesWithPages", null);
    __decorate([
        decorators_1.Post("/"),
        decorators_1.bodyValidator("firstName", "lastName", "image", "user"),
        decorators_1.use(checkUserProfile_1.checkUserProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "createProfile", null);
    __decorate([
        decorators_1.Put("/:id"),
        decorators_1.use(checkUserProfile_1.checkProfile),
        decorators_1.bodyValidator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "editProfile", null);
    __decorate([
        decorators_1.Delete("/:id"),
        decorators_1.use(checkUserProfile_1.checkProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "deleteProfile", null);
    ProfileController = __decorate([
        decorators_1.Controller("/profiles")
    ], ProfileController);
    return ProfileController;
}());
