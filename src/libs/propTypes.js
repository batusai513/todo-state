import P from 'prop-types';

export const TodoType = P.shape({
  id: P.string,
  text: P.string,
  isDone: P.bool
});
