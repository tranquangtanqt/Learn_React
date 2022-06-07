export const SqltextSessionProcessData = {
    sql1: `select object_name, object_type from all_objects where object_name in ('V$SQLTEXT', 'V$SESSION', 'V$PROCESS');`,
    sql2: `select table_owner, table_name from all_synonyms where synonym_name in ('V$SQLTEXT', 'V$SESSION', 'V$PROCESS');`,
    sql3: `grant select on V_$PROCESS to PROVIC;
grant select on V_$SQLTEXT to PROVIC;
grant select on V_$SESSION to PROVIC;`,
}