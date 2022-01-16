db.createUser(
    {
        user: "admin",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "TodoApp_DataBase"
            }
        ]
    }
);