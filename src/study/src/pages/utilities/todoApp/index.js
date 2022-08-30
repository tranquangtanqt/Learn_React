import { Avatar, Button, Col, Form, Input, List, message, Row } from "antd";
import React, { memo, useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import TodoApi from "../../../api/todoApi";
import "./index.scss";

const TodoApp = () => {
  const [todoDetails, setTodoDetails] = useState([]);

  const fetchTodoList = async () => {
    try {
      const response = await TodoApi.getAll();
      if (response.status === "OK") {
        setTodoDetails(response?.data ? response?.data[0]?.todoDetail : []);
      }
    } catch (error) {
      message.error(error?.response?.data);
    }
  };

  const editDetail = (id) => {
    alert(id);
  };

  const createTaskDetail = async (event) => {
    try {
      await TodoApi.create({
        name: event.target.value,
        sortOrder: 11,
        todo: {
          id: 1
        },
      });

      // setTodoDetails([
      //   ...todoDetails,
      //   data
      // ]);

      message.success("Create successful!");
    } catch (error) {
      message.error(error?.response?.data);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <Row gutter={24} justify={"center"}>
        {/* <Col sm={24} md={12}></Col> */}
        <Col sm={24} md={12}>
          <h1>
            Danh sách công việc
          </h1>
          <Form.Item label="Nhiệm vụ">
            <Input placeholder="Tên nhiệm vụ" onPressEnter={createTaskDetail} />
          </Form.Item>
          {
            <List
              dataSource={todoDetails}
              renderItem={(item) => (
                <List.Item key={item?.id}>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: "rgb(221 109 109)" }} icon={<LoadingOutlined />} />}
                    title={item?.name}
                  />
                  <Button type="link" size={"small"} onClick={() => editDetail(item?.id)}>
                    <EditOutlined />
                  </Button>
                  <Button type="link" size={"small"} onClick={() => editDetail(item?.id)}>
                    <DeleteOutlined />
                  </Button>
                </List.Item>
              )}
            />
          }
        </Col>
      </Row>

      {/* <Row justify="start">
        <Col sm={24} md={12}>
          <main id="todolist">
            <h1>
              Danh sách
              <span>Việc hôm nay không để ngày mai.</span>
            </h1>

            <form>
              <input type="text" name="name" id="name" />
              <input type="text" name="id" id="name" />
              <button type="button">Thêm mới</button>
            </form>

            {todoDetails?.map((detail, key) => (
              <li key={key}>
                <span className="label">{detail.name}</span>
                <div className="actions">
                  <button className="btn-picto" type="button">
                    <i className="fas fa-user-edit"></i>
                  </button>
                  <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}

            <li className="done">
              <span className="label">123</span>
              <div className="actions">
                <button className="btn-picto" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <p>Danh sách nhiệm vụ trống.</p>
          </main>
        </Col>
      </Row> */}
    </>
  );
};

export default memo(TodoApp);
