export const fetchAllPokemon = (success) => {
  $.ajax({
    url: "api/pokemon",
    success
  });
};

export const fetchPokemon = (id, success) => {
  $.ajax({
    url: `api/pokemon/${id}`,
    success
  });
};
