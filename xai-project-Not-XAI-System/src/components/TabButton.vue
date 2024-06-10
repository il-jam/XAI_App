<template>
  <div>
    <button
      @click="$emit('switchTab', id)"
      class="custom-button"
      :class="{ active: active }"
    >
      <div v-if="id == 'list'">
        <font-awesome-icon :icon="['fas', 'rectangle-list']" />
        LISTE
      </div>
      <div v-if="id == 'map'">
        <font-awesome-icon :icon="['fas', 'map']" />
        KARTE
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "TabButton",
  props: {
    id: String,
    active: Boolean,
  },
};
</script>

<style scoped>
.custom-button {
  border: none;
  background-color: #b9b9b9;
  width: 150px;
  height: 50px;
  color: rgb(87, 87, 87);
  display: block;
}
.active {
  background-color: white !important;
  border: 3px solid rgb(197, 197, 197) !important;
  border-bottom: none !important;
}
</style>
