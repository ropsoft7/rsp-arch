#!/bin/bash

HERE_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$HERE_WRAPPER"`"

cd $HERE/proj

rm -rf build
mkdir build
cd build

cmake .. && nice -10 make --ignore-errors && sudo make install --ignore-errors

exit 0;
