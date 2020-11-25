<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></Tabs>
    <div class="chart-wrapper" ref="chartWrapper">
      <Chart class="chart" :options="chartOptions"></Chart>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import Chart from '@/components/Chart.vue';
import _ from 'lodash';
import day from 'dayjs';




@Component({
  components: {Chart, Tabs}
})
export default class Statistics extends Vue {

  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  get keyValueList() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.groupedList, {
        title: dateString
      });
      array.push({
        key: dateString, value: found ? found.total : 0
      });
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }

  get chartOptions() {
    const keys = this.keyValueList.map(item => item.key);
    const values = this.keyValueList.map(item => item.value);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        show: true,
        type: 'category',
        data: keys,
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#191919'}},
        axisLabel: {
          formatter: function (value: string, index: number) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        tooltip: {show: false},
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        type: 'bar',
        barCategoryGap: '80%',
        itemStyle: {color: '#62b27a'},
        data: values,
      }],
    };
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {return [];}
    type Result = { title: string; total?: number; items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
.echarts {
  max-width: 100%;
  height: 400px;
}

.chart {
  width: 430%;

  &-wrapper {
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
::v-deep {
  .type-tabs-item {
    background: #f1f1f1;

    &.selected {
      background: #62b27a;

      &::after {
        display: none;
      }
    }
  }
}
</style>