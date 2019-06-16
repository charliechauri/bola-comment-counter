import Counter from './Counter.js';

(() => {
  const counter = new Counter();
  const counterSection = document.querySelector('.counter');
  const countIndicator = counterSection.querySelector('.counter__indicator');
  const avatar = counterSection.querySelector('.counter__avatar-wrapper');
  const increaseCountButton = counterSection.querySelector(
    '.counter__button--increase',
  );
  const decreaseCountButton = counterSection.querySelector(
    '.counter__button--decrease',
  );

  avatar.addEventListener('click', redirectToTwitter);
  increaseCountButton.addEventListener('click', increaseHandler);
  decreaseCountButton.addEventListener('click', decreaseHandler);

  updateIndicator(countIndicator, counter.getCount());

  function decreaseHandler() {
    counter.decrease();
    updateIndicator(countIndicator, counter.getCount());
  }

  function increaseHandler() {
    counter.increase();
    updateIndicator(countIndicator, counter.getCount());
  }

  function updateIndicator(element, value) {
    element.textContent = value < 10 ? `0${value}` : value;
  }

  function redirectToTwitter() {
    const hashtags = ['BolitaIsOnFire'];
    const hashtagsParams = `hashtags=${hashtags.join(',')}`;

    window.open(`https://twitter.com/intent/tweet?${hashtagsParams}`, '_blank');
  }
})();
