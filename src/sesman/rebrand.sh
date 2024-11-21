#!/bin/bash

HERE_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$HERE_WRAPPER"`"

cd $HERE/proj

/usr/local/bin/rsp.projectRebrandir wlogout sesman
/usr/local/bin/rsp.projectRebrandir Wlogout Sesman
/usr/local/bin/rsp.projectRebrandir WLOGOUT SESMAN

exit 0;
