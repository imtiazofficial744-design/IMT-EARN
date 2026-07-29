*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#eef3f8;
color:#222;
padding-bottom:90px;
}

.top-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 20px;
background:linear-gradient(135deg,#0d6efd,#0044aa);
color:#fff;
box-shadow:0 4px 12px rgba(0,0,0,.2);
}

.header-logo{
display:flex;
align-items:center;
gap:10px;
}

.logo{
width:45px;
height:45px;
border-radius:50%;
background:#fff;
padding:3px;
}

.menu-btn{
font-size:28px;
cursor:pointer;
}

.container{
max-width:600px;
margin:auto;
padding:15px;
}

.profile-card{
display:flex;
align-items:center;
background:linear-gradient(135deg,#0d6efd,#3b82f6);
padding:20px;
border-radius:18px;
color:#fff;
box-shadow:0 5px 15px rgba(0,0,0,.18);
margin-bottom:18px;
}

.avatar{
width:70px;
height:70px;
border-radius:50%;
border:3px solid #fff;
}

.profile-right{
margin-left:15px;
flex:1;
}

.profile-right h2{
font-size:22px;
margin-bottom:5px;
}

.profile-right p{
font-size:14px;
opacity:.9;
}

.active-tag{
display:inline-block;
padding:5px 12px;
background:#16a34a;
border-radius:30px;
font-size:13px;
margin-bottom:10px;
}

.package-box{
display:inline-block;
margin-top:10px;
padding:8px 15px;
background:#fff;
color:#0d6efd;
border-radius:30px;
font-weight:bold;
}

.balance-card{
background:#fff;
padding:20px;
text-align:center;
border-radius:15px;
margin-bottom:18px;
box-shadow:0 3px 10px rgba(0,0,0,.12);
}

.balance-card h4{
color:#777;
margin-bottom:8px;
}

.balance-card h1{
font-size:35px;
color:#16a34a;
}

.summary{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:12px;
margin-bottom:20px;
}

.summary-box{
background:#fff;
padding:15px;
border-radius:12px;
text-align:center;
box-shadow:0 2px 8px rgba(0,0,0,.12);
}

.summary-box h4{
font-size:14px;
margin-bottom:8px;
color:#666;
}

.summary-box p{
font-size:18px;
font-weight:bold;
color:#0d6efd;
  } 
/* Gift Box */

.card{
background:#fff;
padding:18px;
margin-bottom:20px;
border-radius:15px;
box-shadow:0 2px 10px rgba(0,0,0,.12);
}

.card h2,
.card h3{
margin-bottom:15px;
color:#0d6efd;
}

.gift-box{
display:flex;
gap:10px;
margin-top:10px;
}

.gift-box input{
flex:1;
padding:12px;
border:1px solid #ddd;
border-radius:10px;
font-size:15px;
outline:none;
}

.gift-box button{
padding:12px 18px;
border:none;
border-radius:10px;
background:#16a34a;
color:#fff;
font-weight:bold;
cursor:pointer;
}

/* Quick Menu */

.menu-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:12px;
margin-bottom:20px;
}

.menu-grid button{
background:#0d6efd;
color:#fff;
border:none;
border-radius:15px;
padding:18px 10px;
font-size:16px;
font-weight:bold;
cursor:pointer;
transition:.3s;
}

.menu-grid button:hover{
background:#0b5ed7;
transform:translateY(-3px);
}

/* Packages */

table{
width:100%;
border-collapse:collapse;
}

table th{
background:#0d6efd;
color:#fff;
padding:12px;
}

table td{
padding:12px;
text-align:center;
border-bottom:1px solid #ddd;
}

/* Referral */

#referralLink{
width:100%;
padding:12px;
margin:10px 0;
border:1px solid #ddd;
border-radius:10px;
font-size:15px;
}

/* Bottom Navigation */

.bottom-nav{
position:fixed;
bottom:0;
left:0;
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
background:#fff;
padding:10px 0;
border-top-left-radius:20px;
border-top-right-radius:20px;
box-shadow:0 -2px 10px rgba(0,0,0,.15);
z-index:999;
}

.bottom-nav button{
background:none;
border:none;
display:flex;
flex-direction:column;
align-items:center;
gap:4px;
font-size:13px;
font-weight:bold;
color:#0d6efd;
cursor:pointer;
padding:6px;
}

.bottom-nav button:hover{
color:#16a34a;
}

/* Logout */

.logout{
width:100%;
padding:15px;
border:none;
border-radius:12px;
background:#dc3545;
color:#fff;
font-size:18px;
font-weight:bold;
cursor:pointer;
margin-bottom:80px;
}

.logout:hover{
background:#bb2d3b;
}

/* Footer */

footer{
text-align:center;
padding:20px;
font-size:14px;
color:#666;
}

/* Mobile */

@media(max-width:600px){

.menu-grid{
grid-template-columns:repeat(3,1fr);
}

.summary{
grid-template-columns:repeat(2,1fr);
}

.profile-card{
flex-direction:row;
}

.balance-card h1{
font-size:30px;
}

  }
