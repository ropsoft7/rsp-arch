#!/usr/local/bin/rsp.nodeJS

const fs = require('fs')
const path = require('path')
const rootd = __dirname;
const shelljs = require('shelljs');

console.log('Running fix.sh')

// fs.writeFileSync(cmakelist, updatedContent, 'utf8')

var rsp = {
    exec: shelljs.exec
}

rsp.exec(`
    
    cd ${rootd}
    cd asset
    cp -rf file.desktop ${path.join(rootd, 'proj')}/data/blueman-manager.desktop.in

`)



process.exit(0);