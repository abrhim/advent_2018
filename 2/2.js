const fs = require('fs');

print = e => {console.log(e)}

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

partOne = () =>{
    fs.readFile('input2.txt','utf-8', (err, data)=> {
        data = data.split("\n")
        let three = 0;
        let two = 0;
        data.forEach(line=>{
            let localTwo = 0
            let localThree = 0
            line = line.split('');
            line.forEach(char=>{
                let count = occurrences(line,char)
                if (count === 2) { 
                    localTwo++
                }
                if (count === 3){
                    localThree++
                }
            })
            if (localTwo > 0) two++
            if (localThree > 0) three++
        })
        console.log(two* three)
    })
}

compareLineToLine = (line1,line2) => {
    line1 = line1.split("")
    line2 = line2.split("")
    let count=0
    let daChar=''

    for(let i = 0; i<line1.length;i++){
        if(line1[i] !== line2[i]){
            count++
        }
        if (count>1){
            return false
        }       

    }
    return true
}

partTwo = () => {

    fs.readFile("input2.txt",'utf-8',(err,data)=>{
        data=data.split("\n")
        for(let i=0;i<data.length;i++){
            for(let j=i+1;j<data.length;j++){
                if (compareLineToLine(data[i],data[j])){
                    print(data[i] + ":" + data[j])
                }
            }
        }
    })

    //open file
    //for each line
    //  each line is compared against it
    //  go thru every other line comparing char by char. if a char is different, increment diff counter. 
    //  if diff counter is 2, break and go to the next line. If diff counter is not --> report the two lines. 
    

}



partTwo()
