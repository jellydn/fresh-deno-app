.PHONY: dev
dev:
	@echo "Starting dev server..."
	deno task start

.PHONY: build
build:
	@echo "Building..."
	deno task build

.PHONE: preview
preview:
	@echo "Previewing..."
	deno task preview
