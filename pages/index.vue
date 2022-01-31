<template>
  <div>
    <Hero :next-batch="nextBatch" />
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
    this.batches = batches.sort((a, b) => b.batch - a.batch);
  },
  computed: {
    nextBatch() {
      if (this.batches.length === 0) return null;
      const nextBatch = this.batches[0].isDone === '1' ? null : this.batches[0];
      return nextBatch;
    }
  },
}
</script>
