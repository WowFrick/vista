document.write(`
<div id="welcomeDiv" class="main">
<section class="row" style="margin-top: 10px;">
        <div class="card">
            <picture>
                <a class="main-logo" id="click" href="/vista/index">
                <img src="/vista/assets/user-interface/logo.png" style="width:auto;">
                </a>
            </picture>
        </div>
        <div class="card ref" id="hover-main">
            <a href="/vista/about-me">About me</a>
        </div>
        <div class="card ref" id="hover-main">
            <a href="/vista/hobbies">Hobbies</a>
        </div>  
        <div class="card ref" id="hover-main">
            <a href="/vista/to-learn">To-learn:</a>
        </div>
        <div class="card lref">
            <a>Tijl Pleuger</a></br>
            <a>400927</a></br>
            <a>Vista</a>
        </div>
</section>
</div>
<div class="main-button">
<input class="main-button" type="button" name="answer" value="      " onclick="showDiv()" />
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
  </svg>
</div>
<script>
    function showDiv() {
    if (document.getElementById("welcomeDiv").style.display == 'block') { 
        document.getElementById('welcomeDiv').style.display = "none";
    }
    else {
        document.getElementById('welcomeDiv').style.display = "block";
    }
}
</script>
`);