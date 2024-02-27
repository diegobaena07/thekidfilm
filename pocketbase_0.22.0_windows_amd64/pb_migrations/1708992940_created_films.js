/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4naft2qcbvag88m",
    "created": "2024-02-27 00:15:40.232Z",
    "updated": "2024-02-27 00:15:40.232Z",
    "name": "films",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nbpfosrc",
        "name": "Titulo_Films",
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
        "id": "6ha5qg5f",
        "name": "Url_Films",
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
  const collection = dao.findCollectionByNameOrId("4naft2qcbvag88m");

  return dao.deleteCollection(collection);
})
