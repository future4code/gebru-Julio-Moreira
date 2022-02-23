import React from 'react'

class App extends React.Component {
state = {
  listaDePosts: {
    id: 1,
    texto: 'Post 1'
  },
  textoNovoPost: ''
}


onChangeTextoNovoPost = (event) => {
  this.setState({textoNovoPost: event.target.value})
}

adicionarPost = () => {
  console.log('Adicionar', this.state.textoNovoPost)
  const novoPost = {
    id: Date.now(),
    texto: this.state.textoNovoPost
  }
  const novaListaDePost = [novoPost, ...this.state.listaDePosts]

  this.setState({listaDePosts: novaListaDePost})
}

   render() {
     return (
      <div  className="App">
        <div>
        <input 
        type="text"
        onChange={this.onChangeTextoNovoPost}
        value={this.state.textoNovoPost}
        />
        <button onClick={this.adicionarPost}>
          Adicionar
        </button>
        
      </div>
      )
  </div>

export default App
