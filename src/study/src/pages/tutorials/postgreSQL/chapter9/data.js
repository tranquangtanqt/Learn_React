export const PostgreSQLChapter9Data = {
    one: `DROP DATABASE IF EXISTS books_db;
    
CREATE DATABASE books_db WITH ENCODING='UTF8' TEMPLATE template0;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    client TEXT NOT NULL,
    DATA JSONb NOT NULL
);
`,

    two: `INSERT INTO books(client, DATA) VALUES (
    'Joe',
    '{ "title": "Siddhartha", "author": { "first_name": "Herman", "last_name": "Hesse" } }'
),(
    'Jenny',
    '{ "title": "Dharma Bums", "author": { "first_name": "Jack", "last_name": "Kerouac" } }'
),(
    'Jenny',
    '{ "title": "100 años de soledad", "author": { "first_name": "Gabo", "last_name": "Marquéz" }
}'
);
`,

    three: `SELECT * FROM books;`,

    four: `SELECT client,
    DATA->'title' AS title
FROM books;`,

    five: `SELECT client,
    DATA->'title' AS title, DATA->'author' AS author
FROM books;
`,
    six: `SELECT client,
    DATA->'author'->'last_name' AS author
FROM books;
`, 

    seven: `SELECT
    client,
    DATA->'title' AS title
FROM books
    WHERE DATA->'title' = '"Dharma Bums"';`,

    eight: `SELECT
    client,
    DATA->'title' AS title
FROM books
    WHERE DATA->'author'->>'last_name' = 'Kerouac';`,

    nine: `CREATE TABLE events (
    NAME varchar(200),
    visitor_id varchar(200),
    properties json,
    browser json
);`,

    ten: `INSERT INTO events (NAME, visitor_id, properties, browser) VALUES
(
    'pageview', '1',
    { "page": "/" }',
    '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
),(
    'pageview', '2',
    '{ "page": "/" }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1920, "y": 1200 } }'
),(
    'pageview', '1',
    '{ "page": "/account" }',
    '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
),(
    'purchase', '5',
    '{ "amount": 10 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1024, "y": 768 } }'
),(
    'purchase', '15',
    '{ "amount": 200 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
),(
    'purchase', '15',
    '{ "amount": 500 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);`,

    eleven: `SELECT * FROM events`,
    twelve: `SELECT browser->>'name' AS browser,
    COUNT(browser)
FROM events
GROUP BY browser->>'name';`,

    thirteen: `SELECT visitor_id, SUM(CAST(properties->>'amount' AS INTEGER)) AS total
FROM events
WHERE CAST(properties->>'amount' AS INTEGER) > 0
GROUP BY visitor_id;`,

    fourteen: `SELECT AVG(CAST(browser->'resolution'->>'x' AS INTEGER)) AS width,
    AVG(CAST(browser->'resolution'->>'y' AS INTEGER)) AS height
FROM events;
`

}