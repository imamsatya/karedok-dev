<template>
    <div class="full-page white-background">

        <div class="quicksand-font">
            <div class="grid grid-cols-12 gap-4 ">
                <div
                    class="col-start-2 col-end-12 md:col-start-4 md:col-end-10 sm:col-start-2 sm:col-end-12 col-span-6 flex flex-col items-center">
                    <div data-aos="fade-up" data-aos-once="false">
                    <div
                        class="mt-8 md:mt-2 text-2xl md:text-6xl sm:text-2xl font-extrabold  text-center text-white">
                        Epilog</div>
                        </div>
                </div>
                <div class="col-start-3 col-end-11 md:col-start-4 md:col-end-10  flex flex-col items-center">

                    <br>
                    <div data-aos="fade-up" data-aos-once="false">
                    <p class="text-[14px] md:text-[24px] sm:text-[14px] mt-4 text-left">
                        Kejadian maut yang hampir merenggut nyawa Kamingsun membuat ia berpikir dan menyadari bahwa
                        keahliannya dalam mengendarai sepeda motor diatas rata-rata orang sekecamatan. Kamingsun pun
                        bertekad dalam hati, “Aku sudah diberi kesempatan hidup satu kali lagi, maka hari esok akan
                        kugunakan tangan dan kakiku untuk mendaftar ojek online”.
                        <br><br>
                        Begitulah kisah Kamingsun, pemuda 24 tahun yang saat ini sedang gundah dan bingung akan nasib
                        masa depannya yang tidak bisa diprediksi namun bisa dipersiapkan. Kamingsun dan teman - teman
                        Generasi Z yang sedang mencari kerja perlu tahu bahwa,

                        <br>
                        <!-- “Saat kesempatan datang diiringi oleh persiapan yang matang, maka keberuntungan akan datang menghampirimu.” -Tim Pegawai Pemberani -->
                    </p>
                    </div>

                    <div data-aos="fade-up" data-aos-once="false">
                    <div class="w-[12rem] md:w-[20rem] sm:w-[12rem] h-[12rem] md:h-[20rem] sm:h-[12rem] hvr-float mt-8">
                        <lottie-player src="https://lottie.host/1bf46ee0-1017-44a9-8870-fee5ca2e541f/fageg0pouC.json"
                            background="transparent" speed="1" class="hoverable" direction="1" mode="normal" loop
                            autoplay>
                        </lottie-player>
                    </div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="false">
                    <p class="text-[14px] md:text-[24px] sm:text-[14px] mt-4 text-left mb-8">
                        “Happiness can be found, even in the darkest of times, if one only remembers to turn on the
                        light.” - Albus Dumbledore

                    </p>
                    <br><br>
                    <br>
                    <div class="text-[8px] md:text-base sm:text-[8px] mt-4 text-center">
                        *Cerita ini hanyalah fiktif belaka, namun data yang dicantumkan adalah fakta. Apabila terdapat
                        kesamaan nama/tokoh/tempat hanyalah ketidaksengajaan.
                    </div>
                    </div>

                    <br><br>
                </div>
            </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#222837" fill-opacity="1"
                d="M0,32L48,69.3C96,107,192,181,288,197.3C384,213,480,171,576,138.7C672,107,768,85,864,106.7C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </div>
</template>
<script>
    import PiramidaPendudukChart from '../components/6th/PiramidaPenduduk.vue';
    export default {
        props: {
            show1stParagraph: Boolean,
        },
        components: {
            PiramidaPendudukChart
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

            };
        },
    }
</script>
<style scoped>
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
        border-radius: 18px;
        background-color: white;
        padding: 40px;
        margin-bottom: 20px;
        width: 50%;
        color: black;
        min-height: 360px;
    }

    .white-background {
        /* background-color: #FFFEC4; */
        background-color: #305e85;
        /* background-image: url('../assets/4thbg.svg');
        background-repeat: no-repeat;
        background-size: cover; */
        /* Set the background color to red */
    }


    .quicksand-font {
        font-family: 'Quicksand', sans-serif;
    }

  

    .content4th {
        color: white;
        font-size: 24px;

        font-weight: 800;
        text-align: left;
    }

    .lottie-player {
        width: 300px;
        height: 300px;
        margin-right: 4px;
        text-align: center;
        /* Adjust spacing between animations */
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    /* th {
            background-color: #f2f2f2;
        } */

    /* Add this CSS to center the content using flexbox */
    .d-flex {
        display: flex;
    }

    .justify-content-center {
        justify-content: center;
    }

    .align-items-center {
        align-items: center;
    }

    img {
        max-width: 30%;
        height: auto;
        --animate-duration: 12s;
    }
</style>