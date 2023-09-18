<template>
  <div id="chart">
    
    <apexchart type="line" :height="chartHeight" :width="chartWidth" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import VueApexCharts from 'vue3-apexcharts';
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        series: [{
          name: "NEET",
          data: [24.77, 23.19, 21.41, 22.48, 21.72, 24.28, 22.40, 23.22],
        }],
        chartOptions: {
          chart: {
            width: 800,
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            animations: {
              enabled: true,
              easing: 'linear',
              speed: 3000,
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px',
              fontFamily: 'Quicksand',
              fontWeight: 'bold',
              colors: ['#f4900b']
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              padding: 4,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: '#fff',
              opacity: 0.9,
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
              }
            },

          },
          tooltip: {
            theme: 'dark', // Set the theme for the tooltip (available themes: 'light', 'dark')
            marker: {
              fillColors: ['#f4900b'] // Set the color of the tooltip dot to red
            },
          },
          stroke: {
            curve: 'straight',
            colors: ['#f4900b']
          },
          title: {
            text: 'NEET di Indonesia',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: undefined,
              color: '#FFFFFF'
            },
          },
          grid: {
            row: {
              colors: ['#213547'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              hideOverlappingLabels: true,
              showDuplicates: false,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              style: {
                colors: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
              },
              offsetX: 0,
              offsetY: 0,
              format: undefined,
              formatter: undefined,
              datetimeUTC: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: '#FFFFFF' // Set the Y-axis label color here
              }
            }
          }

        },
        isMobile2: false
      }
    },
    computed: {
  chartHeight() {
    // Define your desired height values for different screen sizes
    if (window.innerWidth < 768) {
      return 250; // For small screens
    } else {
      return 350; // For larger screens
    }
  },
  chartWidth() {
    // Define your desired width values for different screen sizes
    if (window.innerWidth < 768) {
      return 280; // For small screens
    } else {
      return 800; // For larger screens
    }
  },
},
  }
</script>