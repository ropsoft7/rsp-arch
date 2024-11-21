.PHONY: all deps fetch rebrand fix make

all: fetch rebrand fix make

deps: 
	nice -15 bash ./deps.sh

fetch:
	nice -15 bash ./fetch.sh

rebrand:
	nice -15 bash ./rebrand.sh

fix:
	nice -10 ./fix.js

make:
	nice -15 bash ./make.sh