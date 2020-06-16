$(document).ready(function () {

    $('#increment').click(() => {
        $.ajax({
            url: "/increment",
            type: "POST",
            success: function (res) {
                $('#code').text(res.receipt);
            },
            error: function (err) {
                $('#code').text(err);
            }
        });
    });

    $('#decrement').click(() => {
        $.ajax({
            url: "/decrement",
            type: "POST",
            success: function (res) {
                $('#code').text(res.receipt);
            },
            error: function (err) {
                $('#code').text(err);
            }
        });
    });

    $('#getCount').click(() => {
        $.ajax({
            url: "/getCount",
            type: "POST",
            success: function (res) {
                $('.container p').text(res.count);
            },
            error: function (err) {
                $('#code').text(err);
            }
        });
    });
});