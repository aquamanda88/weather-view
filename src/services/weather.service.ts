import axiosCustomer from "../utils/api/axios-customization";
import { axiosParams } from "../utils/api/axios-params";

const authorization = axiosParams().authorization;
const url = `F-D0047-071?Authorization=${authorization}&locationName=新店區`;
/** 新北市 - 新店區：鄉鎮未來 1 週逐 12 小時天氣預報 */
export class WeatherService {
  /** 全部 */
  getHsintienAll() {
    return axiosCustomer.get(`${url}&elementName=`);
  }
  /** 12 小時降雨機率 */
  getHsintienPop() {
    return axiosCustomer.get(`${url}&elementName=PoP12h`);
  }
  /** 平均溫度 */
  getHsintienT() {
    return axiosCustomer.get(`${url}&elementName=T`);
  }
  /** 最低體感溫度 */
  getHsintienMinAT() {
    return axiosCustomer.get(`${url}&elementName=MinAT`);
  }
  /** 最高體感溫度 */
  getHsintienMaxAT() {
    return axiosCustomer.get(`${url}&elementName=MaxAT`);
  }
  /** 最低溫度 */
  getHsintienMinT() {
    return axiosCustomer.get(`${url}&elementName=MinT`);
  }
  /** 最高溫度 */
  getHsintienMaxT() {
    return axiosCustomer.get(`${url}&elementName=MaxT`);
  }
  /** 最小舒適度指數 */
  getNTPMinCI() {
    return axiosCustomer.get(`${url}&elementName=MinCI`);
  }
  /** 最大舒適度指數 */
  getHsintienMaxCI() {
    return axiosCustomer.get(`${url}&elementName=MaxCI`);
  }
  /** 紫外線指數 */
  getHsintienUVI() {
    return axiosCustomer.get(`${url}&elementName=UVI`);
  }
  /** 天氣現象 */
  getHsintienWx() {
    return axiosCustomer.get(`${url}&elementName=Wx`);
  }
  /** 最大風速 */
  getHsintienWS() {
    return axiosCustomer.get(`${url}&elementName=WS`);
  }
  /** 風向 */
  getHsintienWD() {
    return axiosCustomer.get(`${url}&elementName=WD`);
  }
  /** 平均露點溫度 */
  getHsintienTd() {
    return axiosCustomer.get(`${url}&elementName=Td`);
  }
  /** 平均相對濕度 */
  getHsintienRH() {
    return axiosCustomer.get(`${url}&elementName=RH`);
  }
  /** 天氣描述 */
  getHsintienWeatherDescription() {
    return axiosCustomer.get(`${url}&elementName=WeatherDescription`);
  }
}

export default new WeatherService();
