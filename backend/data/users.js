import bcrypt from "bcryptjs/dist/bcrypt";

const users= [
    {
    
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name: "User1",
        email: "User1@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name: "User2",
        email: "User2@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    }
]

export default users;