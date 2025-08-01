.PHONY: install dev test test-watch test-coverage lint lint-fix start build-docker run-docker clean

install:
	npm install

dev:
	npm run dev

test:
	npm test

test-watch:
	npm run test:watch

test-coverage:
	npm run test:coverage

lint:
	npm run lint

lint-fix:
	npm run lint:fix

start:
	npm start

build-docker:
	docker build -t js-demo-api .

run-docker:
	docker run -p 3000:3000 js-demo-api

clean:
	rm -rf node_modules coverage