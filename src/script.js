$(function () {
  $("#welcome_button").click(function () {
    $("#welcome_container").slideUp("slow");
    $("audio")[0].play();
    setTimeout(function () {
      $("#ads").addClass("-translate-x-96");
    }, 2000);
  });

  // // Iklan
  $("#closeAds").click(function () {
    $("#ads").addClass("-translate-x-96");
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
      $("#floatingContainer").removeClass("translate-x-40");
      $("#menuWrapper").removeClass("menu-light").addClass("menu-dark");
    } else {
      $("#floatingContainer").addClass("translate-x-40");
      $("#menuWrapper").addClass("menu-light").removeClass("menu-dark");
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

  // menu

  $("ul li a").click(function () {
    $("li a").removeClass("aktif");
    $(this).addClass("aktif");
  });

  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = document.querySelector("#menuItems");

  const end = () => {
    isDown = false;
    slider.classList.remove("active");
  };

  const start = (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
  };

  (() => {
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);

    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);

    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
  })();
});
