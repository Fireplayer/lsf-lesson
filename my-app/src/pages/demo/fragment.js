import React, { Fragment } from "react";

function MyItem(props) {
  return (
    <div>
      <dt>{props.title}</dt>  
      <dd>{props.desc}</dd>
    </div>
  );
}

class MyList extends React.Component {
  render() {
    const {ddList} = this.props;
    return(
      <dl>
        {ddList.map((data, index)=> {
          return <MyItem title={data.title} desc={data.desc} key={index * 2} />;
        })}        
      </dl>
    );
  }  
}

export default MyList; 