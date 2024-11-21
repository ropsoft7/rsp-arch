#!/usr/local/bin/rsp.nodeJS

const shelljs = require('shelljs');

console.log('Running remove.js');

const result = shelljs.exec(`
    cd ${__dirname} &&
    cd proj &&
    rm -rf plugin-voulme plugin-taskbar plugin-showdesktop plugin-mount plugin-mainmenu plugin-fancymenu plugin-desktopswitch
`);

if (result.code !== 0) {
    console.error('Erro ao remover os plugins:', result.stderr);
    process.exit(1);
}

console.log('Plugins removidos com sucesso');
process.exit(0);