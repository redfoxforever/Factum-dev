<template>
  <Nav/>

  <!-- <Header/>

  <main class="main">
    <Catalog/>

    <WhyProfitable/>

    <Stages/>

    <Tariffs/>

    <Messengers/>

    <AboutUs/>

    <Team/>

    <Risks/>

    <VideoRates/>

    <Rates/>

    <Contact/>
  </main>

  <Footer/> -->
  
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Catalog from '@/components/Catalog.vue'
import WhyProfitable from '@/components/WhyProfitable.vue'
import Team from '@/components/Team.vue'
import Stages from '@/components/Stages.vue'
import AboutUs from '@/components/AboutUs.vue'
import Risks from '@/components/Risks.vue'
import Messengers from '@/components/Messengers.vue'
import Tariffs from '@/components/Tariffs.vue'
import VideoRates from '@/components/VideoRates.vue'
import Rates from '@/components/Rates.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Header,
    Catalog,
    WhyProfitable,
    Team,
    Stages,
    AboutUs,
    Risks,
    Messengers,
    Tariffs,
    VideoRates,
    Rates,
    Contact,
    Footer
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 150px;
}

</style>
