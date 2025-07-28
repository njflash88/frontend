const companies = [
  { name: " company one", cat: "retail", start: 1992, end: 2024 },
  { name: " company two", cat: "finance", start: 1992, end: 2020 },
  { name: " company three", cat: "wholesales", start: 1992, end: 1999 },
  { name: " company four", cat: "wholesales", start: 1992, end: 2010 },
  { name: " company five", cat: "retails", start: 1992, end: 2004 },
  { name: " company six", cat: "finance", start: 1992, end: 2011 },
  { name: " company seven", cat: "finance", start: 1992, end: 2019 },
  { name: " company eight", cat: "retail", start: 1992, end: 2012 },
  { name: " company nine", cat: "retail", start: 1992, end: 2006 },
  { name: " company ten", cat: "wholeSales", start: 1992, end: 1997 },
];
const ages = [33, 12, 45, 77, 60, 23, 7, 80, 55, 67, 29, 16];

//companies.forEach( company=>console.log(company.name));
// companies.forEach((company) =>
//   console.log(company.name, company.end - company.startr)
// );

//making use of the index which is the position of the element
// ages.forEach((age, index) => {
//   if (index % 2) {
//     //if odd number, truthy value
//     console.log(age, index);
//     age = age / 2;
//     // console.log(age);
//     ages[index] = age;
//   }
// });
// console.log(ages);

// MAP
// create new array of array
// const companyNames = companies.map((company) => [company.name, company.start]);
// console.log(companyNames);

// // array of strings
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

//Filter example
const adult = ages.filter((age) => age > 20);
console.log(adult);

// Reducing
