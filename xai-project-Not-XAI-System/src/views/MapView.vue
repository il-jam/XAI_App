<template>
  <div>
    <h1>Map Page</h1>

    <button @click="navigateToList">Go to List</button>
  </div>
</template>

<script>
export default {
  name: "Map-View",
  methods: {
    navigateToList() {
      this.$router.push("/list");
    },
  },
};
</script>
