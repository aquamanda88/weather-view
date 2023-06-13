/** 取得新店區全部天氣狀況 response */
export interface GetHsintienAllRes {
  /** 狀態 */
  success: string;
  /** 結果 */
  result: GetHsintienAllResultDatum;
  /** 紀錄 */
  records: GetHsintienAllRecordsDatum;
}

/** 結果 */
export interface GetHsintienAllResultDatum {
  /** API 代號 */
  resource_id: string;
  /** 搜尋條件 */
  fields: GetHsintienAllFieldsDatum[];
}

/** 搜尋條件 */
export interface GetHsintienAllFieldsDatum {
  /** 搜尋參數型別代號 */
  id: string;
  /** 搜尋參數型別 */
  type: string;
}

/** 紀錄 */
export interface GetHsintienAllRecordsDatum {
  /** 地點 */
  locations: GetHsintienAllLocationsDatum[];
}

/** 搜尋地點 */
export interface GetHsintienAllLocationsDatum {
  /** API 內容描述 */
  datasetDescription: string;
  /** 縣市名稱 */
  locationsName: string;
  /** API 代號 */
  dataid: string;
  /** 搜尋地點資料 */
  location: GetHsintienAllLocationDatum[];
}

/** 搜尋地點資料 */
export interface GetHsintienAllLocationDatum {
  /** 鄉鎮市區名稱 */
  locationName: string;
  /** 地理編碼 */
  geocode: string;
  /** 緯度 */
  lat: string;
  /** 經度 */
  lon: string;
  /** 搜尋地點詳細天氣狀況 */
  weatherElement: GetHsintienAllWeatherElementDatum[];
}

/** 搜尋地點詳細天氣狀況 */
export interface GetHsintienAllWeatherElementDatum {
  /** 搜尋天氣條件代號 */
  elementName: string;
  /** 搜尋天氣條件描述 */
  description: string;
  /** 統計時間 */
  time: GetHsintienAllTimeDatum[];
}

/** 統計時間 */
export interface GetHsintienAllTimeDatum {
  /** 開始時間 */
  startTime: string;
  /** 結束時間 */
  endTime: string;
  /** 回傳統計時間資料內容 */
  elementValue: GetHsintienAllElementValueDatum[];
}

/** 回傳統計時間資料內容 */
export interface GetHsintienAllElementValueDatum {
  /** 資料數值 */
  value: string;
  /** 單位 */
  measures: string;
}
