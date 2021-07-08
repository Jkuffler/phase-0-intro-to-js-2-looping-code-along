
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        ;
    }
    return gifts;
}
wrapGifts(gifts);


function writeCards(cards, surprise) {

let name = []
 for (let i = 0; i < cards.length; i++) {
  name.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
 }
 return name;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}