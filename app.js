$(function () {
  const container = document.getElementById("container");
  const button = document.getElementById("button");
  const focused = $(".focused-img");

  button.addEventListener("click", () => {
    generateCat();
  });

  function generateCat() {
    $.ajax({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search",
      success(data) {
        let image = document.createElement("img");
        image.src = data[0].url;
        container.prepend(image);
        focusImg()
      },
      error(err) {
        console.log(err);
      },
    });
  }
  

  function focusImg(){
    let images = $("#container img");
    let expanded = $(".focused-img");
    images.on("click", function(){
      expanded.find("img").attr("src", $(this).attr("src"));
      expanded.css({"transition" : "height 0.3s ease-in","left" : "50%","width" : "100vw", "height" : "100vh"});
    })

    $(".close-btn").on("click", function(){
      // expanded.css({"height" : "0"});
      expanded.css({"transition": "all 0.4s ease-in", "left" : "-5%", "height": "0", "width" : "0"});
    });
  }
});
