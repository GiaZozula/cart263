/**
Code Taker Plus Plus
by Gia

What first appears to be a bunch of barcodes is secretly a beautiful poem!

*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "time to read": function () {
      $(this).dialog(`close`);
    },
  },
});

$(`.secret`).one(`mouseover`, function (event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`,
  });
});

$(`#answer`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);

    //check if they got it, and if so change the font so it is legible!
    if ($(this).text() === `futurity`) {
      document.getElementById("poem").style.fontFamily = "monospace,sans-serif";
      document.getElementById("poem").style.fontSize = "1.6rem";
      document.getElementById("answer").style.fontFamily =
        "monospace,sans-serif";
      document.getElementById("answer").style.writingMode = "vertical-lr";
      $(`#solved-dialog`).dialog(`open`);
    }
  },
});
