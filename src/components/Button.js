export function ButtonAdd({ 
  functionButton,
  handleAddFavorites
 }) 
{
  return(
    <button
      onClick = {handleAddFavorites}
    >{functionButton}</button>
  )
}

export function ButtonNext({ 
  functionButton,
  handleNextComic
 }) 
{

  return(
    <button
      onClick = {handleNextComic}
    >{functionButton}</button>
  )
}