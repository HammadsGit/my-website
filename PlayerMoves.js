var turn = 1
var still_playing  = true;

$("table tr td").click(function(){
        if($(this).text() === "" && still_playing){
            if(turn%2 === 0){
                $(this).append("O");
                $(this).css('color', '#f3200b');
                if(winner("O")){
                    $('.img-info').append('<p class="won">Player O has won! </p>');
                    $('.won').css('font-size', '25px');
                    $('.won').css('text-align', 'center');
                    $('.PlayAgain').css('text-align', 'center');
                }



            }
            else{
                $(this).append('X');
                $(this).css('color', '#4fff33');
                if(winner("X")){
                    $('.img-info').append('<p class="won">Player X has won! </p>');
                    $('.won').css('font-size', '25px');
                    $('.won').css('text-align', 'center');
                    $('.PlayAgain').css('text-align', 'center');
                }
            }



        }

        if(turn === 9 && still_playing){
            $('.img-info').append('<p class="won">It was a draw! </p>');
            $('.won').css('font-size', '25px');
            $('.won').css('text-align', 'center');
            $('.PlayAgain').css('text-align', 'center');
        }

    turn++;

    }
);

function winner(letter){

    won = false;
    //check horizontal wins
    if($("#canvas .row0col0").text() === letter && $("#canvas .row0col1").text() === letter && $("#canvas .row0col2").text() === letter ){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }
    else if($("#canvas .row1col0").text() === letter && $("#canvas .row1col1").text() === letter && $("#canvas .row1col2").text() === letter)
    {
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }
    else if($("#canvas .row2col0").text() === letter && $("#canvas .row2col1").text() === letter && $("#canvas .row2col2").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }


    // check all vertical wins

    else if($("#canvas .row0col0").text() === letter && $("#canvas .row1col0").text() === letter && $("#canvas .row2col0").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }

    else if($("#canvas .row0col1").text() === letter && $("#canvas .row1col1").text() === letter && $("#canvas .row2col1").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }
    else if($("#canvas .row0col2").text() === letter && $("#canvas .row1col2").text() === letter && $("#canvas .row2col2").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }

    // check diagonal wins
    else if($("#canvas .row0col0").text() === letter && $("#canvas .row1col1").text() === letter && $("#canvas .row2col2").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }
    else if($("#canvas .row0col2").text() === letter && $("#canvas .row1col1").text() === letter && $("#canvas .row2col0").text() === letter){
        console.log("player " +  letter +  " has won");
        won = true;
        still_playing = false;
    }

    return won;


}