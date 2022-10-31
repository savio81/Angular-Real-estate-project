<!DOCTYPE html>
<html lang="en">

<head>


 
<!------------------------Scroll to top button------------------------------------------------>
<style>



    #scrollToTopButton{
  position: fixed;
  bottom: 40px;
  right: 25px;
  font-size: 25px;
  z-index: 99;
  width: 50px;
  height: 50px;
  background-color:red;
  color:black;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 6px;
  border-radius: 50%;
  }
  #scrollToTopButton:hover, i:hover {
  background-color:white;
  color:red;
  }
  #nav:hover
{
  background-color:#e60e23!important;

}

.nav-item :hover{
  margin-bottom: 10px;
  /* background-color: aquamarine; */
  border-bottom: 3px;
  border-color: red;
  border-bottom-style: solid;
}

    .logo {
  width: 110px;
  height: 90px;
  padding: 3px;
  margin: 0;
  padding: 0;
}
.fas:hover{background: none!important ;}
.nav-item{ flex-wrap:wrap;}
.menu li a:hover {
  color: red !important;
  opacity: 0.5;
}
.navbar-nav{
  display: flex;
  align-items: center;
  padding: 0px 7.5px;
}

/* CSS FOR FOOTER */
.footer{
margin-bottom:15px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.footer-content{
  display:flex;
  justify-content:space-between;
  padding: 10px 20px;
}
.footer-logo{
  width: 150px;
  height: 120px;
  padding: 3px;
  margin:0px 0px 0px 10px;
  padding: 0;
}
.footer-heading{
  color:white;
}
.footer-left, .footer-right, .footer-middle{
text-align:center;
}
.icons{
  margin-left:-30px;
}
.footer-links i{
font-size:30px;
width:40px;
padding:5px;
height:40px;
margin-top:30px;
}
.footer-middle a i:hover{
background-color:white;
border-radius:50px;
color:red;
}
.footer-middle-list-item{
list-style:none;
font-size:15px;
font-family:cursive;
margin:5px 0px 0px 15px;
text-align:left;
}
.footer-middle-list-item a{
text-decoration:none;
color:white;
}
.footer-middle-list-item a:hover{
color:red;
}
.footer-right{
  margin-top:-15px;
}
.footer-contact-button{
font-size:20px;
background-color:red;
color:black;
padding:10px;
border:none;
border-radius:10px;
text-decoration:none;
}
.footer-contact-button:hover{
background-color:white;
color:red;
}
.footer-bottom-tagline{
color:white;
font-size:15px;
font-family:cursive;
margin-bottom:25px;
}


.footer-copyright{
text-align:center;
color:white;
margin-top:20px;
font-size:18px;
}
.footer-hr{
    color:grey;
    font-weight:bold;
}
/* .footer-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);} */

/***************** Media Queries *********************/

@media (max-width: 600px) {
.footer-content{
   display:block;
   text-align:center;
}
.footer-middle-list-item{
  text-align:center;
  margin-left:-20px;
}

.footer-left, .footer-middle, .footer-right{
  margin-top:50px;
}
}

#waterdrop {
  height: 30px;
}

#waterdrop canvas {
  bottom: -70px !important;
}
#header-nav .nav-link {
  color: white;
  font-size: 20px;
  margin-left: 20px;
}
    @media only screen and (max-width: 1400px){
  #header-nav .nav-link {
    color: white;
    font-size: 18px;
    margin-left: 18px;
  }
}

@media only screen and (min-width: 1133px) and (max-width: 1275px) {
  #header-nav .nav-link {
    color: white;
    font-size: 15px;
    margin-left: 10px;
  } 
}
@media only screen and (min-width: 1035px) and (max-width: 1132px) {
  #header-nav .nav-link {
    color: white;
    font-size: 15px;
    margin-left: 10px;
  } 
  #searchText{
    width: 120px;
  }
  #submitBtn{
    width: 60px;
    display: flex;
    justify-content: center;
  }
}
@media only screen and (min-width: 993px) and (max-width: 1034px) {
  #header-nav .nav-link {
    color: white;
    font-size: 14px;
    margin-left: 10px;
  } 

#searchText{
  width: 100px;
}
#submitBtn{
  width: 50px;
  display: flex;
  justify-content: center;
}
}
@media only screen and (max-width: 531px) {
  .poster {
  margin: 50px auto !important;
  width: 230px !important;
}
}

