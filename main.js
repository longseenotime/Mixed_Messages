const inspiringHeads = ['Just remember, ', 'Even on bad days, ', 'A wise man once said, ', 'Never forget, ', 'Rule 1 of being a boss, ', 'Keep in mind, '] 
const inspiringBodies = ['Bros over hoes ', 'Cereal goes in the bowl before milk ', 'If she still sucking after you nut, she might be a vaccum cleaner ', "Eppstein didn't kill himself and neither should you ", "If you can't do the job, don't give up, just outsource it to a Bangladeshi teenager and pay him 1/4 the minimum wage. Problem solved ", "Always keep a pack of gum and bottle of oat milk in you back pocket. No exeptions "];
const inspiringTails = ['- Barney Stinson', '- Barack Obama. . . Thanks Obama!', '- Mahatma Gandhi', '- Tu Pac', '- Bobi Wine', '- a pimp named Slickback', '- Severus Snape'];

const inspire = () => {
    let head = inspiringHeads[Math.floor(Math.random() * 6)];
    let body = inspiringBodies[Math.floor(Math.random() * 6)];
    let tail = inspiringTails[Math.floor(Math.random() * 6)];
    return head + body + tail;
}

console.log(inspire());