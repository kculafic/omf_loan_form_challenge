$(document).ready(function(){

    $("#account-type-radio").change(function() {
        let selector = $("input:radio[name='accountTypeRadios']:checked").val()

        if (selector == 'checking') {
            $("#checking-img-panel").show()
            $("#debit-img-panel").hide()

            $("#checking-form-panel").show()
            $("#debit-form-panel").hide()

        } else if (selector == 'debit') {
            $("#debit-img-panel").show()
            $("#checking-img-panel").hide()

            $("#debit-form-panel").show()
            $("#checking-form-panel").hide()
        }
    });

});

$(document).on('blur', '[data-validator]', function () {
    new Validator($(this));
});
