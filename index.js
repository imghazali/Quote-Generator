let btn = document.querySelector("button");
let main = document.querySelector("main");

const powerfulQuotes = [
    "Greatness begins the moment you decide to rise again.",
    "Small daily improvements create extraordinary results.",
    "Your future is built by the choices you make today.",
    "The quietest minds often carry the loudest strength.",
    "Don’t wait for the perfect moment; create it.",
    "Discipline is choosing what you want most over what you want now.",
    "Your mindset is your strongest weapon.",
    "Success grows where excuses stop.",
    "Consistency turns ordinary into exceptional.",
    "A calm mind can overcome the strongest storms.",
    "Courage is not the absence of fear but the decision to move anyway.",
    "You don’t need to be perfect, you just need to start.",
    "Every setback sets the stage for a stronger comeback.",
    "You become unstoppable when you ignore doubt.",
    "Dream boldly, work silently, win loudly.",
    "Your potential is bigger than your excuses.",
    "Growth begins at the edge of your comfort zone.",
    "People who move mountains start by carrying small stones.",
    "Strength is built in the moments when no one is watching.",
    "Progress is progress, even if it’s slow.",
    "When you focus on the goal, obstacles lose their power.",
    "Hard times build the kind of strength comfort never will.",
    "Believe in the process even when the results are not visible.",
    "One step forward is better than standing still.",
    "The journey shapes you more than the destination.",
    "Your energy introduces you before your words do.",
    "Failure is not the opposite of success; it's a part of it.",
    "Make your vision so clear that doubts become irrelevant.",
    "A strong mind is your greatest asset.",
    "Don’t shrink your dreams to fit your reality—expand your reality.",
    "Success is built on habits, not hopes.",
    "Simple actions done daily compound into greatness.",
    "Let your actions speak louder than your intentions.",
    "Your only limit is the belief you choose.",
    "Ambition means nothing without consistent effort.",
    "The best project you will ever work on is yourself.",
    "Turn your pain into power and your power into purpose.",
    "Don't fear failure; fear not trying.",
    "A focused mind outperforms a talented one.",
    "Every morning is a fresh chance to rewrite your story.",
    "Be the kind of person your past self dreamed of becoming.",
    "Strong people are built from difficult experiences.",
    "Success starts with self-control and ends with discipline.",
    "Your future self is watching—don’t disappoint them.",
    "The world changes when you decide to become better.",
    "Keep going; your breakthrough may be one step away.",
    "Silence is a powerful answer to unnecessary noise.",
    "Be driven by purpose, not pressure.",
    "Let your progress be your loudest statement."
  ];
  

main.addEventListener('click' , function(){
    let h1 = document.createElement("h1");
    
    let a = Math.floor(Math.random()*powerfulQuotes.length);
    h1.innerText = powerfulQuotes[a];

    // random txt on any part of display
    let x = Math.random()*80;
    let y = Math.random()*80;
    let r = Math.random()*180;  //I use only 180 degree if you want 360 yo do...
    let scl = Math.floor(Math.random()*3);
   
    //Random colour generator
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    //styling of div !
    //main.style.position = 'relative'
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.position = "absolute"
    h1.style.top =x+'%';
    h1.style.left =y+'%';
    h1.style.rotate = r+'deg'
    h1.style.scale =scl;
    h1.style.fontSize = '1rem'

    main.appendChild(h1);
})