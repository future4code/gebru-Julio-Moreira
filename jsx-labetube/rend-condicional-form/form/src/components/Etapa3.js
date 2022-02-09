import React from 'react'





const Etapa3 = ({ nextEtapa, handleChange, values }) => {

   
  

  const Continuar = e => {
    e.preventDefault();
    nextEtapa();
  }

  return (
    <div className="container">
      <div>
        <h2>Passo 3</h2>
        <form>
         
    
            
        <input 
                  placeholder="Curso"
                  label="curso"
                  onChange={handleChange('curso')}
                  defaultValue={values.curso}
           
                  autoComplete="curso"
                  fullWidth
                />
       
              <br />
          
              <input
                  placeholder="ensino"
                  label="ensino"
                  onChange={handleChange('ensino')}
                  defaultValue={values.idade}
         
                  autoComplete="ensino"
                  fullWidth
                />
           
              <br />
     
              
          

          <br />
          <button 
            onClick={ Continuar }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Proximo
          </button>
        </form>
      </div>
      </div>

  )
}

export default Etapa3
