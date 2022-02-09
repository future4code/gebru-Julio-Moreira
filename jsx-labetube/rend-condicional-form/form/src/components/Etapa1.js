import React, { Component } from 'react'
import Etapa2 from './Etapa2'
import Etapa3 from './Etapa3'
import Final from './Final'

export default class Etapa1 extends Component {

  state = {
    etapa: 1,
    nome: '',
    idade: '', 
    email: '',
   escolaridade: '',
   curso: '',
   ensino: ''
  }


  prevEtapa = () => {
    const { etapa} = this.state;
    this.setState({ etapa: etapa - 1 });
  }


  nextEtapa = () => {
    const { etapa } = this.state;
    this.setState({ etapa: etapa + 1 });
  }

 
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { etapa } = this.state;
    const { nome, idade, email, escolaridade,  curso,
    ensino } = this.state;
    const values = { nome, idade, email, escolaridade,  curso,
    ensino}
    
    switch(etapa) {

      case 1: 
        return (
          <Etapa2
            prevEtapa={ this.prevEtapa }
            nextEtapa={ this.nextEtapa }
            handleChange={ this.handleChange }
            values={ values }
          />
        )

        case 2: 
        return (
          <Etapa3
            prevEtapa={ this.prevEtapa }
            nextEtapa={ this.nextEtapa }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
        
        case 3: 
          return (
            <Final />
          )
      default: 
    }
  }
}
