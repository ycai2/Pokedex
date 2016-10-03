export const allToys = (state) => {
  // debugger
  return (state.toys) ? Object.keys(state.toys).map(key => state.toys[key]) : [];
};
