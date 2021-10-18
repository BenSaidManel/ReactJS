import React, { Component } from 'react'

import { FaStar } from 'react-icons/fa';
export class Exercice2 extends Component {
    numbers = [0,1, 2, 3, 4];
    constructor (props){
        super(props)
        this.state={
            star : 0
        }
    }
   
   
    componentDidMount(){
        const val=localStorage.getItem("save");
        if(val)
        {
            this.setState({star:parseInt(window.localStorage.getItem("save"))})
        }
    
    }
    componentDidUpdate(){
    localStorage.setItem("save",this.state.star);
      
    }
 
    render() {
       
        console.log(this.state.star)
        return (
            <div>
                 <h1>Exercice n2</h1>
              {
                    
                    this.numbers.map((index) => {
                        
                       return(
                     
                    <FaStar onClick={()=>{this.setState({star:index})
                console.log(index)}} size={100} color={index<=this.state.star? "yellow":"black"} style={{cursor:'pointer'}}/>
                       
                       );
                    })
                    
                         
                    
                   // return <FaStar onClick={this.move} size={100} style={{cursor:'pointer'}}/>
                }
            </div>
        )
    }
}

export default Exercice2
