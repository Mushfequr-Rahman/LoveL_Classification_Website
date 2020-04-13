<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">

            <a href="/test" class="fill-div">CLICK ME FOR QUICK TEST</a>
        </div>
        <div class="hero-body">
            <div class="columns container is-fluid is-centered">
                <!-- <div class="column is-one-fifth">
                    <img src="@/img/wordsofaffirmation.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/actsofservice.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/receivinggifts.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/qualitytime.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/physicaltouch.png" width="150" height="150">
                </div> -->
            </div>
            <!-- Slideshow reference: https://www.w3schools.com/howto/howto_js_slideshow.asp -->
            <h1 class="title is-1 has-text-centered">What are Love Languages?</h1>
            <br><br>
            <div>
                <div class="slideshow-container">
                    <!-- Full-width images with number and caption text -->
                    <div class="mySlides fade">
                        <!-- <div class="numbertext">1 / 3</div> -->
                        <img class="imageLoveLang" src="@/img/wordsofaffirmation.png" width="150" height="150" style="margin:0 auto;">
                        <br><br><br><br>
                        <div class="text">Words of affirmation – using words to build up the other person. “Thanks for taking out the garbage.” Not – “It’s about time you took the garbage out. The flies were going to carry it out for you.”</div>
                    </div>

                    <div class="mySlides fade">
                        <!-- <div class="numbertext">2 / 3</div> -->
                        <img class="imageLoveLang" src="@/img/actsofservice.png" width="150" height="150" style="margin:0 auto;">
                        <br><br><br><br>
                        <div class="text">Acts of Service – Doing something for your spouse that you know they would like. Cooking a meal, washing dishes, vacuuming floors, are all acts of service.</div>
                    </div>

                    <div class="mySlides fade">
                        <!-- <div class="numbertext">3 / 3</div> -->
                        <img class="imageLoveLang" src="@/img/receivinggifts.png" width="150" height="150" style="margin:0 auto;">
                        <br><br><br><br>
                        <div class="text">Gifts – a gift says, “He was thinking about me. Look what he got for me.”</div>
                    </div>

                    <div class="mySlides fade">
                        <!-- <div class="numbertext">1 / 3</div> -->
                        <img class="imageLoveLang" src="@/img/qualitytime.png" width="150" height="150" style="margin:0 auto;">
                        <br><br><br><br>
                        <div class="text">Quality time – by which I mean, giving your spouse your undivided attention. Taking a walk together or sitting on the couch with the TV off – talking and listening.</div>
                    </div>

                    <div class="mySlides fade">
                        <!-- <div class="numbertext">1 / 3</div> -->
                        <img class="imageLoveLang" src="@/img/physicaltouch.png" width="150" height="150" style="margin:0 auto;">
                        <br><br><br><br>
                        <div class="text">Physical touch – holding hands, hugging, kissing, sexual intercourse, are all expressions of love.</div>
                    </div>

                    <!-- Next and previous buttons -->
                    <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
                    <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
                    </div>
                    <br>

                    <!-- The dots/circles -->
                    <div style="text-align:center">
                    <span class="dot" v-on:click="currentSlide(1)"></span>
                    <span class="dot" v-on:click="currentSlide(2)"></span>
                    <span class="dot" v-on:click="currentSlide(3)"></span>
                    <span class="dot" v-on:click="currentSlide(5)"></span>
                    <span class="dot" v-on:click="currentSlide(5)"></span>
                    </div>
            </div>
            <br><br>
            <!-- <h2 class="subtitle is-2 has-text-centered"></h2>Basic Layout Skeleton using Bulma CSS Framework</h2> -->
            <div class="columns is-mobile container is-fluid is-centered">
                <div class="column is-half">
                    <p>
                        Out of these five, each of you has a primary love language which speaks more deeply to you than all the others. Discovering each other’s language and speaking it regularly is the best way to keep love alive in a marriage.
                    </p>
                </div>
                <!-- <div class="column is-three-quarters">
                    <div class="columns container is-fluid">
                        <div class="column is-three-quarters">
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam quia explicabo earum repellat, et dolore exercitationem tempora. Ab autem fugit dolor iusto corporis quo possimus error. Doloribus alias eius dolorem.
                                Dolor voluptatem rerum quibusdam fugit culpa quas praesentium corporis aliquid magni assumenda sed hic error, ex veniam dolorum eius ut delectus consectetur voluptas et ullam eaque porro tempora. Fuga et magni quidem minima
                                velit quaerat reiciendis error esse recusandae quos libero, enim voluptas. Nostrum animi repudiandae iste quia similique veritatis reprehenderit recusandae consectetur veniam qui quos optio at laborum, soluta sint aut id
                                pariatur labore? Eveniet iure optio blanditiis.</p>
                        </div>
                        <div class="column">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsa soluta, fugit fuga recusandae voluptas saepe voluptates delectus nam odit voluptate sed facilis quis. Ducimus ratione, ad sequi modi dolor laboriosam ut
                                perferendis, impedit et fugiat similique tempora eveniet quia consequatur debitis possimus. Cum perferendis libero sequi error quia expedita?</p>
                        </div>
                    </div>

                </div>
                <div class="column">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique neque beatae sit nobis eveniet dolorem numquam vel tenetur enim incidunt, dolores adipisci repellat porro aspernatur dolore exercitationem tempora! Id sequi
                        quod inventore dolor consectetur consequuntur corporis iure voluptatum laborum repellat aliquam sed, eaque voluptates ipsum. Vitae sit maiores quis!</p>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      slideIndex: 0
    }
  },
  methods: {
    showSlidesAuto: function () {
      console.log('Auto')
      var slides = document.getElementsByClassName('mySlides')
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      this.slideIndex++
      if (this.slideIndex > slides.length) { this.slideIndex = 1 }
      slides[this.slideIndex - 1].style.display = 'block'
      setTimeout(this.showSlides, 2000) // Change image every 2 seconds
    },
    plusSlides: function (n) {
      this.showSlides(this.slideIndex += n)
    },
    currentSlide: function (n) {
      this.showSlides(this.slideIndex = n)
    },
    showSlides: function (n) {
      var i
      var slides = document.getElementsByClassName('mySlides')
      var dots = document.getElementsByClassName('dot')
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    }
  },
  mounted: function () {
    this.showSlidesAuto()
  }
}
</script>

<style lang="scss">
.imageLoveLang{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
.test-button {
    text-align: center;
    background-color: purple;
    margin-left: 0px;
    padding: 2rem;
    font-weight: bold;
}
.fill-div {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
}
.fill-div:hover {
  color: #eb0784;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
//   margin-top: 20rem;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 7px;
  width: 7px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
