import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import "./index.scss";

import TodoApi from "../../../api/todoApi";
import TextArea from "antd/lib/input/TextArea";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoDetails, setTodoDetails] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    const fetchTodoList = async () => {
      try {
        const params = {
          // _page: 1,
          // _limit: 10,
        };
        const response = await TodoApi.getAll(params);
        if (response.status === "OK") {
          setTodos(response);
          setTodoDetails(response.data[0].todoDetail);
          console.log(response.data[0].todoDetail)
        }
      } catch (error) {
        console.log("Failed to fetch todo list: ", error);
      }
    };
    fetchTodoList();
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Danh sách công việc"
            // headStyle={{ backgroundColor: "#5c6cfa", color: "#ffffff" }}
            // rgb(96, 125, 139)
            headStyle={{ backgroundColor: "#607d8b", color: "#ffffff" }}
            bodyStyle={{ backgroundColor: "rgb(198 218 227)" }}
          >
            <Form.Item label="Nhiệm vụ">
              <Input placeholder="Tên nhiệm vụ" />
            </Form.Item>
            <ul>
            {todoDetails?.map((detail) => (
              <li key={detail.id}>{detail.name}</li>
            ))}
          </ul>
          </Card>
        </Col>
      </Row>

      <Row>
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
      </Row>
    </>
  );
};

export default TodoApp;
