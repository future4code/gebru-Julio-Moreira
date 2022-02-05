import React from 'react';
import './App.css';

function App() {

   Chat = React.createClass({
    render() {
       return(
          <p >{this.props.menssagem}<br/></p>
       );
    }
 });

 Chat = React.createClass({
  getInitialState() {
     return {
        messages: MENSAGENS,
        inputText: ''
     };
  },
  handleSubmit(e) {
     e.preventDefault();
     var nextMessages = this.state.mensages([{ menagem: this.state.inputText}]);
     var nextInputText = '';
     this.setState({ mensages: nextMessages, inputText: nextInputText });
  },
  onChange(e) {
     this.setState({inputText: e.target.value});
  },
  render() {
     var mensagens = {
        maxWidth: '40em',
        margin: '1rem auto'
     };
     
     return (
        <div >
           <Chat messages={this.state.mensagens} />
           <form style={formStyles} onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.onChange} value={this.state.inputText} />
              <button >Enviar</button>
           </form>
        </div>
     );
  }
});

}

export default App;
