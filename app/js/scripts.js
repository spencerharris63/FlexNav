const data = [
  {
    section: 'cuisines',
    story:
      'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.'
  },
  {
    section: 'chefs',
    story:
      'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
  },
  {
    section: 'reviews',
    story:
      'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.'
  },
  {
    section: 'delivery',
    story:
      'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
  }
];

function clickHandler() {
  if (!event.target.matches('nav ul a')) return;
  makeInactive();
  makeActive();
  let activePage = document.querySelector('.active');
  let storyRef = activePage.dataset.story;
  data.forEach(item => {
    if (item.section === storyRef) {
      contentPara.innerHTML = item.story;
    }
  });
  makeHeader(storyRef);
}

function makeActive() {
  console.log(event.target);
  event.target.classList.add('active');
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}

function makeHeader(head) {
  const myHeader = document.createElement('h3');
  myHeader.innerText = head;
  contentPara.prepend(myHeader);
}

function setUp() {
  document.querySelector('nav a').click();
}

var tabs = document.querySelectorAll('nav a');
var contentPara = document.querySelector('.content');

document.addEventListener('click', clickHandler);
window.addEventListener('load', setUp);
