import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Group from 'App/Models/Group'

export default class GroupSeeder extends BaseSeeder {
  public async run() {
    await Group.createMany([
      {
        id: 1,
        name: 'all',
        userid: 1,
      },
      {
        id: 2,
        name: 'all',
        userid: 2,
      },
      {
        id: 3,
        name: 'friends',
        userid: 1,
      },
    ])
  }
}
