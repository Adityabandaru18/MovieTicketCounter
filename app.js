let s = $("#movies");
let s1 = $(".seats");
let sc = $(".screen");

s1.click((event) => {
    let k = event.target;
    if ($(k).attr("id") !== "seatOc") { // Check if clicked seat is not the selected seat
        $(k).toggleClass("selected");
        let x = $(".selected").length;
        $(".s1").text(x);
        $(".s2").text(x * s.val());
    }
});

s.change((e) => {
    s1.removeClass("selected");
    let x = $(".selected").length;
    $(".s1").text(x);
    $(".s2").text(x * s.val());
});
