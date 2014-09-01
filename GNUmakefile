NODE_MODULES := ./node_modules/

ENB := $(NODE_MODULES).bin/enb
NPM := npm
BOWER := bower

ifneq (,$(findstring B,$(MAKEFLAGS)))
	ENB_FLAGS := --no-cache
endif

all:: $(ENB) server

%:: $(ENB)
	$(if $(findstring GNUmakefile,$@),,$(ENB) make $@ $(ENB_FLAGS))

.PHONY: server
server:: $(ENB)
	echo "Open http://localhost:8080/pages/index/index.html to see build results."
	@$(ENB) server

$(ENB):: install

.PHONY: install
install:
	@$(NPM) install
	@$(BOWER) install

build:
	./node_modules/.bin/enb make pages/index

.PHONY: clean
clean::
	$(ENB) make clean
