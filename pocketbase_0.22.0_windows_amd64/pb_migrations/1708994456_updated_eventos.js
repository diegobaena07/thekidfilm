/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8k1erhueq7iwp88")

  collection.name = "Eventos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8k1erhueq7iwp88")

  collection.name = "eventos"

  return dao.saveCollection(collection)
})
