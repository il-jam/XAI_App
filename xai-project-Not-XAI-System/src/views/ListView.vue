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
    <div class="button-container">
      <button class="invisible-button" @click="swapData1">
        Daten austauschen
      </button>

      <button class="invisible-button" @click="swapData2">
        Daten austauschen
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
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
  setup() {
    const view = ref("list");
    const betriebsDaten = ref([
      {
        ID: "01",
        Betrieb: "Fischhandel Meeresbrise",
        Adresse: "Bremer Str. 45, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Otto Hansen",
        Kontrollrhythmus: "6 Wochen",
        LetzteKontrolle: "19.07.2023",
        Value: "9.5",
      },
      {
        ID: "03",
        Betrieb: "Pizza Perfetto",
        Adresse: "Hauptstraße 1, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Giovanni Bianchi",
        Kontrollrhythmus: "4 Wochen",
        LetzteKontrolle: "02.08.2018",
        Value: "8.9",
      },
      {
        ID: "02",
        Betrieb: "Döner & More",
        Adresse: "Gaardener Straße 15, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Celal Sahin",
        Kontrollrhythmus: "5 Wochen",
        LetzteKontrolle: "07.06.2023",
        Value: "7.2",
      },

      {
        ID: "05",
        Betrieb: "Kiosk 24",
        Adresse: "Gausstraße 23, 24143 Kiel",
        Telefon: "0431 5566778",
        Ansprechperson: "Tomas Popescu",
        Kontrollrhythmus: "12 Wochen",
        LetzteKontrolle: "bisher keine Kontrolle",
        Value: "2.3",
      },
      {
        ID: "04",
        Betrieb: "Bäckerei Kornblume",
        Adresse: "Gaardener Straße 8, 24143 Kiel",
        Telefon: "0431 5678901",
        Ansprechperson: "Johann Müller",
        Kontrollrhythmus: "8 Wochen",
        LetzteKontrolle: "12.08.2023",
        Value: "?",
      },
    ]);
    const fields = [
      "ID",
      "Betrieb",
      "Adresse",
      "Telefon",
      "Ansprechperson",
      "Kontrollrhythmus",
      "LetzteKontrolle",
    ];
    const neuesArray1 = [
      {
        ID: "03",
        Betrieb: "Pizza Perfetto",
        Adresse: "Hauptstraße 1, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Giovanni Bianchi",
        Kontrollrhythmus: "4 Wochen",
        LetzteKontrolle: "02.08.2018",
        Value: "8.9",
      },
      {
        ID: "02",
        Betrieb: "Döner & More",
        Adresse: "Gaardener Straße 15, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Celal Sahin",
        Kontrollrhythmus: "5 Wochen",
        LetzteKontrolle: "07.06.2023",
        Value: "7.2",
      },
      {
        ID: "01",
        Betrieb: "Fischhandel Meeresbrise",
        Adresse: "Bremer Str. 45, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Otto Hansen",
        Kontrollrhythmus: "6 Wochen",
        LetzteKontrolle: "19.07.2023",
        Value: "6.5",
      },
      {
        ID: "05",
        Betrieb: "Kiosk 24",
        Adresse: "Gausstraße 23, 24143 Kiel",
        Telefon: "0431 5566778",
        Ansprechperson: "Tomas Popescu",
        Kontrollrhythmus: "12 Wochen",
        LetzteKontrolle: "bisher keine Kontrolle",
        Value: "2.3",
      },

      {
        ID: "04",
        Betrieb: "Bäckerei Kornblume",
        Adresse: "Gaardener Straße 8, 24143 Kiel",
        Telefon: "0431 5678901",
        Ansprechperson: "Johann Müller",
        Kontrollrhythmus: "8 Wochen",
        LetzteKontrolle: "12.08.2023",
        Value: "?",
      },
    ];

    const neuesArray2 = [
      {
        ID: "03",
        Betrieb: "Pizza Perfetto",
        Adresse: "Hauptstraße 1, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Giovanni Bianchi",
        Kontrollrhythmus: "4 Wochen",
        LetzteKontrolle: "02.08.2018",
        Value: "8.9",
      },
      {
        ID: "02",
        Betrieb: "Döner & More",
        Adresse: "Gaardener Straße 15, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Celal Sahin",
        Kontrollrhythmus: "5 Wochen",
        LetzteKontrolle: "07.06.2023",
        Value: "7.2",
      },
      {
        ID: "01",
        Betrieb: "Fischhandel Meeresbrise",
        Adresse: "Bremer Str. 45, 24143 Kiel",
        Telefon: "0431 12345678",
        Ansprechperson: "Otto Hansen",
        Kontrollrhythmus: "6 Wochen",
        LetzteKontrolle: "19.07.2023",
        Value: "6.5",
      },

      {
        ID: "04",
        Betrieb: "Bäckerei Kornblume",
        Adresse: "Gaardener Straße 8, 24143 Kiel",
        Telefon: "0431 5678901",
        Ansprechperson: "Johann Müller",
        Kontrollrhythmus: "8 Wochen",
        LetzteKontrolle: "12.08.2023",
        Value: "4.7",
      },
      {
        ID: "05",
        Betrieb: "Kiosk 24",
        Adresse: "Gausstraße 23, 24143 Kiel",
        Telefon: "0431 5566778",
        Ansprechperson: "Tomas Popescu",
        Kontrollrhythmus: "12 Wochen",
        LetzteKontrolle: "bisher keine Kontrolle",
        Value: "2.3",
      },
    ];

    const swapData1 = () => {
      betriebsDaten.value = neuesArray1;
    };

    const swapData2 = () => {
      betriebsDaten.value = neuesArray2;
    };

    return { view, betriebsDaten, fields, swapData1, swapData2 };
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
  margin: 0px 20px 20px 20px;
  border: 3px solid rgb(192, 192, 192);
  background-color: white;
}
.listview-container {
  display: block;
}

img {
  width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.invisible-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  flex-grow: 1;
}
</style>
