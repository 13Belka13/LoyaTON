document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#compinfo")) return;


    ajax_t();
});

function ajax_t(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/company?companyID=' + $('#copmid').val(),
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#regcomp")) return;


    ajax_t2();
});

function ajax_t2(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/company',
    dataType: 'json',
    type: 'post',
    data: JSON.stringify( { "email": $('#email').val(), "name": $('#name').val(), "password": $('#pass').val() } ),
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#createreward")) return;


    ajax_t3();
});

function ajax_t3(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/reward',
    dataType: 'json',
    type: 'post',
    data: JSON.stringify( { "companyID": $('#rewardid').val(), "name": $('#rewardname').val(), "description": $('#rewarddesc').val() } ),
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#regcomp-2")) return;


    ajax_t4();
});

function ajax_t4(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/reward?companyID=' + $('#compidrew').val(),
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#chellange")) return;


    ajax_t5();
});

function ajax_t5(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/campaing',
    dataType: 'json',
    type: 'post',
    data: JSON.stringify( { "companyID": $('#chell').val(), "name": $('#chell1').val(), "description": $('#chell2').val(), "totalpoints": $('#chell3').val(), "pointsperstep": $('#chell4').val(), "rewardID": $('#chell5').val() }),
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#regcomp-3")) return;


    ajax_t6();
});

function ajax_t6(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/reward?companyID=' + $('#name-3').val(),
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    processData: false,
    success: function( data, textStatus, jQxhr ){
        $('#resp').html( JSON.stringify( data ) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});}