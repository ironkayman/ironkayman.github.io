install:
	poetry install
	npm install

python:
	poetry run python ./run.py \
		--root-dir ./mawanet-sixth-chamber/doc \
		--output-dir ./src/lib/mawanet
		# --whitelist ./mawanet-sixth-chamber/whitelist.json

build: python
	npm run build

preview:
	npm run preview

dev: python
	npm run dev