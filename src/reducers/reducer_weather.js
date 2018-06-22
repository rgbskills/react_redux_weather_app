import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // NEVER MUTATE STATE
      // return state.concat([action.payload.data]);
      // ...state is equilavent of what is above
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city,city]]..
  }
  return state;
}