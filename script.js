//Write a function with conditional statements, that will give you an output of the seating arrangement for an input of seat number and row number.

function seatarr(seatno , rowno) {
    if(rowno == 1){
        if(seatno == 1 || seatno == 4){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 2 || seatno == 5){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 3 || seatno == 6){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 7){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 8){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 2){
        if(seatno == 9 || seatno == 12){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 10 || seatno == 13){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 11 || seatno == 14){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 15){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 16){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 3){
        if(seatno == 17 || seatno == 20){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 18 || seatno == 21){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 19 || seatno == 22){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 23){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 24){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 4){
        if(seatno == 25 || seatno == 28){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 26 || seatno == 29){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 27 || seatno == 30){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 31){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 32){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 5){
        if(seatno == 33 || seatno == 36){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 34 || seatno == 37){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 35 || seatno == 38){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 39){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 40){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 6){
        if(seatno == 41 || seatno == 44){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 42 || seatno == 45){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 43 || seatno == 46){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 47){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 48){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 7){
        if(seatno == 49 || seatno == 52){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 50 || seatno == 53){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 51 || seatno == 54){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 55){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 56){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 8){
        if(seatno == 57 || seatno == 60){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 58 || seatno == 61){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 59 || seatno == 62){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 63){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 64){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } else if(rowno == 9){
        if(seatno == 65 || seatno == 68){
            console.log("Your Seat is: Lower Berth")
        } else if(seatno == 66 || seatno == 69){
            console.log("Your Seat is: Middle Berth")
        } else if(seatno == 67 || seatno == 70){
            console.log("Your Seat is: Upper Berth")
        } else if(seatno == 71){
            console.log("Your Seat is: Side Berth")
        } else if(seatno == 72){
            console.log("Your Seat is: Side Upper Berth")
        } else {
            console.log("Invalid Entrry")
        }
    } 
}

console.log(seatarr(54,7))
console.log(seatarr(4,1))
console.log(seatarr(10,2))
console.log(seatarr(22,3))
console.log(seatarr(31,4))
console.log(seatarr(40,5))
console.log(seatarr(49,6))
console.log(seatarr(64,7))