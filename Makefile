install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npm eslint --fix .