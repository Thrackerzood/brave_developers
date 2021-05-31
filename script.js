function search(s,a,b){
let i = -1
if (s === '') return -1;
let info = [...s].map(word => {
      i++
      if(word === a) return i
      if(word === b) return i
}).filter(int => int !== undefined)
return (info.length == 2) ? Math.max(info[0],info[1]) : info[0]
}
   
console.log(search('return2This3','2','2'))