.poster {
  margin: 50px 20px;
}
</style>    


</head>

<body style="background-color:black;" color="height:auto;">


    <div class="scroll-bar">
    <!-- navbar starts -->

    <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="header-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="home.html"><img class="logo" src="Images/TheaterLogoFinal.png" alt="" width="30"
            height="24"></a>
        <button id="nav" class="navbar-toggler" id="nav" style="background-color:#8b0000" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="background-color:dark-grey;"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="movies.html">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="web-series.html">Web Series</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kids.html">Kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tv.html">TV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="premium.html">Premium</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="contactus.html">Contact Us</a>
            </li>
            <li>
              <!-- Genre dropdown starts-->
              <div>
                <div class="dropdown" style="position: relative; display: inline-block; padding-top: 5px; padding-left: 15px;">
                    <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" style="font-size:20px;">
                        Genres
                    </button>
                    <div class="dropdown-content" style="color: white;">
                        <a href="popular.html">Popular</a>
                        <a href="crime.html">Crime</a>
                        <a href="suspense.html">Suspense & Thriller</a>
                        <a href="action.html">Action</a>
                        <a href="fantasy.html">Sci-Fi & Fantasy</a>
                        <a href="documentary.html">Documentary</a>
                        <a href="horror.html">Horror</a>
                        <a href="drama.html">Drama</a>
                        <a href="war.html">War & Politics</a>
                        <a href="comedy.html">Comedy</a>
                        <a href="romance.html">Romance</a>
                        <a href="anime.html">Anime</a>
                      </div>
                </div>
              </div>
              <!-- Genre dropdown ends-->
            </li>
            <div style="position: relative; display: inline-block; padding-top: 5px; padding-left: 15px;">
              <li>
                <button  type="button" class="btn btn-light" onclick="logout()">Logout</button>
              </li>
            </div>
          </ul>
          <form id="searchForm" class="d-flex">
            <input class="form-control me-2" type="text" id="searchText" placeholder="Search" aria-label="Search">
            <button class="btn btn-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>

        <!-- navbar ends -->

    <div class="main-content">

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./Images/msd.jpg"  height="400" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./Images/YJHD cover.jpg" height="400"  class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./Images/vlhta.jpg" height="400"  class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./Images/Idiots.png" height="400"  class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./Images/ckd.jpg" height="400"  class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>

      </div>
        <div class="row poster">
            <div class="container">
                <div id="movies" class="row"></div>
            </div>
            <hr>
            <div class="row">
                <h3 class="section-title text-center">Popular</h3>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/msdhoni.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">MS Dhoni</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 8.5 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ye jawani.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Yeh Jawani Hai Deewani</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/Idiots.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">3 Idiots</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i> IMDb 9 / 10</span>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/bb.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Bajrangi Bhaijan</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i> IMDb 8.7 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ppw.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Pati Patni Aur Woh</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>

                    </div>
                </div>
            </div>
        </div>


             <div class="row poster">
            <div class="row">
                <h3 class="section-title text-center">Top Picks For You</h3>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/holiday.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Holiday</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ett.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Ek Tha Tiger</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/pdm.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Padmavati</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/stoy.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Student Of The Year</h5>
                
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/race.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Race 2</h5>
                       
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 7.4 / 10</span>
                    </div>
                </div>
            </div>
        </div>

            </div>
            <div class="row poster">
            <div class="row">
                <h3 class="section-title text-center">Featured</h3>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/aaam.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Andaz Apna Apna</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ckdm.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Chakde India</h5>
                       
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/bmb.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Bhag Milkha Bhag</h5>
                       
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/gow.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Gangs Of Wasseypur</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i> IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/dsm.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Drishyam</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>

                    </div>
                </div>
            </div>
        </div>




    </div>

       </div>
            <div class="row poster">
            <div class="row">
                <h3 class="section-title text-center">Comedy</h3>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/cc.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Chichore</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/m.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Phir Hera Pheri</h5>
                       
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/gn.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Good Newwz</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/welc.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Welcome</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i> IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/golmaal.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Golmaal 3</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>

                    </div>
                </div>
            </div>
        </div></div>


   <div class="row poster">
            <div class="row">
                <h3 class="section-title text-center">Romance</h3>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/rl.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Goliyon ki Raasleela- Ram Leela</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ks.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Kabir Singh</h5>
                       
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/ts.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">2 States</h5>
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/adhm.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Ae Dil Hai Mushkil</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i> IMDb 9 / 10</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card movie_card">
                    <img src="./Images/stk.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sanam Teri Kasam</h5>
                        
                        <span class="movie_info_rating"><i class="fas fa-star"></i>IMDb 9 / 10</span>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-------------------------------Footer-------------------------------->
    <footer class="footer">
      <hr class="footer-hr">
      <div class="footer-content">
        <div class="footer-left">
          <a href="home.html"><img class="footer-logo" src="Images/TheaterLogoFinal.png" alt="" width="30"
              height="24"></a>
          <p class="footer-bottom-tagline">Watch! Chill! Repeat!</p>
        </div>
        <div class="footer-middle">
          <h2 class="footer-heading">Follow Us</h2>
          <ul class="footer-middle-list icons">
            <a class="footer-links" href="https://www.facebook.com/" target="_blank"><i
                class="fab fa-facebook-f facebook" style="color:red"></i></a>
            <a class="footer-links" href="https://twitter.com/login?lang=en" target="_blank"><i
                class="fab fa-twitter twitter" style="color:red"></i></a>
            <a class="footer-links" href="https://www.linkedin.com/login" target="_blank"><i
                class="fab fa-linkedin linkedin" style="color:red"></i></a>
            <a class="footer-links" href="https://www.instagram.com/" target="_blank"><i
                class="fab fa-instagram instagram" style="color:red"></i></a>
            <a class="footer-links" href="https://github.com/QAZIMAAZARSHAD/Movie-Streaming-Website" target="_blank"><i
                class="fab fa-github github" style="color:red"></i></a>
          </ul>
        </div>
        <div class="footer-middle">
          <h2 class="footer-heading">Services</h2>
          <ul class="footer-middle-list">
            <li class="footer-middle-list-item"><a href="home.html">Enjoy Latest Movies</a> </li>
            <li class="footer-middle-list-item"><a href="web-series.html">Watch Web-Series</a> </li>
            <li class="footer-middle-list-item"><a href="kids.html">Everything for Kids</a> </li>
            <li class="footer-middle-list-item"><a href="news.html">Coming soon</a> </li>
            <li class="footer-middle-list-item"><a href="premium.html">Get Premium Subscription</a> </li>
            <li class="footer-middle-list-item"><a href="faq.html">FAQ</a> </li>
          </ul>
        </div>
        <div class="footer-middle">
          <h2 class="footer-heading">Try Our App</h2>
          <ul class="footer-middle-list icons">
            <a class="footer-links" href="#"><i class="fab fa-google-play" style="color:red"></i></a>
            <a class="footer-links" href="#"><i class="fab fa-app-store-ios" style="color:red"></i></a>
          </ul>
        </div>
        <div class="footer-right">
          <p class="footer-links">
          <h2 class="footer-heading">Contact Us</h2>
          <p class="footer-bottom-tagline">Feel free to contact us.</p>
          <a class="footer-contact-button" href="contactus.html">Contact</a>
          </p>
        </div>
      </div>
      <hr class="footer-hr">
      <div class="footer-copyright">
        <p>Copyright &copy; and &reg; Since
          <script>
            document.write(new Date().getFullYear())
          </script> Under ApnaTheatre.com : (Project Is Done By Qazi Maaz Arshad)
        </p>
      </div>
    </footer>

    <!----------------------scroll back to top button-->
    <button id="scrollToTopButton" title="Go to top" class="ml-5">
      <i class="fa fa-angle-double-up" aria-hidden="true"></i>
    </button>
    <script>
      $(document).ready(function () {
        var scrollTopButton = document.getElementById("scrollToTopButton");
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
          } else {
            scrollTopButton.style.display = "none";
          }
        }

        $("#scrollToTopButton").click(function () {
          $('html ,body').animate({ scrollTop: 0 }, 800)
        });
      });
    </script>
<script>
  function logout(){
    window.location.replace("login.html");
  }
  </script>
    <!-- footer scripts -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="https://daniellaharel.com/raindrops/js/raindrops.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="js/main-min.js"></script>

   
    <!-- bootsstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"></script>
    <script src="./static/script.js"></script>
</body>
</html>
