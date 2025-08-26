let array1 = [ 
  {imya : "lentay", height : 176, occupation : "none" },
  {imya : "polinchik", height : 174, occupation : "architect-restorator" },
  {imya : "valeri", height : 173.5, occupation : "medical_Professional" },
];

let array2 = [ ];

function findObjectInArray(propertyName,propertyValue) {
  let lookingName = propertyName;
  if (array1.indexOf(propertyName) = -1) {
    console.log("There is nothing under this property name found")
    return("There is nothing similar found")
  } else {
    for (const person of array1) {
      array2.push(array1.lookingName);
      console.log(array2.indexOf(propertyValue))
      return(array2.indexOf(propertyValue))
    }; 
  };
};

findObjectInArray(height, 176 );