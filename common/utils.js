const utils = {}

utils.flaggedUsers=
[16663882102141,1663900040545,1664485938]

utils.styles={
    car:{color:'gray',text:'🚗'},
    fish:{color:'red',text:'🐟'},
    house:{color:'yellow',text:'🏠'},
    tree:{color:'green',text:'🌳'},
    guitar:{color:'blue',text:'🎸'},
    bicycle:{color:"cyan",text:'🚲'},
    pencil:{color:'magenta',text:'✏'},
    clock:{color:'lightgray',text:'🕖'},

}

utils.formatPercent = (n)=>{
    return (n*100).toFixed(2) + "%"
}

utils.printProgress = (count,max)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const precent = utils.formatPercent(
        count/max
    )

    process.stdout.write(count+"/"+max+"("+precent+")");
}

utils.groupBy=(objArray,key)=>{
    const groups = {};
    for(let obj of objArray){
    const val=obj[key]
    if(groups[val]==null){
        groups[val]=[];
    }
    groups[val].push(obj)
}
return groups;
}

if(typeof module !== "undefined"){
    module.exports = utils
}