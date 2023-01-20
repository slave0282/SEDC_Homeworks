// $(document).ready(function(){
//     let div = $("firstWrapper");
//     let paragraph = $("p").first();
//     let h3 = $("h3").first();
//     let h1 = $("h1").first();
//     let button = $("button");

// })


$(document).ready(function(){
    let allElements = $("*");

    //by id

    let mainTitleHeader = $("#mainTitle");

      //by class

    let innerWrapperElements = $(".innerWrapper");

    //by tagname

    let paragraphs = $("p");

    //mulltiple selectors
    let multipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");

    let firstParagraph = $("p:first");
    let lastParagraph = $("p:last");

    let firstParagraphFromAll = paragraphs.first().text("changed text");
    paragraphs.last().css("color", "gold");

    paragraphs.last().after("<h2> added header </h2>")
    console.log(firstParagraphFromAll);

   let ourButton = $("button").first();

   ourButton.on("click", function(){
    console.log("heyyy");

    ourButton.click(function(){
        $(this).text("Klikni me");

        let paragraphs = $("p");
        paragraphs.hide();
        paragraphs.after("<h2>nestooo</h2>");
        paragraphs.before("slave");

        // ourButton.off("click");
    })
   })
})