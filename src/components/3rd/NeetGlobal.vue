<template>
  <div>

    <span class="text-[12px] md:text-base text-left"><strong>Kondisi NEET Indonesia, Asia Tenggara, dan OECD</strong></span>
    <apexchart v-if="this.isMobile2 == true" type="bar" height="350" :options="chartOptions" :series="chartSeries"
      :responsive="[
        {
          breakpoint: 768, // Customize this breakpoint as needed
          options: {
            plotOptions: {
          bar: {
            horizontal: false
          }
        },        
          }
        }
      ]"></apexchart>
    <apexchart v-if="this.isMobile2 == false" type="bar" :options="chartOptions" :series="chartSeries" :responsive="[
        {
          breakpoint: 768, // Customize this breakpoint as needed
          options: {
            plotOptions: {
          bar: {
            horizontal: false
          }
        },
        
          }
        }
      ]"></apexchart>
  </div>
</template>

<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        chartOptions: {
          tooltip: {
            theme: 'dark', // Set the theme for the tooltip (available themes: 'light', 'dark')
            marker: {
              fillColors: ['#747bff'] // Set the color of the tooltip dot to red
            },
          },
          chart: {
            id: "horizontal-bar-chart",
            type: "bar", // Specify the chart type as "bar"
          },
          plotOptions: {
            bar: {
              horizontal: true, // Set the chart to display bars horizontally
            },
          },
          xaxis: {
            categories: ["Timor Leste", "Indonesia", "Brunei Darussalam", "Filipina", "Vietnam", "Anggota Negara OECD",
              "Thailand", "Singapura"
            ],
            labels: {
              style: {
                colors: 'white', // Set label text color to white
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: 'white', // Set y-axis label text color to white
              },
            },
          },
          colors: ['#646cff', '#646cff', '#646cff', '#646cff', '#646cff', '#646cff', '#646cff',
            '#646cff'
          ], // Set custom colors for bars 
          title: {
            text: '',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: true,
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'Quicksand',
              color: '#FFFFFF'
            },
          },
        },

        chartSeries: [{
            name: "NEET",
            data: [31.17, 22.45, 18.68, 17.47, 14.93, 14.82, 14.75, 6.20],
          },

        ],
        isMobile2: false
      };
    },
    mounted() {
      if (window.innerWidth < 768) {
        this.isMobile2 = true;
      } else {
        this.isMobile2 = false;
      }
    },
    computed: {
      isMobile() {
        if (window.innerWidth < 768) {
          this.isMobile2 = true;
        } else {
          this.isMobile2 = false;
        }
      },
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
          return 360; // For small screens
        } else {
          return 800; // For larger screens
        }
      },
    },
  };
</script>

<style scoped>
  /* Default width for the chart */
  .apexchart {
    width: 100%;
  }

  /* Customize width for screens with a width less than 768px */
  @media (max-width: 768px) {
    .apexchart {
      width: 50%;
      /* Adjust the width as per your preference */
    }
  }
</style>