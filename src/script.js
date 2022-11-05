$(function () {
  $("#welcome_button").click(function () {
    $("#welcome_container").slideUp("slow");
    setTimeout(function () {
      $("#ads").addClass("translate-y-full");
      $("#iniIklan").addClass("bg-white opacity-20").removeClass("text-white");
    }, 3000);
  });

  // Iklan
  $("#closeAds").click(function () {
    $("#ads").addClass("translate-y-full");
    $("#iniIklan").addClass("bg-white opacity-20").removeClass("text-white");
  });

  $("#iniIklan").click(function () {
    $("#ads").removeClass("translate-y-full");
    $("#iniIklan").removeClass("bg-white opacity-20").addClass("text-white");
  });

  // Change html bg-color on scroll
  $("#sec2").appear();

  $(document.body).on("appear", "#sec2", function (e, $affected) {
    // this code is executed for each appeared element

    $("html").removeClass("bg-slate-800").addClass("brush");
    $("#sec1").addClass("opacity-0").removeClass("opacity-100");
  });

  $(document.body).on("disappear", "#sec2", function (e, $affected) {
    // this code is executed for each disappeared element
    $("html").addClass("bg-slate-800").removeClass("brush");
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
      text: "Kami akan menambahkan waktu pernikahan secara otomatis ke Google Calendar kamu.",
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
          "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221122%2F20221123&details=Akan%20dilangsungkanya%20pernikahan%20suci%2C%20Agung%20dan%20Hilma%2C%20Kepada%20Tamu%20undangan%20yang%20terhormat%20kami%20memberitahukan%20agar%20menjaga%20protokol%20kesehatan%2C%20dengan%20memakai%20masker%2C%20mencuci%20tangan%2C%20dan%20menggunakan%20handsanitizer.%0A%0ATerimakasih.&location=Blok.%20Walahar%2C%20Rt%2FRw%20046%2F019%2C%20Kelurahan%20Dangdeur%2C%20Kec.%20Subang%20Kab.%20Subang&text=Acara%20pernikahan%20Agung%20%26%20Hilma";
      }
    });
  });

  // lagu
  $("#laguToggle").click(function () {
    $(this).toggleClass("paused");
    if ($(this).hasClass("paused")) {
      $("audio")[0].pause();
      $("i.fa-music-slash").removeClass("hidden");
      $("i.fa-music").addClass("hidden");
    } else {
      $("audio")[0].play();
      $("i.fa-music-slash").addClass("hidden");
      $("i.fa-music").removeClass("hidden");
    }
  });

  // function play(src) {
  //   $("audio")[0].play();
  //   $("audio").muted = false;
  // }

  // $(window).on("load", function () {
  //   play();
  // });

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
