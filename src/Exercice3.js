import React, { Component } from 'react'
import { Data } from './Data'

export class Exercice3 extends Component {
    constructor (props){
        super(props)
        this.state={
            data : this.props.data,
            filter: ""
        }
    }

    componentDidMount(){
        
    
    }
    componentDidUpdate(){
    
      
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
      };
    
    render() {
        return (
            
            <div >
                <h1>Exercice n3</h1>
                
                    <input  id="search" name="search" type="text" placeholder="search" ></input>  
                    <select onChange={this.handleChange}>  
                    <option value="">Filter option</option>  
                    <option value="gender">gender</option>
                     <option value="name">name</option>
                     <option value="age">age</option>
                      <option value="email">email</option>
                     <option value="phone">phone</option>
                     <option value="address">address</option>
                     <option value="balance">balance</option>
                     <option value="likes">likes</option>
                    <option value="rating">rating</option>
                    </select>
                    
                    {Data.map((value,index)=>{
                        return (
                            <div>
                        <p> {value.data}</p>
                        <p></p>

                        </div>

                        )  
                    }
                    )} 
                    
                    
                   
                       
                      
            </div>
            
        )
    }
}

export default Exercice3
