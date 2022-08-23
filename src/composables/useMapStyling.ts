export function useMapStyling(): {
  setMapStyling(map: google.maps.Map): void;
} {
  function setMapStyling(map: google.maps.Map) {
    //@ts-ignore
    const countryLayer = map.getFeatureLayer(google.maps.FeatureType.COUNTRY);
    //@ts-ignore
    const cityLayer = map.getFeatureLayer(
      //@ts-ignore
      google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1
    );

    cityLayer.style = (placeFeature: any) => {
      const population = states[placeFeature.feature.displayName];

      let fillColor;

      if (population < 2000000) {
        fillColor = "#E64848";
      } else if (population < 5000000) {
        fillColor = "#ffb813";
      } else if (population < 10000000) {
        fillColor = "#24BAB9";
      } else if (population < 40000000) {
        fillColor = "#52ab8a";
      }
      return {
        fillColor,
        fillOpacity: 0.5,
      };
    };

    countryLayer.style = (placeFeature: any) => {
      const population = countries[placeFeature.feature.displayName];

      let fillColor;
      // Specify colors using any of the following:
      // * Named ('green')
      // * Hexadecimal ('#4c3e50')
      // * RGB ('rgb(0, 0, 255)')
      // * HSL ('hsl(60, 100%, 50%)')

      if (population < 2000000) {
        fillColor = "#3f4856";
      } else if (population < 5000000) {
        fillColor = "#4c3e50";
      } else if (population < 10000000) {
        fillColor = "#ceffe1";
      } else if (population < 40000000) {
        fillColor = "#52ab8a";
      }
      return {
        fillColor,
        fillOpacity: 0.5,
      };
    };

    const countries: any = {
      Sweden: 10359877,
      Iran: 732673,
      Norway: 3123123,
      Denmark: 532324,
      Iceland: 92391,
    };

    // Population data by state.
    const states: any = {
      Alabama: 5039877,
      Alaska: 732673,
      Arizona: 7276316,
      Arkansas: 3025891,
      California: 39237836,
      Colorado: 5812069,
      Connecticut: 3605597,
      Delaware: 1003384,
      Florida: 21781128,
      Georgia: 10799566,
      Hawaii: 1441553,
      Idaho: 1900923,
      Illinois: 12671469,
      Indiana: 6805985,
      Iowa: 3193079,
      Kansas: 2934582,
      Kentucky: 4509394,
      Louisiana: 4624047,
      Maine: 1372247,
      Maryland: 6165129,
      Massachusetts: 6984723,
      Michigan: 10050811,
      Minnesota: 5707390,
      Mississippi: 2949965,
      Missouri: 6168187,
      Montana: 1104271,
      Nebraska: 1963692,
      Nevada: 3143991,
      "New Hampshire": 1388992,
      "New Jersey": 9267130,
      "New Mexico": 2115877,
      "New York": 19835913,
      "North Carolina": 10551162,
      "North Dakota": 774948,
      Ohio: 11780017,
      Oklahoma: 3986639,
      Oregon: 4246155,
      Pennsylvania: 12964056,
      "Rhode Island": 1095610,
      "South Carolina": 5190705,
      "South Dakota": 895376,
      Tennessee: 6975218,
      Texas: 29527941,
      Utah: 3337975,
      Vermont: 645570,
      Virginia: 8642274,
      Washington: 7738692,
      "West Virginia": 1782959,
      Wisconsin: 5895908,
      Wyoming: 578803,
      Berlin: 500000,
    };
  }

  return {
    setMapStyling,
  };
}
