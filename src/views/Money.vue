<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="ok">确定</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请输入备注内容">
      </label>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>服饰</li>
        <li>餐饮</li>
        <li>交通</li>
        <li>住房</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money'
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: 3px solid #fafafa;

      &.ok {
        height: 64*3px;
        float: right;
        color: #ffffff;
        background: #62b27a;
      }

      &.zero {
        width: 25*2%;
      }
    }
  }
}

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

.notes {
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

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
      background: #ececec;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
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