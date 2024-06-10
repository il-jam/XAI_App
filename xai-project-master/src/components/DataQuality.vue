<template>
  <div class="quality-container">
    <div class="summary-container">
      <h3>Gesamtqualität</h3>
      <div
        class="summary-box"
        :style="{ backgroundColor: content.Datenqualität.GesamtColor }"
      />
    </div>
    <div ref="canvasCon" class="canvas-container">
      <v-stage :config="configKonva">
        <v-layer>
          <v-line :config="configLineOne" />
          <v-line :config="configLineTwo" />
          <v-line :config="configLineThree" />
          <v-line :config="configLineFour" />
        </v-layer>
      </v-stage>
    </div>
    <div ref="infoCon" class="info-container">
      <QualityInfoBox
        @size-change="drawLines()"
        @toggle-fold="foldStatus = [!foldStatus[0], false, false, false]"
        :isUnfolded="foldStatus[0]"
        :header="'Vollständigkeit'"
        :color="content.Datenqualität.VollständigkeitColor"
        ><span
          ><br />
          <p>{{ content.Datenqualität.Vollständigkeit }}</p></span
        >
      </QualityInfoBox>
      <QualityInfoBox
        @size-change="drawLines()"
        @toggle-fold="foldStatus = [false, !foldStatus[1], false, false]"
        :isUnfolded="foldStatus[1]"
        :header="'Genauigkeit'"
        :color="content.Datenqualität.GenauigkeitColor"
      >
        <span
          ><br />
          <p>{{ content.Datenqualität.Genauigkeit }}</p></span
        >
      </QualityInfoBox>
      <QualityInfoBox
        @size-change="drawLines()"
        @toggle-fold="foldStatus = [false, false, !foldStatus[2], false]"
        :isUnfolded="foldStatus[2]"
        :header="'Zuverlässigkeit'"
        :color="content.Datenqualität.ZuverlässigkeitColor"
      >
        <span
          ><br />
          <p>{{ content.Datenqualität.Zuverlässigkeit }}</p></span
        >
      </QualityInfoBox>
      <QualityInfoBox
        @size-change="drawLines()"
        @toggle-fold="foldStatus = [false, false, false, !foldStatus[3]]"
        :isUnfolded="foldStatus[3]"
        :header="'Aktualität'"
        :color="content.Datenqualität.AktualitätColor"
      >
        <span
          ><br />
          <p>{{ content.Datenqualität.Aktualität }}</p></span
        >
      </QualityInfoBox>
    </div>
  </div>
</template>
<script>
import QualityInfoBox from "./QualityInfoBox.vue";
export default {
  name: "DataQuality",
  components: {
    QualityInfoBox,
  },
  props: {
    content: Object,
  },
  data() {
    return {
      foldStatus: [false, false, false, false],
      configKonva: {
        width: 150,
        height: 180,
      },
      configLineOne: {
        x: 0,
        y: 0,
        points: [0, 0, 1, 1, 2, 2, 3, 3],
        stroke: "gray",
        strokeWidth: 4,
        tension: 0.5,
      },
      configLineTwo: {
        x: 0,
        y: 0,
        points: [0, 0, 1, 1, 2, 2, 3, 3],
        stroke: "gray",
        strokeWidth: 4,
        tension: 0.5,
      },
      configLineThree: {
        x: 0,
        y: 0,
        points: [0, 0, 1, 1, 2, 2, 3, 3],
        stroke: "gray",
        strokeWidth: 4,
        tension: 0.5,
      },
      configLineFour: {
        x: 0,
        y: 0,
        points: [0, 0, 1, 1, 2, 2, 3, 3],
        stroke: "gray",
        strokeWidth: 4,
        tension: 0.5,
      },
    };
  },
  methods: {
    drawLines() {
      const info = this.$refs.infoCon;
      if (info) {
        var elementHeight = 1;
        var lineConfig = this.configLineOne;
        for (var i = 0; i < 4; i++) {
          elementHeight = info.children[i].offsetTop - info.offsetTop + 40;
          if (i == 0) {
            lineConfig = this.configLineOne;
          } else if (i == 1) {
            lineConfig = this.configLineTwo;
          } else if (i == 2) {
            lineConfig = this.configLineThree;
          } else if (i == 3) {
            lineConfig = this.configLineFour;
          }
          lineConfig.points = [
            0,
            this.configKonva.height / 2,
            this.configKonva.width,
            elementHeight,
          ];
        }
      }
    },
  },
  mounted() {
    const canvasCon = this.$refs.canvasCon;
    const infoCon = this.$refs.infoCon;
    const observer = new ResizeObserver(() => {
      this.configKonva.height = infoCon.offsetHeight;
      this.configKonva.width = canvasCon.offsetWidth;
      this.drawLines();
    });
    observer.observe(infoCon);
  },
};
</script>
<style scoped>
h3 {
  position: absolute;
  margin-top: -50px;
  font-size: 1.8em;
  font-style: roboto;
}
.summary-container {
  display: flex;
  justify-content: center;
}
.quality-container {
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 50px 20px 80px;
  scale: 0.8;
}
.summary-box {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: #fdd31b;
}
.canvas-container {
  flex-grow: 1;
  height: 100%;
}
.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  font-size: 20px;
}
</style>
