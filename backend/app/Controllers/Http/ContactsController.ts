import Contact from 'App/Models/Contact'

export default class ContactsController {
  public async addContact({ request, response }) {
    const { id, name, lastName: lastname, email, group: groupname, tel, userid } = request.body()
    await Contact.create({ id, name, lastname, email, groupname, tel, userid })
    return response.created({
      id,
      name,
      lastName: request.body().lastName,
      email,
      group: request.body().group,
      tel,
    })
  }

  public async destroyContact({ request, response }) {
    const id = request.params().id
    const contact = await Contact.query().where('id', id).delete()

    return response.noContent(contact)
  }
}
