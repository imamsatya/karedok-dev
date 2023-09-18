<template>
    <div class="full-page white-background">

        <div class="quicksand-font">

            <div class="grid grid-cols-12 gap-4 ">
                <div
                    class="col-start-2 col-end-12 md:col-start-4 md:col-end-10 sm:col-start-2 sm:col-end-12 col-span-6 flex flex-col items-center">
                    <div data-aos="fade-up" data-aos-once="false">
                        <div
                            class="mt-8 md:mt-2 text-2xl md:text-6xl sm:text-2xl font-extrabold text-[#434343] text-center">
                            Apa
                            ya penyebab kondisi NEET Indonesia begitu tinggi?</div>
                    </div>
                </div>

                <div class="col-start-1 col-end-3 md:col-start-1 md:col-end-4 flex flex-col items-center md:mt-16">
                    <div data-aos="fade-right" data-aos-once="false">
                        <!-- <img src="../assets/bacteria.png" alt=""
                        class="animate__animated animate__shakeY animate__infinite infinite  ml-40 mb-90 covid" > -->
                        <div v-if="isDesktop">
                            <div
                                class="w-[12rem] md:w-[20rem] sm:w-[12rem] h-[12rem] md:h-[20rem] sm:h-[12rem] hvr-float">
                                <lottie-player
                                    src="https://lottie.host/267c573b-a7e1-4f54-86b0-b6911aea785f/9I7SX3VDWg.json"
                                    background="transparent" speed="1" class="lottie-player hoverable" direction="1"
                                    mode="normal" loop autoplay></lottie-player>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-start-3 col-end-11 md:col-start-4 md:col-end-10 sm:col-start-3 sm:col-end-11 flex flex-col items-center">

                    <div v-if="isMobile">
                        <div data-aos="fade-up" data-aos-once="false">
                            <div
                                class="w-[12rem] md:w-[20rem] sm:w-[12rem] h-[12rem] md:h-[20rem] sm:h-[12rem] mb-6 hvr-float">
                                <lottie-player
                                    src="https://lottie.host/267c573b-a7e1-4f54-86b0-b6911aea785f/9I7SX3VDWg.json"
                                    background="transparent" speed="1" class="lottie-player hoverable" direction="1"
                                    mode="normal" loop autoplay></lottie-player>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="false">
                        <p
                            class="text-[#434343] font-extrabold text-[14px] md:text-[24px] sm:text-[14px] md:mt-16 text-left">
                            Berdasarkan penelitian Naraswati dan Jatmiko tahun 2021 menunjukkan persebaran Covid-19
                            tahun
                            2020 menjadi salah satu implikasi kenaikan angka NEET di Indonesia yang sebetulnya mulai
                            mengalami tren penurunan dari tahun 2015-2019.
                            <br><br>
                            <div data-aos="fade-up" data-aos-once="false">
                                <div
                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-10 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[16rem] md:min-h-[24rem] mycard hvr-float animate__animated animate__fadeIn">

                                    <Chart2 />
                                    <span class="text-base md:text-base">Sumber : Badan Pusat Statistik (diolah)</span>

                                </div>
                            </div>
                            <br>
                            Kedatangan Covid-19 ini pas sekali dengan waktu kelulusan SMK Kamingsun, sebab itu, ia
                            kesulitan
                            mendapat kerja.
                            <br><br>
                            Selain itu, karakteristik pemuda, kondisi lingkungan, dan keluarga juga berdampak nyata
                            terhadap
                            takdir hidup pemuda Indonesia berhasil atau gagal mendapatkan kerja (Febryanna S, 2022).
                            <!-- <br><br>
                            <div data-aos="fade-left" data-aos-once="false">
                                <div
                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-10 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[16rem] md:min-h-[24rem] mycard hvr-float animate__animated animate__fadeIn">

                                    <img src="../assets/section4gambar2.jpg" alt="" class="">

                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-once="false">
                                <div
                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-10 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[16rem] md:min-h-[24rem] mycard hvr-float animate__animated animate__fadeIn">

                                    <img src="../assets/section4gambar1.png" alt="" class="">

                                </div>
                            </div> -->

                            <br><br>

                            <div data-aos="fade-up" data-aos-once="true">
                                <div id="default-carousel" class="relative mobile" data-carousel="static">
                                    <!-- Carousel wrapper -->
                                    <div class="relative  overflow-hidden my-carousel-height">
                                        <!-- Item 1 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <div data-aos="fade-right" data-aos-once="false">
                                                <div
                                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-5 md:p-8 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white  md:min-h-[24rem] mycard ">

                                                    <img src="../assets/section4gambar1.png" alt=""
                                                        class="infografis-size">

                                                </div>
                                            </div>
                                        </div>
                                        <!-- Item 2 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <div data-aos="fade-right" data-aos-once="false">
                                                <div
                                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-5 md:p-8 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white  md:min-h-[24rem] mycard  ">

                                                    <img src="../assets/section4gambar2.jpg" alt=""
                                                        class="infografis-size">

                                                </div>
                                            </div>
                                        </div>
                                        <!-- Item 3 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <div data-aos="fade-right" data-aos-once="false">
                                                <div
                                                    class="mt-4 md:mt-4 mb-4 md:mb-4 rounded-[24px]  p-5 md:p-8 min-w-[16rem] md:min-w-[53rem] sm:min-w-[20rem] text-white  md:min-h-[24rem] mycard  ">

                                                    <img src="../assets/section4gambar3.jpg" alt=""
                                                        class="infografis-size">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- Slider indicators -->
                                    <!-- <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true"
                                        aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false"
                                        aria-label="Slide 2" data-carousel-slide-to="1"></button>

                                </div> -->
                                    <!-- Slider controls -->
                                    <button type="button"
                                        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                        data-carousel-prev>
                                        <span
                                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff1c0] dark:bg-gray-800/30 group-hover:bg-[#fff1c0] dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                            </svg>
                                            <span class="sr-only">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button"
                                        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                        data-carousel-next>
                                        <span
                                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff1c0] dark:bg-gray-800/30 group-hover:bg-[#fff1c0] dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <span class="sr-only">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <!-- <img src="../assets/section4gambar1.png"  alt="" class="infografis-size"> -->
                            <div class="mt-4">Darurat NEET di Indonesia tentu perlu dicari solusinya. Bagaimana ya caranya?</div>
                            <br><br>
                        </p>
                    </div>
                    <!-- <div class="col-start-10 col-end-13 flex flex-col items-center"></div>
                    <div data-aos="fade-up" data-aos-once="false">
                        <div class="col-start-3 col-end-11 md:col-start-4 md:col-end-10 flex flex-col items-center">
                            <p class="content4th text-[14px] md:text-[24px] sm:text-[14px] mt-4">
                                Selain itu, karakteristik pemuda, kondisi lingkungan dan keluarga juga berdampak nyata
                                terhadap
                                takdir hidup pemuda Indonesia berhasil/gagal mendapatkan kerja. (Febryanna S, 2022).
                                <br><br>
                                Darurat NEET di Indonesia tentu perlu dicari solusinya. Bagaimana ya caranya?
                                <br><br>
                            </p>
                        </div>
                    </div> -->
                </div>
                <div class="col-start-11 col-end-13 md:col-start-10 md:col-end-13 flex flex-col items-center">
                    <div data-aos="fade-left">
                        <!-- <img src="../assets/analytics.png" alt=""
                        class="animate__animated animate__shakeY animate__infinite infinite mr-20  character" > -->
                    </div>
                </div>
            </div>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#466969" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,202.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#466969" fill-opacity="1"
                d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,112C672,139,768,181,864,186.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </div>
</template>




<script>
    // import PiramidaPendudukChart from '../components/4th/PiramidaPenduduk.vue';
    import Chart2 from '../components/3rd/Chart2.vue';
    import {
        initAccordions,
        initCarousels,
        initCollapses,
        initDials,
        initDismisses,
        initDrawers,
        initDropdowns,
        initModals,
        initPopovers,
        initTabs,
        initTooltips
    } from 'flowbite'
    export default {
        props: {
            show1stParagraph: Boolean,
        },
        components: {
            Chart2
        },
        mounted() {


            //5th section
            this.emitNextPendidikanPenentu5th()
        },

        data() {
            return {
                paragraph1st: "Matahari mulai terbenam di balik bukit. Kamingsun keluar menggunakan motor butut modif miliknya lengkap dengan perkakasnya. Kamingsun adalah salah satu peserta balap liar yang akan bertanding di jalur maut flyover.                    Bendera mulai dikibarkan tanda balap liar dimulai.",
                paragraph2nd: "Kamingsun terlalu banyak gaya, beberapa kali dia melakukan standing dengan motornya. Saat 50 meter lagi menuju garis finish, lagi - lagi Kamingsun banyak gaya, dia melakukan standing dengan motornya.             Tidak disangka, motornya slip, Kamingsun terseret dengan motornya di aspal jalur maut. Kamingsun dilarikan ke UGD rumah sakit terdekat. Semenjak kejadian itu Kamingsun mulai merenungi keseharian aktivitas tidak bergunanya.",
                typedText: "",
                typedText2: "",
                showTypingAnimation: true,
                showTypingAnimation2: false,
                showjudulSingkat: false,
                showJudulLengkap: true,
                showMotor: false,
                show1stParagraph: true,
                show2ndParagraph: false,
                enterMotor: "animate__animated animate__slideInLeft",
                exitMotor: "",
                finalExit: null,
                showHospital: false,
                //chart
                chartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My Chart Data',
                        borderColor: 'rgb(75, 192, 192)',
                        data: [65, 59, 80, 81, 56, 55, 40],
                    }, ],
                },
                isDesktop: false,
                isMobile: false,
                currentIndex: 0,
                images: [{
                        src: "../assets/section4gambar2.jpg",
                        alt: ""
                    },
                    {
                        src: "../assets/section4gambar1.png",
                        alt: ""
                    },
                    // Add more images as needed
                ],

            };
        },
        mounted() {
            initAccordions();
            initCarousels();
            initCollapses();
            initDials();
            initDismisses();
            initDrawers();
            initDropdowns();
            initModals();
            initPopovers();
            initTabs();
            initTooltips();
            this.checkScreenSize();
            this.checkMobileScreenSize();
            window.addEventListener("resize", this.checkScreenSize);
            this.emitNextPendidikanPenentu5th()
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.checkScreenSize);
        },
        methods: {
            checkScreenSize() {
                this.isDesktop = window.innerWidth >= 768; // You can adjust the screen width breakpoint as needed
            },
            checkMobileScreenSize() {
                this.isMobile = window.innerWidth < 768;
            },
            emitNextPendidikanPenentu5th() {
                this.$emit('change-next-pendidikanPenentu5th', true); // Emit the event with the value true
            },
            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            },
            prevSlide() {
                this.currentIndex =
                    (this.currentIndex - 1 + this.images.length) % this.images.length;
            },
        }
    }
