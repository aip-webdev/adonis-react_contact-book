import { BaseModel, column, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Group from 'App/Models/Group'
import Contact from 'App/Models/Contact'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  /* @beforeSave()
  public static async hashPassword(user: User) {
      user.password = await Hash.make(user.password)
  }*/

  @hasManyThrough([() => Group, () => Contact])
  public groups: HasManyThrough<typeof Group>
  public contacts: HasManyThrough<typeof Contact>
}
