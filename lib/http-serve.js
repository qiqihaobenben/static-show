"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ecstatic_1 = __importDefault(require("ecstatic"));
class HttpServer {
    constructor(options) {
        const root = options.root || process.cwd();
        this.server = http_1.default.createServer((0, ecstatic_1.default)({
            root,
            cache: options.cache === undefined ? 3600 : options.cache,
            showDir: true,
            defaultExt: 'html',
            gzip: true,
            contentType: 'application/octet-stream',
        }));
    }
    listen(port) {
        this.server.listen(port);
    }
    close() {
        this.server.close();
    }
}
exports.default = HttpServer;
