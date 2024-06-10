<template>
  <div>
    <nav class="nav-container">
      <div class="center-container">
        <img class="logo" src="../assets/logo.png" alt="Logo" />
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
  align-items: center; /* Vertikal zentrieren */
  height: 80px; /* Höhe des äußeren Containers festlegen */
  padding: 0 25px;
}

.center-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 900px; /* In der Mitte zentrieren */
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
  font-size: 12px; /* Schriftgröße 16px */
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
  font-size: 16px; /* Schriftgröße 16px */
  font-weight: bold;
}

.update-textfeld {
  border-radius: 10px;
  text-align: center; /* Zentriert den Text horizontal */
  color: rgb(117, 116, 116); /* Hellgrauer Text */
  background-color: white; /* Hintergrundfarbe Blau */
  padding: 5px 5px 5px 5px; /* Gibt dem Element etwas Platz um den Text herum */
  cursor: normal; /* Zeigt den Mauszeiger als Zeiger an, um den Button-ähnlichen Effekt zu erzeugen */
  font-size: 15px; /* Schriftgröße 16px */
  font-weight: none; /* Schriftdicke etwas dicker */
  border: 3px solid rgb(197, 197, 197);
  margin-right: 5px;
}

.logo {
  width: 100px; /* Die Breite des Logos einschränken */
  height: 50px; /* Das Seitenverhältnis des Logos beibehalten */
}

.aktualisiert-text {
  font-weight: bold; /* Schriftdicke etwas dicker */
  font-size: 18px;
}

.button-container {
  display: flex; /* Verwendet Flexbox für die horizontale Anordnung */
  justify-content: space-between; /* Platziert die Buttons mit Abstand dazwischen */
  gap: 10px;
  align-items: center;
}
</style>
