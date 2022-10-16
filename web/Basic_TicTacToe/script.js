addEventListener("load",setupBoard);

let board = [' ',' ',' ',' ',' ',' ',' ',' ',' ',]

function setupBoard()
{
    let $board_Items = $(".board-element");

    updateBoard();

    $board_Items.on('click.playerTouch',function(){
        for(let index = 0 ; index < board.length ; index++)
        {
            if($board_Items[index] == this)
            {
                setMove(index);
                updateBoard();
                return;
            }
        }
    });


    function updateBoard()
    {
        $.each($board_Items,(idx,ele)=>{
            jQuery(ele).html(board[idx]);
        })
        /*for(let index = 0 ; index < board.length ; index++)
        {
            $board_Items[index].innerHTML = board[index];
        }*/
    }

    function endGame()
    {
        $board_Items.off('click.playerTouch');
        /*for(const element of $board_Items)
        {
            element.removeEventListener('click',clickedOnCell);
        }*/
    }

    let Turn = 0;

    function setMove(index)
    {
        if(board[index] != ' ')return;
        if(Turn == 0)
        {
            Turn = 1;
            board[index] = 'O';
        }
        else
        {
            Turn = 0;
            board[index] = 'X';
        }
        const won = checkWin();
        if(won == 1)
        {
            endGame();
            alert("O wins");
        }
        if(won == 2)
        {
            endGame();
            alert("X wins");
        }
    }

    function checkWin()
    {
        const toCheck = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        for(const element of toCheck)
        {
            if(checkIndices(element,'O'))
            {
                return 1;
            }
            if(checkIndices(element,'X'))
            {
                return 2;
            }
        }

        return 0;

        function checkIndices(arr,ch)
        {
            for(const element of arr)
            {
                if(board[element] != ch)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
