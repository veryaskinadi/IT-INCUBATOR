const http = require('http')
let counter = 0

const server = http.createServer((request, response) => {


    let counterNum = String(counter)

    switch (request.url) {
        case '/students':
            counter++
            response.write('students')
            break
        case '/courses':
            response.write('F+B')
            break
        default:
            response.write('num ')

    }

    console.log(counter)
    response.write(counterNum)
    response.end()

})
server.listen(3003)

// const http = require('http')
//
//
//  const server = http.createServer((request, response) => {
//
//
//     switch (request.url) {
//         case '/students':
//             response.write('students')
//             break
//         case '/courses':
//             response.write('F+B')
//             break
//         default:
//             response.write('404')
//
//     }
//
//     response.end()
//
// })
//  server.listen(3003)
