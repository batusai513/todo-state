export const CHANGE_FILTER = 'CHANGE_FILTER';

export default function selectedFilter(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
}
