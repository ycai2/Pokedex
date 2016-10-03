export const fetchAllPokemon = (success) => {
  $.ajax({
    url: "api/pokemon",
    success
  });
};

export const fetchPokemon = (id, success) => {
  debugger
  $.ajax({
    url: `api/pokemon/${id}`,
    success
  });
};
