/**
 * 有个问题还是比明白？？？
 * 1.元素的宽和高到底是怎么确定的 是否可以通过设置style的width和height属性来确认； 
 * 2.设置的单位有哪些？px cm em ex %
 * 3.怎么定义一个滚动容器
 * 
 * 解决思路：查看html参考手册里面的width属性
 * 发现并没有此属性，随在css中进行查看，得到以下收获。
 * 内边距、边框和外边距。熟练的掌握和区分这写属性。
 * 从而引出知识体系
 * css的框模型
 * 元素内容区
 * 属性定义元素内容区的宽度，注意这里只是指内容区。
 * width，height，max-width，max-height，min-width，min-height line-height
 * 
 * border（边框）
 * 边框是围绕元素内容的一条或多条线，边框和元素内容之间的距离叫内边距;
 * border-style, border-width(cm,px,em/"thin, medium,thick"),
 * border-color（red，#ffffff，rgb（10%，10%，10%）） 
 * 
 * 内边距（padding）
 * 元素内容区和边框之间的区域；
 * 
 * 外边距（margin）
 * 边框外部的区域；
 * 这些属性都可以通过top，right，bottom，left来定义单边
 * 
 * 以上就是css元素框模型；
 * 1.auto 自动计算，2.px、cm，%， 3.inherit继承父控件的width;
 * 2.top-right-bottom-left
 * 
 * 问题2 ？？？ 
 * 如何让文字居于正中心
 * 想到的第一个解决方案是text-aligin；
 * 引入css定位的知识
 * 类似于游戏中的 top right bottom left hcenter vcenter
 * 除此之外还有
 * anchorx 和 anchory 
 * 已经scalex 和 scaley
 * position（relative）
 * 类型
 * static默认使用此属性，此属性下使用默认的流即设置left和top属性是没有效果的；
 * 
 * relative 相对位置，相对于元素本应该在的位置进行边话。
 * 注意，在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。 
 * 
 * absolute 设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个
 * 元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位
 * 后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
 * 总结起来
 * 1.从原文档流中删除，所占空间全部消失；
 * 2.绝对定位的元素的位置相对于最近的已定位祖先元素
 * 3.因为绝对定位的框与文档流无关，所以它们可以覆盖页面上的其它元素。
 *   可以通过设置 z-index 属性来控制这些框的堆放次序。
 *  
 * ===float
 * ===clear
 *  
 * 如何使用绝对值来对元素进行定位。

 * （？？？）就是层级问题是怎么会是？使用absolute和fixed的情况
 * 都在最上层。
 * fixed 相对于浏览器窗口来对元素进行定位。
 * 
 * clip属性可以裁剪元素；
 * z_index属性层次；
 * 
 */
import React from 'react';
import {Layout, Affix, Button} from 'antd';
import Item from 'antd/lib/list/Item';
const {Header, Sider, Content, Footer} = Layout; 
class Demo extends React.Component {
  render() {
    let list = [];
    for (let i = 0; i < 40; i++) {
      list.push('btn' + i);
    }
    return (
      <Layout>
        <Sider>
          sider
          <ul>
            <li>top</li>
            {list.map((item, index)=> {
              return (
                <li key={item}>
                  <Button icon='facebook' type='default'>{item}</Button>
                </li>
              );
            })}
            <li>bottom</li>
          </ul>
          {/* <Affix><Button icon='facebook' type='default'>click</Button></Affix> */}
        </Sider>
        <Layout>
          <Header style={{backgroundColor:'#999999', textAlign:'center'}}><h2>header</h2></Header>
          <Content style={{
              backgroundColor: '#555555',
              position: 'absolute',
            }} >
            <p style={{
              borderStyle:'outset', 
              backgroundColor: '#777777', 
              width: '100px', 
              height: '100px', 
              textAlign:'center',
              position:'absolute',
              top: '20px',
              left: '20px',
            }}>
              Content1
            </p> 
            <p style={{
              borderColor:'#00ff00',
              backgroundColor: '#777777',
              width:'100px',
              height:'100px',
              borderStyle:'outset',
              position:'',
              left:'0px',
              top:'0px',
            }}>
              Content2
            </p>

          </Content>
          <Footer style={{backgroundColor:'#999999', textAlign:'center'}}><h2>footer</h2></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Demo;