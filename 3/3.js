const fs = require('fs');
const lodash=require('lodash');

print = o => console.log(o)
//guesses = new Array(100).fill([])

guesses = {}
recordSuggestions = (start,size) =>{
    start=start.split(",")
    size=size.split("x")

    //make columns
    let colStart = Number(start[0])
    let colEnd = Number(start[0])+Number(size[1])
    let columns = lodash.range(colStart,colEnd)
    //print(columns)

    //make rows
    let rowStart = Number(start[1])
    let rowEnd = Number(start[1])+Number(size[0])
    let rows = lodash.range(rowStart,rowEnd)
    //print(rows)

    columns.forEach(e=>{
        rows.forEach(f=>{
           //print(guesses[e])
            if (guesses[e]) {
                if(guesses[e][f]>=1){
                    guesses[e][f]='x'
                } else {
                    guesses[e][f]=1
                }

            } else {
                //print("guesses[e] was false")
                guesses[e]=[]
                guesses[e][f]=1
            }
        })
    })
}
partOne = () => {

    fs.readFile('input.txt', 'utf-8', (err,data)=>{
        data = data.split("\n")
        let i = 0
        //have an unique number for each square inch of the fabric.
        data.forEach(row=>{
            i++
            let rowID = row.split("@")[0]
            let start = row.split("@")[1].split(":")[0].trim()
            let size = row.split(":")[1].trim()
            recordSuggestions(start,size,rowID)
        })
        let sum = 0
        //print(guesses)
        fs.writeFileSync("file.json",JSON.stringify(guesses),null,4)
        //print(guesses)
        Object.keys(guesses).forEach(key=>{
            guesses[key].forEach(number=>{
                if(number==='x') sum++
            })
        })
        //print(guesses)


        print(sum)
    })
}
partOne()