<template>
    <div class="container">
        <div class="card-group project-cards">
            <div class="card">
                <div class="card-img-body">
                    <img class="card-img" src="https://i.postimg.cc/wTQDfjfg/Screenshot-2023-05-10-200504.png" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Portfolio Project</h4>
                    <p class="card-text">This is a portfolio project I worked on during my time in the Life Choices Coding Academy using HTML,CSS and Bootstrap displaying information about myself.</p>
                    <a href="https://romariolawrence.netlify.app/" target="_blank" class="btn">Live Site</a>
                </div>
            </div>
            <div class="card">
                <div class="card-img-body">
                    <img class="card-img" src="https://i.postimg.cc/GmRNJvWw/Screenshot-2023-05-12-084350.png" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Blog Website</h4>
                    <p class="card-text">This is a soccer blog website built with WordPress giving users the lastest and trending blogs as well as allowing them to leave their comments on individual post.</p>
                    <a href="https://dev-football-bloggers.pantheonsite.io/" target="_blank" class="btn">Live Site</a>
                </div>
            </div>
            <div class="card">
                <div class="card-img-body">
                    <img class="card-img" src="https://i.postimg.cc/DfBJ79G4/Screenshot-2023-05-12-090927.png" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Calculator Project</h4>
                    <p class="card-text">This is a Calculator built with JavaScript and designed with bootstrap and CSS allowing any user to add,subtract,divide and multiply figures of any number.</p>
                    <a href="https://cassidy-calculator.netlify.app/" target="_blank" class="btn">Live Site</a>
                </div>
            </div>
            <div class="card">
                <div class="card-img-body">
                    <img class="card-img" src="https://i.postimg.cc/TPmsv8tZ/active.png" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Collaborative Project</h4>
                    <p class="card-text">This is a Collaborative Project built with a colleague of mine  Meezaan Davids using vue and node js, which allows users to purchase sporting goods.</p>
                    <a href="https://activ8-fullstack.web.app/" target="_blank" class="btn">Live Site</a>
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
.card {
    border: none;
    border-radius: 0;
    border: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 5px 2px rgba(128, 128, 128, 0.629);
    background-color: whitesmoke;
}

.card-img {
    border-radius: 0;
}

.project-cards {
    .card {
        display: flex;
        flex-flow: wrap;
        flex: 100%;
        margin-bottom: 40px;

        &:nth-child(even) .card-img-body {
            order: 2;
        }

        &:nth-child(even) .card-body {
            /* padding-left: 0; */
            padding-right: 1.25rem;
        }

        @media (max-width: 576px) {
            display: block;
        }

    }

    .card-img-body {
        flex: 1;
        overflow: hidden;
        position: relative;

        @media (max-width: 576px) {
            width: 100%;
            height: 200px;
            margin-bottom: 20px;
        }

    }

    .card-img {
        width: 100%;
        height: auto;
        position: absolute;
        margin-left: 50%;
        transform: translateX(-50%);

        @media (max-width: 1140px) {
            margin: 0;
            transform: none;
            width: 100%;
            height: auto;
        }

    }

    .card-body {
        flex: 2;
        padding: 20px;

        @media (max-width: 576px) {
            padding: 20px;
        }

    }

    .btn{
        color:white;
        background-color: rgb(0, 183, 255);
    }

    .btn:hover{
        background-color: #FC915F;
    }
}
</style>