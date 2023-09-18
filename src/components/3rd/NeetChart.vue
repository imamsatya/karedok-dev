<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
          datasets: [ { data: [24.77, 23.19, 21.41, 22.48, 21.72, 24.28, 22.40, 23.22] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>