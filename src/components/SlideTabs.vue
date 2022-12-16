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
  --primary-color: #FF3158;
  --secondary-color: #e6eef9;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.slide-tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.4rem;
  border-radius: 99px;
  color: #6d6d6d;
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
  height: 45px;
  width: 150px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  margin: 0;
}

input[type=radio]:checked + label {
  color: var(--primary-color);
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
  height: 45px;
  width: 150px;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .slide-tabs {
    transform: scale(0.8);
  }
}
</style>
