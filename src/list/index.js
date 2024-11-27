import { getProvincesInfo } from "@/utils/provincesInfo";

async function setList() {
  const { data } = await getProvincesInfo();
  for (const provinces of data) {
    const ul = document.querySelector(".provinces");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = provinces.label;
    a.href = `detail.html?province=${provinces.label}&value=${provinces.value}`;
    li.appendChild(a);
    ul.appendChild(li);
  }
}

setList();