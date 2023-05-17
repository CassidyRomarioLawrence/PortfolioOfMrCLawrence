<template>
  <div id="home">
    <LandingC />
  </div>
  <div id="about">
    <h2 class="py-3 mb-3 text-center">About Me :</h2>
    <AboutC />
  </div>
  <div id="resume">
    <h2 class="py-3 mb-3 text-center">Resume :</h2>
    <ResumeC />
  </div>
  <div id="projects">
    <h2 class="py-3 mb-3 text-center">Projects :</h2>
    <ProjectsC />
  </div>
</template>

<script>
import LandingC from '@/components/LandingC.vue';
import AboutC from '@/components/AboutC.vue';
import ResumeC from '@/components/ResumeC.vue';
import ProjectsC from '@/components/ProjectsC.vue';

export default {
  name: 'HomeView',
  components: {
    LandingC,
    AboutC,
    ResumeC,
    ProjectsC
  }
}
</script>

<style>
#home,#about,#resume,#projects{
  min-height: 100vh;
  scroll-margin-block: 60px;
}
#home{
  background-image: linear-gradient(to right, rgb(119, 1, 119),rgb(237, 59, 237),rgb(0, 183, 255));
}


#about h2{
  font-weight: bolder;
  text-shadow: 2px 1px 1px rgba(128, 128, 128, 0.677);
}

#resume h2{
  font-weight: bolder;
  text-shadow: 2px 1px 1px rgba(128, 128, 128, 0.677);
}

#projects h2{
  font-weight: bolder;
  text-shadow: 2px 1px 1px rgba(128, 128, 128, 0.677);
}
</style>
