function calc_weight(planet_name){
    var wgt=document.getElementById("input").value;
    if(!isNaN(wgt)){
      weig=Number(wgt);
 
  switch (planet_name)
  {
      case 'mercury':
          gravity = 	0.38;
          pid = "p1";
          break;
      case 'venus':
          gravity=	0.91;
          pid = "p2";
          break;

      case 'moon':
          gravity=	0.166;
          pid="p3";
          break;
      case 'Mars':
          gravity=	0.38;
          pid = "p4";
          break;
      case 'jupiter':
          gravity=2.34;
          pid = "p5";
          break;
      case 'Saturn':
          gravity=	1.06;
          pid = "p6";
          break;
          
      case 'uranus':
          gravity=	0.92;
          pid = "p7";
          break;
      
          
       case 'Neptune':
          gravity=	1.19;
          pid = "p8";
          break;
      case 'Pluto':
          gravity=	0.06;
          pid = "p9";
          break;
      

  }
  wgt = wgt * gravity;
  document.getElementById(pid).innerHTML=wgt;
  }
}   