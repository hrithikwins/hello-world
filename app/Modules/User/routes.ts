import Route from '@ioc:Adonis/Core/Route'

Route.get('/users/:id', 'UsersController.show')

//  this is the url generation part, will get later on in detail
// Positional arguments
const url = Route.makeUrl('/users/:id', [1])

// Named object keys
const url1 = Route.makeUrl('/users/:id', { id: 1 })

const url2 = Route.makeUrl('UsersController.show', { id: 1 })

Route.get('/users/:id', 'UsersController.show').as('showUser') // 👈 Route name

// Generate URL
const url3 = Route.makeUrl('showUser', { id: 1 })

const url4 = Route.makeUrl('showUser', [1], {
  qs: {
    verified: true,
  },
})
// Route.get('/post/:id?', async ({ params }) => {
//   //   if (params.id) {
//   return `Viewing post with id ${params.id}`
//   //   }
//   //   return 'Viewing all posts'
// })

// Route.get('docs/*', ({ params }) => {
//   console.log(params['*'])
// })
// Route.post('posts', async () => {
//   return { message: 'posted ' }
// })

// Route.patch('posts/:id', async () => {})
// Route.delete('posts/:id', async () => {})
// Route.route('/', ['OPTIONS', 'HEAD'], async () => {})
// Route.any('csp-report', async () => {})

//  global route checking
Route.where('id', /^[0-9]+$/)
