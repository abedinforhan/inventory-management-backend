const { db } = require("./models/Store");

// db.stocks.aggregate([
//   {
//     $group:
//     {
//       _id: "$store.name",
//       totalPrices:{ $sum:{$multiply:["$price","$quantity"]}}
//     }
//   }
// ])


// db.stocks.aggregate([
//   {
//     $match: {
//       "store.name": "dhaka"
//     }
//   },
//   {
//     $project: {
//       name: 1,
//       price: 1,
//       store:"$store.name"
//     }
//   },
//   {
//     $sort: { "price": -1 }
//   },
//   {
//     $limit: 1
//   }
// ])


db.stocks.aggregate([
  {
    $group:{_id:"$store.name", varieties:{$push:"$name"}}
   
  }
  
])