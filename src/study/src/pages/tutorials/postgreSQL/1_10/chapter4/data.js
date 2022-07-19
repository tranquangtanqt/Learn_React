export const PostgreSQLChapter4Data = {
    one: `CREATE TABLE sch_test.user_table
(
    id serial NOT NULL,
    username CHARACTER VARYING,
    pass CHARACTER VARYING,
    first_name CHARACTER varying(30),
    last_name CHARACTER varying(30),
    CONSTRAINT user_table_pkey PRIMARY KEY (id)
)

+----+------------+-----------+----------+------+
| id | first_name | last_name | username | pass |
+----+------------+-----------+----------+------+
| 1 | hello | world | hello | word |
+----+------------+-----------+----------+------+
| 2 | root | me | root | toor |
+----+------------+-----------+----------+------+`,

    two: `SELECT * FROM schema_name.table_name WHERE <condition>;`,

    three: `SELECT field1, field2 FROM schema_name.table_name WHERE <condition>;`,

    four: `-- SELECT every thing where id = 1
SELECT * FROM schema_name.table_name WHERE id = 1;

-- SELECT id where username = ? and pass = ?
SELECT id FROM schema_name.table_name WHERE username = 'root' AND pass = 'toor';

-- SELECT first_name where id not equal 1
SELECT first_name FROM schema_name.table_name WHERE id != 1;`,
}