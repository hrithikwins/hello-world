import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.post('/create-product', async ({ request }) => {
  return await Database.table('product').insert(request.body())
  //   return request.body()
})

Route.get('/all-product', () => {
  return Database.from('product').select('*')
})
