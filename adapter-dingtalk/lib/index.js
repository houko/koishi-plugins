"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = '@xiaomo/dingtalk-adapter';
exports.Config = koishi_1.Schema.object({});
function apply(ctx) {
    // write your plugin here
    ctx.command('dingtalk').action(() => {
        return "Hello, I'm DingTalk! for Koishi!";
    });
}
exports.apply = apply;