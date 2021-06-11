export function countDown(startNumber) {
    if ((typeof +startNumber != "number") || (isNaN(+startNumber)))
    {return "Please, enter a number";}
    if (startNumber < 0)
    {return "Please, enter a number more or equal to 0";}
    else
    { let arr = new Array();
        for (let i = startNumber; i >= 0; --i) {
          arr.push(i);
        }
      return arr;
    }
}