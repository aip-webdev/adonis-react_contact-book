import Group from 'App/Models/Group'

export default class GroupsController {
  public async addGroup({ request, response }) {
    await Group.create(request.all())
    return response.created({
      id: request.body().id,
      name: request.body().name,
    })
  }

  public async destroyGroup({ request, response }) {
    const id = request.params().id
    const group = await Group.query().where('id', id).delete()
    return response.noContent(group)
  }
}
