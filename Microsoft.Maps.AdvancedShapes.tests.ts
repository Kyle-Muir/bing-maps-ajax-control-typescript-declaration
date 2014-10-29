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

var test_polygon = () => {
    var locationArrays: Array<Array<Microsoft.Maps.Location>> = [[new Microsoft.Maps.Location(1, 1)]];
    var polygon = new Microsoft.Maps.AdvancedShapes.Polygon(locationArrays);
    var options: Microsoft.Maps.PolygonOptions = {
        fillColor: new Microsoft.Maps.Color(255, 255, 255, 255)
    };
    var polygonWithOptions = new Microsoft.Maps.AdvancedShapes.Polygon(locationArrays, options);

    polygon.getFillColor();
    polygon.getLocations();
    polygon.getRings();
    polygon.getStrokeColor();
    polygon.getStrokeDashArray();
    polygon.getStrokeThickness();
    polygon.getVisible();
    var locations = [new Microsoft.Maps.Location(1,1)]
    polygon.setLocations(locations);
    polygon.setOptions(options);
    polygon.setRings(locationArrays);
    polygon.toString();
    var mouseEventArgs: Microsoft.Maps.MouseEventArgs = {
        getX: () => {
            return 1;
        },
        getY: () => {
            return 1;
        }
    };
    polygon.click(mouseEventArgs);
    polygon.dblclick(mouseEventArgs);
    var entity: Microsoft.Maps.Entity = {};
    polygon.entitychanged(entity);
    polygon.mousedown(mouseEventArgs);
    polygon.mouseout(mouseEventArgs);
    polygon.mouseover(mouseEventArgs);
    polygon.mouseup(mouseEventArgs);
    polygon.rightclick(mouseEventArgs);
}