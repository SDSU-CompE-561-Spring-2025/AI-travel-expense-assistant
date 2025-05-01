seed-dummy-data:
	@goose postgres "postgresql://travel_buddy:travel_buddy_pass@localhost:5432/travel_buddy_db" up -dir db/cmd/migrations -v --no-versioning

migration-down:
	@goose postgres "postgresql://travel_buddy:travel_buddy_pass@localhost:5432/travel_buddy_db" down -dir db/cmd/migrations -v --no-versioning


