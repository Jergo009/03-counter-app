import PropTypes from 'prop-types'

//recordar usar rafc para crear exportaciones rapidas
export const CounterApp = ( {title, value} ) => {
  
  // console.log( props );
  if (!title){
    throw new Error('El Titulo no existe');
  }
 
    return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ JSON.stringify (newMessage) }</h1> */}
        <h2>{value}</h2>
    </>
    
  );
}


CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  title: 'CouterApp',
  value: 10
}