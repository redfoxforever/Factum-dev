<template>
  <Nav/>

  <Header/>

  <main class="main">
    <Catalog/>

    <WhyProfitable/>

    <Stages/>

    <Team/>

  </main>
  
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Catalog from '@/components/Catalog.vue'
import WhyProfitable from '@/components/WhyProfitable.vue'
import Team from '@/components/Team.vue'
import Stages from '@/components/Stages.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Header,
    Catalog,
    WhyProfitable,
    Team,
    Stages
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
