<template>
  <div class="tags">
    <div class="new">
      <router-link to="/category" class="item" active-class="selected">
        <Icon name="category"></Icon>
        <button>编辑标签</button>
      </router-link>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  // create() {
  //   const name = window.prompt('请填写标签名');
  //   if (name === '') {
  //     window.alert('标签名不能为空');
  //   } else if (this.dataSource) {
  //     this.$emit('update:dataSource', [...this.dataSource, name]);
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      color: #808080;
      background: #ececec;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        color: #ffffff;
        background: #62b27a;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #333333;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>