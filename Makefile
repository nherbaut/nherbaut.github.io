.DEFAULT_GOAL:=run
clean:
	bundle clean --force
install:
	bundle install
run:
	bundle exec jekyll liveserve --config _config.yml,_config_dev.yml
