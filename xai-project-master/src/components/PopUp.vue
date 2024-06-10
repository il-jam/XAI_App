<template>
  <div class="popup-bg">
    <div class="popup-container">
      <div class="header">
        <span v-if="page === 1"><h3>Zusammenfassung Erklärung</h3></span>
        <span v-if="page === 2"><h3>Gewichtung der Faktoren</h3></span>
        <span v-if="page === 3"><h3>Alle Daten</h3></span>
        <span v-if="page === 4"><h3>Datenqualität</h3></span>
        <div class="pager-container">
          <div class="pager">
            <button @click="goLeft">
              <font-awesome-icon :icon="['fas', 'angle-left']" />
            </button>
            <button @click="page = 1" :class="{ highlighted: page === 1 }">
              1
            </button>
            <button @click="page = 2" :class="{ highlighted: page === 2 }">
              2
            </button>
            <button @click="page = 3" :class="{ highlighted: page === 3 }">
              3
            </button>
            <button @click="page = 4" :class="{ highlighted: page === 4 }">
              4
            </button>
            <button @click="goRight">
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </button>
          </div>
        </div>
        <button class="close-btn" @click="$emit('closePopup')">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
      <hr />
      <div class="title-container">
        <div class="title-row">
          <span>
            Betrieb {{ getEntryById(contentID).Betrieb }} - Risikobewertung
          </span>
          <RiskScore :value="getEntryById(contentID).Value" />
        </div>
      </div>
      <hr />
      <div class="summary-content" v-if="page === 1 && getEntryById(contentID)">
        <div v-html="getEntryById(contentID).Summary"></div>
      </div>
      <DataWeight
        :content="getEntryById(contentID)"
        v-if="page === 2"
        @goToAllDataClicked="handleGoToAllDataClick"
      />
      <div class="allData-content" v-if="page === 3">
        <div
          v-for="(dataRecord, index) in getEntryById(contentID).AllData"
          :key="index"
        >
          <div>
            <div class="toggler-container">
              <h3 class="allData-toggler" @click="toggle(index)">
                {{ dataRecord.Datenquelle }}
                <font-awesome-icon
                  v-if="openedDropdownIndex !== index"
                  :icon="['fas', 'angle-down']"
                  class="dropdown-icon"
                />
                <font-awesome-icon
                  v-else
                  :icon="['fas', 'angle-up']"
                  class="dropdown-icon"
                />
              </h3>
            </div>
            <div v-if="openedDropdownIndex === index" class="dropdown-allData">
              <hr style="width: 98%; margin-right: 2%; margin-left: 0" />
              <div v-html="dataRecord.DatenquelleSummery"></div>
              <hr style="width: 98%; margin-right: 2%; margin-left: 0" />
              <MiniScans :scansForDropdown="dataRecord.scans" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <DataQuality :content="getEntryById(contentID)" v-if="page === 4" />
    </div>
  </div>
</template>

<script>
import MiniScans from "./modalComponents/MiniScans.vue";
import betriebInfos from "../assets/betriebInfos.json";
import DataWeight from "./DataWeight.vue";
import DataQuality from "./DataQuality.vue";
import RiskScore from "./RiskScore.vue";

export default {
  name: "PopUp",
  components: {
    MiniScans,
    DataQuality,
    DataWeight,
    RiskScore,
  },
  props: {
    contentView: Number,
    contentID: Number,
  },
  data() {
    return {
      page: this.contentView,
      open: false,
      entries: betriebInfos,
      percentage: 60,
      openedDropdownIndex: null,
      isGesamtDropdownOpen: false,
    };
  },
  methods: {
    goLeft() {
      if (this.page != 1) {
        --this.page;
      }
    },
    goRight() {
      if (this.page != 4) {
        ++this.page;
      }
    },
    toggle(index) {
      if (this.openedDropdownIndex === index) {
        this.openedDropdownIndex = null; // Wenn bereits geöffnet, dann schließen
      } else {
        this.openedDropdownIndex = index; // Andernfalls den geklickten Dropdown öffnen
      }
    },
    getEntryById(id) {
      const result = this.entries.find((entry) => entry.ID === id);
      console.log("id:", id, "result:", result);
      return result;
    },
    toggleGesamtBar() {
      // Umschalten des Dropdowns
      this.isGesamtDropdownOpen = !this.isGesamtDropdownOpen;
    },
    handleGoToAllDataClick(index) {
      console.log("handleGoToAllDataClick", index);
      this.page = 3; // Wechselt zur All-Data-Ansicht
      this.openedDropdownIndex = index; // Öffnet den ersten Dropdown
    },
  },
  computed: {
    totalPercentage() {
      let gewichtung = this.getEntryById(this.contentID).Gewichtung;
      return gewichtung.reduce((acc, curr) => acc + curr, 0);
    },
  },
};
</script>

