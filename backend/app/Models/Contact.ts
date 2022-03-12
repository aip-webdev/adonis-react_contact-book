import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public lastname: string

  @column()
  public email: string

  @column()
  public tel: string

  @column()
  public groupname: string

  @column()
  public userid: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
