<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></Tabs>
    <div class="chart-wrapper" ref="chartWrapper">
      <Chart class="chart" :options="x"></Chart>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
// import dayjs from 'dayjs';
// import clone from '@/lib/clone';
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

  get y() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today).subtract(i, 'day').format('MM-DD');
      const found = _.find(this.recordList, {
        createdAt: dateString
      });
      array.push({
        date: dateString, value: found ? found.amount : 0
      });
    }
    array.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date === b.date) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }

  get x() {
    const keys = this.y.map(item => item.date);
    const values = this.y.map(item => item.value);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        show: true,
        type: 'category',
        data: keys,
        axisTick: {alignWithLabel: true},
        axisLine: {lineStyle: {color: '#191919'}}
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
</style>