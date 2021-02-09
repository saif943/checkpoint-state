import React from 'react'
import './App.css';
import Img from './image.jpg'

class App extends React.Component {
  
  handleShow = () => {
    this.setState({
      show: !this.state.show,
      time:0
    })
  }
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state ={
      intervall:null,
      time:0,
      show:false
    }
    
  }
  componentDidMount() {
   console.log("componentDidMount")
   this.setState({
     intervall: setInterval (()=>{
       this.setState({time:this.state.time +1 });
     },1000)
   }

   )
  
  }
  componentDidUpdate (){
console.log("componentDidUpdate")
  }
  componentWillUnmount (){
    console.log("componentWillUnmount")
    clearInterval (this.state.intervall);
  }
  render (){
    console.log("render")
  return (
    <div className="App">
      <button
          onClick={this.handleShow}
          className="show">show</button>
  {this.state.show ? 
  <div>
  <img src={Img} alt='image' width='150px' />
  <h1>Saif ben lahmer </h1>
  <h2> Full stack developer </h2>
  <h2>{this.state.time} </h2>
   </div> :(<h2>click button </h2>)
  
  }


    </div>
  );
}}

export default App;
