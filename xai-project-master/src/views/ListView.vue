<template>
  <NavBar />
  <div class="tab-container">
    <TabButton
      :id="'list'"
      :active="view == 'list'"
      @switch-tab="view = 'list'"
    />
    <TabButton :id="'map'" :active="view == 'map'" @switch-tab="view = 'map'" />
  </div>
  <div class="content-container">
    <DateNCompute />
    <hr />
    <div v-if="view == 'list'" class="listview-container">
      <Table :fields="fields" :betriebsDaten="betriebsDaten"></Table>
    </div>
    <div v-if="view == 'map'">
      <img src="@/assets/Kartenansicht_Placeholder.jpg" alt="Map Image" />
    </div>
  </div>
</template>

<script>
// Importing the table component
import TabButton from "../components/TabButton.vue";
import DateNCompute from "../components/DateNCompute.vue";
import NavBar from "../components/NavBar.vue";
import Table from "../components/Table.vue";
export default {
  name: "List-View",
  components: {
    Table,
    NavBar,
    DateNCompute,
    TabButton,
  },
  methods: {
    navigateToMap() {
      this.$router.push("/map");
    },
  },
  data() {
    return {
      view: "list",
    };
  },
  setup() {
    //An array of values for the data
    const betriebsDaten = [
      {
        ID: "01",
        Betrieb: "Pizza Perfetto",
        Adresse: "Hauptstraße 1, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Giovanni Bianchi",
        Kontrollrhythmus: "4 Wochen",
        LetzteKontrolle: "01.01.2001",
        Value: "8.9",
      },
      {
        ID: "03",
        Betrieb: "Fischhandel Meeresbrise",
        Adresse: "Bremer Str. 45, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Otto Hansen",
        Kontrollrhythmus: "6 Wochen",
        LetzteKontrolle: "01.01.2001",
        Value: "5.3",
      },
      {
        ID: "04",
        Betrieb: "Bäckerei Kornblume",
        Adresse: "Gaardener Straße 8, 24143 Kiel",
        Telefon: "0431 5678901",
        Ansprechperson: "Johann Müller",
        Kontrollrhythmus: "8 Wochen",
        LetzteKontrolle: "01.01.2001",
        Value: "4.7",
      },
      {
        ID: "05",
        Betrieb: "Kiosk 24",
        Adresse: "Gausstraße 23, 24143 Kiel",
        Telefon: "0431 5566778",
        Ansprechperson: "Tomas Popescu",
        Kontrollrhythmus: "12 Wochen",
        LetzteKontrolle: "01.01.2001",
        Value: "2.3",
      },
      {
        ID: "02",
        Betrieb: "Döner & More",
        Adresse: "Gaardener Straße 15, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Celal Sahin",
        Kontrollrhythmus: "5 Wochen",
        LetzteKontrolle: "01.01.2001",
        Value: "?",
      },
    ];
    const fields = [
      "ID",
      "Betrieb",
      "Adresse",
      "Telefon",
      "Ansprechperson",
      "Kontrollrhythmus",
      "LetzteKontrolle",
    ];
    return { betriebsDaten, fields };
  },
};
</script>

<style scoped>
hr {
  margin: 0;
}
.tab-container {
  display: flex;
  margin: 30px 0 -3px 30px;
  gap: 2px;
}
.content-container {
  margin: 0px 20px 20px 20px; /* Hier können Sie den Innenabstand anpassen */
  border: 3px solid rgb(192, 192, 192);
  background-color: white;
}
.listview-container {
  display: block;
}

img {
  width: 100%; /* Passt die Breite des Bildes an den Container an */
  height: auto; /* Behält das Seitenverhältnis des Bildes bei */
}
</style>
