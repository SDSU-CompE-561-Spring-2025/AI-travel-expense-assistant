-- +goose Up
-- +goose StatementBegin
-- Insert a test user
INSERT INTO users (id, username, email, password_hash, phone_number, created_at)
VALUES (
    1,
    'testuser',
    'test@example.com',
    '$2b$12$srQjG2zVXeRv9Gh6atCBguTHZUKPjwFYJW2zkWZ0Y4J4NZie5gfs6', -- hashed 'password123' when  SECRET_KEY: your_secret_key_here
    '+1234567890',
    CURRENT_TIMESTAMP
);

-- Insert two trips
INSERT INTO trips (id, user_id, title, start_date, end_date, description, total_cost)
VALUES 
    (1, 1, 'Business Trip to New York', '2024-03-01 00:00:00', '2024-03-05 00:00:00', 'Annual business review meeting', 595.00),
    (2, 1, 'Conference in San Francisco', '2024-04-10 00:00:00', '2024-04-15 00:00:00', 'Tech conference and networking', 825.00),
    (3, 1, 'Family Vacation to Hawaii', '2025-05-15 00:00:00', '2025-05-22 00:00:00', 'Family reunion and beach vacation', 1500.00);


-- Insert items for the first trip
INSERT INTO items (id, trip_id, title, start_date, end_date, item_type, description, cost, web_link)
VALUES 
    (1, 1, 'Flight to NYC', '2024-03-01 08:00:00', '2024-03-01 08:00:00', 'transportation', 'Round trip flight from SFO to JFK', 250.00, 'https://example.com/flight'),
    (2, 1, 'Hotel stay', '2024-03-01 15:00:00', '2024-03-01 15:00:00', 'accommodation', '4 nights at Marriott Times Square', 300.00, 'https://example.com/hotel'),
    (3, 1, 'Client dinner', '2024-03-02 19:00:00', '2024-03-02 19:00:00', 'activity', 'Dinner meeting with potential client', 45.00, NULL);

-- Insert items for the second trip
INSERT INTO items (id, trip_id, title, start_date, end_date, item_type, description, cost, web_link)
VALUES 
    (4, 2, 'Flight to SFO', '2024-04-10 10:00:00', '2024-04-10 10:00:00', 'transportation', 'Round trip flight from JFK to SFO', 350.00, 'https://example.com/flight'),
    (5, 2, 'Conference hotel', '2024-04-10 15:00:00', '2024-04-10 15:00:00', 'accommodation', '5 nights at Hilton Union Square', 400.00, 'https://example.com/hotel'),
    (6, 2, 'Conference registration', '2024-04-11 09:00:00', '2024-04-11 09:00:00', 'activity', 'Full conference pass', 75.00, 'https://example.com/conference'),
    (7, 3, 'Flight to Hawaii', '2025-05-15 12:00:00', '2025-05-15 12:00:00', 'transportation', 'Round trip flight from SFO to HNL', 1000.00, 'https://example.com/flight'),
    (8, 3, 'Beach resort', '2025-05-16 15:00:00', '2025-05-16 15:00:00', 'accommodation', '7 nights at Hilton Waikiki Beach', 1200.00, 'https://example.com/hotel'),
    (9, 3, 'Family dinner', '2025-05-17 19:00:00', '2025-05-17 19:00:00', 'activity', 'Family dinner at local restaurant', 60.00, NULL);


-- Reset the items.id sequence so next insert won’t collide
SELECT setval(
pg_get_serial_sequence('items','id'),
  COALESCE(MAX(id),0) + 1,
  false
)
FROM items;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- Delete all the dummy data
DELETE FROM items WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9);
DELETE FROM trips WHERE id IN (1, 2, 3);
DELETE FROM users WHERE id = 1;
-- +goose StatementEnd
