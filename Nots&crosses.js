
// generate a simple nots and crosses table
function makeGrid(){
    var table = document.getElementById('canvas');

    for(let x =0; x< 3; x++){
        let myRow = document.createElement("tr");
        myRow.id = "row" + x;

        table.appendChild(myRow);
        let roW = document.getElementById("row" + x);

        for(let y = 0; y < 3; y++ ){
            let myCell = document.createElement('td');
            roW.appendChild(myCell);
        }
    }


}




window.onload = function (){
    makeGrid();
}

