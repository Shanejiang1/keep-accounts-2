<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)" @click="select(item)">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string; value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }


  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #f1f1f1;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    color: #a9a9a9;
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      color: #ffffff;
      background: #62b27a;
    }
  }
}
</style>