<template>
  <Layout>
    <div class="chart-wrapper" ref="chartWrapper">
      <Chart class="chart" :options="x"></Chart>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Chart from '@/components/Chart.vue';

@Component({
  components: {Chart}
})
export default class Statistics extends Vue {
  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }


  get x() {
    console.log(this.recordList);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        show: true,
        type: 'category',
        data: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        ],
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
        data: [
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320, 1, 2
        ],
      }],
    };
  }
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