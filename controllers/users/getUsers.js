
function user(req,res){
    
    res.json(users)
}

module.exports = user


/* let criterions = {criteria: `=`,
    key: `username`,
    value: req.params.username,
    nextConcat: `AND`,
    key2: `userpass`,
    value2: req.params.userpass
    };

    const users = usersManager.getByLogin(criterions);
    changeUsers(users) */