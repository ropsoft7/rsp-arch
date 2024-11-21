#!/bin/bash

echo Deleting existing ./proj directory within 7sec...
echo Tap CONTROL + C to cancel it now!

sleep 7;

rm -rf ./proj

git clone https://github.com/Alexays/Pantray.git

mv Pantray proj

ls ./proj

exit 0;
