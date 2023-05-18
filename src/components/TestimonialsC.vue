<template>
<div class="container py-4">
    <div id="carouselExample" class="carousel slide" data-aos="zoom-in" data-aos-duration="2000">
      <div class="carousel-inner">
        <div class="carousel-item active py-5">
            <div class="container test-card">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://i.postimg.cc/nr5SNxdq/meezaan.jpg" class="rounded-circle" alt="..." width="300px" height="300px">
                    </div>
                    <div class="col-md-6">
                        <h2>Meezaan Davids</h2>
                        <h5>Colleague</h5><br>
                        <p>Cassidy is a very smart and open minded guy. He has a keep to himself character but once engaging in conversations, he genuinely has such good takes on different aspect of things.He has a lot of skills varying from football to coding which I personally think can only get better.Cassidy will go very far in life with his open minded mentality and I'm sure will be a great success.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item py-5">
            <div class="container test-card">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://i.postimg.cc/wxPFzWK2/DSC-3547.jpg" class="rounded-circle my-auto" alt="..." width="300px" height="300px">
                    </div>
                    <div class="col-md-6">
                        <h2>Mu-een Slamat</h2>
                        <h5>Colleague</h5><br>
                        <p>Cassidy has been a good friend of mine for 2 years and I can honestly say that he is open-minded ,friendly,funny,hard working, humble and a genuine person.He never hesitates to help out the next person.He is goal driven.He will always try his best to solve a problem and never struggles to ask for help if needed.His creative side almost never disappoints.Once he sets his mind to solve a task, he gets it done.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item py-5">
            <div class="container test-card">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://i.postimg.cc/bY4r7NBB/C11-Brogan-Gys-2-cropped.jpg" class="rounded-circle my-auto" alt="..." width="300px" height="300px">
                    </div>
                    <div class="col-md-6">
                        <h2>Brogan Gys</h2>
                        <h5>Colleague</h5><br>
                        <p>Cassidy is someone who always sticks to the task at hand, and gives 100% to all his tasks / projects.He has great social skills making a good team player, he is a smart and knowledgeable guy that always has good advice to offer to any one that seeks it.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item py-5">
            <div class="container test-card">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://i.postimg.cc/WzkTgWbx/Joel-Profile.jpg" class="rounded-circle my-auto" alt="..." width="300px" height="300px">
                    </div>
                    <div class="col-md-6">
                        <h2>Joel Mukanya</h2>
                        <h5>Lecturer</h5><br>
                        <p>Cassidy is a very creative, go-getter, and well-behaved student. He does enjoy working with his classmates and works well on his project.He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired as a developer.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item py-5">
            <div class="container test-card">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://i.postimg.cc/0jM2Z5ZW/DSC-3626.jpg" class="rounded-circle my-auto" alt="..." width="300px" height="300px">
                    </div>
                    <div class="col-md-6">
                        <h2>Asandile Langeni</h2>
                        <h5>Colleague</h5><br>
                        <p>Cassidy is a reliable friend, he is joyful to be around. He likes learning about new stuff, he would go learn new thing and come to discuss with us in order to help us get the knowledge he has. He is hard working furthermore he is a team player that knows how to accommodate everyone. Cassidy is always smiling and if he is not, he is making sure that those who around him smile.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.test-card{
    max-width: 70%;
    padding: 20px;
    border: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 5px 2px rgba(128, 128, 128, 0.629);
    background-color: whitesmoke;
}

.carousel-control-next-icon,
.carousel-control-prev-icon{
    background-color: black;
    border-radius: 50%;
    padding: 15px;
}

@media screen and (max-width: 760px){
    img{
        width: 250px;
    }
}

@media screen and (max-width: 410px){
    img{
        width: 200px;
    }
}
</style>