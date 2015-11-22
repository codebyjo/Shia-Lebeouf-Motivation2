var randomStrings = [
        "Do It.",
        "Just Do It.",
        "Do Not Let Your Dreams Be Dreams",
        "If You are Tired Of Starting Over, Stop Giving Up.",
        "Yes You Can. Just Do It.",
        "Some People Dream Of Success, While You’re Gonna Wake Up And Work Hard At It.",
        "Yesterday you said tomorrow. So just do it!",
        "Make your dreams come true. Just do it.",
        "You should get to the point where anyone else would quit",
        "Yes you can!",
    ];





    var randomDiv = document.getElementById("myRandomQuote");

    document.getElementById("noButton").addEventListener("click", function() {
          randomIndex = Math.ceil((Math.random()*randomStrings.length-1));
          newText = randomStrings[randomIndex];
          randomDiv.innerHTML = newText;
    });

$("#myRandomQuote")
    .appendTo("h3");



document.getElementById("yesButton").onclick = function() {
   document.getElementById("image").src="img/shia10.gif";
   document.getElementById("myRandomQuote").innerHTML="You will walk out loving yourself. Not in some grandiose, you’re fucking awesome way, but in like, you’re a part of a community.";
};
