<template>
      <section class="site-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text text-uppercase">Hey, I am Tesfay👋</h3>
                        <h4 class="text-uppercase">I am a <span id="subheading">{{ typeValue }} <span class="blinking-cursor">|</span> <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span></span> </h4>
                        <hr>
                        <p>Experienced web developer by developing different systems in MIT Mekelle institute of technology </p>
                        <p data-aos="zoom-in" data-aos-duration="1500"> Passionate about exploring the edges of full stack, adept at building end-to-end web applications.</p>
                        <p   v-motion="{
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }">Have a strong appetite to learn new technologies in a short span and implement independently.</p>
                        <p   v-motion="{
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }">Proficient in Nodejs, Laravel, Vue.js, and JavaScript, and Django committed to developing high standards secure web applications with good coding standards.</p>
                        <p   v-motion="{
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }">Committed to delivering in both backend and full stack development.</p>
    <p><github-button href="https://github.com/tesfish2012">Follow @tesfish2012</github-button></p>
                        <hr>
                        <div class="social">
                          <a target="_blank" rel="noreferrer" href="https://github.com/tesfish2012" class="social social-link"><i
                                  class="fab fa-github"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tesfay-g-tsadkan-181004195/"
                              class="social social-link"><i class="fab fa-linkedin"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://t.me/@tesfaymit" class="social social-link">
                              <i class="fab fa-telegram"></i> </a>
                          <a href="mailto: tesfay3814@gmail.com" class="social social-link"><i class="fas fa-envelope"></i></a>
                        </div>
                        <div class="site-buttons">
                            <div class="d-flex flex-row flex-wrap">
                                <button type="button" class="btn button primary-button mr-4 text-uppercase first-btn"><a
                                        href="https://drive.google.com/file/d/1M9NyA8nOhFeTHXYgrihlyerOK7EXUEgn/view" target="_blank">RESUME &nbsp;<i
                                            class="fas fa-external-link-alt" aria-hidden="true"></i></a></button>
                                <button type="button" class="btn button secondary-button text-uppercase second-btn"><a
                                        href="mailto: tesfay3814@gmail.com">Hire Me</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                      <!-- <Vue3Lottie :animationData="DeveloperJSON"  :speed="1" loop autoplay /> -->
                      <img class="profile" src="@/assets/img/profile/1.png" alt="">
                    </div>

                </div>
            </div>
      </section>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import DeveloperJSON from '@/assets/developer.json'
import GithubButton from 'vue-github-button'
export default {
  name: 'AboutMe',
  components: {
    Vue3Lottie,
    GithubButton
  },
  data(){
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ['Software Developer', 'Full Stack Developer', 'Nodejs Developer', 'Vuejs Developer','Laravel Developer','Django Developer'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      DeveloperJSON
    }
  },
  created() {
   setTimeout(this.typeText, this.newTextDelay + 200);
},
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
}
</script>

<style scoped>
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
.profile{
max-width: fit-content;
max-height: fit-content;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>