<template>
  <Layout class-prefix="layout">
    <NumberPad></NumberPad>
    <Types></Types>
    <Notes></Notes>
    <Tags :data-source="tags"></Tags>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return{
      tags:['服饰','餐饮','交通','住房']
    }
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>

</style>