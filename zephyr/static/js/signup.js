$(function () {
    $('#registration').validate({
        errorElement: "p",
        errorPlacement: function (error, element) {
            error.appendTo(element.parent()).addClass('help-inline');
            /* element is the invalid element. We want to access the control
             * group, which is that element's parent's parent.
             *
             * Adding an error class colours the entire row red.
             */
            element.parent().parent().removeClass('success').addClass('error');
        },
        success: function (label) {
            /* Similarly, see above comment.
             * Adding a success class colours the entire row green.
             */
            label.parent().parent().removeClass('error').addClass('success');
        }
    });

    $("#send_confirm").validate({
        errorElement: "p",
        errorPlacement: function (error, element) {
            $('#errors').empty();
            error.appendTo("#errors")
                 .addClass("text-error");
        },
        success: function () {
            $('#errors').empty();
        }
    });
});
