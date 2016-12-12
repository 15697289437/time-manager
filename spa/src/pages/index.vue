<template>
    <div>
        <div>this is template body</div>
    </div>
</template>
<style>

</style>
<script>
    export default{
      data() {
        return {
          msg: 'hello vue'
        };
      },
      mounted() {
        console.log(this.$store, 123);
      }
    };
</script>
