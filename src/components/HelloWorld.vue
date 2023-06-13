<script setup lang="ts">
import weatherService from "@/services/weather.service";
import {
  GetHsintienAllRes,
  GetHsintienAllLocationsDatum,
  GetHsintienAllWeatherElementDatum,
} from "@/utils/model/getHsintienAll.model";
import { onMounted, ref } from "vue";
const getHsintienAllData = ref<GetHsintienAllRes>();
const title = ref("");
const cityName = ref("");
const locationName = ref("");
const currentTemperature = ref("");
const weatherElementDescription = ref("");
const weatherElement = ref<GetHsintienAllWeatherElementDatum[]>([]);
const weatherElementArr = ref<GetHsintienAllWeatherElementDatum[]>([]);
const tableHeader = ref<any[]>([]);

onMounted(() => {
  getHsintienAll();
});

async function getHsintienAll() {
  const res = await weatherService.getHsintienAll();
  getHsintienAllData.value = res.data;
  if (getHsintienAllData.value !== undefined) {
    const data: GetHsintienAllLocationsDatum =
      getHsintienAllData.value.records.locations[0];
    weatherElementArr.value = data.location[0].weatherElement;
    format(data);
  }
}

function format(data: GetHsintienAllLocationsDatum) {
  title.value = data.datasetDescription;
  cityName.value = data.locationsName;
  locationName.value = data.location[0].locationName;
  weatherElementDescription.value =
    data.location[0].weatherElement[0].description;
  weatherElement.value = data.location[0].weatherElement.sort(function (a, z) {
    return a.elementName.localeCompare(z.elementName);
  });
  weatherElement.value.forEach((res: GetHsintienAllWeatherElementDatum) => {
    if (res.elementName === "T") {
      currentTemperature.value = res.time[0].elementValue[0].value;
    }
  });

  tableHeader.value = weatherElement.value[0].time.map((res: any) => ({
    date: formatDate(res.startTime.split(" ")[0]),
    dayStatus: res.startTime.split(" ")[1] === "18:00:00" ? "晚上" : "白天",
  }));
}

function formatDate(res: string): string {
  return res.replaceAll("-", "/").slice(5);
}
</script>

<template>
  <div class="container">
    <!-- <h1>{{ title }}</h1>
    <h3>{{ cityName }}{{ locationName }}</h3>
    <h4>{{ weatherElementDescription }}</h4> -->
    <h5>{{ currentTemperature }}°C</h5>
    <div class="table-responsive">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="w-12 text-start" scope="col">日期</th>
            <th v-for="data in tableHeader" :key="data" scope="col">
              {{ data.date }}
            </th>
          </tr>
          <tr>
            <th class="w-12 text-start" scope="col">時間</th>
            <th v-for="data in tableHeader" :key="data" scope="col">
              {{ data.dayStatus }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in weatherElement" :key="item.description">
            <th class="text-start" scope="row">{{ item.description }}</th>
            <template v-if="item.elementName === 'UVI'">
              <td v-for="data in item.time" :key="data.startTime" colspan="2">
                {{ data.elementValue[0].value }}
              </td>
            </template>
            <template v-else>
              <td
                v-for="item in weatherElement[index].time"
                :key="item.startTime"
              >
                <template v-if="item.elementValue[0].value !== ' '">
                  <span>{{ item.elementValue[0].value }}</span>
                  <template v-if="item.elementValue[0].measures === '百分比'">
                    <span>%</span>
                  </template>
                  <template v-if="item.elementValue[0].measures === '攝氏度'">
                    <span>°C</span>
                  </template>
                </template>
                <template v-else>-</template>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
