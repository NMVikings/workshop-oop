install: 
	npm install

run:
	npm run babel-node -- 'src/bin/index.js' https://web-standards.ru/podcast/feed/

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .