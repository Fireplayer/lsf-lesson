/**
 * render
 * 我自己的实现html的话；
 * 文本处理 
 * copyable boolean true/ string copy content；
 * 
 * （？？？怎么实现文本编辑 关键是选中的事件）
 * 当点击消失的时候
 * 使用window.getSelection()获取用户选择的文本范围或光标的当前位置
 * 判断是否有选中的文本
 * Selection
 * toString显示标记的内容
 */

import React from 'react';
import {Button, Typography, Divider} from 'antd';
const {Text, Title, Paragraph} = Typography;

class Demo extends React.Component {

  // render() {
  //   return (
  //     <div>
  //       <h1>介绍</h1>
  //       <p>蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。</p>
  //       <br/>
  //       <p>随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 Ant Design。基于『确定』和『自然』的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。</p>
  //       <h1>设计资源</h1>
  //       <p>我们提供完善的设计原则、最佳实践和设计资源文件（Sketch 和Axure），来帮助业务快速设计出高质量的产品原型。</p>
  //       <ul>
  //         <li><Button type='link'>原则</Button></li>
  //         <li><Button type='link'>模式</Button></li>
  //         <li><Button type='link'>资源</Button></li>
  //       </ul>
  //     </div>
  //   );
  // }

  // editable?: boolean | EditConfig;
  // copyable?: boolean | CopyConfig;
  // type?: BaseType;
  // disabled?: boolean;
  // ellipsis?: boolean | EllipsisConfig;
  // code?: boolean;
  // mark?: boolean;
  // underline?: boolean;
  // delete?: boolean;
  // strong?: boolean; 

  render() {
    return (
      <Typography onClick={()=> {
              let select = window.getSelection();
              console.log("===========click", select, select.toString(), select.getRangeAt(0))
              {/* setTimeout(()=> {
                  select.deleteFromDocument();
                  console.log('===========delete');
                }, 5000); */}
            }
          }>
        <Title level={1} >介绍</Title>
        <Text >
          蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
        </Text>
      </Typography>
    );
  }
}

export default Demo;