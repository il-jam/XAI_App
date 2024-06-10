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
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartjsPluginStacked100);
ChartJS.register(
  Title,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

export default {
  name: "StackedBarChart",
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
              display: false,
            },
          },
          y: {
            display: false,

            ticks: {
              display: false,
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
              // Nur Tooltips für den ersten Datensatz anzeigen (der echte Balken)
              return item.datasetIndex === 0;
            },
          },
          datalabels: {
            color: "#000000",
            anchor: "end", // Wo das Label verankert wird
            align: "end", // Ausrichtung des Labels
            font: {
              size: 16,
              family: "Roboto",
            },
            formatter: (value, context) => {
              // Prüfen, ob das aktuelle Dataset das erste ist
              if (context.datasetIndex === 0) {
                return `${value}%`; // Nur für das erste Dataset das Label anzeigen
              } else {
                return null; // Kein Label für andere Datasets
              }
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
      const dataFromJsonLabels = [this.label]; //AUCH HIER MUSS EIN ARRAY ÜBERGEBEN WERDEN
      const index = this.index;
      console.log("entry:", dataFromJsonProzent);

      this.singleBarsData = {
        labels: dataFromJsonLabels,
        datasets: [
          {
            data: dataFromJsonProzent, //ein Array
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
