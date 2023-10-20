
let s=$("#movies");
let s1=$(".seats");
let sc=$(".screen");
s1.click((event)=>{
    let k= event.target;
    $(k).toggleClass("selected");
    let x=$(".selected").length;
    $(".s1").text(x);
    $(".s2").text(x*s.val());
    
})

s.change((e)=>{
    s1.removeClass("selected");
    let x=$(".selected").length;
    $(".s1").text(x);
    $(".s2").text(x*s.val());

})


// $(".seats").click((e)=>{
//     let k=e.target;
//     $(k).toggleClass("selected");
//     let x=$(".selected").length;
//     $(".s1").text(x);
//     $(".s2").text(x*($("#movies").val()));
    
// })
// $("#movies").change((e)=>{
//     let k=e.target;
//     $(k).removeClass("selected");
//     let x=$(".selected").length;
//     $(".s1").text(x);
//      $(".s2").text(x*s.val());
    

// })