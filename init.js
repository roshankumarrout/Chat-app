const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=> {
        console.log("connection successfull");
    })
    .catch((err)=> console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats = [
    {
        from:"Jugal",
        to:"Tara",
        msg:"Send Notes of java n c",
        created_at:new Date(),
    },
    {
        from:"Roshan",
        to:"Tara",
        msg:"Send Videos od react",
        created_at:new Date(),
    },
    {
        from:"Jugal",
        to:"Pradeep",
        msg:"Send Pics of picnic",
        created_at:new Date(),
    },
    {
        from:"Jugal",
        to:"Roshan",
        msg:"Send Pics of trip",
        created_at:new Date(),
    }
];

Chat.insertMany(allChats);