

var quotes = [{
  quote: "Our destiny is in the stars, so let's go and search for it.",
  actor: "William Hartnell",
  character: "First Doctor",
  year: "1963- 1966"
}, {
  quote: "Logic, my dear Zoe, merely enables one to be wrong with authority.",
  actor: "Patrick Troughton",
  character: "Second Doctor",
  year: "1966- 1969"
}, {
  quote: "A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
  actor: "Jon Pertwee",
  character: "Third Doctor",
  year: "1970- 1974"
}, {
  quote: "There's no point being grown-up if you can't be childish sometimes.",
  actor: "Tom Baker",
  character: "Fourth Doctor",
  year: "1974- 1981"
}, {
  quote: "You know how it is; you put things off for a day and next thing you know, it's a hundred years later.",
  actor: "Peter Davison",
  character: "Fifth Doctor",
  year: "1981- 1984"
}, {
  quote: "In all my travelling throughout the universe, I have battled against evil, against power-mad conspirators. I should have stayed here. The oldest civilisation: decadent, degenerate, and rotten to the core.",
  actor: "Colin Baker",
  character: "Sixth Doctor",
  year: "1984- 1986"
}, {
  quote: "Anybody remotely interesting is mad in some way.",
  actor: "Sylvester McCoy",
  character: "Seventh Doctor",
  year: "1987,1989, 1996"
}, {
  quote: "Four minutes? That's ages. What if I get bored?",
  actor: "Paul McGann",
  character: "Eighth Doctor",
  year: "1996, 2013"
}, {
  quote: "Great men are forged in fire. It is the privilege of lesser men to light the flame.",
  actor: "John Hurt",
  character: "War Doctor",
  year: "2013"
}, {
  quote: "Before I go, I just want to tell you: you were fantastic. Absolutely fantastic. And do you know what? So was I!",
  actor: "Christopher Ecceleston",
  character: "Ninth Doctor",
  year: "2005"
}, {
  quote: "For a long time now, I thought I was just a survivor, but I'm not. I'm the winner! That's who I am: the Time Lord Victorious!",
  actor: "David Tennant",
  character: "Tenth Doctor",
  year: "2005- 2010"
}, {
  quote: "Bow ties are cool.",
  actor: "Matt Smith",
  character: "Eleventh Doctor",
  year: "2010- 2013"
}, {
  quote: "Never trust a hug – it’s just a way of hiding your face.",
  actor: "Peter Capaldi",
  character: "Twelfth Doctor",
  year: "2013- Present"
}
];

var quoteButton = document.querySelector(".doctorWho");
var quoteDisplay = document.querySelector(".randomQuote");
var doctorDisplay = document.querySelector(".randomDoctor");
//var pictureDisplay = document.querySelector(".doctorWho");
var yearDisplay = document.querySelector(".randomYear");




quoteButton.addEventListener("click", function() {
  var random = Math.floor(Math.random() * 13);

 //   pictureDisplay.textContent = (quotes[random].picture);
    quoteDisplay.textContent = (quotes[random].quote);
    doctorDisplay.textContent = (quotes[random].actor) +", as the " + (quotes[random].character);
    yearDisplay.textContent = (quotes[random].year);
});
