#!/bin/bash

HERE_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$HERE_WRAPPER"`"

cd $HERE/proj

/usr/local/bin/rsp.projectRebrandir lxqt rsp
/usr/local/bin/rsp.projectRebrandir Lxqt Rsp
/usr/local/bin/rsp.projectRebrandir LXQt RSp
/usr/local/bin/rsp.projectRebrandir LXQT RSP

/usr/local/bin/rsp.projectRebrandir labwc compify
/usr/local/bin/rsp.projectRebrandir Labwc Compify
/usr/local/bin/rsp.projectRebrandir LABWc COMPIFy
/usr/local/bin/rsp.projectRebrandir LABWC COMPIFY

/usr/local/bin/rsp.projectRebrandir tweaks config
/usr/local/bin/rsp.projectRebrandir Tweaks config
/usr/local/bin/rsp.projectRebrandir TWEAKS config

exit 0;

