import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.post('/create-category', async ({ request }) => {
  return await Database.table('category').insert(request.body())
  //   return request.body()
})

Route.get('/all-category', () => {
  return Database.from('category').select('*')
})
