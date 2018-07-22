install: 
	npm install

run:
	npm run babel-node -- 'src/bin/index.js' --out rss __tests__/__fixtures__/test.rss

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .