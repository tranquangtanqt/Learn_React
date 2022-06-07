export const ImportDumpOracleData = {
    prepare: `sqlplus / AS SYSDBA
DROP USER PROVIC CASCADE;
DROP TABLESPACE MCDATA_OT including contents;
`,
    one: `ALTER SESSION SET "_ORACLE_SCRIPT"=true;`,
    two: `CREATE TABLESPACE MCDATA_OT DATAFILE 'MCDATA_OT.df' SIZE 10M REUSE AUTOEXTEND ON NEXT 10M MAXSIZE 20M;`,
    three: `CREATE USER PROVIC IDENTIFIED BY PROVIC DEFAULT TABLESPACE MCDATA_OT QUOTA UNLIMITED ON MCDATA_OT;`,
    four: `GRANT ALL PRIVILEGES TO PROVIC;`,
    five: `CREATE OR REPLACE DIRECTORY alias AS 'pathname'
--Thay thế alias và pathname với pathname là đường dẫn đến file DUMP
--Ví dụ: CREATE OR REPLACE DIRECTORY IMPDIR AS 'D:\\DEMO'
--DROP: DROP DIRECTORY IMPDIR;`,
    six: `cd D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin
impdp PROVIC/PROVIC directory=IMPDIR dumpfile=dump_file.dmp logfile=log_file.log tablespaces=users,MCDATA_OT`,
}