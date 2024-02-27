/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4naft2qcbvag88m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yoziequd",
    "name": "Descripcion_Films",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4naft2qcbvag88m")

  // remove
  collection.schema.removeField("yoziequd")

  return dao.saveCollection(collection)
})
