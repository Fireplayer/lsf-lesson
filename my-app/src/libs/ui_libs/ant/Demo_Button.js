/**
 * type 
 * declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "danger", "link"];
 * button type shape laoding
 *
 */
import React from 'react';
import {Button} from 'antd';

class Demo extends React.Component {
  render() {
    return (
      <Button 
        type='ghost'
        icon='facebook'
        shape='round'
        size='large'
        htmlType='submit'
        block={false}
        title='xxxxxxx'
      >
        按钮
      </Button>
    );
  }
}

export default Demo;

// import { Button } from 'antd';

// ReactDOM.render(
//   <div>
//     <Button type="primary" shape="circle" icon="search" />
//     <Button type="primary" shape="circle">
//       A
//     </Button>
//     <Button type="primary" icon="search">
//       Search
//     </Button>
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <br />
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <Button type="dashed" shape="circle" icon="search" />
//     <Button type="dashed" icon="search">
//       Search
//     </Button>
//   </div>,
//   mountNode,
// );