function Counter() {
  let count = 0;

  this.increase = () => (count += 1);

  this.decrease = () => (count === 0 ? 0 : (count -= 1));

  this.getCount = () => count;

  this.reset = () => (count = 0);
}

export default Counter;
