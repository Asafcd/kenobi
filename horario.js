const horario = "Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00";

// Split string by whitespace character
const splitString = horario.split("\n");
console.log(splitString)


let arraySun = []
let arrayMon = []
let arrayTue = []
let arrayWed = []
let arrayThu = []
let arrayFri = []
let arraySat = []
let maparr = new Map()
let calculadora = new Map()
let horasbdias = new Map()


splitString.forEach(dia => {
    if(dia.substr(0,3) == 'Sun'){
        dia = dia.slice(4);        
        let calculo = dia.split("-");         
        calculo.forEach( e => {
            let x = toMS(e)
            arraySun.push(x)
        })  
    }
    if(dia.substr(0,3) == "Mon"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arrayMon.push(x)
        })
    }
    if(dia.substr(0,3) == "Tue"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arrayTue.push(x)
        })
    }
    if(dia.substr(0,3) == "Wed"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arrayWed.push(x)
        })
    }
    if(dia.substr(0,3) == "Thu"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arrayThu.push(x)
        })
    }
    if(dia.substr(0,3) == "Fri"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arrayFri.push(x)
        })
    }
    if(dia.substr(0,3) == "Sat"){
        dia = dia.slice(4);
        let calculo = dia.split("-");
         
        calculo.forEach( e => {
            let x = toMS(e)
            arraySat.push(x)
        })
    }

})

//#region sort and map
maparr.set( "Sunday", arraySun.sort( (a, b)=>{return a - b} ) )
maparr.set( "Monday", arrayMon.sort( (a, b)=>{return a - b} ) )
maparr.set( "Tuesday", arrayTue.sort( (a, b)=>{return a - b} ) )
maparr.set( "Thursday", arrayThu.sort( (a, b)=>{return a - b} ) )
maparr.set( "Wednesday", arrayWed.sort( (a, b)=>{return a - b} ) )
maparr.set( "Friday", arrayFri.sort( (a, b)=>{return a - b} ) )
maparr.set( "Saturday", arraySat.sort( (a, b)=>{return a - b} ) )
//#endregion

maparr.forEach(logMap)
//console.log("HORARIOS", maparr)

function logMap(value, key, map) {
    if(key==="Monday"){
        let v = map.get(key)
        for (let j =0; j<=v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
        }    
    }
    if(key==="Tuesday"){
        let v = map.get(key)
        for (let j =0; j<=v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Monday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        }    
    }
    if(key==="Wednesday"){
        let v = map.get(key)
        for (let j =0; j<v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Tuesday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        }    
    }
    if(key==="Thursday"){
        let v = map.get(key)
        for (let j =0; j<v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Wednesday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        }    
    }
    if(key==="Friday"){
        let v = map.get(key)
        for (let j =0; j<v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Thursday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        }    
    }
    if(key==="Saturday"){
        let v = map.get(key)
        for (let j =0; j<v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Friday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        }    
    }
    if(key==="Sunday"){
        let v = map.get(key)
        for (let j =0; j<=v.length-1; j++){
            if(j%2===0 && j>0){
                let x = v[j]- v[j-1]
                calculadora.set(key, x)
            }
            if( j===0 ){
                let w = map.get("Saturday")
                let last = w[w.length-1]
                let x = ( v[j] - last)+24
                horasbdias.set(key, x)
            }
        } 
        
    }
        
}


function toMS(str) {
  if(!str.includes(":"))
     return parseFloat(str);
  const [h, mins] = str.split(":");
  //console.log(h, mins)
    let min = parseInt((mins * 100)/60)
  return parseFloat(h+"."+min)
}
function toStr(x) {
  let a = x.toString()
  console.log(a)
  const [h, mins] = a.split(".");
  //console.log(h, mins)
    let min = ((mins * 60)/100)
  return h+":"+min.toString()
}

// Horas libres en el mismo dia - calculadora
//Horas libres entre dias diferentes - horasbdias
let diarest = ""
let descanso = 0
let keys = maparr.keys()
let y =0

for (i of keys){
    let v = calculadora.get(i) 
    let vdias = horasbdias.get(i)
    if(v>vdias){ 
        if(v>descanso){ 
            descanso = v
            diarest = i
            diabeforerest=i-1
        }
        
    } else if(vdias>v){
        if(vdias>descanso){
            descanso = vdias
            diarest = i
            diabeforerest=i-1
        }
    }
}

console.log(calculadora)
console.log(horasbdias)
console.log(toStr(descanso)+" de descanso desperando el " + diarest)