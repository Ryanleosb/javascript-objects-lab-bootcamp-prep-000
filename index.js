var recipes = new Object ({})

var obj = { prop: 2 }
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

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object [key] = value
  return object
}

