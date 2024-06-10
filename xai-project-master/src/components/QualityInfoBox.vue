<template>
  <div class="container-box">
    <div class="header-container" @click="$emit('toggleFold')">
      <div class="color-bar" :style="{ backgroundColor: color }" />
      <div class="header-container">
        <span class="header">{{ header }}</span>
      </div>
      <button>
        <font-awesome-icon
          v-if="!isUnfolded"
          :icon="['fas', 'angle-down']"
          size="lg"
        />
        <font-awesome-icon v-else :icon="['fas', 'angle-up']" size="lg" />
      </button>
    </div>
    <div v-if="isUnfolded" class="text-container">
      <span class="text">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "QualityInfoBox",
  props: {
    header: String,
    color: String,
    isUnfolded: Boolean,
  },
  updated() {
    console.log("updated");
    this.$emit("sizeChange");
  },
};
</script>
<style scoped>
.container-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  background-color: #f2f2f2;
  border-radius: 40px;
  text-align: justify;
  padding: 10px 20px;
}
.color-bar {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
.header-container {
  padding: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.header-container {
  flex-growth: 1;
}
.header {
  font-size: 28px;
  padding-left: 10px;
  font-style: roboto;
}
.text-container {
  width: 100%;
}
button {
  background: none;
  flex-shrink: 0;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
}
</style>
