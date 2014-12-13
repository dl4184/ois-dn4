$(document).ready(function() {
        $.ajax({
            url : "clanek.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
}); 