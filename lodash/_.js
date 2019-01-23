const _ = {

//clamp()
  clamp (number, lower, upper) {
    if (number >= lower && number <= upper) {
      return number;
    } else if (number < lower) {
      return lower;
    } else {
      return upper;
    }
  },

//inRange()
  inRange (number, start, end) {
    let tmp = '';
    if (start > end) {
      tmp = start;
      start = end;
      end = tmp;
    }
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (number < start) {
      return false;
    } else if (number >= end) {
      return false;
    } else if (number >= start && number < end) {
      return true;
    }
  },

//words()
  words (string) {
    const stringArray = string.split(' ');
    return stringArray;
  },

//pad()
  pad (string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPad = Math.floor((length - string.length) / 2);
    const endPad = (length - string.length) - startPad;
    const paddedString = `${' '.repeat(startPad)}${string}${' '.repeat(endPad)}`;
    return paddedString;
  },

//has()
  has (object, key) {
    return object.hasOwnProperty(key);
  },

//invert()
  invert (object) {
    invertObject = {};
    for (key in object) {
      invertObject[object[key]] = key;
    }
    return invertObject;
  },

//findKey()
  findKey (object, predicate) {
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

//drop()
  drop (array, dropNum) {
    if (dropNum) {
      return array.slice(dropNum);
    } else if (!dropNum) {
      return array.slice(1);
    }
  },

//dropWhile()
  dropWhile (array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

//chunk()
  chunk (array, size) {
    if (size === undefined) {
      size = 1;
    }
    let chunkArray = [];
    for (i = 0; i < array.length; i += size) {
      let arrChunk = array.slice(i, (i+size))
      chunkArray.push(arrChunk);
      }
    return chunkArray;
  }
};


// Do not write or modify code below this line.
module.exports = _;
