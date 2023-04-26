
    $(function () {
        $("#btnSubmit1").click(function () {
            var password = $("#password1").val();
            var confirmPassword = $("#password2").val();
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        });
    });


    $(document).ready(function() {
$('#password1').keyup(function() {
$('#result1').html(checkStrength($('#password1').val()))
})
function checkStrength(password) {
var strength = 0
if (password.length < 5) {
$('#result1').removeClass()
$('#result1').addClass('The password is too short')
return 'The password is too short'
}
if (password.length > 7) strength += 1
// If password contains both lower and uppercase characters, increase strength value.
if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
// If it has numbers and characters, increase strength value.
if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
// If it has one special character, increase strength value.
if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
// If it has two special characters, increase strength value.
if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
// Calculated strength value, we can return messages
// If value is less than 2
if (strength < 2) {
$('#result1').removeClass()
$('#result1').addClass('weak')
return 'Weak'
} else if (strength == 2) {
$('#result1').removeClass()
$('#result1').addClass('good')
return 'Good'
} else {
$('#result1').removeClass()
$('#result1').addClass('strong')
return 'Strong'
}
}
});