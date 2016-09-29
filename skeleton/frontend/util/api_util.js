export const fetchAllPokemon = (success) => {
  $.ajax({
    url: "api/pokemon",
    success
  });
};
