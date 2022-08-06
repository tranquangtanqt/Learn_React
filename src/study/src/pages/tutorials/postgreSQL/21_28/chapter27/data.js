export const PostgreSQLChapter27Data = {
    one: `CREATE EXTENSION postgres_fdw;`,

    two: `CREATE SERVER name_srv FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'hostname', dbname 'bd_name', port '5432');`,

    three: `CREATE USER MAPPING FOR postgres SERVER name_srv OPTIONS(USER 'postgres', PASSWORD 'password');`,

    four: ``,

    five: ``,

    six: ``,

    seven: ``,

    eight: ``,

    nine: ``,

    ten: ``,

    elevent: ``, 

    twelve: ``,

    thirteen: ``,

    fourteen: ``
}