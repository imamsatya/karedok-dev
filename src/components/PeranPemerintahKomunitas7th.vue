<template>
    <div class="full-page white-background">

        <div class="quicksand-font">
            <div class="grid grid-cols-12 gap-4 ">
                <div
                    class="col-start-2 col-end-12 md:col-start-4 md:col-end-10 sm:col-start-2 sm:col-end-12 col-span-6 flex flex-col items-center md:mb-6">
                    <div data-aos="fade-up" data-aos-once="false">
                    <div
                        class="mt-8 md:mt-2 text-2xl md:text-6xl sm:text-2xl font-extrabold  text-center text-white">
                        Peran Pemerintah dan Komunitas</div>
                        </div>
                </div>
                <div class="col-start-3 col-end-11 md:col-start-4 md:col-end-10   flex flex-col items-center">
                    <div data-aos="fade-up" data-aos-once="false">
                    <div class="w-[12rem] md:w-full sm:w-[12rem] h-[12rem] md:h-full sm:h-[12rem] hvr-float"> 
                    <lottie-player src="https://lottie.host/b000e7cd-1f3b-4654-a95d-264555e2d6eb/3P9wfNTTxF.json"
                        background="transparent" speed="1" class="hoverable text-center" direction="1"
                        mode="normal" loop autoplay>
                    </lottie-player>
                    </div>
                    </div>
                    
                    <br><br>
                    <div data-aos="fade-up" data-aos-once="false">
                    <p class="text-[14px] md:text-[24px] sm:text-[14px] mt-4 text-left">
                        Salah satu bentuk dukungan pemerintah dalam pengentasan pengangguran usia muda
                        melalui program SIAPkerja yang menjadi One Stop Solution oleh Kementerian Ketenagakerjaan (Kemnaker) yang memiliki beberapa
                        sub program diantaranya: Karirhub (informasi lowongan kerja), Skillhub (pelatihan untuk
                        meningkatkan keterampilan), Sertihub (sertifikasi profesi), dan Bizhub (akses investor dan
                        mentor bagi yang ingin membuka usaha). Pendaftaran segala program Kemnaker ini bisa dilakukan
                        secara daring melalui website Kemnaker.
                        <br><br>
                        Kemnaker juga menyediakan kartu pra kerja untuk WNI
                        minimal berusia 18 tahun yang sedang tidak mengikuti pendidikan formal, terkena phk, dirumahkan
                        karena Covid-19, dan pekerja informal. Namun dalam mengurus kartu Prakerja, terdapat seleksi
                        oleh Kemnaker sampai kartu tersebut layak diberikan pada calon pekerja. Manfaat kartu Prakerja
                        yaitu akses pelatihan untuk persiapan keahlian kerja dan mendapat insentif.
                        <br><br>
                        Setelah program SIAPkerja ini, yang menjadi PR bagi Kemnaker adalah akses untuk seluruh pemuda
                        yang tepat sasaran agar bisa mengikuti program tersebut. Materi pelatihan yang diberikan juga
                        harus terkurasi dengan baik agar peserta mendapatkan pembelajaran yang benar dalam program ini.
                        <br><br>
                        Kartu Prakerja yang menjadi salah satu program pengentasan pengangguran, sudah menggelontorkan
                        banyak biaya negara, oleh karena itu harus dimaksimalkan dengan baik agar tidak menjadi kerugian
                        negara. Termasuk Kamingsun, agar dapat melakukan persiapan maksimal dan  <span class="md:text-3xl sm:text-xl"> <strong> menjadi pemuda berdaya
                        yang dapat berkontribusi bagi roda perekonomian keluarga dan Indonesia.</strong></span> 
                        <br><br>
                        <hr class="custom-hr">
                        <br>
                    </p>
                    </div>
                    
                    <br><br>
                    <div data-aos="fade-up" data-aos-once="false">
                    <div class="w-[12rem] md:w-[20rem] sm:w-[12rem] h-[12rem] md:h-[20rem] sm:h-[12rem] md:mt-12 md:mb-12 hvr-float"> 
                    <lottie-player src="https://lottie.host/531dcd81-8131-4759-af86-05f2ee9db114/yisLGzgY1B.json"
                        background="transparent" speed="1" class="hoverable " direction="1"
                        mode="normal" loop autoplay>
                    </lottie-player>
                    </div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="false">
                    <p class="text-[14px] md:text-[24px] sm:text-[14px] mt-4 text-left">
                        <div class="text-left"><strong>Tips cari kerja ala Pegawai Pemberani: <br></strong></div>
                        <br>
                        <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 ">
                            <li>Mengasah skill pada bidang yang disukai</li>
                            <li>Membuat Curriculum Vitae (CV) yang menarik</li>
                            <li>Memperbanyak <s>orang dalam</s> jaringan</li>
                            <li>Mengikuti kompetisi <s>seperti Data Storytelling Challenge (DSC)</s> untuk menambah value diri</li>
                            <li>Masuk sekolah kedinasan <s>seperti POLSTAT STIS</s></li>
                        </ul>
                    </p>
                    </div>
                    <br><br>
                    
                        
                        
                    <br><br>

                </div>

            </div>
          



          



            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#305e85" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
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
        background-color: #222837;
        /* background-image: url('../assets/4thbg.svg');
        background-repeat: no-repeat;
        background-size: cover; */
        /* Set the background color to red */
    }

    

    .quicksand-font {
        font-family: 'Quicksand', sans-serif;
    }

    .judul4th {
        margin-top: 2%;
        margin-left: 10%;
        margin-right: 10%;
        font-size: 60px;
        color: white;
        font-weight: 900;
    }

    .content4th {
        color: white;
        font-size: 24px;

        /* font-weight: 800; */
        text-align: left;
    }

    /* .lottie-player {
        width: 300px;
        height: 300px;
        margin-right: 4px;
    } */

     .lottie-player2 {
        width: 300px;
        height: 300px;
        margin-right: 4px;
    }

    .custom-hr {
        border: none; /* Remove the default solid line */
        border-top: 4px dashed; /* Apply a 2px dashed line with a color (#333) */
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


    img {
        max-width: 30%;
        height: auto;
        --animate-duration: 12s;
    }
</style>