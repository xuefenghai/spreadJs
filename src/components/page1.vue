
<template>
  <div>
      <gc-spread-sheets :hostClass='hostClass'>
        <gc-worksheet :autoGenerateColumns = 'autoGenerateColumns'>
          <gc-column :width="width" :visible = 'visible'  :resizable = 'resizable'></gc-column>
        </gc-worksheet>
      </gc-spread-sheets>
  </div>
</template>
<script>
  import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
  import  '@grapecity/spread-sheets-vue'
  export default {
    data(){
      return {
        hostClass:'spread-host',
        autoGenerateColumns:false,
        width:300,
        visible:true,
        resizable:true,
      }
    },
    computed:{
    }
  }
</script>
<style scoped>
    .spread-host {
        width: 100%;
        height: 600px;
    }
</style>
