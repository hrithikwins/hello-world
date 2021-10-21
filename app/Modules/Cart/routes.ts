import Route from '@ioc:Adonis/Core/Route'

Route.get('/cart', () => {
  return { cart: 'my customer cart' }
})
