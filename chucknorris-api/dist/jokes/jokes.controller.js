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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesController = void 0;
const common_1 = require("@nestjs/common");
const jokes_service_1 = require("./jokes.service");
let JokesController = class JokesController {
    constructor(jokesService) {
        this.jokesService = jokesService;
    }
    async getRandomJoke() {
        return await this.jokesService.getRandomJoke();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "getRandomJoke", null);
JokesController = __decorate([
    (0, common_1.Controller)('api/random-joke'),
    __metadata("design:paramtypes", [jokes_service_1.JokesService])
], JokesController);
exports.JokesController = JokesController;
//# sourceMappingURL=jokes.controller.js.map