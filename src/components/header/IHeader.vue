<template>
  <header class="header-nav position-relative">
    <div class="container">
      <nav class="navbar navbar-expand-xl navbar-light px-0">
        <a class="navbar-brand p-0" href="#">
          <img class="img-fluid logo-ad" src="@/assets/images/logo/logo.png">
        </a>

        <button class="navbar-toggler bg-white rounded-0 p-0" type="button" data-toggle="collapse"
                data-target="#navlinks"
                aria-controls="navlinks" aria-expanded="false" aria-label="Toggle navigation">
          <svg class="nav-toggle-icon" viewBox="0 0 100 100" width="40">
            <path class="line top"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
            <path class="line middle" d="m 70,50 h -40"/>
            <path class="line bottom"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/>
          </svg>
        </button>
        <!-- mobile-nav control button -->

        <div class="collapse navbar-collapse" id="navlinks">
          <ul class="navbar-nav ml-auto mr-0 mr-sm-3 mr-lg-3">
            <li class="nav-item" v-for="(menu ,index) in menus" :key="index">
              <a class="nav-link cursor-pointer" @click="checkMenu(menu)">{{ menu.label }}</a>
            </li>

            <li class="nav-link text-left">
              <!-- Language List -->
              <select class="border-0 language-ui" @change="handleCommandLanguage">
                <option v-for="(k, v) in localeDic" :value="v" :key="k" :selected="v === locale">
                  {{ k }}
                </option>
              </select>
            </li>
          </ul>
        </div>

        <!--        <div class="d-flex flex-row justify-content-center" v-if="!address">-->
        <!--          <button class="btn btn-sm btn-outline-primary" data-toggle="modal" @click="connectWallet"-->
        <!--                  data-target="#signup-modal">连接钱包 {{-->
        <!--              isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''-->
        <!--            }}-->
        <!--          </button>-->
        <!--        </div>-->
        <!--        <div class="d-flex flex-row justify-content-center" v-if="address">-->
        <!--          <div class="border p-1 pl-2 pr-2"-->
        <!--               data-toggle="modal" data-target="#exampleModal"-->
        <!--               style="cursor: pointer; border-radius: 50px;background-color: white;">-->
        <!--            <div class="ml-1">-->
        <!--            <span>-->
        <!--                  <img style="border-radius: 100%; width: 28px;" src="@/assets/images/avatar/default.webp" alt="">-->
        <!--                </span>-->
        <!--              <span class="ml-2" style="margin-top: 10px">{{ simpleAddress }}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </nav>
    </div>
  </header>
</template>

<script>
import {useAccount, useConnect} from 'vagmi';

export default {
  name: "IHeader",
  data() {
    return {
      connect: undefined,
      connectors: [],
      isConnecting: false,
      pendingConnector: undefined,
      activeConnector: undefined,
      address: undefined,
      menus: [
        {
          label: this.$t('home'),
          link: '/'
        },
        {
          label: this.$t('faq'),
          link: '/faq'
        },
      ],
      locale: window.localStorage.getItem('locale') || 'en',
      localeDic: {
        'zh': 'Cn',
        'en': 'En'
      }
    }
  },
  watch: {
    activeConnector(val) {
      console.log('val = ', val)
    },
    '$i18n.locale'() {
      this.menus = [
        {
          label: this.$t('home'),
          link: '/'
        },
        {
          label: this.$t('faq'),
          link: '/faq'
        },
      ]
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

    const {address} = useAccount();
    this.address = address
  },
  methods: {
    connectWallet() {
      if (this.isConnecting && this.pendingConnector && this.connectors[0].id === this.pendingConnector?.id) {
        return
      }
      this.connect(this.connectors[0])
    },
    checkMenu(menu) {
      let {link} = menu
      this.$router.push({path: link})
    },
    handleCommandLanguage(language) {
      let val = language.target.value
      this.locale = val
      this.$i18n.locale = val
      window.localStorage.setItem('locale', val)
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

<style scoped>

</style>
