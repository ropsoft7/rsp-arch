#!/bin/bash

# Atualiza a lista de pacotes
sudo apt update

# Instala todos modulos de configsudo
sudo apt install blueman --no-install-recommends --no-install-suggests -y
sudo apt install libcaja* caja-actions* nautilus-data libnautilus-extension-dev nemo-python -y

exit 0