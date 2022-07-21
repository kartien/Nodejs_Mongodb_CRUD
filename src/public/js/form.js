/*

Found on this dribbble: http://dribbble.com/shots/1284939-2point0-CP-Login/attachments/177970

*/
$('#username, #password').on('input', function() {
    if ($('#username').val() && $('#password').val()) {
        $('.login').addClass('buttonafter');
    } else {
        $('.login').removeClass('buttonafter');
    }
});