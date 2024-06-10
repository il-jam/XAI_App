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
  width: 150px; /* Breite des quadratischen Buttons */
  height: 50px; /* Höhe des quadratischen Buttons */
  color: rgb(87, 87, 87); /* Graue Textfarbe */
  display: block; /* Damit der Button block-level ist und sich an das nächste Element anlehnt */
}
.active {
  background-color: white !important;
  border: 3px solid rgb(197, 197, 197) !important; /* Grauer Rand oben */
  border-bottom: none !important; /* Kein Rand unten */
}
</style>
