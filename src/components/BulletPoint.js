import './styles/BulletPoint.scss'

export function BulletPoint({ urlComic, altComic }) {

  return(
      <img
        className="galery"
        src= {urlComic}
        alt= {altComic}
        >
      </img>
  )
}