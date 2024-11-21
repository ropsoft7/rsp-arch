#!/bin/bash

sudo apt install -y sddm;
sudo apt install -y libqtilitools-dev*;

sudo systemctl enable sddm

exit 0;