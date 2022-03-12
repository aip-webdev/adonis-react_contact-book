import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(false)
      table.string('name').notNullable()
      table.string('lastname').notNullable()
      table.string('email').notNullable()
      table.string('tel').notNullable()
      table.integer('userid').notNullable()
      table.string('groupname').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
