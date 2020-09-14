import React from 'react';

const MyList = (props)=> {
  const styleObj1 = {
    fontSize: "18px",
  }
  const styleObj2 = {
    color: "#0099ff",
  }
  const styleObj3 = {
    color: "#ff6699",
  }
  const items = props.currentList.map(list=>{
    return <div className="ui grid centered container" style={styleObj1}  key={list.id}>
      <div className="five wide column" style = {list.sign!== "Workout"? {color:'#ff3300'}:{color:'green'}}>{list.sign}</div>
      <div style={styleObj2}  className="five wide column">{list.description}</div>  
      
      <div style={styleObj3} className="five wide column">
        <div>
        {list.sign !== "Workout" ? `- ${list.calories} Calories` : `+ ${list.calories} Calories` }
        <i onClick={(e)=> props.deleteItem(list.id)} style={{color: '#bfbfbf', paddingLeft:'20px'}}class="delete icon"></i>
        </div>
      </div>
      </div>
    
  })
  return <div> {items}</div> 
};

export default MyList;