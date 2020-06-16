$(document).ready(function () {

    $('#increment').click(() => {
        $.ajax({
            url: "/increment",
            type: "POST",
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    $('#decrement').click(() => {
        $.ajax({
            url: "/decrement",
            type: "POST",
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    $('#getCount').click(() => {
        $.ajax({
            url: "/getCount",
            type: "POST",
            success: function (res) {
                $('.container p').text(res.count)
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});