build:
	rm  -f ../_pub*/*
	python3 pubsFromBib.py
push:
	git add ../_pub*/*
	git add *.bib
	git commit -m "updated publications"
	git push origin master
