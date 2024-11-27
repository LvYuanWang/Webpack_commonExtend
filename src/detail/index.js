import queryString from "query-string";
import { getCityInfo } from "@/utils/provincesInfo";

const parsed = queryString.parse(location.search);

document.querySelector(".title").innerHTML = parsed.province;

async function setDetailProvincesList() {
  const cityInfo = await getCityInfo(parsed.value);
  cityInfo.map(item => {
    const dd = document.createElement("dd");
    const a = document.createElement("a");
    a.href = `areaDetail.html?areaName=${item.label}&areaValue=${item.value}&province=${parsed.value}`;
    a.innerHTML = item.label;
    dd.appendChild(a);
    document.querySelector("dl").appendChild(dd);
  })
}

setDetailProvincesList();