<style scoped>
/* Stile für das Popup */
.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Stellen Sie sicher, dass das Popup über anderen Inhalten liegt */
}

.popup-container {
  width: 70%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  height: 80%;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}
.pager-container {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn-close {
  z-index: 2;
}
.pager {
  display: flex;
  gap: 5px;
}
button {
  border-radius: 100%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: white;
  box-shadow: 0px 0px 14px -8px #000000;
}
.close-btn {
  z-index: 2;
  background-color: #4298fe;
  color: white;
}
button.highlighted {
  background-color: #4298fe;
  color: white;
}
.title-container {
  display: flex;
  justify-content: center;
}
.title-row {
  background-color: #f2f2f2;
  border: solid rgb(197, 197, 197) 2px;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 500;
  scale: 1.1;
}

.summary-content {
  background-color: #f2f2f2;
  border: solid rgb(197, 197, 197) 3px;
  border-radius: 30px;
  text-align: justify;
  padding: 20px;
  margin: 40px;
}

.weight-content {
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
}

.child1 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%; /* oder ein beliebiger Wert, der zu Ihrem Design passt */
  border: none; /* optional, nur zu Illustrationszwecken */
  padding-right: 50px;
  border: solid grey 1px;
}
.child2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%; /* oder ein beliebiger Wert, der zu Ihrem Design passt */
  border: none; /* optional, nur zu Illustrationszwecken */
  padding-left: 50px;
  border: solid grey 1px;
}

.inner {
  display: flex;
  flex-direction: column;
  border: solid grey 1px;
  padding: 30px;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  width: 400px; /* Genauso breit wie der Button */
  border: 1px solid #e0dfdf;
  padding: 10px;
  position: absolute;
  left: 0; /* Linksbündig mit dem Button */
  background-color: white;
  z-index: 1;
  border-radius: 15px; /* Leicht gerundete Ecken */
  max-height: 250px; /* oder eine andere Höhe nach Ihrem Bedarf */
  overflow-y: auto;
}

.toggler {
  cursor: pointer;
  width: 400px;
  border: 1px solid black;
  border-radius: 15px; /* Leicht gerundete Ecken */
  text-align: left; /* Text links ausgerichtet */
  padding-left: 10px; /* Etwas Abstand zum linken Rand */
  padding-right: 25px; /* Platz für das Icon */
  position: relative; /* Dies ermöglicht es, das Icon relativ zum Button zu positionieren */
  margin: 10px 0; /* Etwas Abstand nach oben und unten */
  height: 30px; /* Feste Höhe des Buttons */
}

.toggler:after {
  content: ""; /* HIER MUSS NOCH DER RICHTIGE ZEIGER HIN */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.begrenzung {
  width: 400px;
  height: null;
}

.toggler-container {
  margin: 0px;
}
.allData-toggler {
  cursor: pointer;
  text-align: left; /* Text links ausgerichtet */
  padding-left: 30px; /* Etwas Abstand zum linken Rand */
}

.dropdown-allData {
  cursor: text;
  text-align: left; /* Text links ausgerichtet */
  padding-left: 30px; /* Etwas Abstand zum linken Rand */
}

.dropdown-icon {
  float: right;
  padding-right: 30px; /* Etwas Abstand zum linken Rand */
}

.dropdown-icon-weight {
  float: right;
  padding-right: 0px; /* Etwas Abstand zum rechten Rand */
}

h3 {
  margin-left: 7px;
}
</style>
