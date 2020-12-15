import React, { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("FAIL!!!");
    }
  }, []);
  const showPosition = (position) => {
    let latitude = position.coords.latitude;
    console.log(latitude);
    let Longitude = position.coords.longitude;
    console.log(Longitude);
  };
  return <div id="demo">HomePage</div>;
}

export default HomePage;
