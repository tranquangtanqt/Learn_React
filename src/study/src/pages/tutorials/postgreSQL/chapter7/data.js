export const PostgreSQLChapter7Data = {
    one: `cat > samplet_data.csv
1,Yogesh
2,Raunak
3,Varun
4,Kamal
5,Hari
6,Amit`,

    two: `CREATE TABLE copy_test(id INT, NAME varchar(8));`,

    three: `COPY copy_test FROM '/path/to/file/sample_data.csv' DELIMITER ',';`,

    four: `COPY copy_test FROM STDIN DELIMITER ',';
Enter DATA TO be copied followed BY a newline.
END WITH a backslash AND a period ON a line BY itself.
>> 7,Amol
>> 8,Amar
>> \\.
TIME: 85254.306 ms`,

    five: `SELECT * FROM copy_test ;

id | name
----+--------
1 | Yogesh
3 | Varun
5 | Hari
7 | Amol
2 | Raunak
4 | Kamal
6 | Amit
8 | Amar`,

    six: `COPY copy_test TO 'path/to/file/sample_data.csv' DELIMITER ',';`
}