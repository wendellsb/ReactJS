//tyoe alias
type Uid= number | string
function logDetails (uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}
logDetails(123, "sapato");
logDetails("123", "sapato");

function logInfo (uid: Uid, user: string){
    console.log(`A product with ${uid} has a title as ${user}.`)  
}
logInfo(123, "Willian");
logInfo("123", "Willian");



type Platform ='Windows' | 'Linux' | 'Mac Os' | 'ios'
function renderPlatform(platform: Platform) {
    return platform
}
renderPlatform('ios')