</script>
<style scoped>
    .my-carousel-height {
        height: 600px;
    }
    
    .full-page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
        /* justify-content: center; */
        /* Center content vertically */
        align-items: center;
        /* Center content horizontally */
    }

    .mycard {
        /* margin-top: -8%; */
        /* width: 50%; */

        /* border-radius: 18px;
        padding: 40px;
        margin-bottom: 20px;
        color: white;
        min-height: 200px; */

        background-color: #434343;
    }

    .mycard2 {
        background-color: #664500;
    }

    .white-background {
        /* background-color: #FFFEC4; */
        background-color: #fff1c0;
        /* background-image: url('../assets/4thbg.svg');
        background-repeat: no-repeat;
        background-size: cover; */
        /* Set the background color to red */
    }



    .quicksand-font {
        font-family: 'Quicksand', sans-serif;
    }

    .judul4th {
        /* margin-top: 2%; */
        /* margin-left: 10%;
        margin-right: 10%; */
        /* font-size: 60px; */
        color: #434343;
        /* font-weight: 900; */
    }

    .content4th {
        color: #434343;
        /* font-size: 24px; */

        font-weight: 800;
        text-align: left;
    }



    .covid {
        max-width: 30%;
        height: auto;
        --animate-duration: 12s;
    }

    .character {
        max-width: 60%;
        height: auto;
        --animate-duration: 12s;
    }

    /* Float */
    .hvr-float {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 100px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .hvr-float:hover,
    .hvr-float:focus,
    .hvr-float:active {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
    }

    /* Media Query for Mobile Devices (max-width: 768px) */
    @media (max-width: 768px) {
        /* img {
            display: none;
        } */

        /* .infografis-size{
            width: 320;
            height: auto;
        } */

        .my-carousel-height {
            height: 256px;
        }

        /* .mobile{
            display: none;
        } */

    }
</style>