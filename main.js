const inspiringHeads = ['just remember, ', 'even on bad days, ', 'a wise man once said, ', 'never forget, ', 'Rule 1 of being a boss', 'keep in mind'] 
const inspiringBodies = ['Bros over hoes ', 'cereal goes in the bowl before milk', 'If she still sucking after you nut, she might be a vaccum cleaner', 'I'];
const inspiringTails = ['- Barney Stinson', '- Barack Obama. . . Thanks Obama!', '- Mahatma Gandhi', '- Tu Pac', '- Bobi Wine', '- a pimp named Slickback', '- Severus Snape'];

const inspire = () => {
    let head = inspiringHeads[Math.floor(Math.random() * 6)];
    let body = inspiringBodies[Math.floor(Math.random() * 6)];

    return head + body;
}

