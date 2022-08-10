import { Card, Col, Row } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const CardList = ({ cardData }) => {
  return (
    <>
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
export default CardList;
