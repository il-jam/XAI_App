<template>
  <div>
    <div v-for="scan in scansForDropdown" :key="scan.id">
      <div class="image-align">
        <img
          class="thumbnail"
          :src="require(`../../assets/Scans/${scan.imageSrc}`)"
          @click="openModal(scan)"
          alt="Scan can't be displayed"
        />
      </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>

        <img
          :src="require(`../../assets/Scans/${selectedScan.imageSrc}`)"
          alt="Selected Scan"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scansForDropdown: Array,
  },
  data() {
    return {
      showModal: false,
      selectedScan: null,
    };
  },
  methods: {
    openModal(scan) {
      this.selectedScan = scan;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedScan = null;
    },
  },
};
</script>

<style scoped>
.thumbnail {
  width: 100px;
  cursor: pointer;
  transition: all 0.3s;
  border: 3px solid grey;
}

.thumbnail:hover {
  border: 3px solid #4298fe;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 900px;
  height: auto;
  position: relative;
}

button {
  border-radius: 100%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: white;
  box-shadow: 0px 0px 14px -8px #000000;
}
.close-btn {
  z-index: 2;
  background-color: #4298fe;
  color: white;
  position: absolute;
  right: 30px;
  top: 30px;
}

.image-align {
  display: flex;
  justify-content: flex-start;
  margin: 10px;
}
</style>
