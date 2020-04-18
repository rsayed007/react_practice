import React, { Component } from 'react';
import HelloWorld from './helloWorld';
import HighScore from './HighScore';
import AddData from './AddData';
import './App.css';

class App extends Component {
  state={
    dataBored :[
      {name: 'Roman', age:'20', belt:'black', id:1},
      {name: 'Kaniz', age:'18', belt:'green', id:2},
      {name: 'Nayeem', age:'24', belt:'red', id:3}
    ]
  }
  
  // for add data
  addData = (data) =>{
    data.id = Math.random();
    let dataBored =[...this.state.dataBored, data];
    this.setState({
      dataBored: dataBored
    })
    // console.log([...this.state.dataBored, data])
  }

  // for delete data
  deleteData = (id)=>{
    // console.log(id)
    let dataBored = this.state.dataBored.filter(data => {
      return data.id !== id
    })
    this.setState({
      dataBored:dataBored
    })
  }

  render(){
    return (
      <div >
        
        <HelloWorld/>
        <HighScore deleteData={this.deleteData} dataBored={this.state.dataBored}/>
        <AddData addData={this.addData}/>
      </div>
    );
  }
}

export default App;
