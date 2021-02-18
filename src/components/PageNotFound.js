import './styles/PageNotFound.scss';

function PageNotFound(props) {
  return (
    <div className="Error404_container">
      <img 
        className="image_error"
        src="https://res.cloudinary.com/dpklpjhm2/image/upload/v1613607065/404_comicApp_l5edph.jpg"
        alt="Imagen render error"
      />
      <div className="Error404_container-right">
        <div className="Error404_container-content">
          <h3>Ha ocurrido algo y no podemos acceder a tu solicitud</h3>
          <a href="/" className="button_back">
            Regresar a ver más comics
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound