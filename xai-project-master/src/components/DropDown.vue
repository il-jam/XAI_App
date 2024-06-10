<template>
  <div class="container-box">
    <div class="header-container" @click="$emit('toggleFold')">
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
  name: "DropDown",
  props: {
    header: String,
    isUnfolded: Boolean,
  },
};
</script>
<style scoped>
.container-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: max-content;
  background-color: #f2f2f2;
  border-radius: 30px;
  text-align: justify;
  padding: 10px 20px;
}
.header-container {
  padding: 5px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.header-container {
  flex-growth: 1;
}
.header {
  font-size: 1.4em;
  padding-left: 10px;
}
.text-container {
  width: 100%;
}

button {
  flex-shrink: 0;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  background: none;
}
</style>
