<template>
  <div class="dropdown-container">
    <div class="btn-row d-flex">
      <button
        class="btn-left"
        :class="{ 'btn-left-active': hover }"
        @click="$emit('openPopup', 1, contentID)"
      >
        Erklärung
      </button>

      <button
        :class="{ 'btn-right-active': hover }"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        class="btn-right"
      >
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </button>
    </div>
    <div
      :class="{ hide: !hover, dropdown: hover }"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <a @click="$emit('openPopup', 1, contentID)">Zusammenfassung</a>
      <a @click="$emit('openPopup', 2, contentID)">Gewichtung</a>
      <a @click="$emit('openPopup', 3, contentID)">Rohdaten</a>
      <a @click="$emit('openPopup', 4, contentID)">Datenqualität</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitButtonAlt",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    contentID: Number,
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
.dropdown-container {
  position: relative;
  width: 160px;
}
.btn-row {
  justify-content: end; /* DER HIER MACHT DEN BUTTON RECHTSBÜNDIG */
}
button {
  border: none;
  background-color: rgb(136, 136, 136);
  color: white;
  padding: 5px;
}
button:hover {
  background-color: #4298fe;
}
.btn-left {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-right: solid 1px white;
  padding: 0 10px;
}
.btn-right {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-right: 7px;
}
.btn-left-active {
  flex-grow: 1;
  border-bottom-left-radius: 0;
}
.btn-right-active {
  border-bottom-right-radius: 0;
}
.dropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 10;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgb(136, 136, 136);
  overflow: hidden;
}
.dropdown a {
  color: white !important;
  padding: 5px;
}
.dropdown a:hover {
  background-color: #4298fe;
  cursor: pointer;
}
</style>
