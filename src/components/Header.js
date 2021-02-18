import './styles/Header.scss';

function Header() {
  return(
    <>
      <header>
          <a href= "/scheduled-error">
            <img
              src = "https://res.cloudinary.com/dpklpjhm2/image/upload/v1613266199/comicApp_qdejdn.jpg"        
              alt = "Logo ComicApp"
              />
          </a>
          <nav>
            <ul>
              <li><a href ="/">Comics</a></li>
              <li 
                className = "toFav"
                title = "Página aún no implementada"
              ><a href ="/">Favoritos</a></li>
            </ul>
          </nav> 
      </header>
    </>
  );
}

export default Header;