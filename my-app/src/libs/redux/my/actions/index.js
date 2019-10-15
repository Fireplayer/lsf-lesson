const moment = require("moment");

export const Actions = {
  ADD: 'ADD',
  FILTER: 'FILTER',
}

export const FilterType = {
  ALL: 'ALL',
  WAITING: 'WAITING', 
  FINISHED: 'FINISHED',
}

export function Add(desc) {
  return {
    type: Actions.ADD,
    date: moment(),
    desc,
  };    
} 

export function filter(desc) {
    return {
      type: Actions.FILTER,
      kind: desc,
    };  
}