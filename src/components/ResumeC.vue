<template>
<div class="container resume">
    <div class="row">
        <div class="col-md-6">
            <div class="container work p-5 my-3" data-aos="fade-right" data-aos-duration="2000">
                <h3 class="text-center py-2">Work</h3><br>

                <ul>
                <li>
                    <h4>Life Choices Studio</h4>
                    <h6>Intern Full Stack Developer</h6>
                    <p>Duration : Currently</p>
                </li>
                <li>
                    <h4>Oaklands High School</h4>
                    <h6>IT Support & Secretarial Assistant</h6>
                    <p>Duration : 2022 - 2023</p>
                </li>
                <li>
                    <h4>Disable People South Africa</h4>
                    <h6>HR Administrator</h6>
                    <p>Duration : 2019 - 2020</p>
                </li>
                <li>
                    <h4>PEP Stores</h4>
                    <h6>General Assistant</h6>
                    <p>Duration : 2017 - 2018</p>
                </li>
            </ul>
            </div>
        </div>
        <div class="col-md-6">
            <div class="container education p-5 my-3" data-aos="fade-left" data-aos-duration="2000">
                <h3 class="text-center py-2">Education</h3><br>

                <ul>
                <li>
                    <h4>Life Choices Coding Academy</h4>
                    <h6>Software Development</h6>
                    <p>Duration : 2022 - 2023</p>
                </li>
                <li>
                    <h4>College of Cape Town</h4>
                    <h6>CCNA(Networking) & IT Essentials</h6>
                    <p>Duration : 2021</p>
                </li>
                <li>
                    <h4>Siyaya Skills Institute</h4>
                    <h6>Business Administration</h6>
                    <p>Duration : 2018 - 2020</p>
                </li>
                <li>
                    <h4>Rocklands Secondary School</h4>
                    <h6>Matric</h6>
                    <p>Duration : 2012 - 2016</p>
                </li>
            </ul>
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
.work,.education{
    min-height: 80vh;
    border: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 5px 2px rgba(128, 128, 128, 0.629);
    background-color: whitesmoke;
    cursor: pointer;
}

h3{
    font-weight: bolder;
}

.work:hover,.education:hover{
    background-image: linear-gradient(to right, rgb(119, 1, 119),rgb(0, 183, 255));
    color: white;
}
</style>