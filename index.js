var recipes = {

}

object.key

function updateObjectWithKeyAndValue(object, key, value){
var newObj = Object.assign({}, object, {[key]:value})
return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var destructObj = Object.assign(object, {[key]: value})
  return destructObj;
}

function deleteFromObjectByKey(object, key){
  var object = {foo: bar}
  var newObj = Object.assign({}. object)

  delete newObj.foo;
}