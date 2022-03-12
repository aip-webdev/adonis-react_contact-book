import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Contact from 'App/Models/Contact'

export default class ContactSeeder extends BaseSeeder {
  public async run() {
    await Contact.createMany([
      {
        id: 1,
        name: 'name1',
        lastname: 'lastName1',
        email: 'email1@gmail.com',
        tel: '+79999999999',
        groupname: 'friends',
        userid: 1,
      },
      {
        id: 2,
        name: 'name2',
        lastname: 'lastName2',
        email: 'email2@gmail.com',
        tel: '+79999999999',
        groupname: 'all',
        userid: 1,
      },
      {
        id: 3,
        name: 'name3',
        lastname: 'lastName3',
        email: 'email3@gmail.com',
        tel: '+79999999999',
        groupname: 'all',
        userid: 1,
      },
      {
        id: 4,
        name: 'name4',
        lastname: 'lastName4',
        email: 'email4@gmail.com',
        tel: '+79999999999',
        groupname: 'friends',
        userid: 1,
      },
      {
        id: 5,
        name: 'name5',
        lastname: 'lastName5',
        email: 'email5@gmail.com',
        tel: '+79999999999',
        groupname: 'all',
        userid: 2,
      },
    ])
  }
}
