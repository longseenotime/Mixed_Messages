const jokeHeads = [];
const jokeBodies = [];
const inspiringHeads = [];
const inspiringBodies = [];

const inspire = () => {
    let head = inspiringHeads[Math.floor(Math.random() * 11)];
    let body = inspiringBodies[Math.floor(Math.random() * 11)];

    return head + body;
}

const joke = () => {
    let head = jokeHeads[Math.floor(Math.random() * 11)];
    let body = jokeBodies[Math.floor(Math.random() * 11)];

    return head + body;
}

