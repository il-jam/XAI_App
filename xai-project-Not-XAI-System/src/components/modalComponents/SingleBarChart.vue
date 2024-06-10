<template>
  <div>
    <Bar
      :options="singleBarsOptions"
      :data="singleBarsData"
      :width="500"
      :height="60"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Legend, BarElement, CategoryScale, LinearScale);

import { Chart } from "chart.js";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";

Chart.register(ChartjsPluginStacked100);

export default {
  name: "SingleBarChart",
  components: {
    Bar,
  },
  props: {
    gewichtung: {
      type: Number,
    },
    label: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      singleBarsData: null,
      singleBarsOptions: {
        maintainAspectRatio: false,
        indexAxis: "y",
        scales: {
          x: {
            display: false,

            ticks: {
              display: false, // deaktiviert Achsenetiketten (ticks) für die x-Achse
            },
          },
          y: {
            display: false,

            ticks: {
              display: false, // deaktiviert Achsenetiketten (ticks) für die x-Achse
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          stacked100: { enable: true },
          tooltip: {
            enabled: true,
            filter: function (item) {
              // Nur Tooltips für den ersten Datensatz anzeigen (der "echte" Balken)
              return item.datasetIndex === 0;
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          margin: {
            top: 100,
            right: 10,
            bottom: 10,
            left: 10,
          },
        },
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      },
    };
  },
  methods: {
    fetchData() {
      const dataFromJsonProzent = [this.gewichtung]; //MACHE HIER EIN ARRAY DRAUS, weil data ein Array erwartet
      const dataFromJsonLabels = [this.label];
      const index = this.index;
      console.log("entry:", dataFromJsonProzent);

      this.singleBarsData = {
        labels: dataFromJsonLabels,
        datasets: [
          {
            data: dataFromJsonProzent, //HIER MUSS EIN ARRAY ÜBERGEBEN WERDEN
            backgroundColor: index % 2 === 0 ? "#66829C" : "#9FBCCC",
            borderRadius: {
              topLeft: 25,
              bottomLeft: 25,
            },
            borderSkipped: false,
            barThickness: 40,
            borderWidth: 0,
          },
          {
            data: [100 - dataFromJsonProzent[0]],
            backgroundColor: "transparent",
            borderWidth: 1,
            barThickness: 40,
            borderRadius: {
              topLeft: 25,
              topRight: 25,
              bottomLeft: 25,
              bottomRight: 25,
            },
          },
        ],
      };
    },
  },
  created() {
    this.fetchData();
    console.log("Props in StackedBarChart:", this.$props);
  },
};
</script>

<style></style>
