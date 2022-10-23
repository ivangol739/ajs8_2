import ErrorRepository from '../App';

const errors = new ErrorRepository();

test('error test', () => {
  expect(errors.translate(1)).toBe('Unknown error');
});

test('error test', () => {
  errors.error.set(1, 'Ошибка ...!');
  expect(errors.translate(1)).toEqual('Ошибка ...!');
});
