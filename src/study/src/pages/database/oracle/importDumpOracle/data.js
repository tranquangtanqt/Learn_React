export const ImportDumpOracleData = {
    prepare: `sqlplus / AS SYSDBA
DROP USER PROVIC CASCADE;
DROP TABLESPACE MCDATA_OT including contents;
`,

    one: `alter session set "_ORACLE_SCRIPT"=true;`,
    two: `CREATE TABLESPACE MCDATA_OT DATAFILE 'MCDATA_OT.df' SIZE 10M REUSE AUTOEXTEND ON NEXT 10M MAXSIZE 20M;`
}