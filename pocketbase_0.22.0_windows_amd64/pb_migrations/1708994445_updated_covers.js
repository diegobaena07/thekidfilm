/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xlh4kcgpg1koefg")

  collection.name = "Covers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xlh4kcgpg1koefg")

  collection.name = "covers"

  return dao.saveCollection(collection)
})
