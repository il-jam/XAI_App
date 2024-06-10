<template>
  <div class="table-container">
    <SearchForm></SearchForm>
    <table id="tableComponent" class="table table-striped">
      <thead class="table-head">
        <tr>
          <th v-for="field in fields" :key="field">
            {{ field }}
            <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
          </th>
          <th>Value</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in betriebsDaten" :key="item.ID">
          <td v-for="field in fields" :key="field">{{ item[field] }}</td>
          <td>
            <RiskScore :value="item.Value"></RiskScore>
          </td>
          <td>
            <SplitButtonAlt :contentID="item.ID" @open-popup="openPopup" />
          </td>
        </tr>
      </tbody>
    </table>
    <PopUp
      v-if="isPopUp"
      :content-view="popUpView"
      :contentID="currentContentID"
      @close-popup="isPopUp = false"
    />
  </div>
</template>

<script>
import SearchForm from "./SearchForm.vue";
import RiskScore from "./RiskScore.vue";
import SplitButtonAlt from "./SplitButtonAlt.vue";
import PopUp from "./PopUp.vue";
export default {
  name: "TableComponent",
  components: {
    RiskScore,
    SplitButtonAlt,
    SearchForm,
    PopUp,
  },
  props: {
    //
    betriebsDaten: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
  data() {
    return {
      isPopUp: false,
      popUpView: 0,
      currentContentID: 0,
    };
  },
  methods: {
    openPopup(n, id) {
      this.isPopUp = true;
      this.popUpView = n;
      this.currentContentID = id;
      console.log(id);
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  padding: 50px;
}
.table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
.table-head {
  border-top: 3px solid rgb(197, 197, 197);
  border-bottom: 3px solid rgb(197, 197, 197);
}
.table th,
.table td {
  border: none;
}

td {
  vertical-align: middle !important;
}

.table td {
  border: none;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
