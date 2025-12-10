YARN ?= yarn

.PHONY: install dev preview lib typecheck clean

install:
	$(YARN) install

dev: clean install
	$(YARN) dev

preview:
	$(YARN) build:preview

lib:
	$(YARN) build:lib

typecheck:
	$(YARN) typecheck

clean:
	rm -rf node_modules dist .ladle .ladle-cache
