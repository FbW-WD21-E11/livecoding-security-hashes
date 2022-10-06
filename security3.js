import bcrypt from 'bcrypt';

const plainTextPassword = "Wt$2Rce*";

const compareItems = () => {
    console.time(`RESPONSE TIME`)
    const isCorrect = bcrypt.compareSync(plainTextPassword,"$2b$19$gHsNCi8E585tyySwDIw.KeU1wcyBUsySGrJ0TIkMIa9Wj9SImXz46")
    console.timeEnd(`RESPONSE TIME`)

    console.log("the passwords is correct: ", isCorrect);
}

compareItems();