<template>
    <div class="full-page white-background">

        <div class="quicksand-font">

            <div class="grid grid-cols-12 gap-4 ">
                
                <div
                    class="col-start-2 col-end-12 md:col-start-4 md:col-end-10 sm:col-start-2 sm:col-end-12 col-span-6 flex flex-col items-center">
                    <div data-aos="fade-up" data-aos-once="false">
                    <div
                        class="mt-8 md:mt-2 text-2xl md:text-6xl sm:text-2xl font-extrabold judul4th text-center text-white">
                        Kamingsun Bagian Dari Bonus Demografi?</div>
                    </div>
                </div>
                <div class="col-start-3 col-end-11 md:col-start-4 md:col-end-10  flex flex-col items-center">
                    <br><br>
                    <div data-aos="fade-up" data-aos-once="false">
                    <div class="w-[12rem] md:w-[30rem] sm:w-[12rem] h-[12rem] md:h-[30rem] sm:h-[12rem] hvr-float">
                        <lottie-player src="https://lottie.host/181f9109-cce2-4e33-984b-8bbec992247f/UpRr2mFYB4.json"
                            background="transparent" speed="1" class=" hoverable text-center" direction="1"
                            mode="normal" loop autoplay>
                        </lottie-player>
                    </div>
                    </div>

                    <br><div data-aos="fade-up" data-aos-once="false">
                    <p class="text-[14px] md:text-[24px] sm:text-[14px] mt-4 text-left">
                        Di tengah tingginya angka NEET di Indonesia, struktur demografi Indonesia sebetulnya tengah
                        memasuki fase bonus demografi yang dimulai sejak tahun 2015-2035. Bonus demografi
                        menandakan penduduk usia produktif mengalami peningkatan sedangkan kelahiran dan kematian menurun.
                        Gambaran bonus demografi dari piramida penduduk per kelompok umur dapat dilihat pada grafik
                        berikut:

                        <br><br>
                        <KelompokUmurChart />
                        <div style="text-align: center;">
                            <span class="text-sm ">Sumber : BPS (diolah)</span>
                        </div>
                        <br>
                        Keadaan bonus demografi ini bagai jendela dan peluang emas Indonesia untuk keluar dari status
                        ‘middle income trap’. Berdasarkan penelitian Setiawan SA tahun 2018, kondisi bonus demografi
                        dapat mendorong pertumbuhan ekonomi dan mengurangi kemiskinan. Jika pemerintah Indonesia tidak
                        bisa memanfaatkan kesempatan bonus demografi dengan baik, maka yang semula ‘bonus’ akan berbalik
                        menjadi ‘bencana’ demografi.
                        <br><br>
                        Setiawan SA (2018) dalam penelitiannya mengungkap, dalam mengoptimalkan manfaat bonus demografi,
                        ada beberapa hal yang dapat dilakukan,
                        yaitu dengan <span class="md:text-3xl sm:text-xl"><strong>mengembangkan kualitas
                                manusia</strong></span>
                        melalui <span class="md:text-3xl sm:text-xl"><strong>pendidikan dan pelatihan, memperluas pasar
                                tenaga kerja,
                                mengelola pertumbuhan populasi, dan meningkatkan tingkat kesehatan
                                penduduk.</strong></span> Dalam praktik, variabel kualitas manusia tersebut, tidak bisa
                        diwujudkan secara instan melainkan perlu pemupukan sedari dini. Dengan begini, kondisi bonus demografi dapat terkelola dengan baik dan masalah pengangguran usia
                        muda seperti Kamingsun dapat teratasi.
                        <br><br>
                         Perbandingan sebaran per generasi dapat dilihat pada
                        grafik berikut:
                        <br><br>
                        <div>
                            <div class="card-chart hvr-float animate__animated animate__fadeIn" data-aos="fade-up"
                                data-aos-once="false">
                                <div class="card-content ">
                                    <PiramidaPendudukChart />
                                    <div style="text-align: center;">
                                        <span class="text-sm ">Sumber : BPS (diolah)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br>
                        Dari grafik tersebut, bentuk piramida mengarah pada posisi granat/stasioner, yang artinya,
                        persebaran penduduk lebih besar berada pada Generasi Z dan Milenial daripada Generasi X, Boomer,
                        dan Pre Boomer.
                        Kondisi ini menandakan rasio ketergantungan Indonesia yang cenderung rendah karena komposisi
                        usia 15-64 tahun lebih banyak dari pada komposisi usia kurang dari 15 tahun dan lebih dari 64 tahun. Keadaan tersebut
                        merupakan kondisi yang menguntungkan, sebab penduduk yang bukan usia angkatan kerja dapat
                        memengaruhi tingkat produktivitas penduduk angkatan kerja. Ketika rasio ketergantungan tinggi,
                        pertumbuhan ekonomi jangka panjang cenderung lebih rendah.
                        Negara atau wilayah tersebut juga mengalami kesulitan untuk maju
                        karena tingginya angka beban tanggungan yang harus dihadapi usia produktif atau angkatan kerja.
                    </p>
                    </div>
                    <br><br>
                    <div data-aos="fade-up" data-aos-once="true">
                                <div class="mb-12 mt-8 md:mb-24 rounded-[24px]  p-2 md:p-6  md:min-w-[53rem] sm:min-w-[20rem] text-white   bg-[#b3cfc6] hvr-float animate__animated animate__fadeIn "
                                    data-aos="fade-up" data-aos-once="false">
                                    <div class="flex flex-wrap   space-x-7">
                                        <img src="../assets/section6.jpg"  alt="" class="infografis-size rounded-[20px]" >
                                        
                                    </div>
                                </div>
                            </div>

                </div>
                <br>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#222837" fill-opacity="1"
                    d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,224C672,235,768,181,864,160C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>






        </div>
    </div>
</template>
<script>
    import PiramidaPendudukChart from '../components/6th/PiramidaPenduduk.vue';
    import KelompokUmurChart from '../components/6th/KelompokUmur.vue';
    export default {
        props: {
            show1stParagraph: Boolean,
        },
        components: {
            PiramidaPendudukChart,
            KelompokUmurChart
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
        background-color: #00585d;
        /* background-image: url('../assets/4thbg.svg');
        background-repeat: no-repeat;
        background-size: cover; */
        /* Set the background color to red */
    }


    .quicksand-font {
        font-family: 'Quicksand', sans-serif;
    }




    .lottie-player {
        width: 300px;
        height: 300px;
        margin-right: 4px;
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


    /* img {
        max-width: 30%;
        height: auto;
        --animate-duration: 12s;
    } */

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
</style>