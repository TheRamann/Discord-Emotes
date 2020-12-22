const superagent = require("superagent");

async function smug() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/smug');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function hug() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/hug');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function kiss() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/kiss');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function pat() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/pat');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function poke() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/poke');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function slap() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/slap');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function tickle() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/tickle');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function neko() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/neko');
    var gif = body.neko;
    return Promise.resolve(gif);
}
async function ngif() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/ngif');
    var gif = body.url;
    return Promise.resolve(gif);
}
async function cuddle() {
    const {
        body
    } = await superagent
        .get('https://nekos.life/api/v2/img/cuddle');
    var gif = body.url;
    return Promise.resolve(gif);
}
module.exports = {
    smug: smug,
    hug: hug,
    neko: neko,
    tickle: tickle,
    slap: slap,
    poke: poke,
    pat: pat,
    kiss: kiss,
    ngif: ngif,
    cuddle: cuddle
};