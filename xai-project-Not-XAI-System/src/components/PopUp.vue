<template>
  <div class="popup-bg">
    <div class="popup-container">
      <div class="header">
        <span v-if="page === 1"><h3>Zusammenfassung Erklärung</h3></span>
        <span v-if="page === 2"><h3>Gewichtung der Faktoren</h3></span>
        <span v-if="page === 3"><h3>Alle Daten</h3></span>
        <span v-if="page === 4"><h3>Datenqualität</h3></span>
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
import betriebInfos from "../assets/betriebInfos.json";
import DataWeight from "./DataWeight.vue";
import DataQuality from "./DataQuality.vue";
import RiskScore from "./RiskScore.vue";

export default {
  name: "PopUp",
  components: {
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
        this.openedDropdownIndex = null;
      } else {
        this.openedDropdownIndex = index;
      }
    },
    getEntryById(id) {
      const result = this.entries.find((entry) => entry.ID === id);
      console.log("id:", id, "result:", result);
      return result;
    },
    toggleGesamtBar() {
      this.isGesamtDropdownOpen = !this.isGesamtDropdownOpen;
    },
    handleGoToAllDataClick(index) {
      console.log("handleGoToAllDataClick", index);
      this.page = 3;
      this.openedDropdownIndex = index;
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
  z-index: 1000;
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

.toggler-container {
  margin: 0px;
}
.allData-toggler {
  cursor: pointer;
  text-align: left;
  padding-left: 30px;
}

.dropdown-allData {
  cursor: text;
  text-align: left;
  padding-left: 30px;
}

.dropdown-icon {
  float: right;
  padding-right: 30px;
}

h3 {
  margin-left: 7px;
}
</style>
