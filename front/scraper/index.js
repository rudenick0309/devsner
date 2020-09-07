const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://devsner.tistory.com/category/Error%20collection");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    // console.log('in scraper', html);
    let ulList = [];
    const $ = cheerio.load(html.data);
    // console.log('in scraper, $ :', $);
    // const $bodyList = $("div.headline-list ul").children("li.section02");
    const $bodyList = $("div.article_skin").children("div.list_content");
    // console.log('in scraper, bodyList ; ', $bodyList);
    //
    $bodyList.each(function(i, elem) {
      ulList[i] = {
        // title: $(this).find('strong.news-tl a').text(),
        // title: $(this).find('a.link_post').text(),
        title: $(this).find('strong.tit_post').text(),
        // url: $(this).find('strong.news-tl a').attr('href'),
        // image_url: $(this).find('p.poto a img').attr('src'),
        // image_alt: $(this).find('p.poto a img').attr('alt'),
        // summary: $(this).find('p.lead').text().slice(0, -11),
        // date: $(this).find('span.p-time').text()
      };
    });
    //
    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));  // TODO; title 만 뽑기. 성공함. 하지만 페이지별로 뽑는 건 아직. 그리고, 크롤링 안 되는 게 드문드문 있더라 그건 왜지?
