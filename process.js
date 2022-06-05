// console.log(process.env)

console.log(process.env.PWD)

console.log(process.env.USER)

console.log(process.env.NODE_ENV)

console.log(process.memoryUsage())

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Hello ${firstName} ${lastName}`)
