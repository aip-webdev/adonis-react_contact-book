import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Groups extends BaseSchema {
  protected tableName = 'groups'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(false)
      table.string('name').notNullable()
      table.integer('userid').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
