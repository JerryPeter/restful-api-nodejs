const os = require('os');

console.log(`Free Memory ${os.freemem}`);
console.log(`Total Memory ${os.totalmem}`);
console.log(`Uptime ${os.uptime}`);
console.log(`Platform ${os.platform}`);
console.log(`Release ${os.release}`);
