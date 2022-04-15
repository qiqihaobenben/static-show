#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const http_serve_1 = __importDefault(require("./http-serve"));
commander_1.program
    .option('--cache, <cache>', '设置缓存时间，秒数')
    .option('--root, <root>', '静态文件目录')
    .option('--port, <port>', '监听端口', '3000')
    .action((options) => {
    console.log(options);
    const { root, cache, port } = options;
    const server = new http_serve_1.default({
        root,
        cache: cache ? parseInt(cache) : undefined,
    });
    server.listen(Number(port));
    console.log(`监听 ${port}`);
});
commander_1.program.parse(process.argv);
