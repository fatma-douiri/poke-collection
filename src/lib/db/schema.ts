import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const pokemonCollection = pgTable("pokemon_collection", {
  id: serial("id").primaryKey(),
  pokemonId: integer("pokemon_id").notNull().unique(),
  name: varchar("name", { length: 256 }).notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
