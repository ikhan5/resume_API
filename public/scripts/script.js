window.onload = () => {
  let email = document.getElementById("inputEmail");
  let password = document.getElementById("inputPassword");

  login = () => {
    $.ajax({
      method: "POST",
      url: "/api/auth/",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ email: email.value, password: password.value }),
      success: function(data) {
        $("#errors").hide();
        $.ajax({
          method: "GET",
          url: "/api/resume/",
          headers: { "x-auth-token": data.token },
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          success: function(data) {
            var str = JSON.stringify(data, null, 2);
            $(".resume-details").show();
            $(".resume-details").html(str);
          }
        });
      },
      error: function(data) {
        $("#errors").show();
        $(".resume-details").html("");
        $(".resume-details").hide();
      }
    });
  };
};
