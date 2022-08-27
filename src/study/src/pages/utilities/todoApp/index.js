import { Col, Form, Input, Row, List, Avatar, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
// import InfiniteScroll from "react-infinite-scroll-component";

import TodoApi from "../../../api/todoApi";

import { LoadingOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const TodoApp = () => {
  // const [todos, setTodos] = useState([]);
  const [todoDetails, setTodoDetails] = useState([]);

  const loadDataApi = () => {
    const fetchTodoList = async () => {
      try {
        const params = {
          // _page: 1,
          // _limit: 10,
        };
        const response = await TodoApi.getAll(params);
        if (response.status === "OK") {
          // setTodos(response);
          setTodoDetails(response.data[0].todoDetail);
          console.log(response.data[0].todoDetail);
        }
      } catch (error) {
        console.log("Failed to fetch todo list: ", error);
      }
    };
    fetchTodoList();
  };

  const editDetail = (id) => {
    alert(id);
  };

  const createTaskDetail = (event) => {
    if (event.key === "Enter") {
      const createTaskDetailAPI = async () => {
        try {
          let todo = JSON.stringify({id: 1});
          let bodyFormData = new FormData();
          bodyFormData.append("name", event.target.value);
          bodyFormData.append("sortOrder", 10);
          bodyFormData.append("todo", todo);

          let todoDeails = {};
          todoDeails.name = event.target.value;
          todoDeails.sortOrder = 10;
          todoDeails.todo = todo;

          const params = {
            data: bodyFormData,
          };
          const response = await TodoApi.create(bodyFormData);

          console.log(response);
        } catch (error) {
          console.log("Failed to fetch todo list: ", error);
        }
      };
      createTaskDetailAPI();
    }
  };

  useEffect(() => {
    loadDataApi();
  }, []);

  return (
    <>
      {/* <Row gutter={24}>
        <Col sm={24} md={8}>
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
      </Row> */}

      <Row gutter={24}>
        <Col sm={24} md={12}></Col>
        <Col sm={24} md={12}>
          <h1>
            Danh sách công việc
            {/* <span>Việc hôm nay không để ngày mai.</span> */}
          </h1>
          <Form.Item label="Nhiệm vụ">
            <Input placeholder="Tên nhiệm vụ" onKeyDown={(event) => createTaskDetail(event)} />
          </Form.Item>
          <List
            dataSource={todoDetails}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar style={{ backgroundColor: "rgb(221 109 109)" }} icon={<LoadingOutlined />} />}
                  title={item.name}
                />
                <Button type="link" size={"small"} onClick={() => editDetail(item.id)}>
                  <EditOutlined />
                </Button>
                <Button type="link" size={"small"} onClick={() => editDetail(item.id)}>
                  <DeleteOutlined />
                </Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row justify="start">
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
