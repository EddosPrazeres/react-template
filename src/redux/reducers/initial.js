export const Types = {}

export const Creators = {}

const INITIAL_STATE = {
  initialTeste:[]
}

export default function inital(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return  { ...state }
      break;
  }
}