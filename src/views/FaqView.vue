<template>
  <section class="section-padding pt-2 horizontal-accordion bg-light-gray content-full-height">
    <div class="container">
      <div class="row justify-content-center">
        <h3 class="font-weight-bold">FAQ</h3>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-xl-6 col-lg-6">
          <div class="rounded shadow p-30 pt-4 pb-4 bg-white" style="border-radius: 1rem !important;">
            <a class="h4" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              How does STFIL work?
            </a>
            <div class="collapse" id="collapseExample">
              <div class="card pt-3 border-0 text-black-800">
                When staking with STFIL, users receive stFIL tokens which are issued 1:1 to their initial stake. stFIL balances can be used like regular FIL to earn and lending rewards, and are updated on a daily basis to reflect your FIL staking rewards. Note that there are no lock-ups or minimum deposits when staking with STFIL.
              </div>
            </div>
          </div>

          <div class="rounded shadow p-30 pt-4 pb-4 bg-white mt-3" style="border-radius: 1rem !important;">
            <a class="h4" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              What is liquid staking?
            </a>
            <div class="collapse" id="collapseExample2">
              <div class="card pt-3 border-0 text-black-800">
                Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking infrastructure. Users can deposit tokens and receive tradable liquid tokens in return. The DAO-controlled smart contract stakes these tokens using elected staking providers. As users funds are controlled by the DAO, staking providers never have direct access to the users' assets.
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
  name: 'FaqView'
}
</script>

<style scoped>

</style>
