function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function readEnv() {
    require('dotenv').config()
    return {
        VARIABLE1: parseInt(process.env.VARIABLE1),
        VARIABLE2: parseInt(process.env.VARIABLE2)
    }
}

function readPrivateEnv() {
    require('dotenv').config({ path: __dirname + '/.env' });
    console.log("VAR_SUBMODULES: ", process.env.VAR_SUBMODULES)
    console.log(process.env)
}

module.exports = { sumar, restar, readEnv, readPrivateEnv };
