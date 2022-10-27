<html>
<head>
<title></title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400&display=swap" rel="stylesheet">
<style>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.navbar
{
    width:100%;
    white-space:nowrap;
    background-color: Black;
}
.main_div
{
    width:100%;
    height:100vh;
    background-image:linear-gradient(to right, Black,Black,Black,Black,Black,Black);
    clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 80%);
}
.main_text
{
    color:white;
    margin-top:120px;
    font-family: 'JetBrains Mono', monospace;
}
.big-text
{
   
    margin:20px 0;
    color:white;
    font-family: 'JetBrains Mono', monospace;
}

.formbutton button{
    border:1px solid Black;
    border-radius:100px;
    margin:0 50px;
    padding: 12px 35px;
    outline:none;
    columns: #50d1c0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    background:transparent;
    color:#fff;
   
}
form:hover .formbutton button{
background: white;
color:Black; ;
box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
}
@media(min-width:400px)
{
    .main_div
    {
        max-height:1000px;
    }
}
</style>
</head>

<body>
<div class="main_div">
 
     <div class="navbar navbar-expand-md">
   
      <a href="#" class="navbar-brand font-weight-bold text-white text-center"><h2>TSF BANK</h2></a>
      <button class="navbar-toggler text-white " type="button" data-toggle="collapse" data-target="#collapsenavbar">
      <span class="navbar-toggler-icon" style="background:white;"></span>
      </button>
     
       <div class="collapse navbar-collapse text-center" id="collapsenavbar">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a href="index.php" class="nav-link text-white "><span style="margin-left:90px;">ABOUT</span></a></li>
              <li class="nav-item">
                  <a href="viewcustomers.php" class="nav-link text-white ">VIEW CUSTOMER</a></li>
              <li class="nav-item">
                  <a href="transfermoney.php" class="nav-link text-white"></a></li>
              <!--<li class="nav-item">
                  <a href="#contact" class="nav-link text-white">CONTACT</a></li>    -->
               </ul>
        </div>
     </div>
     <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="main_text">BANK</h1>
            <p class="big-text">Banking</p>
          </div>
          <div class="col-sm-6">
            
            <img src="88.jfif" class="img-fluid" width="560" height="345" style="margin-top:20px;">
           
          </div>
       </div>
       
    </div>
</div>
</div>


</body>
</html>