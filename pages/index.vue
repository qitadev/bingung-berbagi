<template>
  <div>
    <Hero />
    <Counter />
    <Jumbotron :batch="nextBatch"/>
    <Donation :batches="batches" />
    <Gallery />
    <Contact />
  </div>
</template>

<script>
import Hero from "../components/index/Hero"
import Counter from "../components/index/Counter"
import Jumbotron from "../components/index/Jumbotron"
import Donation from "../components/index/Donation"
import Gallery from "../components/index/Gallery"
import Contact from "../components/index/Contact";

export default {
  name: 'IndexPage',
  components: {
    Hero,
    Counter,
    Jumbotron,
    Donation,
    Gallery,
    Contact
  },
  data() {
    return {
      batches: [],
    }
  },
  async fetch() {
    const batches = await this.$getSheetData(0);
    this.batches = batches;
  },
  computed: {
    nextBatch() {
      return (this.batches || []).filter((item) => item.is_done === false)
        .sort((a,b) => new Date(b.date_batch) - new Date(a.date_batch))[0]
    }
  },
}
</script>
