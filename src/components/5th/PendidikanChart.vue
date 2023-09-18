<template>
    <div>
        <span v-if="this.isMobile2 == true" class="text-[12px] md:text-base"> <strong> Tingkat Pengangguran Terbuka Berdasarkan Tingkat Pendidikan</strong></span>
        <apexchart v-if="this.isMobile2 == false" class="mychart" type="bar"   :options="chartOptions" :series="chartSeries"></apexchart>
        <apexchart height="350" id="horizontal-bar-chart" v-if="this.isMobile2 == true" class="mychart" type="bar"   :options="chartOptionsMobile" :series="chartSeries"></apexchart>
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
                            fillColors: ['#35374D'] // Set the color of the tooltip dot to red
                        },
                    },
                    chart: {
                        id: "horizontal-bar-chart",
                        type: "bar", // Specify the chart type as "bar"
                        height: 380,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false // Set the chart to display bars horizontally
                        },
                    },
                    xaxis: {
                        categories: ["SMP", "SMA Umum", "SMA Kejuruan", "Diploma I/II/III", "Universitas"],
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
                    colors: ['#FF6583', '#FFC769', '#528AA3'], // Set custom colors for bars 
                    title: {
                        text: 'Tingkat Pengangguran Terbuka Berdasarkan Tingkat Pendidikan',
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
                    legend: {
                        labels: {
                            colors: 'white',
                        },
                    },
                },
                chartOptionsMobile: {
                    tooltip: {
                        theme: 'dark', // Set the theme for the tooltip (available themes: 'light', 'dark')
                        marker: {
                            fillColors: ['#35374D'] // Set the color of the tooltip dot to red
                        },
                    },
                    chart: {
                        id: "horizontal-bar-chart",
                        type: "bar", // Specify the chart type as "bar"
                        height: 600,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true // Set the chart to display bars horizontally
                        },
                    },
                    xaxis: {
                        categories: ["SMP", "SMA Umum", "SMA Kejuruan", "Diploma I/II/III", "Universitas"],
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
                    colors: ['#FF6583', '#FFC769', '#528AA3'], // Set custom colors for bars 
                    title: {
                        // text: 'Tingkat Pengangguran Terbuka Berdasarkan Tingkat Pendidikan',
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
                    legend: {
                        labels: {
                            colors: 'white',
                        },
                    },
                },

                chartSeries: [{
                        name: "2020",
                        data: [6.46, 9.86, 13.55, 8.08, 7.35],
                        style: {
                            colors: 'white', // Set the color of the series name to white
                        },
                    },
                    {
                        name: "2021",
                        data: [6.45, 9.09, 11.13, 5.87, 5.98],
                        style: {
                            colors: 'white', // Set the color of the series name to white
                        },
                    },
                    {
                        name: "2022",
                        data: [5.95, 8.57, 9.42, 4.59, 4.80],
                        style: {
                            colors: 'white', // Set the color of the series name to white
                        },
                    },
                ],
                isMobile2: false
            };
        },
        mounted(){
            if (window.innerWidth < 768){
                    this.isMobile2 = true;
                }
                else{
                    this.isMobile2 = false;
                }
        },
        computed: {
            isMobile(){
                if (window.innerWidth < 768){
                    this.isMobile2 = true;
                }
                else{
                    this.isMobile2 = false;
                }
            },
            chartHeight() {
                // Define your desired height values for different screen sizes
                if (window.innerWidth < 768) {
                    return 400; // For small screens
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
    .my-chart {
            
            height: 800px;
            
        }

    /* Customize width for screens with a width less than 768px */
    @media (max-width: 768px) {
        .my-chart {
            
            height: 800px;
            
        }
    }
</style>