const Body = document.getElementById('main')
const Them = document.getElementById('thema')
const text = document.getElementById('jopa')
const border = document.getElementById('borders')
const textTem = document.getElementById('thema')
const speed = document.getElementById('lob')
const startGame = document.getElementById('start')
const bigDate = 918374
const golZmeyi = document.getElementById('zmeya')
const zmeika1 = document.getElementById('zmeya1')  
const zmeika2 = document.getElementById('zmeya2')  
const zmeika3 = document.getElementById('zmeya3') 
const zmeika4 = document.getElementById('zmeya4')  
const zmeika5 = document.getElementById('zmeya5')  
const zmeika6 = document.getElementById('zmeya6')
const zmeika7 = document.getElementById('zmeya7')  
const zmeika8 = document.getElementById('zmeya8')  
const zmeika9 = document.getElementById('zmeya9') 
const zmeika10 = document.getElementById('zmeya10')  
const zmeika11 = document.getElementById('zmeya11')  
const zmeika12 = document.getElementById('zmeya12')
const zmeika13 = document.getElementById('zmeya13')  
const zmeika14 = document.getElementById('zmeya14')  
const zmeika15 = document.getElementById('zmeya15') 
const zmeika16 = document.getElementById('zmeya16')  
const zmeika17 = document.getElementById('zmeya17')  
const zmeika18 = document.getElementById('zmeya18')
const zmeika19 = document.getElementById('zmeya19')  
const zmeika20 = document.getElementById('zmeya20')  
const zmeika21 = document.getElementById('zmeya21') 
const zmeika22 = document.getElementById('zmeya22')  
const zmeika23 = document.getElementById('zmeya23')  
const zmeika24 = document.getElementById('zmeya24')    
const zmeika25 = document.getElementById('zmeya25')  
const zmeika26 = document.getElementById('zmeya26')
const apple = document.getElementById('apple')
const chetchik = document.getElementById('ddmraz')

function inn(sps,a){
    var t
    for(let i of sps){
        if(i === a){
            return true
        }
    }
    return false
}
function searchIn(sps,b,c){
    var kira = 0
    for (let i in sps){
        // console.log(a[i])
        if (true === (sps[i] === b || sps[i] === c)){
            console.log('ready')
            kira += 1
        } 
    }
    if(kira > 0){
        return true
    }
    else{ 
      return false   
    }
    
}
function appalsinRandom(){
    var fr = greatRandom(455,1325)
    var fr1 = greatRandom(250,855)
    apple.style.left = fr + 'px'
    apple.style.bottom = fr1 + 'px'
}
function greatRandom (a,b) {
    var t = b - a
    var chis = Math.floor(Math.random()*t) + a
    var xer = chis % 15 
    return chis - xer
}
function ThemaT () {
    if(Body.style.backgroundColor == 'white'){
        Body.style.backgroundColor = 'black'
        text.style.color = 'white'
        border.style.borderColor = 'white'
        textTem.style.color = 'white'
        golZmeyi.style.backgroundColor = 'white'
    } else {
        Body.style.backgroundColor = 'white'
        text.style.color = 'black'
        border.style.borderColor = 'black'
        textTem.style.color = 'black'
        golZmeyi.style.backgroundColor =  'black'
    }
}
let bottom = 400
let left = 500
var kolob 
var titi 
let spis = []
let spis2 = []
let spisSoot = []
let spisSoot1 = []
var fr = greatRandom(455,1325)
var fr1 = greatRandom(250,855)
apple.style.left = fr + 'px'
apple.style.bottom = fr1 + 'px'
// if((golZmeyi.style.bottom === fr1 + 'px' || fr1 - 50 + 'px' || fr1 + 50 + 'px') & (golZmeyi.style.left === fr + 'px' || fr - 50 + 'px' || fr + 50 + 'px')){
//     appalsinRandom()
// }
var frik 
var frik1
var fr 
var fr1 
var hr
var hr1
var spsZmey = [golZmeyi,zmeika1,zmeika2,zmeika3,zmeika4,zmeika5,zmeika6,zmeika7,zmeika8,zmeika9
    ,zmeika10,zmeika11,zmeika12,zmeika13,zmeika14,zmeika15,zmeika16,zmeika17,zmeika18,zmeika19,zmeika20
    ,zmeika21,zmeika22,zmeika23,zmeika24,zmeika25,zmeika26]
