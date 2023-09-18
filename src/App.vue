<script setup>
  // import HelloWorld from './components/HelloWorld.vue'
  import Judul from './components/Judul.vue'
  import Intro from './components/Intro.vue'
  import Neet3rd from './components/Neet3rd.vue'
  import WhyInNeet4th from './components/WhyInNeet4th.vue'
  import PendidikanPenentu5th from './components/PendidikanPenentu5th.vue'
  import BonusDemografi6th from './components/BonusDemografi6th.vue'
  import PeranPemerintahKomunitas7th from './components/PeranPemerintahKomunitas7th.vue'
  import Epilog9th from './components/Epilog9th.vue'
  import Sumber10th from './components/Sumber10th.vue'
  import bgMusic from "./assets/bg-music.mp3";
</script>

<template>

  <div>
    <!-- Buttons to trigger content -->
    <div class="">
      <div v-if="!showContent">

        <div class="grid grid-cols-12 gap-4 mb-2 md:mb-2">
          <div class="col-span-12 md:col-span-6 lg:col-start-3 lg:col-span-8 p-8 flex flex-col items-center">
            <img src="../src/assets/karedok.png"
              class="w-24 h-24 sm:w-64 sm:h-64 mb-2 sm:mb-10 animate__animated animate__wobble animate__infinite infinite infinite karedok ">
            <span class="quicksand-font text-base md:text-xl lg:text-2xl text-center">
              Pilih tombol kiri jika ingin membaca sambil mendengarkan musik, dan tombol kanan jika ingin membaca tanpa
              musik.
            </span>
            <br>
          </div>
        </div>

        <div class="flex flex-row items-center md:flex-row justify-center  md:space-y-0 md:space-x-20 space-x-10">
          <div @click="StartWithMusic()" class='button w-20 h-20 md:w-40 md:h-40 bg-blue-500 rounded-[24px] cursor-pointer select-none
              active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
              active:border-b-[0px]
              transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
              border-b-[1px] border-blue-400
            '>
                      <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '> <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor"
              class="bi bi-volume-up-fill" viewBox="0 0 16 16">
              <path
                d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
              <path
                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
              <path
                d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            </svg></span>
          </div>

          <div @click="StartWithSilent()" class='button w-20 h-20 md:w-40 md:h-40 bg-blue-500 rounded-[24px] cursor-pointer select-none
              active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
              active:border-b-[0px]
              transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
              border-b-[1px] border-blue-400
            '>
                      <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor"
              class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path
                d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
          </div>
        </div>



      </div>



      <!-- Content -->
      <div v-else>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-start-1 col-end-13 flex flex-col items-center">
            <!-- <WhyInNeet4th  /> -->
            <Judul @change-next-intro="updateNextIntro" />
            <Intro v-if="nextIntro" @change-next-neet3rd="updateNextNeet3rd" />
            <!-- <div v-if="nextNeet3rd">
              <Neet3rd @change-next-whyInNeet4th="updateNextWhyInNeet4th" />
              <WhyInNeet4th v-if="nextWhyInNeet4th"
                @change-next-pendidikanPenentu5th="updateNextPendidikanPenentu5th" />
              <PendidikanPenentu5th v-if="nextPendidikanPenentu5th" />
              <BonusDemografi6th />
              <PeranPemerintahKomunitas7th />
              <Epilog9th />
              <Sumber10th />
            </div> -->

            <div v-if="nextNeet3rd">
              <Neet3rd  />
              <WhyInNeet4th  />
              <PendidikanPenentu5th  />
              <BonusDemografi6th />
              <PeranPemerintahKomunitas7th />
              <Epilog9th />
              <Sumber10th />
            </div>
          </div>
        </div>

        <!-- Audio Control -->
        
        <button @click="toggleAudio"
          class="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none">
          <span v-if="!isPlaying">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill"
              viewBox="0 0 16 16">
              <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill"
              viewBox="0 0 16 16">
              <path
                d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </span>
        </button>


      </div>
      <audio ref="bgAudio" :src="bgMusic" @ended="resetAudio" preload="auto" loop></audio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nextIntro: false,
        nextNeet3rd: false,
        nextWhyInNeet4th: false,
        nextPendidikanPenentu5th: false,
        isPlaying: false,
        showContent: false, // Initially hide content
      };
    },
    mounted() {
      //   const audio = this.$refs.bgAudio;

      // audio.addEventListener('canplaythrough', () => {
      //   // The audio is ready to be played, so play it now
      //   this.isPlaying = true;
      //   audio.play();
      // });

      // this.toggleAudio

    },
    methods: {
      StartWithMusic() {
        this.toggleAudio()
        this.showContent = true
      },
      StartWithSilent() {

        this.showContent = true
      },
      toggleAudio() {
        const audio = this.$refs.bgAudio;

        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }

        this.isPlaying = !this.isPlaying;
      },

      resetAudio() {
        this.isPlaying = false;
      },

      updateNextIntro(value) {
        this.nextIntro = value;
      },
      updateNextNeet3rd(value) {
        this.nextNeet3rd = value;
      },
      updateNextWhyInNeet4th(value) {
        this.nextWhyInNeet4th = value
      },
      updateNextPendidikanPenentu5th(value) {
        this.nextPendidikanPenentu5th = value
      }
    }
  }
</script>
<style scoped>
  html {
    zoom: 1;
  }

  .quicksand-font {
    font-family: 'Quicksand', sans-serif;
  }



  .karedok {

    --animate-duration: 3s;

  }

  .karedok:hover {
    filter: drop-shadow(0 0 0.8em #fbf1cf);
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

  /* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>