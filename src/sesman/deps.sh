#!/bin/bash

# Atualiza a lista de pacotes
sudo apt update

# Instala todos modulos de configsudo
sudo apt install -y libkf6co*

# Encontra e instala pacotes de desenvolvimento que começam com libkf6
sudo apt install --no-install-suggests -y $(apt list libkf6* 2>/dev/null | grep -o '^libkf6[^/]*-dev')

exit 0