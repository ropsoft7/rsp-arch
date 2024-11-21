#!/bin/bash

# Atualiza a lista de pacotes
sudo apt update

# Instala todos modulos de configsudo
sudo apt install -y file-roller
sudo apt install -y yelp-tools
sudo apt install -y libyelp-dev
sudo apt install -y libwebkitgtk-6.0-dev
sudo apt install -y libsoup-3.0-dev
sudo apt install -y libsqlite3-dev
sudo apt install -y libjson-glib-dev

exit 0