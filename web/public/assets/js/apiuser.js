document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#compinfou")) return;


    ajax_t();
});

function ajax_t(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/user?companyID=' + $('#copmidu').val(),
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
  if (!event.target.matches("#regcompu")) return;


    ajax_t2();
});

function ajax_t2(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/user',
    dataType: 'json',
    type: 'post',
    data: JSON.stringify( { "email": $('#emailu').val(), "name": $('#nameu').val(), "password": $('#passu').val() } ),
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
  if (!event.target.matches("#createrewardu")) return;


    ajax_t3();
});

function ajax_t3(){$.ajax({
    crossdomain: true,
    url: 'https://loyaton.herokuapp.com/api/reward',
    dataType: 'json',
    type: 'post',
    data: JSON.stringify( { "userID": $('#rewardidu').val(), "rewardID": $('#rewardnameu').val() } ),
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
    url: 'https://loyaton.herokuapp.com/api/reward?companyID=' + $('#compidrewu').val(),
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