<template>
  <div class="slide-tabs">
    <input @click="selectTab(0)" type="radio" id="radio-1" name="tabs" checked />
    <label class="slide-tab" for="radio-1">STAKE</label>
    <input @click="selectTab(1)" type="radio" id="radio-2" name="tabs" />
    <label class="slide-tab" for="radio-2">UNSTAKE</label>
    <input @click="selectTab(2)" type="radio" id="radio-3" name="tabs" />
    <label class="slide-tab" for="radio-3">CLAIM</label>
    <span class="slider-glider"></span>
  </div>
</template>

<script>
export default {
  name: "SlideTabs",
  methods: {
    selectTab(v){
      this.$emit("select", v)
    }
  }
}
</script>

<style>
:root {
  --primary-color: #6752F0;
  --secondary-color: #ECEBFF;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.slide-tabs {
  display: flex;
  width: 100%;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 6px 24px 0px rgba(21,42,149,0.12);
  padding: 0.4rem;
  border-radius: 99px;
  color: #101B52;
}
.slide-tabs * {
  z-index: 2;
}

input[type=radio] {
  display: none;
}

.slide-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 33%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  margin: 0;
  opacity: 0.6;
}

input[type=radio]:checked + label {
  color: var(--primary-color);
  opacity: 1 !important;
}
input[type=radio]:checked + label > .notification {
  background-color: var(--primary-color);
  color: #fff;
}

input[id=radio-1]:checked ~ .slider-glider {
  transform: translateX(0);
}

input[id=radio-2]:checked ~ .slider-glider {
  transform: translateX(100%);
}

input[id=radio-3]:checked ~ .slider-glider {
  transform: translateX(200%);
}


.slider-glider {
  position: absolute;
  display: flex;
  height: 35px;
  width: 32.3%;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  /*.slide-tabs {*/
  /*  transform: scale(0.78);*/
  /*}*/
}
</style>
