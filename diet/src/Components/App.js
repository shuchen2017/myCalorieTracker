import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import Entry from './Entry';
import MyList from './MyList';
import Formula from './Formula';

class App extends React.Component{
  state = {myList:[], data:{}}
  onSearchSubmit = (term)=>{
    console.log(term);
  };
  calculateNumbers = ()=>{
    let foodSum = 0;
    let exerciseSum = 0;
    let remaining = 0;
    for (let i=0; i<this.state.myList.length; i++){
      let item = this.state.myList[i]
      if (item.sign === "Workout"){
        exerciseSum += parseInt(item.calories);
      }else{
        foodSum += parseInt(item.calories);
      }
    };
    remaining = 1200 - foodSum + exerciseSum
    this.setState({data:{foodSum, exerciseSum, remaining}})
  }

  deleteItem = (itemId) =>{
    let newArr = [...this.state.myList];
    if (newArr){
      for (let i=0; i<this.state.myList.length; i++){
        if (this.state.myList[i].id === itemId){
          newArr.splice(i, 1)
        }
      }
      this.setState({myList: newArr},  this.calculateNumbers)
     
     
     }
    
  }
  addFood = (entry)=>{
   const newList = this.state.myList
   newList.push(entry)
   this.setState({myList: newList})
   this.calculateNumbers()
  };
  //calculate food, Exercise, and Remaining
  render(){
    return (
 
    <div className='ui container' style={{marginTop:'50px'}}>
      <div><Formula data={this.state.data}/></div>
      <div><SearchBar onSubmit = {this.onSearchSubmit}/> </div>
      <div><Entry addFood = {this.addFood}/></div>
      <div style={{marginLeft: '100px', marginTop:'30px'}}><MyList deleteItem={this.deleteItem} currentList = {this.state.myList}/></div>
    </div>)
  }
};

export default App;