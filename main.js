var step = 0;
var colorInd = [0,1,2,3];
var gradSpeed = 0.002;
var colors = new Array(
    [16,0,43],
    [36,0,70],
    [60,9,108],
    [90,24,154],
    [123,44,191],
    [157,78,221]);
  
  function gradUpdate()
  {
    
    if ( $===undefined ) return;
    
  var c0 = colors[colorInd[0]];
  var c1 = colors[colorInd[1]];
  var c2 = colors[colorInd[2]];
  var c3 = colors[colorInd[3]];
  
  var increStep = 1 - step;
  var r1 = Math.round(increStep * c0[0] + step * c1[0]);
  var g1 = Math.round(increStep * c0[1] + step * c1[1]);
  var b1 = Math.round(increStep * c0[2] + step * c1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  
  var r2 = Math.round(increStep * c2[0] + step * c3[0]);
  var g2 = Math.round(increStep * c2[1] + step * c3[1]);
  var b2 = Math.round(increStep * c2[2] + step * c3[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorInd[0] = colorInd[1];
      colorInd[2] = colorInd[3];
      colorInd[1] = ( colorInd[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorInd[3] = ( colorInd[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(gradUpdate,10);

  const img1 = document.querySelector(".img-1");
          const img2 = document.querySelector(".img-2");
          const img3 = document.querySelector(".img-3");
          const img4 = document.querySelector(".img-4");
          const img5 = document.querySelector(".img-5");
    
          document.addEventListener("mousemove", e => {
            img1.setAttribute(
              "style",
              "top :" + (e.pageY - 225) + "px; left: " + (e.pageX - 200) + "px"
            );
            img2.setAttribute(
              "style",
              "top :" + (e.pageY - 225) + "px; left: " + (e.pageX - 200) + "px"
            );
            img3.setAttribute(
              "style",
              "top :" + (e.pageY - 225) + "px; left: " + (e.pageX - 200) + "px"
            );
            img4.setAttribute(
              "style",
              "top :" + (e.pageY - 225) + "px; left: " + (e.pageX - 200) + "px"
            );
            img5.setAttribute(
              "style",
              "top :" + (e.pageY - 225) + "px; left: " + (e.pageX - 200) + "px"
            );
          });


 
  