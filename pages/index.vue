<template>
  <div>
    <Hero />
    <Counter />
    <Jumbotron :batch="nextBatch"/>
    <Donation />
    <Gallery />
  </div>
</template>

<script>
import moment from "moment"
import Hero from "../components/index/Hero"
import Counter from "../components/index/Counter"
import Jumbotron from "../components/index/Jumbotron"
import Donation from "../components/index/Donation"
import Gallery from "../components/index/Gallery";
import config from "../plugins/google-sheets"

export default {
  name: 'IndexPage',
  components: {
    Hero,
    Counter,
    Jumbotron,
    Donation,
    Gallery
  },
  data() {
    return {
      batches: null,
    }
  },
  computed: {
    nextBatch() {
      return (this.batches || []).filter((item) => item.is_done === false)[0]
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // eslint-disable-next-line camelcase
        const url_endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${config.id}/?key=${config.api_key}&includeGridData=true`;
        const res = await fetch(url_endpoint);
        const { sheets } = await res.json();

        const batchSheet = sheets[0];
        batchSheet.data[0].rowData.shift(); // Remove index pertama dari sheet batch
        const rowData = batchSheet.data[0].rowData;

        this.batches = rowData.map(item => {
          const { values } = item;
          const _id = parseInt(values[0].formattedValue);
          let isDoneCheck = values[3].formattedValue;
          if (isDoneCheck === '1') {
            isDoneCheck = true;
          } else {
            isDoneCheck = false;
          }
          const data = {
            id: _id,
            batch_name: values[1].formattedValue,
            date_batch: moment(values[2].formattedValue, "DDMMYYYY").format('DD MM YYYY'),
            is_done: isDoneCheck
          }
          return data;
        });

        console.log(this.batches);
      } catch(err) {
        alert(err)
      }
    },
  }
}
</script>
