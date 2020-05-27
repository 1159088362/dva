import React, { Component } from 'react'
import { Modal, Form, Input,Button } from 'antd'
import {connect } from 'dva'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@connect(({home}) => {
  return {
    opt:home.opt
  }
})
export default class From extends Component {
  //关闭遮罩层取消功能
  handleCancel = () => {
    this.props.shows()
    const obj = {
      name:"",
      age:"",
      msg:""
    }
    this.props.dispatch({
      type:'home/update',
      payload:obj
    })
  };
  //保存
   onFinish = values => {
     const { opt } = this.props
     console.log(opt);
     if ( opt.id ) {
       values.id=opt.id
      this.props.dispatch({
        type:'home/udateusers',
        payload:values
      })
     } else {
       this.props.dispatch({
          type:'home/add',
          payload:values
        })
     }
    
    this.handleCancel()
  };
  render() {
    return (
      <div>
      <Modal
      title="添加"
      visible={this.props.visible}
      onCancel={this.handleCancel}
      footer={null}	
      maskClosable={false}
      destroyOnClose={true}
    >
    <Form
      {...layout}
      name="basic"
      initialValues={this.props.opt}
      onFinish={this.onFinish}
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: '姓名必填!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="年龄"
        name="age"
        rules={[{ required: true, message: '年龄必填!' }]}
      >
      <Input />
      </Form.Item>
      <Form.Item
        label="地址"
        name="msg"
        rules={[{ required: true, message: '地址必填!' }]}
      >
      <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
      <Button style={{marginRight:30}} onClick={this.handleCancel}>
        取消
      </Button>
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    </Form.Item>
    </Form>
    </Modal>
      </div>
    )
  }
}
