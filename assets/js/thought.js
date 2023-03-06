//Final JavaScript
const generateQuote = function() {
    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love."
    },
    {
        quote: "It is impossible to manufacture or imitate love"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself." 
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving." 
    },
    {
        quote: "When you have a dream, you’ve got to grab it and never let go" 
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Life has got all those twists and turns. You’ve got to hold on tight and off you go."  
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Arthur Weasley"
    },
    {
        quote: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on" 
    },
    {
        quote: "You can be everything. You can be the infinite amount of things that people are." 
    },
    {
        quote: "No matter what people tell you, words and ideas can change the world."
    },
    {
        quote: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely."  
    },
    {
        quote: "Try to be a rainbow in someone’s cloud."  
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    curr = quotes[arrayIndex].quote;
    curr = "\""+curr+"\"";
    document.getElementById("thought").innerHTML = curr; 

}
window.onload = function() {
    generateQuote();
    document.getElementById("vcfg").addEventListener('click', generateQuote);
    document.getElementById("refresh").addEventListener('click', generateQuote);
    document.getElementById("con").addEventListener('click', generateQuote);
    document.getElementById("por").addEventListener('click', generateQuote);
    document.getElementById("prj").addEventListener('click', generateQuote);
    document.getElementById("exp").addEventListener('click', generateQuote);
    document.getElementById("abu").addEventListener('click', generateQuote); 
}
