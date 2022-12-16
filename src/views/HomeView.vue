<template>
  <section class="section-padding pt-2 horizontal-accordion bg-light-gray content-full-height">
    <div class="container">
      <div class="row justify-content-center flex-column align-content-center align-items-center">
        <h3 class="font-weight-bold text-black-400" style="z-index: 1">Stake FIL</h3>
        <span class="text-black-600" style="z-index: 1">Stake Matic and receive stMatic while staking.</span>
      </div>

      <div class="row justify-content-center mt-3 mb-3">
        <SlideTabs @select="selectTab"></SlideTabs>
      </div>

      <div class="row justify-content-center" style="margin: 16px;">
        <div class="col-xl-6 col-lg-6 row text-white"
             style="background: linear-gradient(52.01deg, rgb(40, 20, 74) 0%, rgb(81, 42, 150) 100%);
             margin-bottom: -30px; padding: 30px 0; border-top-left-radius: 1rem;border-top-right-radius: 1rem">
          <div class="col-6 p-0" style="padding: 0 30px!important;">
            <div>Available to stake</div>
            <div>0.0 STFIL</div>
          </div>
          <div class="col-6 p-0 text-right" style="padding: 0 30px!important;">
            <div class="border p-1 pl-2 pr-2 d-inline-flex" style="cursor: pointer; border-radius: 50px;">
              <div class="ml-1">
              <span>
               <img style="border-radius: 100%; width: 28px;" src="@/assets/images/avatar/default.webp" alt="">
              </span>
                {{ simpleAddress }}
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>

      <div class="row justify-content-center mt-2" v-if="tabIndex === 0">
        <div class="col-xl-6 col-lg-6">
          <div class="rounded shadow p-30 bg-white" style="border-radius: 1rem !important;">
            <div class="form-group mb-30">
              <div class="d-flex justify-content-between">
                <label class="text-black-200 font-weight-600 mb-1" for="fname">Stake FIL</label>
                <label class="text-black-200 font-weight-600 mb-1" for="fname">Balance:
                  {{ balance ? balance.formatted || 0 : 0 }} FIL</label>
              </div>
              <div class="position-relative">
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="left: 0;z-index: 100; width: 4rem; ">
                  <div style="width: 1.8rem;">
                    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                      <circle cx="22" cy="22" r="22" fill="#a855f7"></circle>
                      <path
                          d="M22.4879 5.54686V5.56248C22.5036 5.64058 22.5036 5.7343 22.5036 5.82801V17.0898C22.4879 17.1523 22.4411 17.1679 22.3942 17.1992C22.0662 17.3553 21.7538 17.4959 21.4258 17.6365C20.9728 17.8396 20.5042 18.0582 20.0513 18.2613L18.4112 19.011C17.9582 19.2141 17.5053 19.4171 17.0679 19.6202C16.5368 19.8701 15.9901 20.1044 15.4591 20.3543C15.0061 20.5574 14.5531 20.7761 14.0845 20.9791C13.7097 21.1509 13.3348 21.3071 12.9755 21.4789C12.9443 21.4946 12.9131 21.5102 12.8818 21.5102C12.8662 21.5102 12.8662 21.5102 12.8506 21.4946L13.2723 20.7917C14.0845 19.4484 14.8811 18.1207 15.6934 16.7774C16.5525 15.3404 17.4272 13.9034 18.2862 12.4664C19.0828 11.1387 19.8951 9.81104 20.6917 8.48336C21.2696 7.51494 21.8631 6.54652 22.4411 5.5781C22.4567 5.54686 22.4723 5.53124 22.4723 5.5H22.4879C22.4723 5.51562 22.4879 5.53124 22.4879 5.54686Z"
                          fill="#F3F3F3"></path>
                      <path
                          d="M32.0768 21.4944L32.0924 21.51L29.7963 22.869L22.58 27.1331C22.5488 27.1488 22.5176 27.1644 22.5019 27.18C22.4551 27.18 22.4551 27.1331 22.4551 27.1175V26.9769V17.324C22.4551 17.2771 22.4551 17.2146 22.4707 17.1678C22.4863 17.1053 22.5332 17.1209 22.58 17.1365C22.7831 17.2302 23.0018 17.324 23.2048 17.4177C23.814 17.6988 24.4232 17.98 25.0323 18.2455C25.5634 18.4798 26.0788 18.7297 26.6099 18.964C27.141 19.1983 27.6721 19.4482 28.2031 19.6825C28.6561 19.8856 29.1247 20.1043 29.5777 20.3073C30.0306 20.5104 30.4992 20.7291 30.9522 20.9321C31.3114 21.0883 31.6707 21.2601 32.03 21.4163C32.03 21.4632 32.0456 21.4788 32.0768 21.4944Z"
                          fill="#8A8DA7"></path>
                      <path
                          d="M22.486 36.8802C22.486 36.8958 22.4704 36.9114 22.4704 36.927H22.4547C22.4547 36.8958 22.4235 36.8802 22.4079 36.8489C21.4395 35.49 20.471 34.1155 19.5026 32.7566C18.5186 31.3664 17.5189 29.9607 16.5349 28.5705C15.5821 27.2272 14.6137 25.8683 13.6609 24.525C13.4109 24.1657 13.161 23.8221 12.9111 23.4629C12.8955 23.4316 12.8799 23.416 12.8486 23.3691C12.8955 23.3691 12.9267 23.4004 12.9424 23.416C14.3013 24.2126 15.6446 25.0092 17.0035 25.8058C18.5654 26.7274 20.1118 27.6489 21.6738 28.5705L22.4704 29.0391C22.5016 29.0703 22.5016 29.1016 22.5016 29.1328V36.6615C22.5016 36.7396 22.5016 36.8177 22.486 36.8802Z"
                          fill="#F3F3F3"></path>
                      <path
                          d="M12.833 21.5258V21.5102C13.3328 21.2916 13.817 21.0573 14.3169 20.8386C14.9573 20.5418 15.5977 20.2607 16.2381 19.9639C16.7223 19.7452 17.2221 19.5109 17.7064 19.2922C18.4249 18.9642 19.1277 18.6518 19.8463 18.3238C20.3305 18.1051 20.8147 17.8865 21.3145 17.6522C21.6581 17.496 22.0174 17.3398 22.361 17.1836C22.3923 17.168 22.4391 17.1523 22.4547 17.1211C22.4704 17.1211 22.4704 17.1367 22.4547 17.1523V27.0708C22.4547 27.1177 22.4391 27.1646 22.4704 27.1958C22.4391 27.2427 22.4079 27.1958 22.3923 27.1802C22.2517 27.1021 22.1111 27.024 21.9705 26.9303C18.9559 25.1496 15.9257 23.3534 12.9111 21.5727C12.8955 21.5571 12.8642 21.5415 12.833 21.5258Z"
                          fill="#C5C8D9"></path>
                      <path
                          d="M32.0456 23.3691H32.0612C32.0612 23.4004 32.03 23.4316 32.0143 23.4629C29.1403 27.5084 26.2663 31.5695 23.3923 35.615C23.0955 36.0367 22.7831 36.4584 22.4863 36.8802C22.4707 36.8646 22.4707 36.8489 22.4707 36.8333V36.7396V29.164V29.0235C23.1267 28.633 23.7671 28.2581 24.4232 27.8676C26.9536 26.3681 29.4839 24.8843 31.9987 23.3848C32.0143 23.4004 32.03 23.3848 32.0456 23.3691Z"
                          fill="#C5C8D9"></path>
                      <path
                          d="M22.4707 17.1523V17.1211V17.0274V5.68746C22.4707 5.6406 22.4551 5.60936 22.4863 5.5625C25.6571 10.8263 28.8279 16.0746 31.9831 21.3384C32.0143 21.3853 32.0612 21.4477 32.0768 21.5102C31.8581 21.4321 31.6551 21.3228 31.452 21.2291C31.2021 21.1197 30.9366 20.9948 30.6867 20.8854C30.5305 20.8073 30.3586 20.7448 30.2024 20.6667C29.9369 20.5418 29.6714 20.4325 29.4058 20.3075C29.2496 20.245 29.0934 20.1669 28.9372 20.0888L27.9063 19.6202C27.7345 19.5421 27.5627 19.464 27.3753 19.3859L26.6255 19.0579C26.4693 18.9954 26.3131 18.9173 26.1569 18.8392L25.126 18.3707C24.9542 18.2926 24.7824 18.2145 24.595 18.1364L23.8452 17.8083C23.6734 17.7302 23.5172 17.6521 23.3454 17.574C23.0486 17.4335 22.7518 17.2929 22.4395 17.1679C22.4863 17.1523 22.4707 17.1523 22.4707 17.1523Z"
                          fill="#C5C8D9"></path>
                    </svg>
                  </div>
                </div>
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="right: 0;width: 6rem;">
                  <button type="button" class="btn btn-info btn-sm" style="padding: 4px 15px;">MAX</button>
                </div>
                <input class="form-control shadow-none"
                       style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;"
                       type="number" placeholder="0.00" autocomplete="off" id="fname" required=""/>
              </div>
            </div>

            <div class="text-black-600">
              <div class="row">
                <div class="col-6 text-left">You will receive</div>
                <div class="col-6 text-right">11 stFIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Exchange rate</div>
                <div class="col-6 text-right">1 FIL = 1 stFIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Transaction cost</div>
                <div class="col-6 text-right">$1.50</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Reward fee</div>
                <div class="col-6 text-right">10%</div>
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
        <div class="col-xl-6 col-lg-6">
          <div class="rounded shadow p-30 bg-white" style="border-radius: 1rem !important;">

            <div class="alert alert-warning">
              Default stMATIC unstaking period takes around 3-4 days (80 epochs) to process. After that you can <span
                style="color: #3A9CFF;cursor: pointer">claim</span> your rewards in Claim tab
            </div>

            <div class="form-group mb-30">
              <div class="d-flex justify-content-between">
                <label class="text-black-200 font-weight-600 mb-1" for="fname">Stake FIL</label>
                <label class="text-black-200 font-weight-600 mb-1" for="fname">Balance:
                  {{ balance ? balance.formatted || 0 : 0 }} FIL</label>
              </div>
              <div class="position-relative">
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="left: 0;z-index: 100; width: 4rem; ">
                  <div style="width: 1.8rem;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12 0C18.6271 0 24 5.37288 24 12C24 18.6271 18.6269 24 12 24C5.37312 24 0 18.6286 0 12C0 5.37144 5.37216 0 12 0Z"
                          fill="white"></path>
                      <path
                          d="M15.9842 9.27698C15.8327 9.18968 15.6609 9.14372 15.4861 9.14372C15.3112 9.14372 15.1394 9.18968 14.988 9.27698L12.7025 10.6385L11.1495 11.5264L8.86405 12.8879C8.71256 12.9752 8.54079 13.0212 8.36594 13.0212C8.1911 13.0212 8.01933 12.9752 7.86784 12.8879L6.05119 11.8224C5.90212 11.7334 5.77816 11.6079 5.69102 11.4577C5.60387 11.3075 5.5564 11.1376 5.55307 10.9641V8.8626C5.55018 8.68775 5.59503 8.51543 5.6828 8.36418C5.77058 8.21293 5.89794 8.08849 6.05119 8.00426L7.83854 6.96832C7.99003 6.88102 8.16181 6.83507 8.33666 6.83507C8.51151 6.83507 8.68329 6.88102 8.83478 6.96832L10.6221 8.00426C10.7712 8.09328 10.8951 8.21879 10.9823 8.36896C11.0694 8.51913 11.1169 8.68901 11.1202 8.8626V10.2241L12.6732 9.30657V7.94504C12.6761 7.7702 12.6312 7.59787 12.5434 7.44663C12.4557 7.29538 12.3283 7.17094 12.1751 7.0867L8.86405 5.13325C8.71256 5.04595 8.54079 5 8.36594 5C8.1911 5 8.01933 5.04595 7.86784 5.13325L4.49824 7.08673C4.345 7.17096 4.21763 7.2954 4.12986 7.44664C4.04209 7.59788 3.99724 7.7702 4.00013 7.94504V11.8816C3.99724 12.0564 4.04209 12.2288 4.12986 12.38C4.21763 12.5313 4.345 12.6557 4.49825 12.7399L7.86785 14.6934C8.01933 14.7807 8.19111 14.8267 8.36595 14.8267C8.5408 14.8267 8.71258 14.7807 8.86406 14.6934L11.1495 13.3615L12.7025 12.444L14.988 11.112C15.1395 11.0247 15.3112 10.9788 15.4861 10.9788C15.6609 10.9788 15.8327 11.0247 15.9842 11.112L17.7715 12.148C17.9206 12.237 18.0445 12.3625 18.1317 12.5127C18.2188 12.6628 18.2663 12.8327 18.2696 13.0063V15.1078C18.2725 15.2826 18.2277 15.4549 18.1399 15.6062C18.0521 15.7574 17.9248 15.8819 17.7715 15.9661L15.9842 17.0317C15.8327 17.119 15.6609 17.1649 15.4861 17.1649C15.3112 17.1649 15.1395 17.119 14.988 17.0317L13.2006 15.9957C13.0515 15.9067 12.9276 15.7812 12.8404 15.631C12.7533 15.4809 12.7058 15.311 12.7025 15.1374V13.7759L11.1495 14.6934V16.0549C11.1466 16.2298 11.1915 16.4021 11.2793 16.5533C11.367 16.7046 11.4944 16.829 11.6476 16.9132L15.0172 18.8668C15.1687 18.9541 15.3405 19 15.5153 19C15.6902 19 15.862 18.9541 16.0135 18.8668L19.3831 16.9132C19.5321 16.8242 19.6561 16.6987 19.7432 16.5486C19.8304 16.3984 19.8779 16.2285 19.8812 16.0549V12.1184C19.8841 11.9435 19.8392 11.7712 19.7515 11.62C19.6637 11.4687 19.5363 11.3443 19.3831 11.26L15.9842 9.27698Z"
                          fill="url(#paint0_linear_2_1262)"></path>
                      <defs>
                        <linearGradient id="paint0_linear_2_1262" x1="19.8813" y1="4.99943" x2="2.94646" y2="17.5493"
                                        gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00A3FF"></stop>
                          <stop offset="1" stop-color="#3ADCFF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                     style="right: 0;width: 6rem;">
                  <button type="button" class="btn btn-info btn-sm" style="padding: 4px 15px;">MAX</button>
                </div>
                <input class="form-control shadow-none"
                       style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;"
                       type="number" placeholder="0.00" autocomplete="off" id="fname2" required=""/>
              </div>
            </div>

            <div class="text-black-600">
              <div class="row">
                <div class="col-6 text-left">You will receive</div>
                <div class="col-6 text-right">11 stFIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Exchange rate</div>
                <div class="col-6 text-right">1 FIL = 1 stFIL</div>
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
      <div class="row justify-content-center mt-2" v-if="tabIndex === 2">
        <div class="col-xl-6 col-lg-6">
          <div class="rounded shadow p-30 bg-white" style="border-radius: 1rem !important;">

            <div class="alert alert-warning">
              You will be able to claim your rewards after the withdraw request has been processed. To <span
                style="color: #3A9CFF;cursor: pointer">unstake</span> your amount go to Unstake tab
            </div>

            <div class="form-group mb-30">
              <div class="d-flex p-3 bg-light-gray" style="border-radius: 5px;">
                <div class="col-6">
                  <div class="text-black-800">Total claimable rewards</div>
                  <div class="font-weight-bold fs-5">0.0 MATIC</div>
                </div>
                <div class="col-6">
                  <div class="text-black-800">Pending amount</div>
                  <div class="fs-5">0.0 MATIC</div>
                </div>
              </div>
            </div>

            <div class="text-black-600">
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
      <div class="row justify-content-center mt-4 flex-column align-content-center">
        <div class="col-xl-6 col-lg-6 text-center">
          <h5 class="font-weight-bold text-black-600">STFIL statistics</h5>
        </div>
        <div class="col-xl-6 col-lg-6 mt-2">
          <div class="rounded shadow p-30 bg-white" style="border-radius: 1rem !important;">

            <div class="text-black-600">
              <div class="row">
                <div class="col-6 text-left">Annual percentage rate</div>
                <div class="col-6 text-right">4.6%</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Total staked with STFIL</div>
                <div class="col-6 text-right">4,799,202.205 FIL</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">Stakers</div>
                <div class="col-6 text-right">138041</div>
              </div>
              <div class="row mt-3">
                <div class="col-6 text-left">stFIL market cap</div>
                <div class="col-6 text-right">$6,285,336,337</div>
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
    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 4)
    }
  }
}
</script>
