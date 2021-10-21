import Route from '@ioc:Adonis/Core/Route'

Route.get('/users/:id', 'UsersController.show')
Route.group(() => {
  Route.get('/users', 'UsersController.index')
  Route.get('/posts', 'PostsController.index')
}).prefix('/api')

Route.get('/posts', () => {
  return '<h1> This is the heading</h1>'
})

Route.get('/posts/create', () => {
  return 'Display a form to create a post'
})

Route.post('/posts', async () => {
  return 'Handle post creation form request'
})

Route.get('/posts/:id', () => {
  return 'Return a single post'
})

Route.get('/posts/:id/edit', () => {
  return 'Display a form to edit a post'
})

Route.put('/posts/:id', () => {
  return 'Handle post update form submission'
})

Route.delete('/posts/:id', () => {
  return 'Delete post'
})

// Route.group(() => {
//   Route.get('users', async () => {
//     return 'handled'
//   }).middleware('can:view_users')
// }).middleware('auth')

//  this is the url generation part, will get later on in detail
// Positional arguments
// const url = Route.makeUrl('/users/:id', [1])

// // Named object keys
// const url1 = Route.makeUrl('/users/:id', { id: 1 })

// const url2 = Route.makeUrl('UsersController.show', { id: 1 })

// Route.get('/users/:id', 'UsersController.show').as('showUser') // 👈 Route name

// // Generate URL
// const url3 = Route.makeUrl('showUser', { id: 1 })

// const url4 = Route.makeUrl('showUser', [1], {
//   qs: {
//     verified: true,
//   },
// })
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
