export const getCharacters = async() => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/API/v1/characters'
  );
  const json = res.json();
  
  if(!res.ok) throw 'Unable to fetch from API';

  return json.map(character => ({
    id: character.id,
    name: character.name,
    image: character.photoUrl
  }));
};

