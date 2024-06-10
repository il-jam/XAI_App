<template>
  <button
    class="all-data-button"
    :class="{ 'btn-left-active': hover }"
    @click="$emit('openPopup', 3, contentID)"
  >
    Alle Daten
  </button>
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
button {
  border: none;
  background-color: rgb(136, 136, 136);
  color: white;
  padding: 0px;
}
button:hover {
  background-color: #4298fe;
}

.btn-left-active {
  flex-grow: 1;
  border-bottom-left-radius: 0;
}

.all-data-button {
  border: none;
  border-radius: 20px;
  width: 150px;
  text-decoration: none;
  color: white;
  background-color: #4298fe;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  margin: 30px 5px 30px 5px;
}
</style>
