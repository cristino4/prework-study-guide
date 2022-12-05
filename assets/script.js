var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];




function selectTopic(){
    if (randomTopic==='HTML') {
        console.log("Let's Study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS");
    } else if (randomTopic === 'Git') {
        console.log("lets study GIT!");
    } else if (randomTopic === 'JavaScript') {
        console.log("lets study javascript!");
    } else {
        console.log('Please try again!');
    }
}

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log("topic #",x+1,":",topics[x]);
    }
}

console.log("Here are the topics we will be working with:");
listTopics();
console.log("Here is a random topic we select to work on:");
selectTopic();