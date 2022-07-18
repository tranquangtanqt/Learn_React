import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import TipsForOracleSQLDeveloper from "./database/oracle/tipsForOracleSQLDeveloper";
import HightLightCode from "./demo/highlight";
import Home from "./homePage";
import './index.scss';

import Utilities from "./utilities";
import ReadContentMultiFile from "./utilities/readContentMultiFile";
import ListFileSelected from "./utilities/listFileSelected";
import TextRepeat from "./utilities/textRepeat";
import TextReplace from "./utilities/textReplace";

import TinyMCE from "./utilities/tinyMCE";
import ConnectAPI from "./demo/connectAPI";
import RandomInsertSQL from "./utilities/randomInsertSQL";

import NetAngular from "./tutorials/netAngular";
import NALesson1 from "./tutorials/netAngular/naLesson1";
import NALesson2 from "./tutorials/netAngular/naLesson2";
import NALesson3 from "./tutorials/netAngular/naLesson3";
import NALesson4 from "./tutorials/netAngular/naLesson4";
import NALesson5 from "./tutorials/netAngular/naLesson5";
import NALesson6 from "./tutorials/netAngular/naLesson6";
import NALesson7 from "./tutorials/netAngular/naLesson7";
import NALesson8 from "./tutorials/netAngular/naLesson8";
import NALesson9 from "./tutorials/netAngular/naLesson9";

import ProgrammingCSharp from "./programming/cSharp";
import GetAllFileInFolder from "./programming/cSharp/getAllFileInFolder";
import ReadFileExcel from "./programming/cSharp/readFileExcel";
import ConnectOracleCSharp from "./programming/cSharp/connectOracle";
import ConnectPostgresqlCsharp from "./programming/cSharp/connectPostgresql";
import DatabaseOracle from "./database/oracle";
import DatabasePostgresql from "./database/postgresql";
import ConfigPghba from "./database/postgresql/configPghba";
import ChangeLanguageOracleSQLDeveloper from "./database/oracle/changeLanguageOracleSQLDeveloper";
import ImportDumpOracle from "./database/oracle/importDumpOracle";
import ListenerAndTnsnames from "./database/oracle/listenerAndTnsnames";
import StringOracle from "./database/oracle/tips/string";
import SystemOracle from "./database/oracle/tips/system";
import SqltextSessionProcess from "./database/oracle/sqltextSessionProcess";
import Tips from "./tips";
import VisualStudioCode from "./tips/software/visualStudioCode";
import VocabularyUnit1 from "./japan/vocabulary/unit1";
import Vocabulary from "./japan/vocabulary";
import ExcelTutorial from "./tutorials/excel";
import ExcelFilter1 from "./tutorials/excel/sortAndFilter/filter1.js";

import ProgrammingJava from "./programming/java";
import SettingMaven from "./programming/java/settingMaven";
import SelectData1 from "./programming/java/selectData1";
import InsertData1 from "./programming/java/insertData1";
import UpdateData1 from "./programming/java/updateData1";
import DeleteData1 from "./programming/java/deleteData1";
import SelectData2 from "./programming/java/selectData2";
import ProgrammingPHP from "./programming/PHP";
import PHPConvertDatetime from "./programming/PHP/convertDatetime";
import PHPConvertUnicode from "./programming/PHP/convertUnicode";
import EPPlus from "./programming/cSharp/epplus";
import PHPSubstringEllipses from "./programming/PHP/substringEllipses";
import PHPDeleteFile from "./programming/PHP/phpDeleteFile";
import CharactersInExcel from "./tutorials/excel/charactersInExcel";
import NameControlWinform from "./programming/cSharp/nameControlWinform";
import TextCommon from "./utilities/textCommon";
import PostgreSQL from "./tutorials/postgreSQL";
import PostgreSQLChapter1 from "./tutorials/postgreSQL/chapter1";
import PostgreSQLChapter2 from "./tutorials/postgreSQL/chapter2";
import PostgreSQLChapter3 from "./tutorials/postgreSQL/chapter3";
import PostgreSQLChapter4 from "./tutorials/postgreSQL/chapter4";
import PostgreSQLChapter5 from "./tutorials/postgreSQL/chapter5";
import PostgreSQLChapter6 from "./tutorials/postgreSQL/chapter6";
import PostgreSQLChapter7 from "./tutorials/postgreSQL/chapter7";
import PostgreSQLChapter8 from "./tutorials/postgreSQL/chapter8";
import PostgreSQLChapter9 from "./tutorials/postgreSQL/chapter9";
import FindTextDuplicates from "./utilities/findTextDuplicates";
import PostgreSQLChapter10 from "./tutorials/postgreSQL/chapter10";
import PostgreSQLChapter11 from "./tutorials/postgreSQL/chapter11";

