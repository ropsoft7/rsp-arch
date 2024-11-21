#!/bin/bash

echo Deleting existing ./proj directory within 7sec...
echo Tap CONTROL + C to cancel it now!

rm -rf ./proj

git clone https://github.com/qtilities/sddm-conf.git

mv sddm-conf proj

ls ./proj

exit 0;
