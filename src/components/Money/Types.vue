<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
.types {
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
      color: #62b27a;
      background: #eef8f2;
    }
  }
}
</style>