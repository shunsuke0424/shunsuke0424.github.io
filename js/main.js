$(function () {
  //ページ内スクロール
  let navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

let doughnutDataJs = [
  {
    value: 15,
    color: "#26C6DA",
  },
  {
    value: 85,
    color: "white",
  },
];
let myDoughnutJs = new Chart(
  document.getElementById("javascript").getContext("2d")
).Doughnut(doughnutDataJs);

// Bootstrap Chart
let doughnutDataBootstrap = [
  {
    value: 5,
    color: "#26C6DA",
  },
  {
    value: 95,
    color: "white",
  },
];
let myDoughnutBootstrap = new Chart(
  document.getElementById("c").getContext("2d")
).Doughnut(doughnutDataBootstrap);

// WordPress Chart
let doughnutDataWordPress = [
  {
    value: 12,
    color: "#26C6DA",
  },
  {
    value: 88,
    color: "white",
  },
];
let myDoughnutWordPress = new Chart(
  document.getElementById("wordpress").getContext("2d")
).Doughnut(doughnutDataWordPress);

// HTML Chart
let doughnutDataHtml = [
  {
    value: 2,
    color: "#26C6DA",
  },
  {
    value: 98,
    color: "white",
  },
];
let myDoughnutHtml = new Chart(
  document.getElementById("html").getContext("2d")
).Doughnut(doughnutDataHtml);

// CSS Chart
let doughnutDataCss = [
  {
    value: 5,
    color: "#26C6DA",
  },
  {
    value: 95,
    color: "white",
  },
];
let myDoughnutCss = new Chart(
  document.getElementById("css").getContext("2d")
).Doughnut(doughnutDataCss);

// Photoshop Chart
let doughnutDataPhotoshop = [
  {
    value: 1,
    color: "#26C6DA",
  },
  {
    value: 99,
    color: "white",
  },
];
let myDoughnutPhotoshop = new Chart(
  document.getElementById("photoshop").getContext("2d")
).Doughnut(doughnutDataPhotoshop);

// Illustrator Chart
let doughnutDataIllustrator = [
  {
    value: 97,
    color: "#26C6DA",
  },
  {
    value: 3,
    color: "white",
  },
];
let myDoughnutIllustrator = new Chart(
  document.getElementById("illustrator").getContext("2d")
).Doughnut(doughnutDataIllustrator);

// Python Chart
let doughnutDataPython = [
  {
    value: 10,
    color: "#26C6DA",
  },
  {
    value: 90,
    color: "white",
  },
];
let myDoughnutPython = new Chart(
  document.getElementById("python").getContext("2d")
).Doughnut(doughnutDataPython);

$(function () {
  $(window).on("load scroll", function () {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight * 0.8;

    $(".show").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: "translate(0, 0)" });
      }
    });
  });
});
