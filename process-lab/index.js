// process.argv
console.log(process.argv)
console.log('Hello,', process.argv[2] || 'Guest')

// process.env
console.log(process.env.HOME)
console.log(process.env.USERNAME)

// process.upTime


// process.platform, pid, version, uptime
console.log(process.platform)
console.log(process.pid)
console.log(process.version)


// process.exit
// let ran
// do {
//   ran = Math.floor(Math.random() * 10)
//   console.log(ran)
// }while(ran < 8)
// console.log(process.uptime())
// process.exit(ran)

while(true){
  if(process.uptime() > 3) {
    console.log('Exit by process.exit')
    process.exit(0)
  }
}