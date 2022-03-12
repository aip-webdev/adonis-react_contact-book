import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: 1,
        email: 'some@mai.ru',
        password: 'qwerty',
      },
      {
        id: 2,
        email: 'someOne@gmail.com',
        password: '11223344',
      },
    ])
  }
}
