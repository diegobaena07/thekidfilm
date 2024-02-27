/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xlh4kcgpg1koefg",
    "created": "2024-02-27 00:28:03.363Z",
    "updated": "2024-02-27 00:28:03.363Z",
    "name": "covers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmqkci3j",
        "name": "Titulo_Covers",
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
        "id": "no7ziauy",
        "name": "Descripcion_Covers",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "qk6kpfry",
        "name": "Imagen_Covers",
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
  const collection = dao.findCollectionByNameOrId("xlh4kcgpg1koefg");

  return dao.deleteCollection(collection);
})
