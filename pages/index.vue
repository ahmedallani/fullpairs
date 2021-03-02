<template>
  <div class="bg-gray-100 min-h-screen grid grid-cols-3 gap-2 p-2 text-center">
    <div
      v-for="(table, index) in tables"
      :key="index"
      class="bg-white rounded-md flex flex flex-col items-center justify-around p-2"
    >
      <div
        v-for="(pair, i) in table"
        :key="i"
        class="w-11/12 flex rounded-md flex-wrap justify-around p-2 m-2  bg-gray-100"
      >
        <div>{{ pair[0] }}</div>
        <img :src="icons.handshake" />
        <div>{{ pair[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import pairs from "@/data";
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
      while (i < this.pairs.length - 2) {
        arr.push([this.pairs[i], this.pairs[i + 1]]);
        i += 2;
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
