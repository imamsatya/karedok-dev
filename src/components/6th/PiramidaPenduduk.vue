<template>
  <div id="chart">
    <span class="text-[12px] md:text-base text-left"> <strong>Jumlah Penduduk menurut Wilayah, Klasifikasi Generasi, dan Jenis Kelamin, Indonesia, 2020</strong></span>
    <apexchart type="bar" height="440" :options="chartOptions" :series="series"></apexchart>
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
        series: [
          {
            name: 'Perempuan',
            data: [-2616968, -16414860, -28224259, -34305331, -34717318, -17263282, ]
          },
          {
            name: 'Laki - laki',
            data: [2007532, 16078115, 28333040, 35394641, 36791764, 18056807, ],
          },
        ],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 440,
            stacked: true
          },
          colors: ['#FF4560','#008FFB' ],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },

          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -50000000,
            max: 50000000,
            title: {
              // text: 'Age',
            },

          },
          tooltip: {
            shared: false,
            theme: 'dark', // Set the theme for the tooltip (available themes: 'light', 'dark')
            marker: {
              fillColors: ['#00585d'] // Set the color of the tooltip dot to red
            },
            style: {
              color: 'black', // Set tooltip text color to black
            },
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                // return Math.abs(val) + "%"
                return Math.abs(val)
              }
            }
          },
          title: {
            text: '',
            style: {
              color: 'white',
              fontFamily :'Quicksand' // Set the title color to white
            }
          },
          xaxis: {
            categories: ['Pre Boomer', 'Boomer', 'Generasi X', 'Milenial', 'Generasi Z', 'Post Generasi Z', ],

            // title: {
            //   text: 'asddas'
            // },
            labels: {
              style: {
                colors: 'white' // Set the label (category) color to white
              },
              formatter: function (val) {
                // return Math.abs(Math.round(val)) + "%"
                return Math.abs(Math.round(val))
              }
            }
          },
          yaxis: {
          labels: {
            style: {
              colors: 'white', // Set y-axis label text color to white
            },
          },
        },
        legend: {
          labels: {
            colors: 'white',
          },
        },
        },
      }
    }
  }
</script>