import { Col, Row, Card } from "antd";
import { Fragment } from "react";

import { Link } from "react-router-dom";

const ExcelTutorial = () => {
  const cardData = [
    {
      title: "Title",
      links: [
        {
          text: "Characters in Excel",
          path: "/tutorial/excel/charactersInExcel",
        },
      ],
    },
    {
      title: "Sort and Filter",
      links: [
        {
          text: "Filter 1",
          path: "/tutorial/excel/filter1",
        },
      ],
    },
    {
      title: "Tips",
      links: [
        {
          text: "Swap data two cell",
          path: "/tutorial/excel/swapDataTwoCell",
        },
      ],
    },
  ];
  return (
    <>
       <h1>Excel</h1>
      <Row>
        {cardData?.map((cards, key) => (
          <Fragment key={key}>
            <Col sm={24} md={8} lg={8}>
              <Card title={cards?.title}>
                {cards?.links?.map((link, key) => (
                  <Fragment key={key}>
                    <Link to={link.path}>{key + 1 + ". " + link.text}</Link>
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

export default ExcelTutorial;
