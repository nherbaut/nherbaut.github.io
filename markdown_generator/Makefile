all:
	rm  -f ../_publications/*
	python3 pubsFromBib.py
	git add ../_publications
	git add pubs.bib
	git commit -m "updated publications"
	git push origin master
