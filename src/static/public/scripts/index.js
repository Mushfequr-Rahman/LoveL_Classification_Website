window.onload = function() {
    console.log("Landed on main Page");
    $("#login_button").click(function() {
        console.log("Log in button clicked");
        window.location = '/login'
    })
}