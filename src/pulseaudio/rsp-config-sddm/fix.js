#!/usr/local/bin/rsp.nodeJS

const fs = require('fs')
const path = require('path')
const rootd = __dirname;
const cmakelist = path.join(rootd, 'proj', 'CMakeLists.txt');
const searchfor = 'set(RSP_MINIMUM_VERSION "2.1.0")'
const replacefor = 'set(RSP_MINIMUM_VERSION "2.0.0")'
const fileContent = fs.readFileSync(cmakelist, 'utf8')
const updatedContent = fileContent.replace(searchfor, replacefor)

console.log('Running fix.sh')

// fs.writeFileSync(cmakelist, updatedContent, 'utf8')

process.exit(0);