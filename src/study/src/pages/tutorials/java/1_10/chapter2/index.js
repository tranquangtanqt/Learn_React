import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapter2Data } from "./data";

const JavaTutorialChapter2 = () => {
  return (
    <>
      <Divider orientation="left">2. Getters and Setters</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>This article discusses getters and setters; the standard way to provide access to data in Java classes</p>
          <h1>1. Using a setter or getter to implement a constraint</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Setters and Getters allow for an object to contain private variables which can be accessed and changed with
            restrictions. For example
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            In this Person class, there is a single variable: name. This variable can be accessed using the getName()
            method and changed using the setName(String) method, however, setting a name requires the new name to have a
            length greater than 2 characters and to not be null. Using a setter method rather than making the variable
            name public allows others to set the value of name with certain restrictions. The same can be applied to the
            getter method:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            In the modified getName() method above, the name is returned only if its length is less than or equal to 16.
            Otherwise, "Name is too large" is returned. This allows the programmer to create variables that are
            reachable and modifiable however they wish, preventing client classes from editing the variables unwantedly.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Why Use Getters and Setters?</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Consider a basic class containing an object with getters and setters in Java:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            We can't access the count variable because it's private. But we can access the getCount() and the
            setCount(int) methods because they are public. To some, this might raise the question; why introduce the
            middleman? Why not just simply make they count public?
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.four} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            For all intents and purposes, these two are exactly the same, functionality-wise. The difference between
            them is the extensibility. Consider what each class says:
          </p>
          <ul>
            <li>
              First: "I have a method that will give you an int value, and a method that will set that value to another
              int".
            </li>
            <li>Second: "I have an int that you can set and get as you please."</li>
          </ul>
          <p>
            These might sound similar, but the first is actually much more guarded in its nature; it only lets you
            interact with its internal nature as it dictates. This leaves the ball in its court; it gets to choose how
            the internal interactions occur. The second has exposed its internal implementation externally, and is now
            not only prone to external users, but, in the case of an API, committed to maintaining that implementation
            (or otherwise releasing a non-backwardcompatible API).
          </p>
          <p>
            Lets consider if we want to synchronize access to modifying and accessing the count. In the first, this is
            simple:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.five} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            but in the second example, this is now nearly impossible without going through and modifying each place
            where the count variable is referenced. Worse still, if this is an item that you're providing in a library
            to be consumed by others, you do not have a way of performing that modification, and are forced to make the
            hard choice mentioned above.
          </p>

          <p>So it begs the question; are public variables ever a good thing (or, at least, not evil)?</p>
          <p>
            I'm unsure. On one hand, you can see examples of public variables that have stood the test of time (IE: the
            out variable referenced in System.out). On the other, providing a public variable gives no benefit outside
            of extremely minimal overhead and potential reduction in wordiness. My guideline here would be that, if
            you're planning on making a variable public, you should judge it against these criteria with extreme
            prejudice:
          </p>
          <ol>
            <li>
              The variable should have no conceivable reason to ever change in its implementation. This is something
              that's extremely easy to screw up (and, even if you do get it right, requirements can change), which is
              why getters/setters are the common approach. If you're going to have a public variable, this really needs
              to be thought through, especially if released in a library/framework/API.
            </li>
            <li>
              The variable needs to be referenced frequently enough that the minimal gains from reducing verbosity
              warrants it. I don't even think the overhead for using a method versus directly referencing should be
              considered here. It's far too negligible for what I'd conservatively estimate to be 99.9% of applications.
            </li>
          </ol>
          <p>
            There's probably more than I haven't considered off the top of my head. If you're ever in doubt, always use
            getters/setters.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Adding Getters and Setters</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Encapsulation is a basic concept in OOP. It is about wrapping data and code as a single unit. In this case,
            it is a good practice to declare the variables as private and then access them through Getters and Setters
            to view and/or modify them.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter2Data.six} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            These private variables cannot be accessed directly from outside the class. Hence they are protected from
            unauthorized access. But if you want to view or modify them, you can use Getters and Setters.
          </p>
          <p>
            getXxx() method will return the current value of the variable xxx, while you can set the value of the
            variable xxx using setXxx().
          </p>
          <p>The naming convention of the methods are (in example variable is called variableName):</p>
        </Col>

        <Col span={22} offset={2}>
          <p>All non boolean variables</p>
          <Code code={JavaTutorialChapter2Data.seven} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>boolean variables</p>
          <Code code={JavaTutorialChapter2Data.eight} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Public Getters and Setters are part of the{" "}
            <a href="https://docs.oracle.com/javase/tutorial/javabeans/writing/properties.html" target={"_blank"} rel="noreferrer">
              Property
            </a>{" "}
            definition of a Java Bean.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter2;
