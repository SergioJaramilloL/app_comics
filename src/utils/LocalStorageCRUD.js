const arrayComics = [];

function CreateItem(data){
  const item = {
    id: data.comicData.num,
    title: data.comicData.title,
    image: data.comicData.img,
    classification: data.classification,
    qualification: data.qualification
  }
  arrayComics.push(item);
}

export function CreateInLocalStorage (data) {
  CreateItem(data);
  localStorage.setItem('arrComics', JSON.stringify(arrayComics));
}
