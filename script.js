function flatten(value) {
    // If value is not an array or object, return it unchanged
    if (typeof value !== 'object' || value === null ) {
      return value;
    }
  
    // If value is an array, recursively flatten its elements
    if (Array.isArray(value)) {
        let result = [];
        for (let i = 0; i < value.length; i++) {
          if (Array.isArray(value[i])) {
            result = result.concat(flatten(value[i]));
          } else {
            result.push(value[i]);
          }
        }
        return result;
    }
  
    // If value is an object, recursively flatten its key-value pairs
    let flattenedObject = {};
    for (let key in value) {
      let flattenedValue = flatten(value[key]);
      if (typeof flattenedValue === 'object' && !Array.isArray(flattenedValue)) {
        // If flattenedValue is an object, merge its key-value pairs with the current flattenedObject
        flattenedObject = { ...flattenedObject, ...flatten(flattenedValue) };
      } else {
        // If flattenedValue is a primitive value or an array, add it to the flattenedObject
        flattenedObject[key] = flattenedValue;
      }
    }
    return flattenedObject;
  }
  
  module.exports = flatten;
  