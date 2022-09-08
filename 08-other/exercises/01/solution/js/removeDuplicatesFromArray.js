const removeDuplicatesFromArray = (arr = []) => Array.from(new Set(arr));

export default removeDuplicatesFromArray;


/*
const removeDuplicatesFromArray = (arr = []) => {
  const cleanArray = [];
  arr.forEach((element) => {
    if (!cleanArray.includes(element)) {
      cleanArray.push(element);
    }
  });
  return cleanArray;
};

1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a
 paraméterként megadott tömbből eltávolítja a duplikált elemeket! A tömb
 csak primítív értékeket tartalmaz!
A függvény visszatérési értéke a duplikált elemektől mentes új tömb!
*/
