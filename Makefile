default: build

build: clean deps start

clean: 
	rm -rf ./dist ./node_modules
deps: 
	npm install express && npm install -g typescript 
start: 
	npm run build && npm start

run-docker:
	docker-compose up -d

stop-docker:
	docker-compose down

clean-docker:
	docker-compose rm -s -f

test: 
	echo 'TODO tests'


