function sortNestedArrays(obj, sortPropertyName) {
  Object.keys(obj).forEach((key)=>{
      if (Array.isArray(obj[key])) {
          obj[key].sort((a,b)=>a[sortPropertyName] - b[sortPropertyName]);
      }

      if (!!obj[key] && (typeof obj[key] === 'object' || Array.isArray(obj[key]))) {
          sortNestedArrays(obj[key], sortPropertyName);
      }
  }
  );

  return obj;
}
let data = [{
  "tarifName": "Premium",
  "speed": {
      "upload": "3.06",
      "download": "1.27"
  },
  "benefit": {
      "type1": "Fashion",
      "type2": "Lifestyle",
      "type3": "Health"
  },
  "price": "13.65"
}, {
  "tarifName": "Business",
  "speed": {
      "upload": "4.43",
      "download": "2.15"
  },
  "benefit": {
      "type1": "Trendy",
      "type2": "Fuzzy",
      "type3": "Vogue"
  },
  "price": "33.00"
}, {
  "tarifName": "Economy",
  "speed": {
      "upload": "5.22",
      "download": "1.98"
  },
  "benefit": {
      "type1": "Area Coverage",
      "type2": "Municipal",
      "type3": "Cashback"
  },
  "price": "15.76"
}, {
  "tarifName": "Union",
  "speed": {
      "upload": "3.84",
      "download": "2.73"
  },
  "benefit": {
      "type1": "Football",
      "type2": "Basketball",
      "type3": "Tennis"
  },
  "price": "21.43"
}, {
  "tarifName": "Subsidized",
  "speed": {
      "upload": "7.06",
      "download": "1.27"
  },
  "benefit": {
      "type1": "Sitcom",
      "type2": "Cartoon",
      "type3": "Games"
  },
  "price": "12.12"
}, {
  "tarifName": "Family",
  "speed": {
      "upload": "5.54",
      "download": "2.41"
  },
  "benefit": {
      "type1": "Prepaid",
      "type2": "Television",
      "type3": "Internet"
  },
  "price": "4.68"
}, {
  "tarifName": "Couple Grade",
  "speed": {
      "upload": "3.23",
      "download": "1.27"
  },
  "benefit": {
      "type1": "Normal",
      "type2": "Single",
      "type3": "Sport"
  },
  "price": "14.49"
}, {
  "tarifName": "Diamond",
  "speed": {
      "upload": "8.00",
      "download": "5.25"
  },
  "benefit": {
      "type1": "Bank Note",
      "type2": "Programmed",
      "type3": "P.A.Y.G"
  },
  "price": "8.39"
}, {
  "tarifName": "LTE Allnet",
  "speed": {
      "upload": "4.06",
      "download": "1.27"
  },
  "benefit": {
      "type1": "Simple",
      "type2": "Common",
      "type3": "P.A.Y.G"
  },
  "price": "9.68"
}, {
  "tarifName": "3GP",
  "speed": {
      "upload": "3.06",
      "download": "1.27"
  },
  "benefit": {
      "type1": "Oneoff",
      "type2": "Reserved",
      "type3": "Amazon"
  },
  "price": "10.15"
}];

console.log(sortNestedArrays(data, 'benefit.type1'))
