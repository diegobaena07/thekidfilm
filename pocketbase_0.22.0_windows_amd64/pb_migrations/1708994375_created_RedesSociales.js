/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bd7y6vfxdt5iogc",
    "created": "2024-02-27 00:39:35.934Z",
    "updated": "2024-02-27 00:39:35.934Z",
    "name": "RedesSociales",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irpfpiuv",
        "name": "Titulo_RedesSociales",
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
        "id": "9ntzszf5",
        "name": "Link_RedesSociales",
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
  const collection = dao.findCollectionByNameOrId("bd7y6vfxdt5iogc");

  return dao.deleteCollection(collection);
})
