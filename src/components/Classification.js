import './styles/Classification.scss'

export function Classification() {
  return(
    <>
      <div className="classification">
          <h4 className="statement">Clasifica tu comic:</h4>
          <button 
            className="classification_button" 
            value="Divertido"
          >Divertido</button>
          <button 
            className="classification_button" 
            value="Ciencia"
          >Ciencia</button>
          <button 
            className="classification_button" 
            value="Interesante"
          >Interesante</button>
      </div>
    </>
  )
}