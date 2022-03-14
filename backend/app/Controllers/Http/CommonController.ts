import User from 'App/Models/User'
import Group from 'App/Models/Group'
import Contact from 'App/Models/Contact'

export default class CommonController {
  public async all({ response }) {
    const users = await User.all()
    const groups = await Group.all()
    const contacts = await Contact.all()

    let userStateData = users
    let contactsStateData = users.map((user) => {
      return {
        id: user.id,
        contactsList: contacts
          .filter((contact: any) => user.id === contact.userid)
          .map((filteredContact: any) => {
            return {
              id: filteredContact.id,
              name: filteredContact.name,
              lastName: filteredContact?.lastname,
              email: filteredContact?.email,
              tel: filteredContact?.tel,
              group: filteredContact.groupname,
            }
          }),
        contactsGroups: groups
          .filter((group: any) => user.id === group.userid)
          .map((filteredGroup: any) => {
            return {
              id: filteredGroup.id,
              name: filteredGroup.name,
            }
          }),
      }
    })
    return response.status(200).send({ userStateData, contactsStateData })
  }
}
