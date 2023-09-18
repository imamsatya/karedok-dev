<template>
    <div class="full-page my-background ">
        <div class="grid grid-cols-12 gap-4 ">
            <div class="col-start-4 col-end-10  flex flex-col items-center">
                <div class="mt-12 md:mt-36 mb-12 md:mb-24 rounded-[24px] bg-opacity-50 bg-black p-10 min-w-[21rem] md:min-w-[53rem] sm:min-w-[20rem] text-white min-h-[30rem] md:min-h-[24rem] hvr-float animate__animated animate__fadeIn" data-aos="fade-up"
                    data-aos-once="false">
                    
                    <div class="text-[14px] md:text-[20px] sm:text-[14px]">
                        <p v-if="show1stParagraph" class="text-left quicksand-font">
                            <span v-if="showTypingAnimation" class="inline">
                                {{ typedText }}
                            <span v-if="showTypingAnimation" class="blinking-cursor"></span>
                            </span>
                            <span v-else >{{ paragraph1st }}</span>
                        </p>
                        <br>
                        <p class="text-left quicksand-font" v-if="show2ndParagraph">
                            <span v-if="showTypingAnimation2" class="inline">
                                {{ typedText2 }}
                            <span v-if="showTypingAnimation2" class="blinking-cursor"></span>
                            </span>
                            <span v-else>{{ paragraph2nd }}</span>
                        </p>
                    </div>
                </div>
                <br><br><br>
                <div :class="finalExit + ' hoverable'">
                    <div :class="exitMotor">
                        <div v-if="showMotor" :class="enterMotor">
                            <div class="w-[18rem] md:w-[32rem] sm:w-[18rem] h-[18rem] md:h-[32rem] sm:h-[18rem]">
                            <lottie-player
                                src="https://lottie.host/54d3415f-9efa-44db-82f8-4611d7910a52/FCGXlBYBUO.json"
                                background="transparent" speed="1"
                                style="transform: scaleX(-1); " direction="1" mode="normal"
                                loop autoplay></lottie-player>
                            </div>
                                

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div v-if="showMotor" class="background-square"></div>
    <div class="bottom-container animate__animated animate__fadeInUp" v-if="showHospital">
        <lottie-player src="https://lottie.host/a299f05d-9306-40aa-af39-b3e3cae49531/r5qjzia0iZ.json"
            background="transparent" speed="1"
            style="width: 1200px; height: 500px; margin-top: 300px; margin-bottom: -100px;" autoplay direction="1"
            mode="normal">
        </lottie-player>
    </div>
    <div class="bottom-full animate__animated animate__fadeInUp" v-if="showHospital"></div> -->
    </div>

</template>

