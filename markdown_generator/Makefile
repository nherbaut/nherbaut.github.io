all:
	python3 pubsFromBib.py
	rm  ../_publications/*
	git add ../_publications
	git add pubs.bib
	git commit -m "updated publications"
	git push origin master
