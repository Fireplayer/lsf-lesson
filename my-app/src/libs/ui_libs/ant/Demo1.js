/**
 * 更少的代码，更少的bug
 * 但凡是能够省个输入的就使用；
 * 时间选择器：DatePicker选择的日期默认英语；locale改变；
 * message 信息提示，类似于通知；
 * 学会自己去查看api
 * 这样就不用一个个都自己去自己尝试；
 * 以alert为例试着尝试属性： AlertProps 和AlertState
 * 就可以得到它的属性和state
 * 那么问题来了如何定义自己的alert
 * 看到关闭按钮是重叠的（？？？）
 */
import React from 'react';
import {message, DatePicker, ConfigProvider, Alert} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';

class Demo1 extends React.Component {
  state = {
    date: null,
  }

  handleChange = date=> {
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  }

  handleClose = (...param)=> {
    console.log('alert close==========', ...param);
  }

  render() {
    const {date} = this.state;
    return (
      <ConfigProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
          </div>
          <Alert 
            type='info' 
            message='alert1111111111111111111111111111111111111111' 
            description='description'
            closable={true}
            onClose={this.handleClose}
            afterClose={()=> console.log('afterClose=======')}
            showIcon={true}
            banner={false}
          />
        </div>
      </ConfigProvider>    
    );
  }
}
export default Demo1;