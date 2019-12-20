
$(document).ready(function () {

    $.validator.setDefaults ({
       errorClass: 'text-danger',
       highlight: function (element) {
           $(element)
               .closest('.form-control')
               .addClass('is-invalid');
       },
        unhighlight: function (element) {
            $(element)
                .closest('.form-control')
                .removeClass('is-invalid');
        }
    });


    $("#myform").validate({
        rules: {
            teamname:{
                required: true,
                minlength: 3,

            },
            name1:{
                required: true,
                minlength: 2,

            },
            name2:{
                required: true,
                minlength: 2,

            },
            name3:{
                required: true,
                minlength: 2,

            },
            college1:{
                required: true,
                minlength: 3,

            },
            college2:{
                required: true,
                minlength: 3,

            },
            college3:{
                required: true,
                minlength: 3,

            },

            email1:{
                required: true,
                email: true
            },
            email2:{
                required: true,
                email: true
            },
            email3:{
                required: true,
                email: true
            },
            number1:{
                required: true,
                minlength: 10,
                maxlength: 11
            },
            number2:{
                required: true,
                minlength: 10,
                maxlength: 11
            },
            number3:{
                required: true,
                minlength: 10,
                maxlength: 11
            }


        },
        messages: {
            name1: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            name2: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            name3: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            number1: {
                required: "Please enter a name",
                length: "Please enter a valid number",
                maxlength: "Please enter a valid number"
            },
            number2: {
                required: "Please enter a name",
                minlength: "Please enter a valid number",
                maxlength: "Please enter a valid number"
            },
            number3: {
                required: "Please enter a name",
                length: "Please enter a valid number",
                maxlength: "Please enter a valid number"
            },
            college1: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            college2: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            college3: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            email: {
                required: "Please enter an email",
                email: "Please enter a valid email"
            },
            pass: {
                required: "Please enter a password",
                minlength: "Password must be atleast 4 characters long"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }

    });

    $("#loginform").validate({
        rules: {
            username:{
                required: true,
                minlength: 2
            },
            pass:{
                required: true,
            }

        },
        messages: {
            username: {
                required: "Please enter a name",
                minlength: "Please enter a valid name"
            },
            pass: {
                required: "Please enter a password",
            }
        },
        submitHandler: function(form) {
            form.submit();
        }

    });

});