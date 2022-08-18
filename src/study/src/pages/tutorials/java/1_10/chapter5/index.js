import { Col, Row, Divider, Image } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapter5Data } from "./data";

const JavaTutorialChapter5 = () => {
  return (
    <>
      <Divider orientation="left">5. Documenting Java Code</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            Documentation for java code is often generated using javadoc. Javadoc was created by Sun Microsystems for
            the purpose of generating API documentation in HTML format from java source code. Using the HTML format
            gives the convenience of being able to hyperlink related documents together.
          </p>
          <h1>1. Building Javadocs From the Command Line</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            Many IDEs provide support for generating HTML from Javadocs automatically; some build tools (Maven and
            Gradle, for example) also have plugins that can handle the HTML creation.
          </p>
          <p>
            However, these tools are not required to generate the Javadoc HTML; this can be done using the command line
            javadoc tool.
          </p>
          <p>The most basic usage of the tool is:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Which will generate HTML from the Javadoc comments in JavaFile.java.</p>
          <p>
            A more practical use of the command line tool, which will recursively read all java files in
            [source-directory], create documentation for [package.name] and all sub-packages, and place the generated
            HTML in the [docsdirectory] is:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.two} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Class Documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            All Javadoc comments begin with a block comment followed by an asterisk (/**) and end when the block comment
            does (*/). Optionally, each line can begin with arbitrary whitespace and a single asterisk; these are
            ignored when the documentation files are generated.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.three} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>The same tags and format used for Classes can be used for Enums and Interfaces as well.</p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3. Method Documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            All Javadoc comments begin with a block comment followed by an asterisk (/**) and end when the block comment
            does (*/). Optionally, each line can begin with arbitrary whitespace and a single asterisk; these are
            ignored when the documentation files are generated.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.four} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>The same tags and format used for Classes can be used for Enums and Interfaces as well.</p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>4. Package Documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>Version ≥ Java SE 5</p>
          <p>
            It is possible to create package-level documentation in Javadocs using a file called package-info.java. This
            file must be formatted as below. Leading whitespace and asterisks optional, typically present in each line
            for formatting reason
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.five} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            In the above case, you must put this file package-info.java inside the folder of the Java package
            com.example.foo.
          </p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>5. Links</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>Linking to other Javadocs is done with the @link tag:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.six} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <Image src={require("../../../../../resources/img/tutorials/java/java_1.png")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>
            With the @see tag you can add elements to the See also section. Like @param or @return the place where they
            appear is not relevant. The spec says you should write it after @return.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.seven} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <Image src={require("../../../../../resources/img/tutorials/java/java_2.png")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>
            If you want to add links to external resources you can just use the HTML {"<a>"}tag. You can use it inline
            anywhere or inside both @link and @see tags
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.eight} language="java" />
        </Col>
        <Col span={23} offset={1}>
          <Image src={require("../../../../../resources/img/tutorials/java/java_3.png")} />
          <br />
          <br />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>6. Code snippets inside documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            The canonical way of writing code inside documentation is with the {"{@code }"} construct. If you have
            multiline code wrap inside {"<pre></pre>"}.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.nine} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Sometimes you may need to put some complex code inside the javadoc comment. The @ sign is specially
            problematic. The use of the old {"<code>"} tag alongside the {"{@literal }"} construct solves the problem.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.ten} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>7. Field Documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            All Javadoc comments begin with a block comment followed by an asterisk (/**) and end when the block comment
            does (*/). Optionally, each line can begin with arbitrary whitespace and a single asterisk; these are
            ignored when the documentation files are generated.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.elevent} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>8. Inline Code Documentation</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>Apart from the Javadoc documentation code can be documented inline.</p>
          <p>
            Single Line comments are started by // and may be positioned after a statement on the same line, but not
            before.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.twelve} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Multi-Line comments are defined between /* and */. They can span multiple lines and may even been positioned
            between statements.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter5Data.thirteen} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>JavaDocs are a special form of multi-line comments, starting with /**.</p>
          <p>
            As too many inline comments may decrease readability of code, they should be used sparsely in case the code
            isn't self-explanatory enough or the design decision isn't obvious.
          </p>
          <p>
            An additional use case for single-line comments is the use of TAGs, which are short, convention driven
            keywords. Some development environments recognize certain conventions for such single-comments. Common
            examples are
          </p>
          <ul>
            <li>{"//TODO"}</li>
            <li>{"//FIXME"}</li>
          </ul>
          <p>Or issue references, i.e. for Jira</p>
          <ul>
            <li>{"//PRJ-1234"}</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter5;
