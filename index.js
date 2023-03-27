// Exercise String and number
let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString(data2)
console.log(data3, typeof data3)


// Array
let data = ["one", 2, true]
console.log( data[2], typeof data[2] )

// object
let user = {
    name: "amir",
    faculty: "fkekk",
    phone: {
        office : "6013685657",
        mobile : "60176846847"
    },
    email: "b022110031@student.utem.my"
}
console.log(user.phone.office)
console.log(user.phone.mobile)