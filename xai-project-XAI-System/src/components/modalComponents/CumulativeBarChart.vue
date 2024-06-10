<template>
  <div>
    <Bar :options="chartOptions" :data="chartData" :width="500" :height="50" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "CumulativeBarChart",
  components: {
    Bar,
  },
  props: {
    entryData: {
      type: Array,
    },
  },
  data() {
    return {
      chartData: null,
      chartOptions: {
        maintainAspectRatio: false,
        indexAxis: "y",

        scales: {
          x: {
            display: false,
            stacked: true,
            ticks: {
              display: false,
            },
          },
          y: {
            display: false,
            stacked: true,
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
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
      const dataFromJson = this.entryData.Gewichtung;
      console.log("entry:", dataFromJson);

      this.chartData = {
        labels: ["Gesamtwert"],
        datasets: dataFromJson.map((value, index) => ({
          data: [value],
          backgroundColor: index % 2 === 0 ? "#66829C" : "#9FBCCC",
          borderRadius:
            index === 0
              ? [{ topLeft: 30, bottomLeft: 30 }]
              : index === dataFromJson.length - 1
              ? [{ topRight: 30, bottomRight: 30 }]
              : {},
          borderSkipped: false,
          barThickness: 40,
        })),
      };
    },
  },
  created() {
    this.fetchData();
    console.log("Props in CumulativeBarChart:", this.$props);
  },
};
</script>
