<template>
  <div>
    <!-- Your HTML code here -->
  </div>
  <div class="child1">
    <div class="inner">
      <div class="begrenzung">
        <!-- Summierte Prozentleiste -->
        <!-- VLLT SPÄTER DEN STYLE WOANDERS HIN -->
        <StackedBarChart :entryData="content" style="margin-bottom: -30px" />
        <!-- einzelne Prozentleiste -->
        <SingleBarChart :entryData="content" />
      </div>
    </div>
  </div>
  <div class="child2">
    <div class="inner">
      <!-- ein einzelner dropdown button für die gewichtungssumme, da die prozentbalken über die anzahl der items (datenquellen) im json erstellt werden -->
      <div class="dropdown">
        <button class="toggler" @click="toggleGesamtBar()">
          {{ content.DatensatzGesamt.buttonText }}
          <font-awesome-icon
            v-if="!isGesamtDropdownOpen"
            :icon="['fas', 'angle-down']"
            class="dropdown-icon-weight"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'angle-up']"
            class="dropdown-icon-weight"
          />
        </button>
        <div v-if="isGesamtDropdownOpen" class="dropdown-content">
          <p>
            Die Bewertung aller zur Verfügung stehenden Datenquelle durch das
            KI-System ergab eine Risikobewertung von
          </p>
          <RiskScore
            :value="content.DatensatzGesamt.nochEinRiskValue1"
            style="transform: scale(0.6)"
          >
            <!-- Hier können Sie den Inhalt der benutzerdefinierten Komponente hinzufügen -->
          </RiskScore>
          <p>
            Nach Gewichtung der einzelnen Datenquellen mit der
            Standardexpertenwertung ergibt die Berechnung einen
            Gesamtrisikobewertung von
          </p>
          <RiskScore
            :value="content.DatensatzGesamt.nochEinRiskValue2"
            style="transform: scale(0.6)"
          >
            <!-- Hier können Sie den Inhalt der benutzerdefinierten Komponente hinzufügen -->
          </RiskScore>
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
        </div>
      </div>
      <!-- die dropdown button für den stacked percentage chart -->
      <div
        class="dropdown"
        v-for="(dataRecord, index) in content.Datensaetze"
        :key="index"
      >
        <button class="toggler" @click="toggle(index)">
          {{ dataRecord.buttonText }}
          <font-awesome-icon
            v-if="openedDropdownIndex !== index"
            :icon="['fas', 'angle-down']"
            class="dropdown-icon-weight"
          />

          <font-awesome-icon
            v-else
            :icon="['fas', 'angle-up']"
            class="dropdown-icon-weight"
          />
        </button>
        <div v-if="openedDropdownIndex === index" class="dropdown-content">
          <div>
            <p>
              Die Bewertung der Datenquelle "{{ dataRecord.Datenquelle }}"
              basiert auf der Auswertung der KI gewichtet mit der
              Standardexpertenwertung.
            </p>
            <p>
              Ergebnis der Risikobewertung zu Datenquelle “{{
                dataRecord.Datenquelle
              }}” gleich
            </p>
            <RiskScore
              :value="content.Datensaetze[index].IndividualRiskScore"
              style="transform: scale(0.6)"
            >
              <!-- Hier können Sie den Inhalt der benutzerdefinierten Komponente hinzufügen -->
            </RiskScore>
            <p>
              Gewichtung nach Standardexpertenwertung:
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentName",
  data() {
    return {
      // Your data here
    };
  },
  methods: {
    // Your methods here
  },
  computed: {
    // Your computed properties here
  },
  mounted() {
    // Your mounted hook code here
  },
};
</script>

<style>
/* Your CSS code here */
</style>
