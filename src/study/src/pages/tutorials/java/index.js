import { Col, Row, Card } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const JavaTutorial = () => {
  const cardData = [
    {
      title: "Chapter 1 - 10",
      links: [
        {
          text: "Type Conversion",
          path: "/tutorial/java/chapter1",
        },
        {
          text: "Getters and Setters",
          path: "/tutorial/java/chapter2",
        },
        {
          text: "Reference Data Types",
          path: "/tutorial/java/chapter3",
        },
        {
          text: "Java Compiler - 'javac'",
          path: "/tutorial/java/chapter4",
        },
        {
          text: "Documenting Java Code",
          path: "/tutorial/java/chapter5",
        },
        {
          text: "Command line Argument Processing",
          path: "/tutorial/java/chapter6",
        },
      ],
    },

    {
      title: "Chapter 11 - 20",
      links: [
        {
          text: "Data Types",
          path: "/tutorial/java/chapter10",
        },
      ],
    },
  ];
  let count = 1;
  return (
    <>
      <h1>Java</h1>
      <Row>
        {cardData?.map((cards, keyParent) => (
          <Fragment key={keyParent}>
            <Col sm={24} md={8} lg={8}>
              <Card title={cards?.title}>
                {cards?.links?.map((link, key) => (
                  <Fragment key={key}>
                    <Link to={link.path}>{`${count++}. ${link.text}`}</Link>
                    <br />
                  </Fragment>
                ))}
              </Card>
            </Col>
          </Fragment>
        ))}
      </Row>
    </>
  );
};

export default JavaTutorial;
