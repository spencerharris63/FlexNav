var tabs = document.querySelectorAll('nav a')
document.addEventListener('click', makeActive)

var contentPara = document.querySelector('.content')

// tabs.forEach((tab) => tab.addEventListener('click', makeActive))

function makeActive(event) {
  // console.log('  ', event.target)
  makeInactive()

  event.target.classList.add('active')
  if (event.target.href.includes('index')) {
    console.log(' cuisines ', event.target)
    contentPara.innerHTML = cuisines
  }
  if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = chefs
  }
  if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = reviews
  }
  if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = delivery
  }
  event.preventDefault()
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

var cuisines =
  '<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>'

var chefs =
  '<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>'

var reviews =
  '<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>'

var delivery =
  '<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>'

contentPara.innerHTML = cuisines
