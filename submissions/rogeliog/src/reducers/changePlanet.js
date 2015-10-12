export default (state = '', action) => {
  console.log(action.type);
  if (action.type == 'CHANGE_PLANET') {
      return action.planet.name
  }

  return state;
}

