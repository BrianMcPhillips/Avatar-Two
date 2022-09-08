export const getCharacters = async(page) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/API/v1/characters?perpage=5&page=${page}`
  );
  const json = await res.json();
  
  if(!res.ok) throw 'Unable to fetch from API';

  return json.map(character => ({
    id: character._id,
    name: character.name,
    image: character.photoUrl
  }));
};

export const getCharacterById = async(id) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/API/v1/characters/${id}`
  );
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch from API';

  return {
    name: json.name,
    image: json.photoUrl,
    affiliation: json.affiliation,
    allies: json.allies
  };
} ;
