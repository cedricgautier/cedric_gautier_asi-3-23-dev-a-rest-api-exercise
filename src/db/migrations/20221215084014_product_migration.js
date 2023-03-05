export const up = async (knex) => {
  await knex.schema.createTable("product", (table) => {
    table.increments("id")
    table.text("label").notNullable()
    table.text("label").notNullable()
    table.text("price").notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("product")
}
