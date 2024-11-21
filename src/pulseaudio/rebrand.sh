#!/bin/bash

HERE_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$HERE_WRAPPER"`"

cd $HERE/proj

/usr/local/bin/rsp.projectRebrandir nm-applet rsp-config-wifi-applet
/usr/local/bin/rsp.projectRebrandir nm_applet rsp_config_wifi_applet
/usr/local/bin/rsp.projectRebrandir NM-APPLET RSP-CONFIG-WIFI-APPLET
/usr/local/bin/rsp.projectRebrandir NM_APPLET RSP_CONFIG_WIFI_APPLET

/usr/local/bin/rsp.projectRebrandir lxqt rsp
/usr/local/bin/rsp.projectRebrandir Lxqt Rsp
/usr/local/bin/rsp.projectRebrandir LXQt RSp
/usr/local/bin/rsp.projectRebrandir LXQT RSP

exit 0;
