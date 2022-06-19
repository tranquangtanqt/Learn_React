import { Col, Image, Row } from "antd";
import React from "react";
import MasterLayout from "../../../../themes/masterLayout";

const SettingMaven = () => {
  return (
    <MasterLayout>
      <h1>Cài đặt maven và tạo project</h1>
      <Row justify="start">
        <Col span={24}>
          <p>1. Tạo project</p>
        </Col>
        <Col span={23} offset={1}>
          <p>Truy cập&nbsp;
            <a href="https://start.spring.io/" target={"_blank"} rel="noreferrer">
              https://start.spring.io/
            </a>&nbsp;
            và tải project
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/1.jpg")} />
          <br />
          <br />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <p>2. Cài đặt maven</p>
        </Col>
        <Col span={23} offset={1}>
          <p>Truy cập&nbsp;
            <a href="http://maven.apache.org/download.cgi" target={"_blank"} rel="noreferrer">
               http://maven.apache.org/download.cgi
            </a>&nbsp;
            và tải maven
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/2.jpg")} />
          <br />
          <br />
        </Col>
        <Col span={23} offset={1}>
          <p>Sau khi download xong Maven, giải nén file zip vào một thư mục nào 
            đó trên ổ cứng. Chẳng hạn bạn giải nén vào: D:\Maven</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/3.jpg")} />
          <br />
          <br />
        </Col>
        <Col span={23} offset={1}>
          <p>Cài đặt biến môi trường:</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/4.jpg")} />
          <br />
          <br />
        </Col>
        <Col span={23} offset={1}>
          <p>Kiểm tra version maven đã cài đặt:</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/5.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
        <p>Khai báo vị trí cài đặt Maven (Nếu cần)</p>
          <p>Vào thư mục: D:\Maven\apache-maven-3.6.3\conf</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/6.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>Mở file settings.xml để thay đổi thư mục lưu maven (mặc định sẽ là C:\Users\{"{tên_user}"}\.m2</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/7.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>{"Trên Eclipse chọn Window => Reference => Maven => Installations => Add"}</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/8.jpg")} />
          <br />
          <br />
          <Image src={require("../../../../resources/img/programming/java/9.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>Tiếp theo khai báo vị trí file cấu hình của Maven.</p>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/10.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={23} offset={1}>
          <p>Đến đây việc cài đặt Maven cho Eclipse hoàn thành.</p>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default SettingMaven;
