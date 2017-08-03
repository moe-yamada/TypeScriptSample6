"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var appTalk = require("./app-talk");
function AppTalk_GetGreeting_Test() {
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 0, 0, 0, 0)), "Welcom back!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 4, 59, 59, 999)), "Welcom back!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 5, 0, 0, 0)), "Good morning!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 11, 59, 59, 999)), "Good morning!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 12, 0, 0, 0)), "Good afternoon!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 15, 59, 59, 999)), "Good afternoon!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 16, 0, 0, 0)), "Good evening!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 21, 59, 59, 999)), "Good evening!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 22, 0, 0, 0)), "Welcom back!");
    assert.equal(appTalk.App.Talk.GetGreeting(new Date(2017, 1, 1, 23, 59, 59, 999)), "Welcom back!");
}
exports.AppTalk_GetGreeting_Test = AppTalk_GetGreeting_Test;
//# sourceMappingURL=UnitTest1.js.map