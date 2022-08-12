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
