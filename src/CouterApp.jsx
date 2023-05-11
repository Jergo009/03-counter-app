import { useState } from 'react'
import PropTypes from 'prop-types'

//recordar usar rafc para crear exportaciones rapidas



export const CounterApp = ( {title, value} ) => {
  const [ couter, setCounter ] = useState(value);


  const handleAdd = () => { 

    // setCounter ( couter + 1 );
      setCounter( couter + 1 );
  }
  const handleSus = () => setCounter( couter - 1 );
  
  const handleReset = () => setCounter( value );
  

  // console.log( props );
  if (!title){
    throw new Error('El Titulo no existe');
  }

    return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ JSON.stringify (newMessage) }</h1> */}
        <h2> { couter } </h2>
     
      <button onClick={ handleAdd }> +1 </button>
      
      <button onClick={ handleSus }> -1 </button>
     
      <button onClick={ handleReset }> Restablecer </button>


    </>
    
  );
}


CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  title: 'CouterApp',
  value: 0
}