import Counter from '../src/js/Counter';

test('Counter starts at 0', () => {
  const counter = new Counter();

  expect(counter.getCount()).toBe(0);
});

test('Counter after two increments is 2', () => {
  const counter = new Counter();

  counter.increase();
  counter.increase();

  expect(counter.getCount()).toBe(2);
});

test('Counter after two increments and one decrease is 1', () => {
  const counter = new Counter();

  counter.increase();
  counter.increase();
  counter.decrease();

  expect(counter.getCount()).toBe(1);
});

test('Counter after one increment and then using reset is 0', () => {
  const counter = new Counter();

  counter.increase();
  counter.reset();

  expect(counter.getCount()).toBe(0);
});
