import './styles/Title.scss';


export function Title({ titleComic, yearComic }) {
  const text = `${titleComic} (${yearComic})`
  return(
    <h1>{text}</h1>
  )
}