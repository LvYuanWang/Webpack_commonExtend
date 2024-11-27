import queryString from "query-string";
import { getAreaInfo } from "@/utils/provincesInfo";

const parsed = queryString.parse(location.search);

document.querySelector(".title").innerHTML = parsed.areaName;

async function setAreaDetailInfo() {
  const areaInfo = await getAreaInfo(parsed.province, parsed.areaValue);
  areaInfo.map(item => {
    const dd = document.createElement("dd");
    dd.innerHTML = item.label;
    document.querySelector("dl").appendChild(dd);
  })
}

setAreaDetailInfo();