/**
 * 获取省份信息
 */
export async function getProvincesInfo() {
  const data = await fetch("/api/citylist").then(res => res.json());
  return data;
}

/**
 * 根据省份值获取城市信息
 * @param {number} provinceValue 查找城市信息的省份值
 * @returns 
 */
export async function getCityInfo(provinceValue) {
  const { data } = await getProvincesInfo();
  let cityInfo = [];
  data.forEach(item => {
    item.value === provinceValue && (cityInfo = item.children);
  });
  return cityInfo;
}

/**
 * 根据省份值和城市值获取区域信息
 * @param {number} provinceValue 省份值
 * @param {number} areaValue 城市值
 * @returns 
 */
export async function getAreaInfo(provinceValue, areaValue) {
  const cityInfo = await getCityInfo(provinceValue);
  let areaInfo = [];
  cityInfo.forEach(item => {
    item.value === areaValue && (areaInfo = item.children);
  });
  return areaInfo;
}