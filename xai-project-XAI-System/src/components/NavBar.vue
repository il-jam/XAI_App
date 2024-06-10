<template>
  <div>
    <nav class="nav-container">
      <div class="center-container">
        <!--LOGO HIER EINFÜGEN-->
        <!--<img class="logo" src="../assets/logo.png" alt="Logo" />-->
      </div>

      <div class="right-container">
        <div class="button-container">
          <div class="update-textfeld">
            zuletzt aktualisiert
            <br />
            <div class="aktualisiert-text">heute 13:13</div>
          </div>
          <button class="handbuch-button" @click="doNothing">
            <font-awesome-icon :icon="['fas', 'question']" size="lg" />
          </button>
          <button class="profil-button" @click="doNothing">
            <font-awesome-icon :icon="['fas', 'user']" />
            Profil
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<style scoped>
.nav-container {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 25px;
}

.center-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 900px;
}

.right-container {
  display: flex;
  align-items: center; /* WIRD NICHT MITTIG GERÜCKT // Vertikal zentrieren */
}

.handbuch-button {
  border: none;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #4298fe;
  font-size: 12px;
  font-weight: bold;
}

.profil-button {
  border: none;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  background-color: #4298fe;
  font-size: 16px;
  font-weight: bold;
}

.update-textfeld {
  border-radius: 10px;
  text-align: center;
  color: rgb(117, 116, 116);
  background-color: white;
  padding: 5px 5px 5px 5px;
  cursor: normal;
  font-size: 15px;
  border: 3px solid rgb(197, 197, 197);
  margin-right: 5px;
}

.logo {
  width: 100px;
  height: 50px;
}

.aktualisiert-text {
  font-weight: bold;
  font-size: 18px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
</style>
