export const up = async (knex) => {
  await knex.schema.createTable("pages", (table) => {
    table.increments("id")
    table.timestamps(true, true, true)
    table.text("title").notNullable()
    table.text("content").notNullable()
    table.text("author").notNullable()
    table.text("url").notNullable()
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft")
    table
      .integer("menu")
      .notNullable()
      .references("id")
      .inTable("menu")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })

  await knex.schema.createTable("menu", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.timestamps(true, true, true)
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("menu")
  await knex.schema.dropTable("pages")
}
