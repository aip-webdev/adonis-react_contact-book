import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }) {
    await User.create(request.all())
    return response.created(request.all())
  }
}
