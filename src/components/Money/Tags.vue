<template>
  <div class="tags">
    <div class="new">
      <router-link to="/category">
        <button>添加标签</button>
      </router-link>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
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
      height: 36px;
      line-height: 36px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 16px;

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
      color: #191919;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>