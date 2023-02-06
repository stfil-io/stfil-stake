<template>
  <section class="section-padding pt-2 horizontal-accordion bg-light-gray content-full-height">
    <div class="container">
      <div class="row justify-content-center">
        <h3 class="font-weight-bold">FAQ</h3>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-xl-6 col-lg-6">
          <div class="rounded shadow p-30 pt-4 pb-4 bg-white mb-4" style="border-radius: 1rem !important;" v-for="count in faqNumber" :key="count">
            <a class="h4" data-toggle="collapse" :href="'#collapseExample_' + count" role="button" aria-expanded="false"
               :aria-controls="'#collapseExample_' + count">
              {{ $t('faq_' + count) }}
            </a>
            <div class="collapse" :id="'collapseExample_' + count">
              <div class="card pt-3 border-0 text-black-800">
                {{ $t('faq_' + count + '_content') }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      faqNumber: 5
    }
  }
}
</script>

<style scoped>

</style>
