<template>
  <form class="search-form">
    <input type="text" placeholder="Search..." @input="search" />
  </form>
</template>

<script setup>
const search = (event) => {
  const query = event.target.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    let found = false;
    columns.forEach((column) => {
      if (column.innerText.toLowerCase().includes(query)) {
        found = true;
      }
    });
    if (found) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
};
</script>

<style scoped>
.search-form {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
