<template>
    <div class="full-page purple-background">

        <!-- <div class="square-full"></div> -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#30344f" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,160C672,149,768,171,864,170.7C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div class="grid grid-cols-12 gap-4 ">
            <div class="col-start-4 col-end-10  flex flex-col items-center">
                <div data-aos="fade-up" data-aos-once="true">
                    <div
                        class="mt-8 mb-2 md:mb-12  rounded-[24px]  p-10 min-w-[21rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[30rem] md:min-h-[24rem] hvr-float animate__animated animate__fadeIn firstCard mycard">
                        <div class="text-[14px] md:text-[24px] sm:text-[14px]">
                            <p v-if="show1stParagraph" class="text-left quicksand-font ">

                                Kamingsun adalah pemuda usia 24 tahun yang sudah menganggur 3 tahun selepas kelulusan
                                Sekolah Menengah Kejuruan (SMK)
                                tahun 2020.
                                Ia kini masuk dalam fenomena <span class="md:text-3xl sm:text-xl"><strong> Not In
                                        Employment, Education,
                                        Or Training (NEET)</strong></span>, yakni pemuda berusia 18-24 tahun yang sedang
                                tidak
                                bekerja, sekolah, maupun kursus/pelatihan. Istilah NEET pertama kali digunakan di
                                Britania
                                Raya.
                                Bisa dibilang, NEET ini adalah kondisi pemuda yang tidak berdaya dan malah jadi <span
                                    class="md:text-3xl sm:text-xl"> <strong>beban keluarga</strong></span>.
                                Seperti Kamingsun yang sebulan sekali di malam Rabu Kliwon mengikuti kegiatan balap liar
                                untuk
                                mengisi waktu luangnya. <br><br>
                                Badan Pusat Statistik (BPS) mencatat fenomena NEET melalui Survei Angkatan Kerja
                                Nasional
                                (Sakernas) sebesar 23,22 ditahun 2022 yang berarti <span class="md:text-3xl sm:text-xl">
                                    <strong>1 dari 5
                                        pemuda usia 18-24 tahun di Indonesia
                                        menganggur.</strong> </span>

                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-start-1 col-end-13  flex flex-col items-center mt-16 mb-16">
                <div data-aos="fade-right" data-aos-once="true">
                    <div class="flex flex-wrap   animate__animated animate__fadeIn ">

                        <div class="relative" @click="showPopperData = !showPopperData">
                            <!-- This container div provides relative positioning context -->
                            <lottie-player
                                src="https://lottie.host/c979f766-0ec2-49b2-9d7f-ea71cb0e60b2/j6QNeBQAbt.json"
                                background="transparent" speed="1" class="lottie-penganggur lottie-player hoverable"
                                direction="1" mode="normal" loop autoplay></lottie-player>

                            <Vue3Popper v-if="showPopperData" ref="popper" trigger="click" placement="top"
                                :options="popperOptions">
                                <div
                                    class="absolute  bottom-[140px] md:bottom-[284px] right-0 bg-white text-[#101820] border p-4 rounded-[24px] shadow-md text-[12px] md:text-[14px] sm:text-[14px]">
                                    Pikir - pikir daripada, ku melamar kerja, lebih baik ku melamar kamu~
                                </div>
                            </Vue3Popper>
                        </div>




                        <lottie-player src="https://lottie.host/c4089438-b296-4ef6-aaaa-bc0850456988/f6tQFnB9e3.json"
                            background="transparent" speed="1" class="lottie-player" direction="1" mode="normal" loop
                            autoplay>
                        </lottie-player>


                        <lottie-player src="https://lottie.host/c4089438-b296-4ef6-aaaa-bc0850456988/f6tQFnB9e3.json"
                            background="transparent" speed="1" class="lottie-player" direction="1" mode="normal" loop
                            autoplay>
                        </lottie-player>
                        <lottie-player src="https://lottie.host/c4089438-b296-4ef6-aaaa-bc0850456988/f6tQFnB9e3.json"
                            background="transparent" speed="1" class="lottie-player" direction="1" mode="normal" loop
                            autoplay>
                        </lottie-player>
                        <lottie-player src="https://lottie.host/c4089438-b296-4ef6-aaaa-bc0850456988/f6tQFnB9e3.json"
                            background="transparent" speed="1" class="lottie-player" direction="1" mode="normal" loop
                            autoplay>
                        </lottie-player>


                    </div>
                </div>
            </div>


            <div class="col-start-4 col-end-10  flex flex-col items-center">
                <div>
                    <!-- <div data-aos="fade-up" data-aos-once="false">
                        <div
                            class="mt-12 md:mt-24 mb-12 md:mb-24 rounded-[24px]  p-10 min-w-[21rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[30rem] md:min-h-[24rem] mycard hvr-float animate__animated animate__fadeIn">
                            <div class=" ">
                                <ChartComponent />
                                Sumber : Badan Pusat Statistik (diolah)
                            </div>
                        </div>
                    </div> -->


                    <div data-aos="fade-up" data-aos-once="true">
                        <div class="mb-12 md:mb-24 mt-2 md:mt-12 rounded-[24px]  p-10 min-w-[21rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[30rem] md:min-h-[24rem]   mycard hvr-float animate__animated animate__fadeIn"
                            data-aos="fade-up" data-aos-once="false">
                            <div class="text-[14px] md:text-[24px] sm:text-[14px] ">
                                <p class="text-left quicksand-font "> Pada kondisi global, NEET di Indonesia ada
                                    di atas rata-rata negara OECD yaitu 14,8 % di tahun 2021 dan menempati posisi ke-2
                                    setelah Timor Leste di Asia Tenggara.</p>
                                <br>
                                <NeetGlobalChart />
                                Sumber: World Bank 2021(diolah) <br>
                                OECD : Organization for Economic Co-operation and Development
                                <br><br>
                                <p class="text-left quicksand-font ">Pada kondisi seperti ini, dapat dikatakan
                                    Indonesia <span class="text-red-500 md:text-3xl sm:text-xl"> <strong> darurat
                                        </strong></span>
                                    pengangguran usia muda (NEET)!</p>

                            </div>
                        </div>
                    </div>
                    <br><br>

                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff1c0" fill-opacity="1"
                d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,261.3C672,256,768,192,864,176C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>





    </div>
