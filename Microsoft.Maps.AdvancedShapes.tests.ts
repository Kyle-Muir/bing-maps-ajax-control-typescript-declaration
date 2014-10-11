/// <reference path="Microsoft.Maps.All.d.ts" />

var test_entity_collection = () => {
	var entityCollection = new Microsoft.Maps.AdvancedShapes.EntityCollection();
	var entityCollectionOptions : Microsoft.Maps.EntityCollectionOptions = {
		bubble: true,
		visible: true,
		zIndex: 2
	};
	var entityCollectionWithOptions = new Microsoft.Maps.AdvancedShapes.EntityCollection(entityCollectionOptions);

	entityCollection.clear();
	entityCollection.get(1);
	entityCollection.getLength();
	entityCollection.getVisible();
	entityCollection.getZIndex();
	var entity : Microsoft.Maps.Entity = {};
	entityCollection.indexOf(entity);
	entityCollection.insert(entity, 0);
	entityCollection.pop();
	entityCollection.push(entity);
	entityCollection.remove(entity);
	entityCollection.removeAt(0);
	entityCollection.setOptions(entityCollectionOptions);
    entityCollection.toString();

    var object = { entity: entity, collection: entityCollection };
    entityCollection.entityAdded(object);
    entityCollection.entityChanged(object);
    entityCollection.entityRemoved(object);
}