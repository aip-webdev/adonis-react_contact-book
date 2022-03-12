/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
const apiPrefix = 'api/v1'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.get(`${apiPrefix}/all`, 'CommonController.all')
  Route.put(`${apiPrefix}/users/:id`, 'UsersController.update')
  Route.post(`${apiPrefix}/users`, 'UsersController.create')
  Route.delete(`${apiPrefix}/users/:id`, 'UsersController.destroy')
  Route.get(`${apiPrefix}/users/:id`, 'UsersController.find')
  Route.post(`${apiPrefix}/contacts`, 'ContactsController.addContact')
  Route.delete(`${apiPrefix}/contacts/:id`, 'ContactsController.destroyContact')
  Route.post(`${apiPrefix}/groups`, 'GroupsController.addGroup')
  Route.delete(`${apiPrefix}/groups/:id`, 'GroupsController.destroyGroup')
}).namespace('App/Controllers/Http')

Route.get('*', async ({ view }: HttpContextContract) => {
  return view.render('home')
}).as('not_found')
