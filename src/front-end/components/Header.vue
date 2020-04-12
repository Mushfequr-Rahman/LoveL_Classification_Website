<template>
    <nav id="navigation-bar" class="navbar container is-fluid" role="navigation" aria-label="main navigation">
        <div id="page-logo" class="navbar-brand">
            <a class="navbar-logo" href="/">
                <!--img src="https://www.5lovelanguages.com/app/themes/5love/static/images/nav/header_logo.png" alt="5 Love Languages" /-->
                <img src ="@/img/logo_source.png" />
            </a>
            <a  role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="dropdown-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div> 
            <div @click="getSampleData()" Click here to test />
        </div>
        <div class="navbar-menu" id="dropdown-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <h1 class="title" id="title"> Discover the Love Language <br> Between You and Your Lover </h1>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="button is-danger is-rounded" href="signup.html">Sign Up</a>
                </div>
                <div class="navbar-item">
                    <a class="button is-danger is-rounded" href="login.html">Login</a><br>
                </div>
            </div>
            <div>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },


methods:
{
    getSampleData: function (route){
        fetch("http://localhost:3000/dummy_user").then(function(data)
        {
            console.log("received Data From server:",data)
        })

    }
}
}
</script>

<style lang="scss">
#navigation-bar {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
}
#page-logo {
    margin-right: 3rem;
}
#title {
    color: purple;
    //font-family: "Brush Script MT", "Brush Script Std", cursive;
    font-family: Candara, sans-serif;
    font-style: italic;
    font-size: 4rem;
    letter-spacing: -1px
}
</style>
