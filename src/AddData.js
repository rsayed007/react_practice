import React, {Component} from 'react';

class AddData extends Component{
    state ={
        name: null,
        age: null,
        belt: null
    }

    handelChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handelSubmit}> 
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handelChange}/> <br/>
                <label htmlFor="age">Age :</label>
                <input type="text" id="age" onChange={this.handelChange}/> <br/>
                <label htmlFor="belt">Belt :</label>
                <input type="text" id="belt" onChange={this.handelChange}/> <br/>
                <button>submit </button>
            </form>
        );
    }
}

export default AddData;