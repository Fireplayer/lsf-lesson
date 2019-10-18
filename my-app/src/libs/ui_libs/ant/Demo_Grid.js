import React from 'react';
import {Row,Col} from 'antd';
import 'antd/dist/antd.css'
class Demo extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12} order={2}>col-12</Col>
          <Col span={12} order={1}>col-6</Col>
        </Row>
      </div>
    );
  }
}
export default Demo;
