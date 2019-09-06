import _ from 'lodash';
console.log("object utils location")
function getAllPaths(obj) {
  if(!obj || !(obj instanceof Object))
    return [];
  let keys = [];
  for(const key in obj) {
      if(!(obj[key] instanceof Object))
        keys.push(key);
      if(typeof obj[key] === "object") {
          var subkeys = getAllPaths(obj[key]);
          keys = keys.concat(subkeys.map(function(subkey) {
              return key + "." + subkey;
          }));
      }
  }
  return keys
}

class ObjectIterator {
  constructor(object) {
    this.object = object;
    this.currentPathIndex = -1;
    this.paths = getAllPaths(object).map(key => key.split("."));
  }
  hasNext() {
    return this.currentPathIndex + 1 < this.paths.length
  }

  next() {
    if(this.hasNext())
      return _.get(this.object, this.paths[++this.currentPathIndex]);
    return undefined;
  }

  current() {
    if(this.currentPathIndex === -1)
      return undefined;
    return _.get(this.object, this.paths[this.currentPathIndex]);
  }
}

export const deepForEachObjectValue = (obj, cb) => {
  console.error("Object Utils Location!")
  const objIterator = new ObjectIterator(obj);
  while(objIterator.hasNext()) {
    cb(objIterator.next(), objIterator.paths[objIterator.currentPathIndex]);
  }
}