</template>

<script>
    import ChartComponent from '../components/3rd/Chart2.vue';
    import NeetGlobalChart from '../components/3rd/NeetGlobal.vue';
    import Popper from 'popper.js';
    import Vue3Popper from 'vue3-popper';
    export default {
        props: {
            show1stParagraph: Boolean,
        },
        components: {
            ChartComponent,
            NeetGlobalChart,
            Popper,
            Vue3Popper
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
                isPopperVisible: false, // Track the visibility of the pop-up
                popper: null,

                showPopperData: false,

            };
        },
        mounted() {
            setTimeout(() => {
                this.showPopper2()
            }, 8000);
            setTimeout(() => {
                this.startTypingAnimation();
            }, 3500); // 2000 milliseconds = 2 seconds
            setTimeout(() => {
                this.showMotor = true;
            }, 7500);

            //bisa standing
            setTimeout(() => {
                this.exitMotor = "hvr-rotate"
            }, 9000);

            // setTimeout(() => {
            //     this.exitMotor = 'rotateForever';
            // }, 18000);

            //3rd section
            this.emitNextWhyInNeet4th()
        },
        computed: {
            popperOptions() {
                return {
                    modifiers: [{
                        name: 'offset',
                        options: {
                            offset: [0, 8], // Adjust the offset as needed
                        },
                    }, ],
                };
            },
        },
        methods: {
            showPopper2() {
                this.showPopperData = !this.showPopperData;
            },
            showPopper() {
                if (this.isPopperVisible) {
                    // If the pop-up is visible, hide it
                    this.popper.destroy();
                } else {
                    // If the pop-up is hidden, show it
                    const popperContent = this.$refs.popperContent;
                    const lottiePlayer = this.$el.querySelector('.lottie-penganggur');

                    if (!popperContent || !lottiePlayer) {
                        return;
                    }

                    this.popper = new Popper(lottiePlayer, popperContent, {
                        placement: 'top',
                        modifiers: {
                            offset: {
                                enabled: true,
                                offset: '0, 10', // Adjust the offset as needed
                            },
                        },
                    });
                }

                // Toggle the visibility state
                this.isPopperVisible = !this.isPopperVisible;
            },
            emitNextWhyInNeet4th() {
                this.$emit('change-next-whyInNeet4th', true); // Emit the event with the value true
            },
            startTypingAnimation() {
                const charsPerSecond = 50; // Adjust the speed of typing animation here
                const totalChars = this.paragraph1st.length;
                // const animationDuration = (totalChars / charsPerSecond) *  1000; // Adjust the factor for animation duration
                const animationDuration = (totalChars / charsPerSecond) *
                    2000; // Adjust the factor for animation duration

                let currentCharIndex = 0;
                const typingInterval = setInterval(() => {
                    // if (!this.showMotor && currentCharIndex >= 122) {
                    //     this.showMotor = true;
                    // }

                    if (currentCharIndex === totalChars) {
                        clearInterval(typingInterval);
                        this.showTypingAnimation = false;
                        this.show2ndParagraph = true;
                        this.showTypingAnimation2 = true;
                        this.startTypingAnimation2()
                        // Example: Adding a delay before showing another element
                        setTimeout(() => {
                            this.showjudulSingkat = true;
                            this.showJudulLengkap = false;
                        }, 1000); // Adjust the delay before showing the second h1
                    } else {
                        this.typedText += this.paragraph1st[currentCharIndex];
                        currentCharIndex++;
                    }
                }, animationDuration / totalChars);
            },
            startTypingAnimation2() {
                const charsPerSecond = 50; // Adjust the speed of typing animation here
                const totalChars = this.paragraph2nd.length;
                // const animationDuration = (totalChars / charsPerSecond) *  1000; // Adjust the factor for animation duration
                const animationDuration = (totalChars / charsPerSecond) *
                    2000; // Adjust the factor for animation duration

                let currentCharIndex = 0;
                const typingInterval = setInterval(() => {
                    if (currentCharIndex >= 155) {
                        this.exitMotor = 'rotateForever hvr-rotate2'
                        // this.enterMotor = 'animate__animated animate__slideOutRight'
                    }
                    if (currentCharIndex === totalChars) {
                        clearInterval(typingInterval);
                        this.showTypingAnimation2 = false;
                        this.finalExit = "movingRight"
                        setTimeout(() => {
                            this.showMotor = false;
                        }, 2000);
                        this.showHospital = true
                        // this.showTypingAnimation = false;
                        // this.startTypingAnimation2()

                    } else {
                        this.typedText2 += this.paragraph2nd[currentCharIndex];
                        currentCharIndex++;
                    }
                }, animationDuration / totalChars);
            }

        },
    };
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    .hoverable {
        /* display: inline-block;
    padding: 10px;
    border: 1px solid #333; */
        cursor: pointer;
        /* Set the cursor to a pointer (hand) */
    }

    /* .lottie-container {
        margin-top: 4%;
        display: flex;
        flex-direction: row;
    } */

    .lottie-player {
        width: 256px;
        height: 256px;

        /* Adjust spacing between animations */
    }

    .popper-content {
        background-color: #ffffff;
        border: 1px solid #ccc;
        padding: 10px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        position: absolute;
    }

    .square-full {
        min-width: 100vw;
        height: 200px;
        background-color: #101820;
        border-radius: 0 0 100px 100px;

    }

    .hoverable {

        cursor: pointer;

    }

    /* Change the cursor to a hand when hovering over the element */
    .hoverable:hover {
        cursor: pointer;
    }

    .align-left {
        text-align: left;
    }

    .card-chart {
        margin-top: 48px;
        border-radius: 18px;
        background-color: #101820;
        padding: 40px;
        color: white;
        min-height: 200px;
        margin-bottom: 100px;

    }

    .mycard {
        /* margin-top: -8%; */
        /* width: 50%; */

        /* border-radius: 18px;
        padding: 40px;
        margin-bottom: 20px;
        color: white;
        min-height: 200px; */

        background-color: #101820;
    }

    /* .firstCard {
        margin-top: -12%;
    } */

    /* Media Query for Mobile Devices (max-width: 768px) */
    @media (max-width: 768px) {
        /* .firstCard {
            margin-top: -40%;
        } */

        .lottie-player {
            width: 124px;
            height: 124px;

            /* Adjust spacing between animations */
        }
    }

    .mycard-content {
        font-size: 20px;
    }

    .quicksand-font {
        font-family: 'Quicksand', sans-serif;
    }

    .full-page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
        align-items: center;
    }

    .purple-background {
        background-color: #747bff;
        /* Set the background color to red */
    }

    .karedok-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .karedok {
        width: 128px;
        height: 128px;
        margin-right: 10px;
        /* Adjust the margin as needed */
    }

    .karedok:hover {
        filter: drop-shadow(0 0 0.8em #fbf1cf);
    }


    .typing-animation {
        overflow: hidden;
        /* Hide overflowing characters during animation */
        white-space: nowrap;
        /* Prevent line breaks during animation */
        border-right: 0.15em solid;
        /* Create the typing cursor effect */
        animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    }

    .fade-in {
        opacity: 0;
        animation: fade-in 1s ease-in-out forwards;
        font-size: 60px;
    }

    .blinking-cursor {
        display: inline-block;
        width: 0.1em;
        height: 1.0em;
        background-color: black;
        animation: blink-caret 0.75s step-end infinite;
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

    .rotateForever {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: rotate(-60deg);
        transform: rotate(-60deg);
    }

    /* Rotate */
    .hvr-rotate {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }

    /* .hvr-rotate:hover, */
    .hvr-rotate:focus,
    .hvr-rotate:active {
        -webkit-transform: rotate(-60deg);
        transform: rotate(-60deg);
    }

    /* Rotate */
    .hvr-rotate2 {
        /* display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }

    /* .hvr-rotate2:hover, */
    .hvr-rotate2:focus,
    .hvr-rotate2:active {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .movingRight {
        animation: moveRight 2s linear;
    }

    @keyframes moveRight {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(1200px);
            /* Adjust the value as needed */
        }
    }

    .bottom-container {
        margin-bottom: -90px;
    }


    .bottom-full {
        min-width: 100vw;
        height: 90px;
        background-color: #5f6675;
        border-radius: 50% 50% 0 0;
    }

    @keyframes typing {
        from {
            width: 0;
        }

        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {

        from,
        to {
            border-color: transparent;
        }

        50% {
            border-color: black;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    :deep(.popper) {
        background: #101820;
        padding: 20px;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
    }

    :deep(.popper #arrow::before) {
        background: #101820;
    }

    :deep(.popper:hover),
    :deep(.popper:hover > #arrow::before) {
        background: #101820;
    }
</style>