import { Avatar, Button, Col, Form, Input, List, message, Popconfirm, Row } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { DeleteOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import todoApi from "../../../api/todoApi";
import todoDetailApi from "../../../api/todoDetail";

import "./index.scss";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [createFlg, setCreateFlg] = useState(true);
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const sharedProps = {
    defaultValue: '',
    ref: inputRef,
  };
  let params = useParams();

  const fetchTodoList = async (id) => {
    const response = await todoApi.getById(id);
    if (response?.status === "OK") {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
        
      }
    }
    // console.log(response);
  };

  useEffect(() => {
    fetchTodoList(params.todo_id);
  }, [params]);

  const initScreen = () => {
    form.resetFields(["name"]);
    setCreateFlg(true);
  }

  const editDetail = (id) => {
    setCreateFlg(false);
    let detail = todoList.filter((obj) => obj.id === id);
    form.setFieldsValue({name: detail[0]?.name});
    inputRef.current.focus({
      cursor: 'start',
    })
  };

  const createOrUpdateTodoDetail = async () => {
    if (form.getFieldValue("name").trim() === "") {
      return;
    }

    let response;
    if(createFlg){
      response = await todoDetailApi.create({
        name: form.getFieldValue("name"),
        todo: {
          id: params.todo_id,
        },
      });
      console.log(response);
    } else {
      response = await todoDetailApi.update({
        name: form.getFieldValue("name"),
        todo: {
          id: params.todo_id,
        },
      });
      console.log(response);
    }

    if (response?.status === "OK") {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }

      initScreen();
      message.success("Thêm thành công!");
    }
  };

  const deleteTodoDetail = async (id) => {
    const response = await todoDetailApi.delete(id);
    if (response?.status === "OK") {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }
      initScreen();
      message.success("Xóa thành công!");
    }
  };

  return (
    <>
      <Form form={form}>
        <Row gutter={24} justify={"start"}>
          <Col sm={24} md={12}>
            Mô tả
          </Col>
          <Col sm={24} md={12}>
            <h1>Danh sách công việc</h1>
            <Form.Item label="Nhiệm vụ" name={"name"}>
              <Input {...sharedProps}
                placeholder="Tên nhiệm vụ"
                onPressEnter={createOrUpdateTodoDetail}
              />
            </Form.Item>
            {
              <List
                dataSource={todoList}
                renderItem={(item) => (
                  <List.Item key={item?.id}>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: "rgb(221 109 109)" }} icon={<LoadingOutlined />} />}
                      title={item?.name}
                    />
                    <Button type="link" size={"small"} onClick={() => editDetail(item?.id)}>
                      <EditOutlined />
                    </Button>
                    <Popconfirm
                      title="Bạn có chắc xóa nhiệm vụ này?"
                      onConfirm={() => deleteTodoDetail(item?.id)}
                      okText="Có"
                      cancelText="Không"
                    >
                      <Button type="link" size={"small"}>
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  </List.Item>
                )}
              />
            }
          </Col>
        </Row>
      </Form>
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
