<template>
  <Layout class="back">
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">
        编辑标签
      </span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <FormItem :value="tag.name" field-name="标签名" placeholder="请填写标签名"></FormItem>
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditCategory extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  background: #fafafa;
}

.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }

  > .leftIcon {
    width: 20px;
    height: 20px;
  }

  > .rightIcon {
    width: 20px;
    height: 20px;
  }
}

.from-wrapper {
  background: #ffffff;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>