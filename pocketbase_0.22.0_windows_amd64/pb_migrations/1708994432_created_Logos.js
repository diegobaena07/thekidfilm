/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iw8cpb77pu7g5e1",
    "created": "2024-02-27 00:40:32.222Z",
    "updated": "2024-02-27 00:40:32.222Z",
    "name": "Logos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0vloeaev",
        "name": "Titulo_Logo",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9jebcbsu",
        "name": "Imagen_Logo",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("iw8cpb77pu7g5e1");

  return dao.deleteCollection(collection);
})
