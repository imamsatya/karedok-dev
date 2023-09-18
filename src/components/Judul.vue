<template>
  <!-- <div class="full-page">
    <h6 v-if="showJudulLengkap" class="mx-16">
      <span class="quicksand-font text-7xl" v-if="showTypingAnimation">{{ typedText }}</span>
      <span class="quicksand-font text-7xl" v-else>{{ judulLengkap }}</span>
      <span class="blinking-cursor"></span>
    </h6>
    <div class="grid grid-cols-12 gap-4 ">
      <div class="col-start-2 col-end-12  flex flex-col items-center">
        <div v-if="showjudulSingkat" class="flex flex-col items-center mb-72 quicksand-font">
          <img src="../assets/karedok.png"
            class="w-64 h-64 mb-10 animate__animated animate__wobble animate__infinite infinite infinite karedok" />
          <h1 class="fade-in  text-9xl mt-5">{{ judulSingkat }}</h1>
          <span class="fade-in-judul-lengkap  text-2xl">
            [ <span class="italic">{{ judulLengkap }}</span> ]
          </span>
          <br>

          <div class="icon-container ">
            <p>Scroll Down</p>
            <br>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20" fill="none"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevron-down animate__animated animate__shakeY animate__infinite animate__duration-4000">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  </div> -->
  <div class="full-page">
    <h6 v-if="showJudulLengkap" class="mx-4 sm:mx-16">
      <!-- Use mx-4 on small screens -->
      <span class="quicksand-font text-4xl sm:text-7xl" v-if="showTypingAnimation">{{ typedText }}</span>
      <span class="quicksand-font text-4xl sm:text-7xl" v-else>{{ judulLengkap }}</span>
      <span class="blinking-cursor"></span>
    </h6>
    <div class="grid grid-cols-12 gap-4 ">
      <div class="col-start-2 col-end-12 sm:col-start-1 sm:col-end-13  flex flex-col items-center">
        <!-- Adjust column placement on small screens -->
        <div v-if="showjudulSingkat" class="flex flex-col items-center mb-4 sm:mb-72">
          <!-- Use mb-4 on small screens -->
          <img src="../assets/karedok.png"
            class="w-24 h-24 sm:w-64 sm:h-64 mb-2 sm:mb-10 animate__animated animate__wobble animate__infinite infinite infinite karedok">
          <!-- Adjust image size on small screens -->
          <h1 class="fade-in quicksand-font text-4xl sm:text-9xl mt-2 sm:mt-5">
            <!-- Adjust text size on small screens -->
            {{ judulSingkat }}
          </h1><br>
          <span class="mt-6 fade-in-judul-lengkap quicksand-font text-xl sm:text-2xl">
            [ <span class="italic">{{ judulLengkap }}</span> ]
          </span>
          <br>
          <!-- <div class="icon-container">
          <p>Scroll Down</p>
          <br>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down animate__animated animate__shakeY animate__infinite animate__duration-4000">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </div> -->

          <div class="bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center absolute">
            <p class="mb-2 ml-2">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevron-down animate__animated animate__shakeY animate__infinite animate__duration-4000">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script>
  export default {
    data() {
      return {
        judulLengkap: "Kisah Anak Rumahan Mengandalkan Duit Orang Tua dan Keajaiban",
        judulSingkat: "KAREDOK",
        typedText: "",
        showTypingAnimation: true,
        showjudulSingkat: false,
        showJudulLengkap: true,
        next: false
      };
    },
    mounted() {
      this.startTypingAnimation();
    },
    methods: {
      emitNextIntro() {
        this.$emit('change-next-intro', true); // Emit the event with the value true
      },
      startTypingAnimation() {
        const charsPerSecond = 180; // Adjust the speed of typing animation here
        const totalChars = this.judulLengkap.length;
        const animationDuration = (totalChars / charsPerSecond) * 5000;
        // const animationDuration = (totalChars / charsPerSecond) * 1;

        let currentCharIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentCharIndex === totalChars) {
            clearInterval(typingInterval);
            this.showTypingAnimation = false;
            setTimeout(() => {
              this.showjudulSingkat = true;
              this.showJudulLengkap = false;
            }, 1000); // Adjust the delay before showing the second h1

            //selesai
            this.emitNextIntro()
          } else {
            this.typedText += this.judulLengkap[currentCharIndex];
            currentCharIndex++;
          }
        }, animationDuration / totalChars);
      },
    },
  };
</script>




<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  .quicksand-font {
    font-family: 'Quicksand', sans-serif;
  }

  .icon-container {
    position: absolute;
    /* bottom: 5%;
    left: 50%;
    transform: translateX(-50%); */
  }

  .feather-chevron-down {
    --animate-duration: 12s;
  }

  .full-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
    justify-content: center;
    /* Center content vertically */
    align-items: center;
    /* Center content horizontally */
  }

  /* .karedok-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 300px;
  } */

  .karedok {

    --animate-duration: 3s;

  }

  .karedok:hover {
    filter: drop-shadow(0 0 0.8em #fbf1cf);
  }

  .blue-square {
    width: 256px;
    height: 256px;
    background-color: blue;
  }

  .typing-animation {
    overflow: hidden;
    /* Hide overflowing characters during animation */
    white-space: nowrap;
    /* Prevent line breaks during animation */
    border-right: 0.15em solid;
    /* Create the typing cursor effect */
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    font-size: 60px;
  }

  .fade-in {
    opacity: 0;
    animation: fade-in 1s ease-in-out forwards;
    font-size: 60px;
  }

  .fade-in-judul-lengkap {

    opacity: 0;
    animation: fade-in 1s ease-in-out forwards;
  }

  .blinking-cursor {
    display: inline-block;
    width: 0.4em;
    height: 4.0em;
    background-color: black;
    animation: blink-caret 0.75s step-end infinite;
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