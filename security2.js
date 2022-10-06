import bcrypt from 'bcrypt';

const plainTextPassword = "Wt$2Rce*";

//loop through possible saltrounds for hashing
for(let saltRounds =10; saltRounds < 21; saltRounds++){
    console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
    let hash = bcrypt.hashSync(plainTextPassword, saltRounds);
    console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
    console.log(hash);
    console.log("________________________________________________");
}