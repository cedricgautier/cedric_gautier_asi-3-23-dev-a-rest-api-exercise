export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("firstName").notNullable()
    table.text("lastName").notNullable()
    table.text("email").notNullable().unique()
  })
  await knex.schema.createTable("roles", (table) => {
    table.text("Type").notNullable
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("users")
}
