<template>
  <div :style="{ backgroundColor: color }">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      if (this.value < 1) {
        return "#ffe81c";
      } else if (this.value < 2) {
        return "#fdd31b";
      } else if (this.value < 3) {
        return "#fbbd1a";
      } else if (this.value < 4) {
        return "#faa819";
      } else if (this.value < 5) {
        return "#f89318";
      } else if (this.value < 6) {
        return "#f67e18";
      } else if (this.value < 7) {
        return "#f46817";
      } else if (this.value < 8) {
        return "#f25316";
      } else if (this.value < 9) {
        return "#f13e15";
      } else if (this.value < 10) {
        return "#ef2814";
      } else {
        return "#999999";
      }
    },
  },
};
</script>

<style scoped>
div {
  width: 60px;
  display: inline-block;
  padding: 0.3rem;
  border-radius: 1.2rem;
  color: black;
  font-weight: bold;
  font-size: medium;
  text-align: center;
  scale: 1.05;
  margin-left: 5px;
}
</style>
