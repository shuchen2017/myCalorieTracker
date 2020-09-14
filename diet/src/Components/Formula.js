import React from 'react';

const Formula = (props) => {
  const styleObj = {
    fontSize: "20px",
    color: "#00b38f",
    paddingTop: "5px",    
  }
  const styleObj1 = {
    fontSize: "18px",
    color: "#ffa31a",
    paddingTop: "12px",
  }
 // this.setState({data:{foodSum, exerciseSum, remaining}})
    
 return (
  <div> 
    {/* <div style={{marginBottom: '50px'}} >Calories Remaining: {props.data.remaining || 1500}</div> */}
    <button className="fluid ui pink button" style={{marginBottom:'20px'}}>Calories Remaining: {props.data.remaining || 1200} </button>
    <div style={{marginBottom: '10px'}} className="ui grid centered container">
    <div className="two column" style={styleObj}>
      <div>1200</div>
      <div style={styleObj1}>Goal</div>
    </div>
    <div className="two column" style={{marginLeft:'10px'}}><i class="minus icon"></i></div>

    <div className="two column" style={styleObj} >
      <div>{!props.data.foodSum ? '0': props.data.foodSum }</div>
      <div style={styleObj1}>Food</div>
    </div>
    <div className="two column" style={{marginLeft:'20px'}}><i class="plus icon"></i></div>
    <div className="two column" style={styleObj}>
      <div>{props.data.exerciseSum || '0'}</div>
      <div style={styleObj1}>Exercise</div>
    </div>
    <div className="two column" style={{marginLeft:'20px'}}><i class="battery half icon"></i></div>
    <div className="two column" style={styleObj}>
      <div style={{color: "red"}}>{props.data.remaining || 1200}</div>
      <div style={styleObj1}>Remaining</div>
    </div>
  </div>
  </div>
)
};
export default Formula