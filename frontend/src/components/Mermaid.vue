<template>
  <div id="app">
    <vue-mermaid-string :value="mermaidString"></vue-mermaid-string>
  </div>
</template>

<script lang="js">
import axios from 'axios';
import VueMermaidString from 'vue-mermaid-string';

export default {
  components: {
    VueMermaidString
  },
  data() {
    return {
      mermaidString: ''
    };
  },
  async created() {
    const response = await axios.get('http://localhost:3000/api/diagram');
    this.mermaidString = response.data.mermaid;
  }
};
</script>
