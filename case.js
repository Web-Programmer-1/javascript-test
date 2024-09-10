const myFriend = 'python';
console.log(myFriend.toUpperCase());

const book = ' python';
console.log(book.toLowerCase());

if(myFriend.trim() === book.trim()){
    console.log("answer is the correct " + book.toUpperCase());
    

}
else{
    console.log('wrong answer');
}