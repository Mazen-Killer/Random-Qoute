
let qouteList = [{
    'author': '"Jim Rohn"',
    'content': '"Beware of what you become in pursuit of what you want."'
},
    {
        'author': '"Epictetus"',
        'content': `"'It's not what happens to you, but how you react to it that matters."`
    },
    {
        'author': '"Frank Sinatra"',
        'content': '"The best revenge is massive success."'
    },
    {
        'author': '"Wayne Gretzy"',
        'content': '"You miss 100% of the shots you don\'t take."'
    },
    {
        'author': '"Nelson Mandela"',
        'content': '"Resentment is like drinking poison and waiting for your enemies to die."'
    },
    {
        'author': '"Elbert Hubbard"',
        'content': '"Do not take life too seriously. You will not get out alive."'
    },]

    $(".btn").on("click" ,()=>{
        let randomQoute = qouteList[Math.floor(Math.random() * qouteList.length)]
        $("#content").text(randomQoute.content)
        $("#author").text(randomQoute.author)
    });