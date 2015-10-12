export default (state = "", action) => {
  if (action.type == 'CHANGE_PLANET') {
    return action.planet.name;
  }

  return state;
}

