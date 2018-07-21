install: 
	npm install

run:
	npm run babel-node -- 'src/bin/index.js' test2.atom

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .