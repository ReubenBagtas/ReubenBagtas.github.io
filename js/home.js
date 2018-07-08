let idx = 0;
const name = 'ReubenBagtas';
const slogan = 'NotYourAverageSoftwareEngineer';
let elmt = document.getElementById('name');
let intrvl = 200;
let typewriter = setInterval(function () {
  let inner = String(elmt.innerHTML);
  if (inner.length == name.length - 1) {

    clearInterval(typewriter);
  }
  elmt.innerHTML += name[idx];
  idx++;
}, 350);


$(document).ready(function () {
  $('#close').fadeOut(0);
  $('#se').hide();
  $('#se').show(350 * 20)

  chose('#lbl_abt');
  chose('#lbl_prtfl');
  chose('#lbl_rsme');

  $('#close').click(() => {
    $('#close').fadeOut(0);
    $('#lbl_abt').fadeIn(3000);
    $('#lbl_prtfl').fadeIn(3000);
    $('#lbl_rsme').fadeIn(3000);
  })

});

let chose = function (btn) {
  $(btn).click(function () {
    $('#lbl_abt').fadeOut(0);
    $('#lbl_prtfl').fadeOut(0);
    $('#lbl_rsme').fadeOut(0);
    $('#close').fadeIn(3000);

    let desc = '#cont_' + btn.slice(5);
    $('#cont_abt').fadeOut(0);
    $('#cont_prtfl').fadeOut(0);
    $('#cont_rsme').fadeOut(0);

    $(desc).fadeIn(3000);
  });
}