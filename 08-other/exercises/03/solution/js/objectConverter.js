const objectConverter = {
  arrayToMap(array) {
    const newMap = new Map([]);
    array.forEach((element, index) => {
      newMap.set(index, element);
    });
    return newMap;
  },

  arrayToSet(array) {
    return new Set(array);
  },

  setToMap(set) {
    const newMap = new Map([]);
    const array = Array.from(set);
    array.forEach((value, index) => {
      newMap.set(index, value);
    });
    return newMap;
  },

  setToArray(set) {
    return Array.from(set);
  },

  mapToArray(map) {
    const newArray = [];
    map.forEach((element) => { newArray.push(element); });
    return newArray;
  },

  mapToSet(map) {
    const newSet = new Set();
    map.forEach((value) => newSet.add(value));
    return newSet;
  },
};

export default objectConverter;

/*
3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett
adattípusból konvertálják át az adatokat egy másikba.
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/
