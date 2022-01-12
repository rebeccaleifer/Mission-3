////$("#btnSend").addEventListener("click", function () {
////    alert("From: " + $("#txtFrom").value +
////        ", Subject: " + $("#txtSubject").value +
////        ", Message: " + $("#txtMessage").value);
////})

$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeOut("slow");
})