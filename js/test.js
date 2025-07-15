function getAllPropValues(propName) {
  
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let resultArray = [ ];

      if ( propName === "name") {
        for (const product of products) {
          resultArray.push(products.name)
        };
        return(resultArray)
      } if ( propName === "price") {
        for (const product of products) {
        resultArray.push(products.price)
        };
        return(resultArray)
      } if ( propName === "quantity") {
        for (const product of products) {
          resultArray.push(products.quantity)
          console.log(resultArray)
         };
        console.log(resultArray)
      } else {
        return(resultArray)
      };
};

getAllPropValues("quantity");