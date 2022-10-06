import bcrypt from 'bcrypt';

const hashPassword = async () => {

    //generating the salt
    const salt = await bcrypt.genSalt(10);
    console.log("the salt is", salt)
    //creating the hashed value
    const hashedValue = await bcrypt.hash("MySecretPassword", salt);

    //the hashes are the same
    console.log("the hashed value is ", hashedValue);

    const hashedValue2 = await bcrypt.hash("MySecretPassword", salt);

    console.log("the second hashed value is", hashedValue2);
}

//the user is signing up and providing a password
const hashPasswordInclSalt = async () => {
    const hashedValue = await bcrypt.hash("MySecretPassword",10);
    console.log("the hashed value incl salt is ", hashedValue)
}

const comparePassword = async(password, hash) => {
    const checkPassword = await bcrypt.compare(password, hash);

    console.log("these are matching: ", checkPassword);
}

//hashPasswordInclSalt();

comparePassword("MySecretPassword","$2b$10$I5QZ5Dc0Oyml/PARb5mCbu81ftGFJmHNUJ8DR8qtly5jqfKBbK4cu");

//comparePassword("MySecretPassword","$2b$10$I5QZ5Dc0Oyml/PARb5mCbu81ftGFJmHNUJ8DR8qtly5jqfKBbK4cu")
//hashPassword();