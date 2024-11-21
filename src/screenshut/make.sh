#!/bin/bash

HERE_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$HERE_WRAPPER"`"

cd $HERE/proj

rm -rf build

mkdir build

cd build

cmake .. --fresh && nice -15 make && sudo make install

exit 0;