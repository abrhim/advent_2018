const fs = require('fs');
const lodash=require('lodash');

print = o => console.log(o)
guesses ={}
recordSuggestions = (start,size) =>{
    start=start.split(",")
    size=size.split("x")
    //make columns
    let colStart = Number(start[0])
    let colEnd = Number(start[0]+size[1])
    let columns = lodash.range(colStart,colEnd)


    //make rows
    let rowStart = Number(start[1])
    let rowEnd = Number(start[1]+size[0])
    let rows = lodash.range(rowStart,rowEnd)

    columns.forEach(e=>{
        rows.forEach(f=>{
            let key = String(e) + String(f)
            if (guesses[key]) {
                guesses[key]+=1
            } else {
                guesses[key]=1
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
        Object.values(guesses).forEach(e=>{
            if (e>=2){
                sum++
            }
        })
        print(sum)
    })
}
partOne()