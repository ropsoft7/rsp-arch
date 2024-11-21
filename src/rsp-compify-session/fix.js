#!/usr/local/bin/rsp.nodeJS

const fs = require('fs')
const path = require('path')
const rootd = __dirname;
const cmakelist = path.join(rootd, 'proj', 'startrspcompify.in');
const searchfor = 'XDG_DESKTOP_DIR="$HOME/Desktop"'
const replacefor = 'XDG_DESKTOP_DIR="$HOME/Space"'
const fileContent = fs.readFileSync(cmakelist, 'utf8')
const updatedContent = fileContent.replace(searchfor, replacefor)

console.log('Running fix.sh')

fs.writeFileSync(cmakelist, updatedContent, 'utf8')

process.exit(0);