export const PostgreSQLChapter3Data = {
    one: `\\d tablename`,

    two: `\\d+ tablename`,

    three: `CREATE TABLE person (
    person_id BIGINT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT NOT NULL,
    PRIMARY KEY (person_id)
); 
`,

    four: `CREATE TABLE people_over_30 AS SELECT * FROM person WHERE age > 30;`,

    five: `CREATE UNLOGGED TABLE person (
    person_id BIGINT NOT NULL PRIMARY KEY, 
    last_name VARCHAR(255) NOT NULL, 
    first_name VARCHAR(255), 
    address VARCHAR(255), 
    city VARCHAR(255)
);`,

    six: `CREATE TABLE person (
    person_id BIGINT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    PRIMARY KEY (person_id)
);`,

    seven: `CREATE TABLE person (
    person_id BIGINT NOT NULL PRIMARY KEY,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255)
);`,

    eight : `CREATE TABLE agencies ( -- first create the agency table
    id SERIAL PRIMARY KEY,
    NAME TEXT NOT NULL
)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    agency_id NOT NULL INTEGER REFERENCES agencies(id) DEFERRABLE INITIALLY DEFERRED -- this is going
    to references your agency table.
)`
    
}