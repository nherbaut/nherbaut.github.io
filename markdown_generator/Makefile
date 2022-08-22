build:
	rm  -f ../_pub*/*
	python3 pubsFromBib.py
push:
	git add ../_publications
	git add pubs.bib
	git commit -m "updated publications"
	git push origin master
