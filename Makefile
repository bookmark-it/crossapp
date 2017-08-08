.PHONY: install build_prod start_server

install:
	npm install

build_prod:
	npm run build

start_server:
	npm run server
