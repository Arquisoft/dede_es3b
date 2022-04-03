export const getShippingPrice = async (address: String) => {
    let coords = await calculateCoordinates(address);
  
    const gasPrice= 0.02;
    //43.355426, -5.851088 Campus
    let lat1 = 43.355426;
    let lon1 = -5.851088;
    let lat2 = coords.features[0].geometry.coordinates[1];
    let lon2 = coords.features[0].geometry.coordinates[0];
    return calcCrow(lat1, lon1, lat2, lon2)*gasPrice;
  };
  
async function calculateCoordinates(address: String) {
    let response = await fetch(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          address +
          ".json?access_token=" + process.env.REACT_APP_MAPBOX_KEY
      );
    //if (response.status===200)
    //  return response.json();
   // else
      return response.json();
    
  }

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcCrow(lat1:number, lon1:number, lat2:number, lon2:number) 
  {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value:number) 
  {
      return Value * Math.PI / 180;
  }