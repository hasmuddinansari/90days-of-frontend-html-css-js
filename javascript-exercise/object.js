const person = {
    name:"kd",
    email:"kd@gmail.com"
}

let persons = [{name:"kd", email:"md@gmail.comm"}, {name:"gd", email:"gd@gmail.com"}, {name:"kd", email:"kd@gmail.com"}]

function findUser(email, name){
    if(person.email===email || person.name===name){
        return person
    }
    return 'does not exist in our database'
}

// console.log(findUser(null, 'kd'))

function findMultiUser(email, name){
    let result = []
    for(let i=0; i<persons.length; i++){
        if(persons[i].email===email || persons[i].name===name){
            result.push(persons[i])
        }
    }
    return result
}

function updateUser(email, updatedData){
    for(let i=0; i<persons.length; i++){
        if(persons[i].email===email){
            const currentPerson = persons[i]
            const newData = {...currentPerson, ...updatedData}
            persons[i] = newData
        }
    }
}


// console.log(findMultiUser('md@gmail.comm', ""))
updateUser('kd@gmail.com', {age:10})
console.log(persons)




