import React from 'react'

class Exercice1 extends React.Component{
constructor (props){
    super(props)
    this.state={
        count : 0
    }
}

handelClick=()=>{
    this.setState(
        {
            count:this.state.count+1
        }
    )
}
decrement=()=>{
    this.setState(
        {
            count:this.state.count-1
        }
    )
}
componentDidMount(){
    const val=localStorage.getItem("save");
    if(val)
    {
        this.setState({count:parseInt(window.localStorage.getItem("save"))})
    }

}
componentDidUpdate(){
localStorage.setItem("save",this.state.count);
  
}
render(){
    return(
        <div>
            <h1>Exercice n1</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handelClick}>counter+</button>
            <button  disabled={this.state.count === 0} onClick={this.decrement}>counter-</button>
        </div>
    )
}
}

export default Exercice1
