export const PostgreSQLChapter2Data = {
    one: `SELECT (DATE_TRUNC('MONTH', ('202206'||'01')::DATE) + INTERVAL '1 MONTH - 1 day')::DATE;

 date
--------------
 2022-06-30`,

    two: `SELECT TO_CHAR('2016-08-12 16:40:32'::TIMESTAMP, 'DD Mon YYYY HH:MI:SSPM');

 to_char
--------------
 12 Jun 2022 04:40:32PM`,

    three: `SELECT TO_CHAR('2022-06-12 16:40:32'::TIMESTAMP,
    '"Today is "FMDay", the "DDth" day of the month of "FMMonth" of "YYYY');
    
 to_char
--------------
 Today is Sunday, the 12th day of the month of June of 2022`,

    four: `SELECT TO_CHAR('2016-08-12 16:40:32'::TIMESTAMP, 'TMDay, DD" de "TMMonth" del año "YYYY');

 to_char
--------------
Sábado, 12 de Agosto del año 2016`,
    five: `SELECT DATE_TRUNC('week', <>) AS "Week" , COUNT(*)
FROM <>
GROUP BY 1
ORDER BY 1;`
}