const RoutesRoot = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
        <Route path="/demo/highlightcode" element={<HightLightCode />} />
        
        <Route path="/database/postgresql" element={<DatabasePostgresql />} />
        <Route path="/database/postgresql/configPghba" element={<ConfigPghba />} />

        <Route path="/database/oracle" element={<DatabaseOracle />} />
        <Route path="/database/oracle/changeLanguageOracleSQLDeveloper" element={<ChangeLanguageOracleSQLDeveloper />} />
        <Route path="/database/oracle/importDumpOracle" element={<ImportDumpOracle />} />
        <Route path="/database/oracle/listenerAndTnsnames" element={<ListenerAndTnsnames />} />
        <Route path="/database/oracle/sqltextSessionProcess" element={<SqltextSessionProcess />} />
        <Route path="/database/oracle/tips/string" element={<StringOracle />} />
        <Route path="/database/oracle/tips/system" element={<SystemOracle />} />
        <Route path="/database/oracle/tipsForOracleSQLDeveloper" element={<TipsForOracleSQLDeveloper />} />
        
        <Route path="/japan/vocabulary" element={<Vocabulary />} />
        <Route path="/japan/vocabulary/unit1" element={<VocabularyUnit1 />} />

        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/software/visualStudioCode" element={<VisualStudioCode />} />

        <Route path="/utilities" element={<Utilities />} />
        <Route path="/utilities/findTextDuplicates" element={<FindTextDuplicates />} />
        <Route path="/utilities/listFileSelected" element={<ListFileSelected />} />
        <Route path="/utilities/randomInsertSQL" element={<RandomInsertSQL />} />
        <Route path="/utilities/textRepeat" element={<TextRepeat />} />
        <Route path="/utilities/readContentMultiFile" element={<ReadContentMultiFile />} />
        <Route path="/utilities/textReplace" element={<TextReplace />} />
        <Route path="/utilities/textCommon" element={<TextCommon />} />
        <Route path="/utilities/tinyMCE" element={<TinyMCE />} />

        <Route path="/tutorial/excel" element={<ExcelTutorial />} />
        <Route path="/tutorial/excel/filter1" element={<ExcelFilter1 />} />
        <Route path="/tutorial/excel/charactersInExcel" element={<CharactersInExcel />} />

        <Route path="/tutorial/net-angular" element={<NetAngular />} />
        <Route path="/tutorial/net-angular/lesson1" element={<NALesson1 />} />
        <Route path="/tutorial/net-angular/lesson2" element={<NALesson2 />} />
        <Route path="/tutorial/net-angular/lesson3" element={<NALesson3 />} />
        <Route path="/tutorial/net-angular/lesson4" element={<NALesson4 />} />
        <Route path="/tutorial/net-angular/lesson5" element={<NALesson5 />} />
        <Route path="/tutorial/net-angular/lesson6" element={<NALesson6 />} />
        <Route path="/tutorial/net-angular/lesson7" element={<NALesson7 />} />
        <Route path="/tutorial/net-angular/lesson8" element={<NALesson8 />} />
        <Route path="/tutorial/net-angular/lesson9" element={<NALesson9 />} />

        <Route path="/tutorial/postgreSQL" element={<PostgreSQL />} />
        <Route path="/tutorial/postgreSQL/chapter1" element={<PostgreSQLChapter1 />} />
        <Route path="/tutorial/postgreSQL/chapter2" element={<PostgreSQLChapter2 />} />
        <Route path="/tutorial/postgreSQL/chapter3" element={<PostgreSQLChapter3 />} />
        <Route path="/tutorial/postgreSQL/chapter4" element={<PostgreSQLChapter4 />} />
        <Route path="/tutorial/postgreSQL/chapter5" element={<PostgreSQLChapter5 />} />
        <Route path="/tutorial/postgreSQL/chapter6" element={<PostgreSQLChapter6 />} />
        <Route path="/tutorial/postgreSQL/chapter7" element={<PostgreSQLChapter7 />} />
        <Route path="/tutorial/postgreSQL/chapter8" element={<PostgreSQLChapter8 />} />
        <Route path="/tutorial/postgreSQL/chapter9" element={<PostgreSQLChapter9 />} />
        <Route path="/tutorial/postgreSQL/chapter10" element={<PostgreSQLChapter10 />} />
        <Route path="/tutorial/postgreSQL/chapter11" element={<PostgreSQLChapter11 />} />

        <Route path="/programming-csharp" element={<ProgrammingCSharp />} />
        <Route path="/programming-csharp/connectOracle" element={<ConnectOracleCSharp />} />
        <Route path="/programming-csharp/connectPostgresql" element={<ConnectPostgresqlCsharp />} />
        <Route path="/programming-csharp/getAllFileInFolder" element={<GetAllFileInFolder />} />
        <Route path="/programming-csharp/readFileExcel" element={<ReadFileExcel />} />
        <Route path="/programming-csharp/EPPlus" element={<EPPlus />} />
        <Route path="/programming-csharp/nameControlWinform" element={<NameControlWinform />} />

        <Route path="/programming-java" element={<ProgrammingJava />} />
        <Route path="/programming-java/settingMaven" element={<SettingMaven />} />
        <Route path="/programming-java/selectData1" element={<SelectData1 />} />
        <Route path="/programming-java/insertData1" element={<InsertData1 />} />
        <Route path="/programming-java/updateData1" element={<UpdateData1 />} />
        <Route path="/programming-java/deleteData1" element={<DeleteData1 />} />
        <Route path="/programming-java/selectData2" element={<SelectData2 />} />

        <Route path="/programming-php" element={<ProgrammingPHP />} />
        <Route path="/programming-php/convertDatetime" element={<PHPConvertDatetime />} />
        <Route path="/programming-php/convertUnicode" element={<PHPConvertUnicode />} />
        <Route path="/programming-php/substringEllipses" element={<PHPSubstringEllipses />} />
        <Route path="/programming-php/phpDeleteFile" element={<PHPDeleteFile />} />

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
      </Routes>
    </HashRouter >
  );
};

export default RoutesRoot;
