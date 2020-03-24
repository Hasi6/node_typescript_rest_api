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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../../decorators");
var multer_1 = __importDefault(require("../../services/multer/multer"));
var AddProject_1 = require("../../database/project/AddProject");
var GetProjects_1 = require("../../database/project/GetProjects");
var checkProject_1 = require("../../middlewares/checkProject/checkProject");
var DeleteProject_1 = require("../../database/project/DeleteProject");
var EditProject_1 = require("../../database/project/EditProject");
var createProject = new AddProject_1.CreateProject();
var findProjects = new GetProjects_1.FindProjects();
var deleteProjects = new DeleteProject_1.DeleteProject();
var editProject = new EditProject_1.EditProject();
var multer = new multer_1.default();
var ProjectController = /** @class */ (function () {
    function ProjectController() {
    }
    // Get Projects
    ProjectController.prototype.getProjects = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    res.redirect("projects/perPage=20&page=1");
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
    ProjectController.prototype.getProject = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var project, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, findProjects.findProjectById(req.params.id)];
                    case 1:
                        project = _a.sent();
                        return [2 /*return*/, res.status(200).json({ data: project })];
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
    ProjectController.prototype.getProjectsPagination = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, perPage, projects, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, page = _a.page, perPage = _a.perPage;
                        return [4 /*yield*/, findProjects.findAllProjects(parseInt(perPage), parseInt(page))];
                    case 1:
                        projects = _b.sent();
                        return [2 /*return*/, res.status(200).json({ data: projects })];
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
    // Add Projects
    ProjectController.prototype.addProject = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, multer.upload(req, res, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, createProject.saveProjectInDatabase(req, res)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //   Edit Project
    ProjectController.prototype.editProjetc = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, editedProject, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = req.body;
                        delete body._id;
                        return [4 /*yield*/, editProject.editProject(req.params.id, body)];
                    case 1:
                        editedProject = _a.sent();
                        return [2 /*return*/, res.status(200).json({ data: editedProject })];
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
    //   Delete Project
    ProjectController.prototype.deleteProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response_1, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, deleteProjects.deleteProject(id)];
                    case 1:
                        response_1 = _a.sent();
                        if (!response_1) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ data: [{ msg: "Something went wrong" }] })];
                        }
                        return [2 /*return*/, res.status(200).json({ data: [{ msg: "Profile Deleted" }] })];
                    case 2:
                        err_5 = _a.sent();
                        console.error(err_5.message);
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
    ], ProjectController.prototype, "getProjects", null);
    __decorate([
        decorators_1.Get("/:id"),
        decorators_1.use(checkProject_1.checkProject),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "getProject", null);
    __decorate([
        decorators_1.Get("/perPage=:perPage&page=:page"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "getProjectsPagination", null);
    __decorate([
        decorators_1.Post("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "addProject", null);
    __decorate([
        decorators_1.Put("/:id"),
        decorators_1.use(checkProject_1.checkProject),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "editProjetc", null);
    __decorate([
        decorators_1.Delete("/:id"),
        decorators_1.use(checkProject_1.checkProject),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "deleteProfile", null);
    ProjectController = __decorate([
        decorators_1.Controller("/projects")
    ], ProjectController);
    return ProjectController;
}());
