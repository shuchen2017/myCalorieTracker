import React from 'react';

class Entry extends React.Component {
  state = {id: 0, sign: null, description: "", calories: "" }
  onAdd = ()=>{
    if(this.state.sign &&this.state.description&&this.state.calories){
      this.setState({id: this.state.id+1})
      this.props.addFood(this.state)
      this.setState({description:'', calories:''})
    } else {
      alert('Please enter valid info before submission!')
    }
  };

  handleSelect = (e)=>{
    this.setState({sign:e.target.value})
  };

  render() {
    return (
      <div className="ui grid centered container"  style={{marginTop: "20px"}}>>

        <div ><select required
        className="four wide column" className="ui dropdown"
        onChange={this.handleSelect}>
          <option value="">Category</option>
          <option value="Breakfast" >Breakfast</option>
          <option value="Lunch" >Lunch</option>
          <option value="Dinner" >Dinner</option>
          <option value="Snack" >Snack</option>
          <option value="Drinks" >Drinks</option>
          <option value="Workout" >Workout</option>
        </select>
        </div>
       
        <div className="four wide column" className="ui input">
          <input type="text" value={this.state.description} placeholder="What did you eat?" onChange={(e)=>this.setState({description: e.target.value})} required/>
        </div>

        <div className="four wide column" className="ui right labeled input">
          <input type="number" value={this.state.calories} placeholder="Enter calories.." onChange={(e)=>this.setState({calories: e.target.value})}required/> <div className="ui basic label">Calories</div>
        </div>

        <div>
          <button className="circular ui icon button" onClick={this.onAdd}><i className="icon plus green"></i></button>
        </div>
      </div>     
    )
  }
}

export default Entry;