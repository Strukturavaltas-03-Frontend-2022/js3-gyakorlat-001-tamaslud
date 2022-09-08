const customDateFormats = (date = new Date()) => {
  const short = (new Intl.DateTimeFormat('hu-HU', { dateStyle: 'medium', timeStyle: 'short' }).format(date));
  const long = (new Intl.DateTimeFormat('hu-HU', { dateStyle: 'long', timeStyle: 'medium' }).format(date));
  return { short, long };
};

export default customDateFormats;

/*

4. Írj egy függvényt `customDateFormats` néven, ami paraméterként egy
Date objektumot kap, a visszatérési értéke pedig egy objektum két
tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul,
    kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul,
    a nap száma, majd az idő)
*/
