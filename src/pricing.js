// pricing toggle button
const toggle = document.querySelector('.toggle');
const basicPriceEl = document.querySelector('#price-basic');
const proPriceEl = document.querySelector('#price-pro');
const businessPriceEl = document.querySelector('#price-business');
let currentPlan = 'monthly';

const pricing = {
  monthly: {
    basic: '19',
    pro: '39',
    business: '99',
  },
  yearly: {
    basic: '190',
    pro: '390',
    business: '990',
  },
};

toggle.addEventListener('click', () => {
  const isPressed = toggle.getAttribute('aria-pressed') === 'true';
  toggle.setAttribute('aria-pressed', String(!isPressed));
  // !isPressed is the correct new value after toggle;
  currentPlan = !isPressed ? 'yearly' : 'monthly';

  basicPriceEl.innerHTML = `$${pricing[currentPlan].basic}.00`;
  proPriceEl.innerHTML = `$${pricing[currentPlan].pro}.00`;
  businessPriceEl.innerHTML = `$${pricing[currentPlan].business}.00`;
});
