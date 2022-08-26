import { Col, Divider, Row } from "antd";
import Code from "../../../components/modules/code";

const BatchCommon = () => {
  const BatchCommonData = {
    three: `@ECHO OFF

:choice
set /P c=Are you sure you want to continue[Y/N]?
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice

:somewhere
echo "I am here because you typed Y"
pause
exit

:somewhere_else
echo "I am here because you typed N"
pause
exit
`,

    two: `EQU: Equal
GEQ: Greater
cls: Clear screen
color 0a: set color`,

    one: `PUSHD %~dp0
set CURRENT_DIR=%~dp0
set vDATE=%DATE:/=%
set vTIME=%TIME:~0,8%
set vTIME=%vTIME::=%
set vTIME=%vTIME: =0%
set TIME_STAMP=%vDATE%%vTIME%`,

    four: `@echo off
color 0a
echo press 1 for option 1
echo press 2 for option 2
echo press 3 for option 3

choice /c 123 /n
if %errorlevel% EQU 1 goto 1
if %errorlevel% EQU 2 goto 2
if %errorlevel% EQU 3 goto 3

:1
echo option 1 
goto exit

:2
echo option 2 
goto exit

:3
echo option 3 
goto exit

:exit
pause
exit`,

    five: ``,

    six: ``,

    seven: ``,

    eight: ``,

    nine: ``,

    ten: ``,

    elevent: ``,

    twelve: ``,

    thirteen: ``,

    fourteen: ``,
  };

  return (
    <>
      <Divider orientation="left">Batch Common</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. If Else</h1>
        </Col>

        <Col span={22} offset={2}>
          <Code code={BatchCommonData.one} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <Code code={BatchCommonData.two} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <Code code={BatchCommonData.three} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <Code code={BatchCommonData.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p></p>
          <b></b>
        </Col>
      </Row>
    </>
  );
};

export default BatchCommon;
