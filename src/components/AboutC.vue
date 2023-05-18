<template>
    <div class="container about d-flex align-items-center justify-content-center" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos-duration="1200">
        <div class="row w-100">
            <div class="col-md-6 text-center my-auto p-3">
                <img src="https://i.postimg.cc/TwKZr5gP/Picsart-23-05-04-09-12-42-406-removebg-preview-1.png" class="rounded-circle profile img-fluid" alt="" style="width: 25rem;">
            </div>
            <div class="col-md-6 p-2">
                <h5>Who am I ?</h5><br>

                <p>Hello, my name is Cassidy Romario Lawrence. <br><br> I come from Rocklands Mitchell's Plain and take pride in being a responsible and dedicated individual. In addition to coding, I enjoy playing video games, soccer, and occasionally working out to keep myself healthy and fit. <br><br>As a friendly and approachable person, I always look forward to new challenges that allow me to hone my skills and work as a team player. I am confident in my ability to work independently and take ownership of my tasks. <br><br>My trustworthy nature, goal-oriented mindset, punctuality, and good manners have always helped me build strong working relationships. I am an enthusiastic learner and always seek opportunities to sharpen my existing skills and acquire new ones to enhance my personal and professional growth.</p>

                <h4 class="my-4">Tech Stack</h4>
            <div class="container skills">
                <img src="https://i.postimg.cc/2SHSzZx9/Java-Script-logo.png" alt="">
                <img src="https://i.postimg.cc/XJ55G8HY/mysql.png" alt="">
                <img src="https://i.postimg.cc/15M8tt0T/Vue-js-Logo-2-svg.png" alt="">
                <img src="https://i.postimg.cc/SxND2JBz/Bootstrap-logo-svg.png" alt="">
                <img src="https://i.postimg.cc/wv7hgNs9/CSS3-logo-svg.png" alt="">
                <img src="https://i.postimg.cc/Lsjcvqs6/html-5-v1.png" alt="">
                <img src="https://i.postimg.cc/cCcYcBpM/2560px-Node-js-logo-svg.png" alt="">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.about{
    min-height: 75vh;
    border: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 5px 2px rgba(128, 128, 128, 0.629);
    background-color: whitesmoke;
}

.profile{
    border-radius: 50% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 5px 2px 2px rgba(128, 128, 128, 0.629);
    border: 1px solid rgba(128, 128, 128, 0.25);
}

h5,h4{
    font-weight: bolder;
}

.skills img{
    width: 3.5rem;
    padding-right: 8px;
}

@media screen and (max-width: 760px){
    .profile{
        width: 20rem;
    }
}

</style>