<script>
    export default {
        props: {
            show1stParagraph: Boolean,
        },
        data() {
            return {
                paragraph1st: "Cahaya bulan purnama mulai bersinar di langit malam. Kamingsun keluar menggunakan motor butut modif miliknya lengkap dengan perkakasnya. Kamingsun adalah salah satu peserta balap liar yang akan bertanding di jalur maut flyover. Bendera mulai dikibarkan tanda balap liar dimulai.",
                paragraph2nd: "Kamingsun terlalu banyak gaya, beberapa kali dia melakukan standing dengan motornya. Saat 50 meter lagi menuju garis finish, tidak disangka, motornya slip, Kamingsun terseret dengan motornya di aspal jalur maut. Kamingsun dilarikan ke Unit Gawat Darurat (UGD) rumah sakit terdekat. Semenjak kejadian itu Kamingsun mulai merenungi keseharian aktivitas tidak bergunanya.",
                typedText: "",
                typedText2: "",
                showTypingAnimation: true,
                showTypingAnimation2: false,
                showjudulSingkat: false,
                showJudulLengkap: true,
                showMotor: false,
                showMotor2: true,
                show1stParagraph: true,
                show2ndParagraph: false,
                enterMotor: "animate__animated animate__slideInLeft",
                exitMotor: null,
                finalExit: null,
                showHospital: false,
            };
        },
        mounted() {
            // Prod
            setTimeout(() => {
                this.startTypingAnimation();
            }, 3500); // 2000 milliseconds = 2 seconds
            // setTimeout(() => {
            //     this.showMotor = true;
            // }, 7500);

            //bisa standing
            setTimeout(() => {
                this.exitMotor = "hvr-rotate"
            }, 9000);


            //Dev
            // setTimeout(() => {
            //     this.startTypingAnimation();
            // }, 1); // 2000 milliseconds = 2 seconds
            // setTimeout(() => {
            //     this.showMotor = true;
            // }, 1);

            // //bisa standing
            // setTimeout(() => {
            //     this.exitMotor = "hvr-rotate"
            // }, 1);


            // setTimeout(() => {
            //     this.exitMotor = 'rotateForever';
            // }, 18000);
        },
        methods: {
            emitNextNeet3rd() {
                this.$emit('change-next-neet3rd', true); // Emit the event with the value true
            },
            initLottieAnimation() {
                lottie.loadAnimation({
                    container: document.getElementById('lottie-animation'), // Element ID
                    animationData: motorData, // JSON data
                    renderer: 'html', // Choose the appropriate renderer (canvas, svg, html)
                    loop: true,
                    autoplay: true
                });
            },
            startTypingAnimation() {
                const charsPerSecond = 100; // Adjust the speed of typing animation here
                const totalChars = this.paragraph1st.length;
                // const animationDuration = (totalChars / charsPerSecond) *  1000; // Adjust the factor for animation duration
                const animationDuration = (totalChars / charsPerSecond) *
                2000; // Adjust the factor for animation duration

                // const animationDuration = (totalChars / charsPerSecond) *   1; // Adjust the factor for animation duration

                let currentCharIndex = 0;
                const typingInterval = setInterval(() => {
                    if (!this.showMotor && currentCharIndex >= 136) {
                        this.showMotor = true;
                    }

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

                // Adjust the factor for animation duration

                let currentCharIndex = 0;
                const typingInterval = setInterval(() => {
                    if (currentCharIndex == 84 ) {
                        this.exitMotor = 'rotateForever hvr-rotate2'
                        // this.enterMotor = 'animate__animated animate__slideOutRight'
                    }

                    if (currentCharIndex == 212) {
                        this.emitNextNeet3rd()
                        this.finalExit = "movingRight"
                        setTimeout(() => {
                            this.showMotor = false;
                        }, 2000);
                    }
                    if (currentCharIndex == 368) {
                        clearInterval(typingInterval);
                        this.showTypingAnimation2 = false;
                        this.finalExit = "animate__animated animate__fadeOutRight"
                        
                        setTimeout(() => {
                            this.showMotor = false;
                        }, 2000);
                        setTimeout(() => {
                            this.showHospital = true;
                        }, 2000);


                        //selesai
                        setTimeout(() => {
                            this.emitNextNeet3rd()
                        }, 500);

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

    .background-square {
        height: 90px;
    }

    .hoverable {
        /* display: inline-block;
    padding: 10px;
    border: 1px solid #333; */
        cursor: pointer;
        /* Set the cursor to a pointer (hand) */
    }

    /* Change the cursor to a hand when hovering over the element */
    .hoverable:hover {
        cursor: pointer;
    }

    .align-left {
        text-align: left;
    }

    /* .mycard {
        margin-top: 8%;
        border-radius: 18px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 40px;
        margin-bottom: 20px;
        min-width: 840px;
        color: white;
        min-height: 380px;
    } */

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

    .my-background {
        /* background-color: #FF6699; */
        background-image: url('../assets/nightcity3.png');
        /* Adjust the path as needed */
        /* Optional: Set the background size */
        /* background-size: 100% 100%; */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        /* Set the background color to red */
    }
    /* Media Query for Mobile Devices (max-width: 768px) */
    @media (max-width: 768px) {
        .my-background {
            background-color: #30344f; /* Red background color for mobile */
            background-image: url('../assets/nightcity3mobile.png'); /* Remove the background image on mobile */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        
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

    /* .bottom-container {
        margin-bottom: -90px;
    } */


    .bottom-full {
        min-width: 100vw;
        height: 90px;
        background-color: #101820;
        border-radius: 100px 100px 0 0;
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
</style>