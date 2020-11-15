<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  name: 'Types',
  props: ['xxx'],
  data() {
    return {
      type: '-' // '-'表示支出 '+'表示收入
    }
  },
  mounted() {
    console.log(this.xxx)
  },
  methods: {
    selectType(type) { // type 只能是 '-' 和 '+' 中的一个
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown')
      }
      this.type = type
    }
  }
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