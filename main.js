$(document).ready(function () {
  $('div').css({ color: 'red' });
  $('.div').css({ color: 'orange' });
  $('#div').css({ color: 'green' });

  let dataAttr = $('#h2').data('number');
  console.log(dataAttr);

  $('input[name="message"]').css({ border: '1px solid red' });

  $('ul li:nth-child(3').css({ 'font-size': '32px' });

  $('div:has("span")').css({ 'font-size': '32px' });

  let attr = $('input').attr('type');
  console.log(attr);

  //2 способа реализации клика
  $('#btn').click(function () {
    console.log('Clicked!');
  });

  $('#btn2').on('click', function () {
    console.log('Btn2 Clicked!');
  });

  //-----------------------------------

  $('#btn').mouseenter(function () {
    console.log('Mouseenter!');
  });

  $('#btn').click(function () {
    $('.txt-box').toggleClass('active');
  });

  $('input[name="message"]').on('input', function() {
    $('.result').html($(this).val());
  });

  $('#form').on('submit', function() {
    alert('Form has been send')
  });

  $('#btn3').on('click', function() {
    $('.animation').animate({'height': '400px'}, 1000);
    $('.animation').animate({'width': '200px'}, 1000);
    $('.animation').animate({'height': '200px'}, 1000);
    $('.animation').animate({'width': '100px'}, 1000);
  })
});
