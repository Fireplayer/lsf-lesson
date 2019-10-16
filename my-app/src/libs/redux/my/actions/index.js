
let countId = 0;

export const Actions = {
  ADD: 'ADD',
  CHANGE: 'CHANGE',
  FILTER: 'FILTER',
}

export const FilterType = {
  ALL: 'ALL',
  WAITING: 'WAITING', 
  FINISHED: 'FINISHED',
}

export function to_add(desc) {
  return {
    type: Actions.ADD,
    id: ++countId,
    desc,
  };    
} 

export function to_change(id) {
  return {
    type: Actions.CHANGE,
    id, 
  }
}

export function to_filter(type) {
    console.log("action filter=======", type);
    return {
      type: Actions.FILTER,
      kind: type,
    };  
}