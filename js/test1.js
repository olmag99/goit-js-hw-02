function getAllPropValues(propName) {
  
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let resultArray = [ ];

    for (const product of products) {
      if ( propName === "name") {
        for (let name of products) {
          resultArray.push(products.name)
          return(resultArray)
        };
      } if ( propName === "price") {
        for (let price of products) {
        resultArray.push(products.price)
        };
        return(resultArray)
      } if ( propName === "quantity") {
        for (let quantity of products) {
          resultArray.push(products.quantity)
         };
        return(resultArray)
      } else {
        return(resultArray)
      };
    };
};

getAllPropValues()