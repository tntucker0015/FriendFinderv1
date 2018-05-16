// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var TFArray = [
  {
    "name":"Optimus Prime",
    "photo":"https://i.ytimg.com/vi/d2-_V8x37vs/maxresdefault.jpg",
    scores: [
      5,
      4,
      3,
      2,
      1
    ]
  },
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = TFArray;