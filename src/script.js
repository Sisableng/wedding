$(function () {
  // $("#welcome_button").click(function () {
  //   $("#welcome_container").slideUp("slow");
  // });

  // Iklan
  $("#closeAds").click(function () {
    $("#ads").addClass("translate-y-full");
    $("#iniIklan").hide();
  });

  // Change html bg-color on scroll
  $("#sec2").appear();

  $(document.body).on("appear", "#sec2", function (e, $affected) {
    // this code is executed for each appeared element

    $("html").removeClass("bg-slate-800").addClass("bg-rose-200");
    $("#sec1").addClass("opacity-0").removeClass("opacity-100");
  });

  $(document.body).on("disappear", "#sec2", function (e, $affected) {
    // this code is executed for each disappeared element
    $("html").addClass("bg-slate-800").removeClass("bg-rose-200");
    $("#sec1").removeClass("opacity-0").addClass("opacity-100");
  });

  // Floating Button

  $(document).scroll(function () {
    var value = $(document).scrollTop();

    if (value >= 100) {
      $("#addDate, #openMap").addClass("scrolled");
    } else {
      $("#addDate, #openMap").removeClass("scrolled");
    }
  });

  $("#addDate").click(function () {
    Swal.fire({
      title: "Tambah ke kalendar?",
      text: "Kami akan menambahkan waktu pernikahan secara otomatis ke kalendar HP kamu.",
      icon: "question",
      iconColor: "#fff",
      color: "#fff",
      background: "#F43F5E",
      confirmButtonColor: "#1E293B",
      confirmButtonText: "Oke, Tambahkan",
      showCloseButton: true,
      focusConfirm: false,
      focusCancel: false,
      returnFocus: false,
      focusDeny: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location =
          "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221122%2F20221123&details=Akan%20segera%20melangsungkan%20pernikahan%20suci.&location=Subang&text=Pernikahan";
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  });

  // Timer
  function makeTimer() {
    var endTime = new Date("22 November 2022 9:00:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days + "<span class='timer'>Hari</span>");
    $("#hours").html(hours + "<span class='timer'>Jam</span>");
    $("#minutes").html(minutes + "<span class='timer'>Menit</span>");
    $("#seconds").html(seconds + "<span class='timer'>Detik</span>");
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
});
