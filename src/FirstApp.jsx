import PropTypes from 'prop-types'

//recordar usar rafc para crear exportaciones rapidas
export const FirstApp = ( {title, subTitle, name} ) => {
  
  // console.log( props );
  if (!title){
    throw new Error('El Titulo no existe');
  }
 
    return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ JSON.stringify (newMessage) }</h1> */}
        <p>{subTitle}</p>
        <p>Mi nombre es: {name}</p>
    </>
    
  );
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Juan Ramirez'
}