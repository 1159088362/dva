import React, { Component } from 'react'
import {connect } from 'dva'
import { Button, Table } from 'antd'
import Model from '@@/From'
import './style.less'
@connect(({home}) => {
  return {
    data:home.data
  }
})
export default class index extends Component {
  state = {
    visible: false
  }
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
          <div>
          <Button type="primary" style={{marginRight:30}} onClick={() => this.edit(record)}>编辑</Button>
          <Button type="danger" onClick={() => this.deletes(record)}>删除</Button>
          </div>
      ),
    },
  ];
  //删除
  deletes = (opt) => {
    const obj = {
      id:opt.id
    } 
    this.props.dispatch({
      type:'home/deletes',
      payload:obj
    })
  }
  //编辑
  edit = (opt) => {
    this.shows()
    this.props.dispatch({
      type:'home/update',
      payload:opt
    })
  }
  //添加
  add = () => {
    this.shows()
    const obj = {
      name:"",
      age:"",
      msg:""
    }
    this.props.dispatch({
      type:'home/update',
      payload:obj
    })
  }
  //模态框出现消失
  shows = () => {
    this.setState({
      visible:!this.state.visible
    })
  }
  confirm = (e) =>{
    console.log(e);
  }
  cancel = (e) =>{
    console.log(e);
  }
  render() {
    const { data } = this.props
    const { visible } = this.state
    return (
      <div className="pages-home">
        <Button type="primary" onClick={this.add}>添加</Button>
        <Table 
        columns={this.columns} 
        dataSource={data} 
        rowKey={v=>v.id}
        />
        <Model visible={visible} shows={this.shows} />
      </div>
    )
  }
}
