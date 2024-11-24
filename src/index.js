const url = "/search?q=必应翻译&FORM=TTAHP1";

fetch(url).then(res => res.json()).then(data => {
  console.log(data);
})