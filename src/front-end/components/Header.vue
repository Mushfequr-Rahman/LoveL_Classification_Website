<template>
    <nav id="navigation-bar" class="navbar container is-fluid" role="navigation" aria-label="main navigation">
        <div id="page-logo" class="navbar-brand">
            <a class="navbar-logo" href="#">
                <img src="https://www.5lovelanguages.com/app/themes/5love/static/images/nav/header_logo.png" alt="5 Love Languages" />
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="dropdown-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="dropdown-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <h1 class="title is-1 has-text-weight-light" id="title"> Love Langs - Slogan </h1>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="button is-danger is-rounded" href="signup.html">Sign Up</a>
                </div>
                <div class="navbar-item">
                    <a class="button is-danger is-rounded" href="login.html">Login</a>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
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
    font-family: "Brush Script MT", "Brush Script Std", cursive;
    font-size: 5rem;
}
</style>
