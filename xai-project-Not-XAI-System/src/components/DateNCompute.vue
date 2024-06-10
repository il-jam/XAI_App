<template>
  <div class="date-container">
    <div class="date-picker-container">
      <VueDatePicker
        class="date-picker"
        v-model="selectedDateStart"
        placeholder="Startdatum"
        :hide-navigation="['time', 'minutes', 'hours', 'seconds']"
        :format="format"
        :preview-format="format"
        model-type="dd.MM.yyyy"
      ></VueDatePicker>
    </div>
    <div class="date-picker-container">
      <VueDatePicker
        class="date-picker"
        v-model="selectedDateEnd"
        placeholder="Enddatum"
        :hide-navigation="['time', 'minutes', 'hours', 'seconds']"
        :format="format"
        :preview-format="format"
        vertical
      ></VueDatePicker>
    </div>
    <button class="compute-button" @click="doNthing">Berechnen</button>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      selectedDateStart: "",
      selectedDateEnd: "",
      date: new Date(),
    };
  },
  methods: {
    format(date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
};
</script>

<style>
.date-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1880px;
}

.date-picker-container {
  margin-right: 0px;
}

.compute-button {
  border: none;
  border-radius: 20px;
  width: 150px;
  text-decoration: none;
  color: white;
  background-color: #4298fe;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  margin: 30px 5px 30px 5px;
}

.date-picker {
  border: none;
  border-radius: 20px;
  width: 220px;
  text-decoration: none;
  color: white;
  background-color: transparent;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0px 30px 0px;
}
</style>
