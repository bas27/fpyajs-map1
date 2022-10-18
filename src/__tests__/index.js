import ErrorRepository from '../js';

const stor = [
  [1, 'текстовое описание (человекочитаемое)'],
  [2, 'Unexpected token'],
  [3, 'TypeError'],
  [4, 'SyntaxError'],
];

test.each([
  [1, 'текстовое описание (человекочитаемое)'],
  [2, 'Unexpected token'],
  [3, 'TypeError'],
  [4, 'SyntaxError'],
  [5, 'Unknown error'],
])('Корректность отображения ошибки %i', (code, returned) => {
  const er = new ErrorRepository(stor);
  expect(er.translate(code)).toBe(returned);
});
