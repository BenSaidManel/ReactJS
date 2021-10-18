import React, { Component } from 'react'
import { Data } from './Data'

export class Exercice3 extends Component {
    constructor (props){
        super(props)
        this.state={
            data : this.props.data
        }
    }

    componentDidMount(){
        
    
    }
    componentDidUpdate(){
    
      
    }
   g
    render() {
        return (
            
            <div >
                <h1>Exercice n3</h1>
                
                    <input  id="search" name="search" type="text"></input>  
                    {Data.map((value,key)=>{
                        return <p>value.name</p>
                    }
                    )}    
            </div>
            
        )
    }
}

export default Exercice3
