<template>
  <div class="outer">
    <div class="cont">
      <!-- Das sind die Zeilen, in denen immer eine Bar neben einem Drop down ist. Die erste Zeile ist extra, weil es die Summary Bar ist -->
      <div class="weight-row summary-row">
        <StackedBarChart :entryData="content" />
        <!-- "content" ist ein prop, dass ich aus Popup.vue übergebe -->
        <DropDown
          @toggle-fold="toggleFoldStatus(0)"
          :isUnfolded="foldStatus[0]"
          :header="content.DatensatzGesamt.buttonText"
        >
          <br />
          <p>
            Die Bewertung aller zur Verfügung stehenden Datenquelle durch das
            KI-System ergab eine Risikobewertung von
            <RiskScore
              :value="content.DatensatzGesamt.nochEinRiskValue1"
              style="transform: scale(0.65), font-size: 20px"
            />
          </p>
          <p>
            {{ content.DatensatzGesamt.dropdownText.Text1 }}
          </p>
          <p>
            Für die Risikobewertung des Betriebs "{{
              content.DatensatzGesamt.Betrieb
            }}" konnten folgende Datenquellen herangezoge werden:
          </p>
          <ul>
            <li>
              {{ content.DatensatzGesamt.dropdownText.Text2 }}
            </li>
            <li>
              {{ content.DatensatzGesamt.dropdownText.Text3 }}
            </li>
            <li>
              {{ content.DatensatzGesamt.dropdownText.Text4 }}
            </li>
          </ul>
        </DropDown>
      </div>
      <div
        class="weight-row"
        v-for="(dataRecord, index) in content.Datensaetze"
        :key="index"
      >
        <div>
          <SingleBarChart
            :gewichtung="content.Gewichtung[index]"
            :label="content.Labels[index]"
            :index="index"
          />
        </div>

        <DropDown
          @toggle-fold="handleToggleFold(index)"
          :header="dataRecord.buttonText"
          :isUnfolded="openedDropdownIndex === index"
        >
          <span v-if="openedDropdownIndex === index">
            <div>
              <br />
              <p>
                Die Bewertung der Datenquelle "{{ dataRecord.Datenquelle }}"
                basiert auf der Auswertung der KI.
              </p>
              <p>
                Die Risikobewertung für die spezifische Datenquelle “{{
                  dataRecord.Datenquelle
                }}” ergibt einen Wert von
                <RiskScore
                  :value="content.DatensatzGesamt.nochEinRiskValue1"
                  style="transform: scale(0.65), font-size: 20px"
                />
              </p>
              <p>
                Allgemeine Gewichtung der Datenquelle:
                {{ dataRecord.Standardexpertenwertung }}
              </p>
              <p v-if="dataRecord.QuellenText1 != null">
                {{ dataRecord.QuellenText1 }}
              </p>
              <p>Identifizierte Themen und Informationen:</p>
              <ul>
                <li>{{ dataRecord.QuellenText2 }}</li>
                <li>{{ dataRecord.QuellenText3 }}</li>
                <li>{{ dataRecord.QuellenText4 }}</li>
                <li v-if="dataRecord.QuellenText5 != null">
                  {{ dataRecord.QuellenText5 }}
                </li>
                <li v-if="dataRecord.QuellenText6 != null">
                  {{ dataRecord.QuellenText6 }}
                </li>
                <li v-if="dataRecord.QuellenText7 != null">
                  {{ dataRecord.QuellenText7 }}
                </li>
                <li v-if="dataRecord.QuellenText8 != null">
                  {{ dataRecord.QuellenText8 }}
                </li>
              </ul>
              <button
                class="compute-button"
                @click="emitGoToAllDataEvent(index)"
              >
                zur Datenquelle
              </button>
            </div>
          </span>
        </DropDown>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBarChart from "./modalComponents/SingleBarChart.vue";
import StackedBarChart from "./modalComponents/StackedBarChart.vue";
import RiskScore from "./RiskScore.vue";
import DropDown from "./DropDown.vue";
export default {
  name: "DataWeight",
  props: {
    content: Object,
  },
  components: {
    RiskScore,
    StackedBarChart,
    SingleBarChart,
    DropDown,
  },
  data() {
    return {
      foldStatus: [false, false, false, false, false, false],
      openedDropdownIndex: null,
      isGesamtDropdownOpen: false,
    };
  },
  methods: {
    toggleFoldStatus(i) {
      for (var j = 0; j < this.foldStatus.length; j++) {
        if (j == i) {
          this.foldStatus[j] = !this.foldStatus[j];
        } else {
          this.foldStatus[j] = false;
        }
      }
    },
    toggle(index) {
      if (this.openedDropdownIndex === index) {
        this.openedDropdownIndex = null; // Wenn bereits geöffnet, dann schließen
      } else {
        this.openedDropdownIndex = index; // Andernfalls den geklickten Dropdown öffnen
      }
    },
    toggleGesamtBar() {
      // Umschalten des Dropdowns
      this.isGesamtDropdownOpen = !this.isGesamtDropdownOpen;
    },
    handleToggleFold(index) {
      if (this.openedDropdownIndex === index) {
        this.openedDropdownIndex = null; // Wenn bereits geöffnet, dann schließen
      } else {
        this.openedDropdownIndex = index; // Andernfalls den geklickten Dropdown öffnen
      }
    },
    emitGoToAllDataEvent(index) {
      this.$emit("goToAllDataClicked", index);
      console.log("emitGoToAllDataEvent", index);
    },
  },
};
</script>

<style scoped>
.outer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.cont {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.weight-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.compute-button {
  border: none;
  border-radius: 20px;
  width: 150px;
  text-decoration: none;
  color: white;
  background-color: #4298fe;
  padding: 10px; /* Gibt dem Button etwas Platz um den Text herum */
  font-size: 16px; /* Schriftgröße 16px */
  font-weight: bold;
  margin: 5px 5px 5px 5px; /* ich schränke den button hier gerade oben und unten ein, wenn margin weg, dann wird button riesig, warum?*/
}
</style>
