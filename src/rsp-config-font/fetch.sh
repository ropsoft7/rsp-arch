#!/bin/bash

echo Deleting existing ./proj directory within 7sec...
echo Tap CONTROL + C to cancel it now!

sleep 7;

rm -rf ./proj

git clone https://github.com/FontManager/font-manager

mv font-manager proj

ls ./proj

exit 0;
