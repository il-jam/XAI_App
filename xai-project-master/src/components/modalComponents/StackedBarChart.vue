<template>
  <div>
    <!-- Summierte Prozentleiste -->
    <Bar :width="500" :height="50" :options="chartOptions" :data="chartData" />
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
  name: "StackedBarChart",
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
      chartData: null, // setzt chartData zunächst auf null
      chartOptions: {
        maintainAspectRatio: false,
        indexAxis: "y",

        scales: {
          x: {
            display: false, // Achsenbeschriftungen und -linie für die X-Achse ausblenden
            stacked: true,
            ticks: {
              display: false,
            },
          },
          y: {
            display: false, // Achsenbeschriftungen und -linie für die Y-Achse ausblenden
            stacked: true,
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Legende ausblenden
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
      // Hier sollten Sie Ihre Methode zum Abrufen der Daten aus Ihrer JSON-Datei basierend auf `this.contentID` einfügen.
      const dataFromJson = this.entryData.Gewichtung;
      console.log("entry:", dataFromJson);

      // Nachdem Sie die Daten haben, füllen Sie chartData
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
          barThickness: 40, // Balkendicke
        })),
      };
    },
  },
  created() {
    this.fetchData();
    console.log("Props in StackedBarChart:", this.$props);
  },
};
</script>
