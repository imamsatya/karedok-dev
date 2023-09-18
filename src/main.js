import { createApp } from 'vue'
import './style.css'

// import '@lottiefiles/lottie-player/dist/lottie-player';
// import 'animate.css';
import('animate.css/animate.min.css').then(() => {
  // The 'animate.css' styles are now available
});

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init({
//     // Configuration options here
//   });
import 'aos/dist/aos.css';

// Dynamically import and initialize AOS when needed
import('aos').then((AOS) => {
  AOS.init({
    // Configuration options here
  });
});
import App from './App.vue'

createApp(App).mount('#app')
import('@lottiefiles/lottie-player/dist/lottie-player').then(() => {
  // The lottie-player module is now available
});