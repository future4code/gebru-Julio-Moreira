import React from 'react'





const Etapa2 = ({ nextEtapa, handleChange, values }) => {

   
  

  const Continuar = e => {
    e.preventDefault();
    nextEtapa();
  }

  return (
    <div className="container">
      <div>
        <h2>Passo 1</h2>
        <form>
         
    
            
        <input 
                  placeholder="Nome"
                  label="Nome"
                  onChange={handleChange('nome')}
                  defaultValue={values.nome}
           
                  autoComplete="nome"
                  fullWidth
                />
       
              <br />
          
              <input
                  placeholder="idade"
                  label="idade"
                  onChange={handleChange('idade')}
                  defaultValue={values.idade}
         
                  autoComplete="idade"
                  fullWidth
                />
           
              <br />
     
              <input
                  placeholder="email"
                  label="email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
           
                  autoComplete="email"
                  fullWidth
                  type="email"
                />
                <input
                  placeholder="escolaridade"
                  label="escolaridade"
                  onChange={handleChange('escolaridade')}
                  defaultValue={values.escolaridade}
           
                  autoComplete="escolaridade"
                  fullWidth
                  type="escolaridade"
                />
          

          <br />
          <button 
            onClick={ Continuar}
            type="Enviar"
          >
            Proximo
          </button>
        </form>
      </div>
      </div>

  )
}

export default Etapa2
