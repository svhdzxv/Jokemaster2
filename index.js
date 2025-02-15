const http = require('http')
const path = require('path')

const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url == '/jokes' && req.method == 'GET'){
        getAllJokes(req,res)
    }
})
server.listen(3000)
function getAllJokes(req,res){
    let dir = fs.readdirSync(daraPath)
    let allJokes = []

    for(let i = 0; i < dir.length; i++){
        let file = fs.readFileSync(path.join(datapath,`${i}.json`))
    let jokeJson = Buffer.from(file).toString()
    let joke = JSON.parse(jokeJSON)
    joke.id = i
    allJokes.push(joke)
    }
    res.end(JSON.stringify(allJokes))
}