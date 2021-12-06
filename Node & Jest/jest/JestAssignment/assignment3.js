Library=[
    {
        bookid: 101, 
        bookname: "The Secret", 
        author: "Rhonda Byrne", 
        cost:"559"
    },
    {
        bookid: 102, 
        bookname: "Two Lives", 
        author: "Vikram Seth", 
        cost:"600"
    },
    {
        bookid: 103, 
        bookname: "Wings of Fire", 
        author: "APJ Abdul Kalam", 
        cost:"449"
    },
    {
        bookid: 104, 
        bookname: "Gulliver's Travels", 
        author: "Jonathan Swift", 
        cost:"399"
    },
    {
        bookid: 105, 
        bookname: "Diary of a young girl", 
        author: "Anna", 
        cost:"559"
    }
]

function returnBookDataById(id){
    let book= Library.find(book => book.bookid==id);
    if(book==undefined)
        return null;
    else
        return book;
}

function returnBookIds(){
    return Library.map(book=> book.bookid);
}


module.exports={returnBookDataById, returnBookIds};