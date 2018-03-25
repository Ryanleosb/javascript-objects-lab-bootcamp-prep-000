var recipes = new Object ({})

var obj = { prop: 1 }
 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},{[key]:value})
};

function destrictivelyUpdateObjectWithKeyAndValue (object,key, value) {
  object [key] = value
  return object
};
function deleteFromObjectByKey (object, key) {
  delete object.key
  return key
};