zmeika1.style.backgroundColor = 'white'
zmeika2.style.backgroundColor = 'white'
zmeika3.style.backgroundColor = 'white'
zmeika4.style.backgroundColor = 'white'
zmeika5.style.backgroundColor = 'white'
zmeika6.style.backgroundColor = 'white'
zmeika7.style.backgroundColor = 'white'
zmeika8.style.backgroundColor = 'white'
zmeika9.style.backgroundColor = 'white'
zmeika10.style.backgroundColor = 'white'
zmeika11.style.backgroundColor = 'white'
zmeika12.style.backgroundColor = 'white'
zmeika13.style.backgroundColor = 'white'
zmeika14.style.backgroundColor = 'white'
zmeika15.style.backgroundColor = 'white'
zmeika16.style.backgroundColor = 'white'
zmeika17.style.backgroundColor = 'white'
zmeika18.style.backgroundColor = 'white'
zmeika19.style.backgroundColor = 'white'
zmeika20.style.backgroundColor = 'white'
zmeika21.style.backgroundColor = 'white'
zmeika22.style.backgroundColor = 'white'
zmeika23.style.backgroundColor = 'white'
zmeika24.style.backgroundColor = 'white'
zmeika25.style.backgroundColor = 'white'
zmeika26.style.backgroundColor = 'white'
var kolVoDan = 0
function move(event) {
    function appalsinRandom(){
        fr = greatRandom(455,1325)
        fr1 = greatRandom(250,855)
        apple.style.left = fr + 'px'
        apple.style.bottom = fr1 + 'px'
        hr = [fr,fr+5,fr+10,fr+15,fr+20,fr+25,fr+30,fr-5,fr-10,fr-15,fr-20,fr-25,fr-30]
        hr1 = [fr1,fr1+5,fr1+10,fr1+15,fr1+20,fr1+25,fr1+30,fr1-5,fr1-10,fr1-15,fr1-20,fr1-25,fr1-30]
    }
    function check(){
        if(inn(hr,left) & inn(hr1,bottom) === true){
            appalsinRandom()
            kolVoDan += 1
            peremena = spsZmey[kolVoDan]
            peremena.style.backgroundColor = 'black'
        }
        else if(kolVoDan === 26){
            alert('вы выиграли!') 
            return 'hyy'  
        }
        chetchik.textContent = 'Ваш счёт:' + kolVoDan
    }
    re = setInterval(check,200)
    var x = event.keyCode
    if(x === 32){
        clearInterval(kolob)
        return 
    }
    else if(x === 38){
        console.log(hr,hr1)
        spis.push(left)
        spis2.push(bottom)
        hr = [fr,fr+5,fr+10,fr+15,fr+20,fr+25,fr+30,fr-5,fr-10,fr-15,fr-20,fr-25,fr-30]
        hr1 = [fr1,fr1+5,fr1+10,fr1+15,fr1+20,fr1+25,fr1+30,fr1-5,fr1-10,fr1-15,fr1-20,fr1-25,fr1-30]
        console.log(inn(hr,left),inn(hr1,bottom))
        bottom += 15
        golZmeyi.style.bottom = bottom + 'px'
        zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
        zmeika1.style.left = spis[spis.length - 1] + 'px'
        zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
        zmeika2.style.left = spis[spis.length - 2] + 'px'
        zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
        zmeika3.style.left = spis[spis.length - 3] + 'px'
        zmeika4.style.bottom = spis2[spis2.length - 4]  +'px'
        zmeika4.style.left = spis[spis.length - 4] + 'px'
        zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
        zmeika5.style.left = spis[spis.length - 5] + 'px'
        zmeika6.style.bottom = spis2[spis2.length - 6] +'px'
        zmeika6.style.left = spis[spis.length - 6] + 'px'
        zmeika7.style.bottom = spis2[spis2.length - 7] +  'px'
        zmeika7.style.left = spis[spis.length - 7] + 'px'
        zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
        zmeika8.style.left = spis[spis.length - 8] + 'px'
        zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
        zmeika9.style.left = spis[spis.length - 9] + 'px'
        zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
        zmeika10.style.left = spis[spis.length - 10] + 'px'
        zmeika11.style.bottom = spis2[spis2.length - 11] +  'px'
        zmeika11.style.left = spis[spis.length - 11] + 'px'
        zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
        zmeika12.style.left = spis[spis.length - 12] + 'px'
        zmeika13.style.bottom = spis2[spis2.length - 13] +  'px'
        zmeika13.style.left = spis[spis.length - 13] + 'px'
        zmeika14.style.bottom = spis2[spis2.length - 14] +  'px'
        zmeika14.style.left = spis[spis.length - 14] + 'px'
        zmeika15.style.bottom = spis2[spis2.length - 15] +  'px'
        zmeika15.style.left = spis[spis.length - 15] + 'px'
        zmeika16.style.bottom = spis2[spis2.length - 16] +  'px'
        zmeika16.style.left = spis[spis.length - 16] + 'px'
        zmeika17.style.bottom = spis2[spis2.length - 17] +  'px'
        zmeika17.style.left = spis[spis.length - 17] + 'px'
        zmeika18.style.bottom = spis2[spis2.length - 18] +  'px'
        zmeika18.style.left = spis[spis.length - 18] + 'px'
        zmeika19.style.bottom = spis2[spis2.length - 19] +'px'
        zmeika19.style.left = spis[spis.length - 19] + 'px'
        zmeika20.style.bottom = spis2[spis2.length - 20] +  'px'
        zmeika20.style.left = spis[spis.length - 20] + 'px'
        zmeika21.style.bottom = spis2[spis2.length - 21] +  'px'
        zmeika21.style.left = spis[spis.length - 21] + 'px'
        zmeika22.style.bottom = spis2[spis2.length - 22] +  'px'
        zmeika22.style.left = spis[spis.length - 22] + 'px'
        zmeika23.style.bottom = spis2[spis2.length - 23] +  'px'
        zmeika23.style.left = spis[spis.length - 23] + 'px'
        zmeika24.style.bottom = spis2[spis2.length - 24] +  'px'
        zmeika24.style.left = spis[spis.length - 24] + 'px'
        zmeika25.style.bottom = spis2[spis2.length - 25] +  'px'
        zmeika25.style.left = spis[spis.length - 25] + 'px'
        zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
        zmeika26.style.left = spis[spis.length - 26] + 'px'
        clearInterval(kolob)
        // if(inn(hr,left) & inn(hr1,bottom) === true){
        //     appalsinRandom()
        // }
        kolob = setInterval(jopa, 750)

        function jopa() {
            spis.push(left)
            spis2.push(bottom)
            bottom += 15
            golZmeyi.style.bottom = bottom + 'px'
            zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
            zmeika1.style.left = spis[spis.length - 1] + 'px'
            zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
            zmeika2.style.left = spis[spis.length - 2] + 'px'
            zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
            zmeika3.style.left = spis[spis.length - 3] + 'px'
            zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
            zmeika4.style.left = spis[spis.length - 4] + 'px'
            zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
            zmeika5.style.left = spis[spis.length - 5] + 'px'
            zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
            zmeika6.style.left = spis[spis.length - 6] + 'px'
            zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
            zmeika7.style.left = spis[spis.length - 7] + 'px'
            zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
            zmeika8.style.left = spis[spis.length - 8] + 'px'
            zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
            zmeika9.style.left = spis[spis.length - 9] + 'px'
            zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
            zmeika10.style.left = spis[spis.length - 10] + 'px'
            zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
            zmeika11.style.left = spis[spis.length - 11] + 'px'
            zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
            zmeika12.style.left = spis[spis.length - 12] + 'px'
            zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
            zmeika13.style.left = spis[spis.length - 13] + 'px'
            zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
            zmeika14.style.left = spis[spis.length - 14] + 'px'
            zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
            zmeika15.style.left = spis[spis.length - 15] + 'px'
            zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
            zmeika16.style.left = spis[spis.length - 16] + 'px'
            zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
            zmeika17.style.left = spis[spis.length - 17] + 'px'
            zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
            zmeika18.style.left = spis[spis.length - 18] + 'px'
            zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
            zmeika19.style.left = spis[spis.length - 19] + 'px'
            zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
            zmeika20.style.left = spis[spis.length - 20] + 'px'
            zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
            zmeika21.style.left = spis[spis.length - 21] + 'px'
            zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
            zmeika22.style.left = spis[spis.length - 22] + 'px'
            zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
            zmeika23.style.left = spis[spis.length - 23] + 'px'
            zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
            zmeika24.style.left = spis[spis.length - 24] + 'px'
            zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
            zmeika25.style.left = spis[spis.length - 25] + 'px'
            zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
            zmeika26.style.left = spis[spis.length - 26] + 'px'
            
        } 
    }
    if(x === 40){
        spis.push(left)
        spis2.push(bottom)
        bottom -= 15
        golZmeyi.style.bottom = bottom + 'px'
        zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
        zmeika1.style.left = spis[spis.length - 1] + 'px'
        zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
        zmeika2.style.left = spis[spis.length - 2] + 'px'
        zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
        zmeika3.style.left = spis[spis.length - 3] + 'px'
        zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
        zmeika4.style.left = spis[spis.length - 4] + 'px'
        zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
        zmeika5.style.left = spis[spis.length - 5] + 'px'
        zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
        zmeika6.style.left = spis[spis.length - 6] + 'px'
        zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
        zmeika7.style.left = spis[spis.length - 7] + 'px'
        zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
        zmeika8.style.left = spis[spis.length - 8] + 'px'
        zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
        zmeika9.style.left = spis[spis.length - 9] + 'px'
        zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
        zmeika10.style.left = spis[spis.length - 10] + 'px'
        zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
        zmeika11.style.left = spis[spis.length - 11] + 'px'
        zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
        zmeika12.style.left = spis[spis.length - 12] + 'px'
        zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
        zmeika13.style.left = spis[spis.length - 13] + 'px'
        zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
        zmeika14.style.left = spis[spis.length - 14] + 'px'
        zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
        zmeika15.style.left = spis[spis.length - 15] + 'px'
        zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
        zmeika16.style.left = spis[spis.length - 16] + 'px'
        zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
        zmeika17.style.left = spis[spis.length - 17] + 'px'
        zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
        zmeika18.style.left = spis[spis.length - 18] + 'px'
        zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
        zmeika19.style.left = spis[spis.length - 19] + 'px'
        zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
        zmeika20.style.left = spis[spis.length - 20] + 'px'
        zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
        zmeika21.style.left = spis[spis.length - 21] + 'px'
        zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
        zmeika22.style.left = spis[spis.length - 22] + 'px'
        zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
        zmeika23.style.left = spis[spis.length - 23] + 'px'
        zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
        zmeika24.style.left = spis[spis.length - 24] + 'px'
        zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
        zmeika25.style.left = spis[spis.length - 25] + 'px'
        zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
        zmeika26.style.left = spis[spis.length - 26] + 'px'
        clearInterval(kolob)
        kolob = setInterval(jopa2, 750)
        function jopa2() {
            spis.push(left)
            spis2.push(bottom)
            bottom -= 15
            golZmeyi.style.bottom = bottom + 'px'
            zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
            zmeika1.style.left = spis[spis.length - 1] + 'px'
            zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
            zmeika2.style.left = spis[spis.length - 2] + 'px'
            zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
            zmeika3.style.left = spis[spis.length - 3] + 'px'
            zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
            zmeika4.style.left = spis[spis.length - 4] + 'px'
            zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
            zmeika5.style.left = spis[spis.length - 5] + 'px'
            zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
            zmeika6.style.left = spis[spis.length - 6] + 'px'
            zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
            zmeika7.style.left = spis[spis.length - 7] + 'px'
            zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
            zmeika8.style.left = spis[spis.length - 8] + 'px'
            zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
            zmeika9.style.left = spis[spis.length - 9] + 'px'
            zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
            zmeika10.style.left = spis[spis.length - 10] + 'px'
            zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
            zmeika11.style.left = spis[spis.length - 11] + 'px'
            zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
            zmeika12.style.left = spis[spis.length - 12] + 'px'
            zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
            zmeika13.style.left = spis[spis.length - 13] + 'px'
            zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
            zmeika14.style.left = spis[spis.length - 14] + 'px'
            zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
            zmeika15.style.left = spis[spis.length - 15] + 'px'
            zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
            zmeika16.style.left = spis[spis.length - 16] + 'px'
            zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
            zmeika17.style.left = spis[spis.length - 17] + 'px'
            zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
            zmeika18.style.left = spis[spis.length - 18] + 'px'
            zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
            zmeika19.style.left = spis[spis.length - 19] + 'px'
            zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
            zmeika20.style.left = spis[spis.length - 20] + 'px'
            zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
            zmeika21.style.left = spis[spis.length - 21] + 'px'
            zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
            zmeika22.style.left = spis[spis.length - 22] + 'px'
            zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
            zmeika23.style.left = spis[spis.length - 23] + 'px'
            zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
            zmeika24.style.left = spis[spis.length - 24] + 'px'
            zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
            zmeika25.style.left = spis[spis.length - 25] + 'px'
            zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
            zmeika26.style.left = spis[spis.length - 26] + 'px'
        } 
    }
    if(x === 37){
        spis.push(left)
        spis2.push(bottom)
        left -= 15
        golZmeyi.style.left = left + 'px'
        zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
        zmeika1.style.left = spis[spis.length - 1] + 'px'
        zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
        zmeika2.style.left = spis[spis.length - 2] + 'px'
        zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
        zmeika3.style.left = spis[spis.length - 3] + 'px'
        zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
        zmeika4.style.left = spis[spis.length - 4] + 'px'
        zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
        zmeika5.style.left = spis[spis.length - 5] + 'px'
        zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
        zmeika6.style.left = spis[spis.length - 6] + 'px'
        zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
        zmeika7.style.left = spis[spis.length - 7] + 'px'
        zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
        zmeika8.style.left = spis[spis.length - 8] + 'px'
        zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
        zmeika9.style.left = spis[spis.length - 9] + 'px'
        zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
        zmeika10.style.left = spis[spis.length - 10] + 'px'
        zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
        zmeika11.style.left = spis[spis.length - 11] + 'px'
        zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
        zmeika12.style.left = spis[spis.length - 12] + 'px'
        zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
        zmeika13.style.left = spis[spis.length - 13] + 'px'
        zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
        zmeika14.style.left = spis[spis.length - 14] + 'px'
        zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
        zmeika15.style.left = spis[spis.length - 15] + 'px'
        zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
        zmeika16.style.left = spis[spis.length - 16] + 'px'
        zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
        zmeika17.style.left = spis[spis.length - 17] + 'px'
        zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
        zmeika18.style.left = spis[spis.length - 18] + 'px'
        zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
        zmeika19.style.left = spis[spis.length - 19] + 'px'
        zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
        zmeika20.style.left = spis[spis.length - 20] + 'px'
        zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
        zmeika21.style.left = spis[spis.length - 21] + 'px'
        zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
        zmeika22.style.left = spis[spis.length - 22] + 'px'
        zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
        zmeika23.style.left = spis[spis.length - 23] + 'px'
        zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
        zmeika24.style.left = spis[spis.length - 24] + 'px'
        zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
        zmeika25.style.left = spis[spis.length - 25] + 'px'
        zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
        zmeika26.style.left = spis[spis.length - 26] + 'px'
        clearInterval(kolob)
        kolob = setInterval(jopa3, 750)
        function jopa3() {
            spis.push(left)
            spis2.push(bottom)
            left -= 15
            golZmeyi.style.left = left + 'px'
            zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
            zmeika1.style.left = spis[spis.length - 1] + 'px'
            zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
            zmeika2.style.left = spis[spis.length - 2] + 'px'
            zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
            zmeika3.style.left = spis[spis.length - 3] + 'px'
            zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
            zmeika4.style.left = spis[spis.length - 4] + 'px'
            zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
            zmeika5.style.left = spis[spis.length - 5] + 'px'
            zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
            zmeika6.style.left = spis[spis.length - 6] + 'px'
            zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
            zmeika7.style.left = spis[spis.length - 7] + 'px'
            zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
            zmeika8.style.left = spis[spis.length - 8] + 'px'
            zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
            zmeika9.style.left = spis[spis.length - 9] + 'px'
            zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
            zmeika10.style.left = spis[spis.length - 10] + 'px'
            zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
            zmeika11.style.left = spis[spis.length - 11] + 'px'
            zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
            zmeika12.style.left = spis[spis.length - 12] + 'px'
            zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
            zmeika13.style.left = spis[spis.length - 13] + 'px'
            zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
            zmeika14.style.left = spis[spis.length - 14] + 'px'
            zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
            zmeika15.style.left = spis[spis.length - 15] + 'px'
            zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
            zmeika16.style.left = spis[spis.length - 16] + 'px'
            zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
            zmeika17.style.left = spis[spis.length - 17] + 'px'
            zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
            zmeika18.style.left = spis[spis.length - 18] + 'px'
            zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
            zmeika19.style.left = spis[spis.length - 19] + 'px'
            zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
            zmeika20.style.left = spis[spis.length - 20] + 'px'
            zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
            zmeika21.style.left = spis[spis.length - 21] + 'px'
            zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
            zmeika22.style.left = spis[spis.length - 22] + 'px'
            zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
            zmeika23.style.left = spis[spis.length - 23] + 'px'
            zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
            zmeika24.style.left = spis[spis.length - 24] + 'px'
            zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
            zmeika25.style.left = spis[spis.length - 25] + 'px'
            zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
            zmeika26.style.left = spis[spis.length - 26] + 'px'
        } 
    }
    if(x === 39){
        spis.push(left)
        spis2.push(bottom)
        left += 15
        golZmeyi.style.left = left + 'px'
        zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
        zmeika1.style.left = spis[spis.length - 1] + 'px'
        zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
        zmeika2.style.left = spis[spis.length - 2] + 'px'
        zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
        zmeika3.style.left = spis[spis.length - 3] + 'px'
        zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
        zmeika4.style.left = spis[spis.length - 4] + 'px'
        zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
        zmeika5.style.left = spis[spis.length - 5] + 'px'
        zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
        zmeika6.style.left = spis[spis.length - 6] + 'px'
        zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
        zmeika7.style.left = spis[spis.length - 7] + 'px'
        zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
        zmeika8.style.left = spis[spis.length - 8] + 'px'
        zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
        zmeika9.style.left = spis[spis.length - 9] + 'px'
        zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
        zmeika10.style.left = spis[spis.length - 10] + 'px'
        zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
        zmeika11.style.left = spis[spis.length - 11] + 'px'
        zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
        zmeika12.style.left = spis[spis.length - 12] + 'px'
        zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
        zmeika13.style.left = spis[spis.length - 13] + 'px'
        zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
        zmeika14.style.left = spis[spis.length - 14] + 'px'
        zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
        zmeika15.style.left = spis[spis.length - 15] + 'px'
        zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
        zmeika16.style.left = spis[spis.length - 16] + 'px'
        zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
        zmeika17.style.left = spis[spis.length - 17] + 'px'
        zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
        zmeika18.style.left = spis[spis.length - 18] + 'px'
        zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
        zmeika19.style.left = spis[spis.length - 19] + 'px'
        zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
        zmeika20.style.left = spis[spis.length - 20] + 'px'
        zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
        zmeika21.style.left = spis[spis.length - 21] + 'px'
        zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
        zmeika22.style.left = spis[spis.length - 22] + 'px'
        zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
        zmeika23.style.left = spis[spis.length - 23] + 'px'
        zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
        zmeika24.style.left = spis[spis.length - 24] + 'px'
        zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
        zmeika25.style.left = spis[spis.length - 25] + 'px'
        zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
        zmeika26.style.left = spis[spis.length - 26] + 'px'
        clearInterval(kolob)
        kolob = setInterval(jopa4, 750)
        function jopa4() {
            spis.push(left)
            spis2.push(bottom)
            left += 15
            golZmeyi.style.left = left + 'px'
            zmeika1.style.bottom = spis2[spis2.length - 1] + 'px'
            zmeika1.style.left = spis[spis.length - 1] + 'px'
            zmeika2.style.bottom = spis2[spis2.length - 2] + 'px'
            zmeika2.style.left = spis[spis.length - 2] + 'px'
            zmeika3.style.bottom = spis2[spis2.length - 3] + 'px'
            zmeika3.style.left = spis[spis.length - 3] + 'px'
            zmeika4.style.bottom = spis2[spis2.length - 4] + 'px'
            zmeika4.style.left = spis[spis.length - 4] + 'px'
            zmeika5.style.bottom = spis2[spis2.length - 5] + 'px'
            zmeika5.style.left = spis[spis.length - 5] + 'px'
            zmeika6.style.bottom = spis2[spis2.length - 6] + 'px'
            zmeika6.style.left = spis[spis.length - 6] + 'px'
            zmeika7.style.bottom = spis2[spis2.length - 7] + 'px'
            zmeika7.style.left = spis[spis.length - 7] + 'px'
            zmeika8.style.bottom = spis2[spis2.length - 8] + 'px'
            zmeika8.style.left = spis[spis.length - 8] + 'px'
            zmeika9.style.bottom = spis2[spis2.length - 9] + 'px'
            zmeika9.style.left = spis[spis.length - 9] + 'px'
            zmeika10.style.bottom = spis2[spis2.length - 10] + 'px'
            zmeika10.style.left = spis[spis.length - 10] + 'px'
            zmeika11.style.bottom = spis2[spis2.length - 11] + 'px'
            zmeika11.style.left = spis[spis.length - 11] + 'px'
            zmeika12.style.bottom = spis2[spis2.length - 12] + 'px'
            zmeika12.style.left = spis[spis.length - 12] + 'px'
            zmeika13.style.bottom = spis2[spis2.length - 13] + 'px'
            zmeika13.style.left = spis[spis.length - 13] + 'px'
            zmeika14.style.bottom = spis2[spis2.length - 14] + 'px'
            zmeika14.style.left = spis[spis.length - 14] + 'px'
            zmeika15.style.bottom = spis2[spis2.length - 15] + 'px'
            zmeika15.style.left = spis[spis.length - 15] + 'px'
            zmeika16.style.bottom = spis2[spis2.length - 16] + 'px'
            zmeika16.style.left = spis[spis.length - 16] + 'px'
            zmeika17.style.bottom = spis2[spis2.length - 17] + 'px'
            zmeika17.style.left = spis[spis.length - 17] + 'px'
            zmeika18.style.bottom = spis2[spis2.length - 18] + 'px'
            zmeika18.style.left = spis[spis.length - 18] + 'px'
            zmeika19.style.bottom = spis2[spis2.length - 19] + 'px'
            zmeika19.style.left = spis[spis.length - 19] + 'px'
            zmeika20.style.bottom = spis2[spis2.length - 20] + 'px'
            zmeika20.style.left = spis[spis.length - 20] + 'px'
            zmeika21.style.bottom = spis2[spis2.length - 21] + 'px'
            zmeika21.style.left = spis[spis.length - 21] + 'px'
            zmeika22.style.bottom = spis2[spis2.length - 22] + 'px'
            zmeika22.style.left = spis[spis.length - 22] + 'px'
            zmeika23.style.bottom = spis2[spis2.length - 23] + 'px'
            zmeika23.style.left = spis[spis.length - 23] + 'px'
            zmeika24.style.bottom = spis2[spis2.length - 24] + 'px'
            zmeika24.style.left = spis[spis.length - 24] + 'px'
            zmeika25.style.bottom = spis2[spis2.length - 25] + 'px'
            zmeika25.style.left = spis[spis.length - 25] + 'px'
            zmeika26.style.bottom = spis2[spis2.length -26] + 'px'
            zmeika26.style.left = spis[spis.length - 26] + 'px'
        } 
    }
}
function whatsup(){
    if (spread == 10) {
        console.log(spread)
        speed.textContent = 'SPEEDx1'
        spread = 50
    }
    else if (spread == 50) {
        console.log(spread)
        speed.textContent = 'SPEEDx5'
        spread = 10
    }
} 

function startGame1() {   
    if( startGame.textContent === 'START') {
        startGame.textContent = 'STOP'
    }
    else {
        startGame.textContent = 'START'
        console.log(2) 
    }
    
}

Them.addEventListener('click',ThemaT) 
window.addEventListener('keydown',move) 
speed.addEventListener('click',whatsup) 
startGame.addEventListener('click', startGame1)
