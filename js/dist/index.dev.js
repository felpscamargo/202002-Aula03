"use strict";

$(document).ready(function () {
  build();
  blink();
});

var blink = function blink() {
  setInterval(function () {
    $('h1').fadeOut('Slow');
    $('h1').fadeIn('Slow');
  }, 2000);
};

var build = function build() {
  $("#button").click(function () {
    $("#words").text("Palavras: ");
    $("#phrases").text("Frases: ");
    $("#result").text("Resultado: ");
    var text = $('#text-area').val();
    var words = text.split(" ").length;
    var phrase = text.split(". ").length;
    var average = Math.round(words / phrase * 1.5 * 0.4);
    console.log(words);
    console.log(phrase);
    console.log(average);
    $("#words").append(words);
    $("#phrases").append(phrase);

    if (average >= 1 && average <= 7) {
      $("#result").append("História em Quadrinhos");
    } else if (average >= 8 && average <= 10) {
      $("#result").append("Excepcional");
    } else if (average >= 11 && average <= 15) {
      $("#result").append("Ótimo");
    } else if (average >= 16 && average <= 19) {
      $("#result").append("Pequena Dificuldade");
    } else if (average >= 20 && average <= 30) {
      $("#result").append("Muito Difícil");
    } else if (average >= 31 && average <= 40) {
      $("#result").append("Linguagem técnica");
    } else if (average >= 41) {
      $("#result").append("Nebulosidade");
    } else {
      $("#result").append("Error");
    }
  });
};