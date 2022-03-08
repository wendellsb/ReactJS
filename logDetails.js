"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function logInfo(uid, user) {
    console.log(`A product with ${uid} has a title as ${user}.`);
}
logInfo(123, "Willian");
logInfo("123", "Willian");
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
