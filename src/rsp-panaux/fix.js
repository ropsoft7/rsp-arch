#!/usr/local/bin/rsp.nodeJS

const RSp = require('rsp-libjavascript')
const path = require('path')
const shelljs = require('shelljs')

const rsp = new RSp()

console.log('Running fix.sh')

rsp.util.replacef('proj/CMakeLists.txt', 'find_package(rsp-globalkeys-ui ${RSP_GLOBALKEYS_MINIMUM_VERSION} REQUIRED)', '### Removed');
rsp.util.replacef('proj/panel/CMakeLists.txt', 'find_package(rsp-globalkeys-ui ${RSP_GLOBALKEYS_MINIMUM_VERSION} REQUIRED)', '### Removed');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(VOLUME_PLUGIN Yes)', 'setByDefault(VOLUME_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(TASKBAR_PLUGIN Yes)', 'setByDefault(TASKBAR_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(SHOWDESKTOP_PLUGIN Yes)', 'setByDefault(SHOWDESKTOP_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(MOUNT_PLUGIN Yes)', 'setByDefault(MOUNT_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(MAINMENU_PLUGIN Yes)', 'setByDefault(MAINMENU_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(FANCYMENU_PLUGIN Yes)', 'setByDefault(FANCYMENU_PLUGIN No)');
rsp.util.replacef('proj/CMakeLists.txt', 'setByDefault(DESKTOPSWITCH_PLUGIN Yes)', 'setByDefault(DESKTOPSWITCH_PLUGIN No)');

rsp.exec(`cd ${__dirname}; cd proj; rm -rf plugin-voulme plugin-taskbar plugin-showdesktop plugin-mount plugin-mainmenu plugin-fancymenu plugin-desktopswitch`)

process.exit(0);