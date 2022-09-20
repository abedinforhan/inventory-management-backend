const locations = {
  "40.35": {
    "-105.81": "ROCKY-MOUNTAINS",
    "22.54": "KATERINI-GREECE"
  },
  "28.66": {
    "-105.81": "CHIHUAHUA-MEXICO"
  }
};

function goToSecretLocation(lat, lon, passcode) {
  if (!lat || !lon || !passcode) {
    throw "latitude, longitude, and passcode are required!";
  }

  let result;
  try {
    if (locations[lat][lon] === passcode) {  // '65.99''22.54
      result = "Welcome.";
    } else {
      throw "Nothing to see here!";
    }
  } catch (error) {

    console.log(typeof error)

    // if (typeof error === "string") {
    //   result = error;
    //   console.log(result);
    // } else {
    //   result = "You look around and don't see a thing.";
    // }
  }

  return result;
}

const res = goToSecretLocation(65.99, 22.54, "ROCKY-MOUNTAINS");
console.log(res);


// function normal(){

//   try{

//     throw 'my name'

//   }catch(err){
//     console.log(typeof err === 'string');
//   }

// }

// normal()