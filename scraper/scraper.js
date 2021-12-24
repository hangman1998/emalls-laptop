const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

let laptops = { laptops: [] };

function toEnglishDigits(str) {
  // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
  var e = "۰".charCodeAt(0);
  str = str.replace(/[۰-۹]/g, function (t) {
    return t.charCodeAt(0) - e;
  });

  // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
  e = "٠".charCodeAt(0);
  str = str.replace(/[٠-٩]/g, function (t) {
    return t.charCodeAt(0) - e;
  });
  return str;
}

const formatter = (price) => {
  return Number(toEnglishDigits(price.split(",").join(""))) / 1000000;
};
const getData = async (page) => {
  const localList = [];
  const { data } = await axios.get(
    "https://emalls.ir/%D9%84%DB%8C%D8%B3%D8%AA-%D9%82%DB%8C%D9%85%D8%AA_%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE~Category~40~page~" +
      page
  );
  //   console.log(data);
  const nameSelector =
    "#mainlist > div > div.col-md-4.col-sm-7.col-7 > span.item-title > a";
  const priceSelector =
    "#mainlist > div > div.col-md-2.col-sm-12.col-12.item-price > span:nth-child(1)";
  const imgSelector = "#mainlist > div > .imgContainer > a > img";
  const $ = cheerio.load(data);

  $(priceSelector).each((index, element) => {
    let price = $(element).text().split(" ").slice(-2).map(formatter)[0];
    localList.push({
      price,
    });
  });
  $(nameSelector).each((index, element) => {
    localList[index].name = $(element).text();
    localList[index].link = $(element).attr("href");
  });
  $(imgSelector).each((index, element) => {
    localList[index].imageUrl = $(element).attr("src");
    localList[index].imageUrlLazy = $(element).attr("data-lazysrc");
  });
  return localList;
};

const getPages = async () => {
  for (let i = 1; i < 20; i++) {
    console.log("page " + i + " ...");
    laptops.laptops = laptops.laptops.concat(await getData(i));
  }
  let jsonData = JSON.stringify(laptops);

  fs.writeFile("db.json", jsonData, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

getPages();
