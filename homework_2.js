const jsonString =`{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `;
   const data = JSON.parse(jsonString);
   const list = data.list;
   
   const array = new Array();
   
   list.forEach(list => {
          
           array.push({
               name: list.name,
               age: Number(list.age),
               prof: list.prof,
             });
       });
       const result = {
           list: array
       };
       console.log(result);
