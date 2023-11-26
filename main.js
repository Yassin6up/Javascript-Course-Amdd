let names = ["hamza",  "ahmed", "ahmed" , "asma" , "layla", "yassine" , "omar", "khaled", "kawtar","mo3tasiim" , "ahlam"]


names.forEach(( element , index )=>{
    document.write(element + ' ' + index , "<br>")
})
// Output: 
// hamza 0
// ahmed 1
// ahmed 2
// asma 3
// layla 4
// yassine 5
// omar 6
// khaled 7
// kawtar 8
// mo3tasiim 9
// ahlam 10


for(let i = 0 ; i<= names.length ; i++){
    console.log(names[i] + i)
}

// Output: 
// hamza 0
// ahmed 1
// ahmed 2
// asma 3
// layla 4
// yassine 5
// omar 6
// khaled 7
// kawtar 8
// mo3tasiim 9
// ahlam 10
