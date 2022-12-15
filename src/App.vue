<template>
  <div class="position-relative" style="min-height: 100vh">
    <img alt="" src="@/assets/images/bg.jpg" width="100%" height="100%" class="position-absolute" loading="lazy" style="color:transparent">
    <div class="preloader position-fixed d-flex align-items-center justify-content-center">
      <div class="block">
        <div class="loader-image mb-20">
          <img src="@/assets/images/preloader.png" alt="">
        </div>
        <h2 class="loader-text text-uppercase">
          <span class="h3 font-weight-light mb-1">Welcome to</span>
          <span class="font-weight-bold">STFIL STAKE</span>
        </h2>
      </div>
    </div>
    <i-header/>
    <router-view/>
    <i-footer></i-footer>
  </div>
</template>
<script>
import IHeader from '@/components/header/IHeader'
import IFooter from '@/components/footer/IFooter'

export default {
  name: 'App',
  components: {
    IHeader,
    IFooter
  }
}
</script>
<style lang="scss">
body {
}
</style>

