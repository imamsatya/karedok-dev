<template>
  <div id="chart">
    <span class="text-[12px] md:text-base text-left"> <strong>Jumlah Penduduk (ribu) Menurut Kelompok Umur dan Jenis Kelamin, 2022</strong></span>
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
        series: [{
            name: 'Perempuan',
            data: [-2897, -2739, -4163, -5576, -7016, -8260, -9349, -10088, -10505, -10851, -10978, -10937, -10731, -
              10732, -10771, -10791
            ]
          },
          {
            name: 'Laki - laki',
            data: [2233, 2530, 4036, 5486, 6945, 8241, 9379, 10207, 10743, 11215, 11486, 11553, 11433, 11356, 11242,
              11303
            ],
          },
        ],
        chartOptions: {
          tooltip: {
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
          chart: {
            type: 'bar',
            height: 440,
            stacked: true
          },
          colors: ['#FF4560', '#008FFB'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false,


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
            min: -12000,
            max: 12000,
            title: {
              // text: 'Age',
            },

          },
          // Set series names (legends) color to white
          legend: {
            labels: {
              colors: 'white',
            },
          },
          // tooltip: {
          //   shared: false,
          //   x: {
          //     formatter: function (val) {
          //       return val
          //     }
          //   },
          //   y: {
          //     formatter: function (val) {
          //       // return Math.abs(val) + "%"
          //       return Math.abs(val)
          //     }
          //   }
          // },
          title: {
            text: '',
            style: {
              color: 'white',
              fontFamily: 'Quicksand' // Set the title color to white
            }
          },
          xaxis: {
            categories: ['75+', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '35-39', '30-34', '25-29',
              '20-24', '15-19', '10-14', '5-9', '0-4'
            ],

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
        },
      }
    }
  }
</script>