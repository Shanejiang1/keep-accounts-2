<template>
  <Layout class="back">
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/Category/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

const map: { [key: string]: string } = {
  'tag name duplicated': '标签名重复'
};

@Component({
  components: {Button}
})
export default class Category extends Vue {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
  }

  createTag() {
    const name = window.prompt('请填写标签名');
    if (!name) {return window.alert('标签名不能为空');}
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message] || '未知错误');
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  background: #fafafa;
}

.tags {
  background: #ffffff;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;

    svg {
      width: 16px;
      height: 16px;
      color: #171717;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #62b27a;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>