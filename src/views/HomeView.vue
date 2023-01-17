<template>
  <section class="section-padding pt-0 horizontal-accordion bg-light-gray content-full-height">
    <div class="container">
      <div class="row justify-content-center flex-column align-content-center align-items-center">
        <h3 class="fw-extra-bold fs-24" style="z-index: 1">Stake FIL</h3>
        <span class="fw-medium fs-18 fs-sm-14" style="z-index: 1">Stake FIL and receive stFIL while staking.</span>
      </div>

      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-xl-5 col-lg-5">
          <SlideTabs @select="selectTab" ref="slideTabs"></SlideTabs>
        </div>
      </div>

      <div class="row justify-content-center" v-if="isConnected">
        <div class="col-xl-5 col-lg-5 text-white ">
          <div class="d-flex align-items-center" style="background: linear-gradient(52.01deg, rgb(40, 20, 74) 0%, rgb(81, 42, 150) 100%);
             margin-bottom: -30px; padding: 30px 0 50px 0;border-top-left-radius: 1rem;border-top-right-radius: 1rem">
            <div v-if="tabIndex === 0" class="col-7 col-md-7 p-0 pl-4">
              <div class="fs-7">Available to stake</div>
              <div class="fs-5 font-weight-bold">{{ balance ? parseFloat(balance.formatted).toFixed(6) || 0 : 0 }} FIL
              </div>
            </div>
            <div v-if="tabIndex !== 0" class="col-7 col-md-7 p-0 pl-4">
              <div class="fs-7">Staked amount</div>
              <div class="fs-5 font-weight-bold">{{ 0.0 }} stFIL</div>
            </div>
            <div class="col-5 col-md-5 p-0 text-right" style="padding-right: 30px!important;">
              <div class="p-1 pl-2 pr-3 d-inline-flex"
                   data-toggle="modal" data-target="#exampleModal"
                   style="cursor: pointer; border-radius: 50px;background-color: rgba(0, 0, 0, 0.2)">
                <div class="ml-1 text-nowrap">
                <span>
                 <img style="border-radius: 100%; width: 1.5rem;" src="@/assets/images/avatar/default.webp" alt="">
                </span>
                  <span class="ml-2 fs-8">{{ simpleAddress }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-2" v-if="tabIndex === 0">
        <div class="col-xl-5 col-lg-5">
          <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">
            <div class="form-group mb-30">
              <div class="position-relative">
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="left: 0;z-index: 100; width: 4rem; ">
                  <div style="width: 1.8rem;">
                    <img src="@/assets/images/filecoin-logo.svg" alt="">
                  </div>
                </div>
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="right: 0;width: 6rem;">
                  <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">MAX</button>
                </div>
                <input class="form-control shadow-none"
                       v-model="data.stfil.receive"
                       style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;border-color: #101B5233"
                       type="number" placeholder="0.00" autocomplete="off" id="fname" required=""/>
              </div>
            </div>

            <div class="text-black-600">
              <div class="row">
                <div class="col-6 text-left fw-medium fs-14">You will receive</div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">{{ data.stfil.receive || 0 }} stFIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left fw-medium fs-14">Exchange rate</div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">1 FIL = 1 stFIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left fw-medium fs-14">Transaction cost</div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">$0</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left fw-medium fs-14 d-flex align-items-center">
                  <div>
                    Reward fee
                  </div>
                  <div class="w-class">
                    <img src="@/assets/images/icons/w.png"
                         class=""
                         style="cursor:pointer;width: 18px;height: 18px;margin-left: 10px;" alt="">
                  </div>
                </div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">10%</div>
              </div>
              <div class="mt-4">
                <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">Connect
                  Wallet
                  {{
                    isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                  }}
                </button>
                <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="stake">STAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-2" v-if="tabIndex === 1">
        <div class="col-xl-5 col-lg-5">
          <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">

            <div class="alert alert-warning fs-12 fw-medium"
                 style="color: #9E6900!important;background-color: #FFF5D6!important;border-color: #FFEEBA!important;">
              Default stFIL unstaking period takes around 3-4 days (80 epochs) to process. After that you can <span
                style="color: #3A9CFF;cursor: pointer" @click="claim">claim</span> your rewards in Claim tab
            </div>

            <div class="form-group mb-30">
              <div class="position-relative">
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="left: 0;z-index: 100; width: 4rem; ">
                  <div style="width: 1.8rem;">
                    <img src="@/assets/images/stfil-logo.svg" style="width: 29px;height: 29px" alt="">
                  </div>
                </div>
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="right: 0;width: 6rem;">
                  <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">MAX</button>
                </div>
                <input class="form-control shadow-none"
                       v-model="data.fil.receive"
                       style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;"
                       type="number" placeholder="0.00" autocomplete="off" id="fname2" required=""/>
              </div>
            </div>

            <div class="text-black-600">
              <div class="row">
                <div class="col-6 text-left fw-medium fs-14">You will receive</div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">{{ data.fil.receive || 0 }} FIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left fw-medium fs-14">Exchange rate</div>
                <div class="col-6 text-right fw-medium fs-14 opacity-08">1 stFIL = 1 FIL</div>
              </div>
              <div class="mt-4">
                <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">Connect
                  Wallet
                  {{
                    isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                  }}
                </button>
                <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="stake">UNSTAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-2" v-if="tabIndex === 2">
        <div class="col-xl-5 col-lg-5">
          <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">

            <div class="alert alert-warning fs-12"
                 style="color: #9E6900!important;background-color: #FFF5D6!important;border-color: #FFEEBA!important;">
              You will be able to claim your rewards after the withdraw request has been processed. To <span
                style="color: #3A9CFF;cursor: pointer" @click="unstake">unstake</span> your amount go to Unstake tab
            </div>

            <div class="form-group mb-30">
              <div class="d-flex p-3 bg-light-gray" style="border-radius: 5px;">
                <div class="col-6 p-0">
                  <div class="fw-medium fs-14 ">Total claimable rewards</div>
                  <div class="fw-medium fs-14 opacity-08">0.0 FIL</div>
                </div>
                <div class="col-6 p-0">
                  <div class="fw-medium fs-14 ">Pending amount</div>
                  <div class="fw-medium fs-14 opacity-08">0.0 FIL</div>
                </div>
              </div>
            </div>

            <div class="text-black-600">
              <div class="mt-4">
                <button v-if="!isConnected" class="btn btn-primary w-100 fw-medium fs-14" type="submit"
                        @click="connectWallet">Connect
                  Wallet
                  {{
                    isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                  }}
                </button>
                <button v-if="isConnected" class="btn btn-primary w-100 fw-medium fs-14" type="submit" @click="stake">
                  CLAIM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4 flex-column align-content-center">
        <div class="col-xl-5 col-lg-5 text-center">
          <h5 class="fw-extra-bold fs-18">STFIL statistics</h5>
        </div>
        <div class="col-xl-5 col-lg-5 mt-2">
          <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">

            <div class="text-black-600">
              <div class="row">
                <div class="col-7 text-left fw-medium fs-14">Annual percentage rate</div>
                <div class="col-5 text-right fw-medium fs-14 opacity-08">15%</div>
              </div>
              <div class="row mt-3">
                <div class="col-7 text-left fw-medium fs-14">Total staked with STFIL</div>
                <div class="col-5 text-right fw-medium fs-14 opacity-08">4,799,202.205 FIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-7 text-left fw-medium fs-14">Stakers</div>
                <div class="col-5 text-right fw-medium fs-14 opacity-08">138041</div>
              </div>
              <div class="row mt-3">
                <div class="col-7 text-left fw-medium fs-14">stFIL market cap</div>
                <div class="col-5 text-right fw-medium fs-14 opacity-08">$6,285,336,337</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import {useAccount, useBalance, useConnect} from "vagmi";
import SlideTabs from '@/components/SlideTabs'

export default {
  name: 'HomeView',
  components: {SlideTabs},
  data() {
    return {
      tabIndex: 0,
      connect: undefined,
      connectors: [],
      isConnecting: false,
      pendingConnector: undefined,
      activeConnector: undefined,
      address: undefined,
      isConnected: undefined,
      balance: undefined,
      data: {
        fil: {
          receive: ''
        },
        stfil: {
          receive: ''
        }
      }
    }
  },
  created() {
    const {
      connect,
      connectors,
      isConnecting,
      pendingConnector,
      activeConnector
    } = useConnect();
    this.connect = connect
    this.connectors = connectors
    this.isConnecting = isConnecting
    this.pendingConnector = pendingConnector
    this.activeConnector = activeConnector
    const {address, isConnected} = useAccount();
    this.address = address
    this.isConnected = isConnected

    const {data: balance} = useBalance(
        {
          addressOrName: address
        })
    this.balance = balance
  },
  methods: {
    connectWallet() {
      if (this.isConnecting && this.pendingConnector && this.connectors[0].id === this.pendingConnector?.id) {
        return
      }
      this.connect(this.connectors[0])
    },
    stake() {
    },
    selectTab(v) {
      this.tabIndex = v
    },
    claim(){
      this.$refs.slideTabs.changeTab(3)
    },
    unstake(){
      this.$refs.slideTabs.changeTab(2)
    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 2)
    }
  }
}
</script>
