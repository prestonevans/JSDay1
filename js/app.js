// let helloElm = document.querySelector('#hello');
// helloElm.innerText = 'Hello World';

// helloElm = document.querySelector('#hello1');
// helloElm.innerText = 'Hi';

// const val = {
//     boo: true, 
//     num: 6,
//     str: 'Hello',
//     obj: {fname: 'Preston', lname: 'Evans'},
//     fullname: function() {
//         return this.obj.fname + ' ' + this.obj.lname;
//     },
//     add: function(x,y) {
//         return x + y;
//     },
//     catStr: function(a,b) {
//         return a + ' ' + b;
//     }
// }

// console.log(val.fullname());
// console.log(val.add(2,3));

// console.log(val.fullname());

const gameInfo = {
    username: 'localdude7',
    character: 'Dog',
    health: 89,
    bonusLevelUnlocked: false,
    scores: [
        {
        level: 1,
        score: 3050,
        time: 2500
    },
    {
        level: 2,
        score: 6050,
        time: 3500
    },
    {
        level: 3,
        score: 600,
        time: 300
    },
]
}

let totalScore = 0;
let level = 0;

for (let i = 0; i < gameInfo.scores.length; i++) {
    level ++;
    const score = gameInfo.scores[i].score;
    totalScore = totalScore + score;
}

document.querySelector('#hello').innerText = `Hello ${gameInfo.username}! Your total score is: ${totalScore}. You are on level: ${level}`
