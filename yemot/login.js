const username = $("#username").val();
const password = $("#password").val();
$("#form-login").submit(function () {
  $.ajax({
    type: "GET",
    url: "https://www.call2all.co.il/ym/api/Login",
    data: `username=${username}&password=${password}`,
  })
    .done(function (resp) {
      if (resp.responseStatus !== "OK") {
        console.log(resp.responseStatus);
      }
      if (resp.responseStatus == "OK") {
        document.cookie = `token=${useresp.token};`;
        window.location = "http://127.0.0.1:5500/yemot/";
      }
    })
    .fail(function () {
      // Relogin disabled :-)
    })
    .always(function () {});
});
