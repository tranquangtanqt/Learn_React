import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapter6Data } from "./data";

const JavaTutorialChapter6 = () => {
  return (
    <>
      <Divider orientation="left">6. Command line Argument Processing</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>args</td>
                <td>
                  The command line arguments. Assuming that the main method is invoked by the Java launcher, args will
                  be non-null, and will have no null elements.
                </td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col span={24}>
          <h1>1. Argument processing using GWT ToolBase</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            If you want to parse more complex command-line arguments, e.g. with optional parameters, than the best is to
            use google's GWT approach. All classes are public available at:
          </p>
          <a
            href="https://gwt.googlesource.com/gwt/+/2.8.0-beta1/dev/core/src/com/google/gwt/util/tools/ToolBase.java"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://gwt.googlesource.com/gwt/+/2.8.0-beta1/dev/core/src/com/google/gwt/util/tools/ToolBase.java
          </a>
          <p>An example for handling the command-line myprogram -dir "~/Documents" -port 8888 is:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter6Data.one} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            ArgHandler also has a method isRequired() which can be overwritten to say that the command-line argument is
            required (default return is false so that the argument is optional.
          </p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Processing arguments by hand</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            When the command-line syntax for an application is simple, it is reasonable to do the command argument
            processing entirely in custom code.
          </p>
          <p>
            In this example, we will present a series of simple case studies. In each case, the code will produce error
            messages if the arguments are unacceptable, and then call System.exit(1) to tell the shell that the command
            has failed. (We will assume in each case that the Java code is invoked using a wrapper whose name is
            "myapp".)
          </p>
          <b>A command with no arguments</b>
          <p>
            In this case-study, the command requires no arguments. The code illustrates that args.length gives us the
            number of command line arguments.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter6Data.two} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <b>A command with two arguments</b>
          <p>In this case-study, the command requires at precisely two arguments</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter6Data.three} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Note that if we neglected to check args.length, the command would crash if the user ran it with too few
            command-line arguments.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter6Data.three} language="java" />
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter6;
