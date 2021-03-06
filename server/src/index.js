import parseFuncService from "./parseFunctions.js";
import configs from "./configsCovid.js";
console.log("Index starts...");
function start() {
  const covInfo = parseFuncService.getCovidInfo(configs.COUNTRIES);
  covInfo.then(data => {
    parseFuncService.saveResult(data, "cov");
  });
  const moneyInfo = parseFuncService.getMoneyInfo(configs.MONEY);
  moneyInfo.then(data => {
    parseFuncService.saveResult(data, "money");
  });

  // const postInfo = parseFuncService.getPost(configs.POST.url, configs.POST);
  // postInfo.then(data => console.log(data));

  const links = parseFuncService.getLinks(configs.URLNEWS);
  links
    .then(data => parseFuncService.fetchLinks(data))
    .then(data => parseFuncService.saveResult(data, "news"));
}
start();
