document.querySelector("#roll").addEventListener("click", ()=>{
    document.getElementById("ip1").style.display = "none";
    document.getElementById("ip2").style.display = "none";

    var player1 = document.querySelector("#ip1").value;

    var player2 = document.querySelector("#ip2").value;

    var one = document.getElementById("p1").innerHTML = player1;

    var two = document.getElementById("p2").innerHTML = player2;

    var randomDiceNumber1 = Math.floor(Math.random() * 6)+1;

    var randomImgSource = "images/dice" + randomDiceNumber1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);

    var randomDiceNumber2 = Math.floor(Math.random() * 6)+ 1;

    var randomImgSource2 = "images/dice" + randomDiceNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

    if(randomDiceNumber1 > randomDiceNumber2){
        document.querySelector("h1").innerText = "🚩 " + one + " wins!";
    }
    else if(randomDiceNumber1 < randomDiceNumber2){
        document.querySelector("h1").innerText = two + " wins! 🚩"
    }
    else{
        document.querySelector("h1").innerText = "Draw!"
    }

    if (one =="" && randomDiceNumber1 > randomDiceNumber2){
        document.querySelector("h1").innerText = " 🚩Player 1 wins";
    }
    else
        if (one =="" && randomDiceNumber1 < randomDiceNumber2){
            document.querySelector("h1").innerText = "Player 2 wins 🚩"
        }
        else{
            document.querySelector("h1").innerText = "Draw!"
        }
});