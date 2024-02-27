/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9ha8lwbn527e5sr",
    "created": "2024-02-27 00:38:29.480Z",
    "updated": "2024-02-27 00:38:29.480Z",
    "name": "BTS",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mrsurdd2",
        "name": "Titulo_BTS",
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
        "id": "xfbrilnm",
        "name": "Url_BTS",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("9ha8lwbn527e5sr");

  return dao.deleteCollection(collection);
})
