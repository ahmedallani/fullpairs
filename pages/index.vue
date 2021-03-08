<template>
  <div>
    <div class="bg-gray-100  flex text-center p-1">
      <div
        v-for="(range, indexR) in ranges"
        :key="indexR"
        class="flex flex-col min-h-screen w-1/3 my-1 mx-3 items-center justify-around"
      >
        <div
          v-for="(table, index) in range"
          :key="index"
          class="bg-white  border-2 border-gray-300 rounded-md flex flex flex-col items-center justify-around p-1 my-2 h-1/3 w-full h-full"
        >
          <div class="w-full text-left">{{ indexR * 3 + index + 1 }}</div>
          <div
            v-for="(pair, i) in table"
            :key="i"
            class="w-11/12 flex rounded-md flex-wrap justify-around p-1 m-1  bg-gray-100 border-2 border-gray-400"
          >
            <div>{{ pair[0] }}</div>
            <img :src="icons.handshake" />
            <div>{{ pair[1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pairs from "~/data/index.js";
export default {
  data() {
    return {
      pairs,
      icons: {
        handshake:
          "https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f91d.png"
      }
    };
  },
  computed: {
    tables: function() {
      let arr = [];
      let i = 0;
      let ln = this.pairs.length;
      while (i < ln - 2) {
        arr.push([this.pairs[i], this.pairs[i + 1]]);
        i += 2;
      }
      if (ln % 2 === 1) {
        arr.push([this.pairs[ln - 1]]);
      }
      console.log(this.pairs, ln);
      return arr;
    },
    ranges: function() {
      let arr = [];
      for (let i = 0; i < this.tables.length; i += 3) {
        arr.push([this.tables[i], this.tables[i + 1], this.tables[i + 2]]);
      }
      return arr;
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
