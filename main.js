$(document).ready(function(){
  console.log(gsxr.speed);

  $motoSpeed = $('<p>').text(gsxr.speed);
  $('#motorcycle').append($motoSpeed);

  $('#increase').click(function(){
    gsxr.accelerate(10);
    $motoSpeed.text(gsxr.speed);
  })

  $('#decrease').click(function(){
    gsxr.decelerate(10);
    $motoSpeed.text(gsxr.speed);
  })
});