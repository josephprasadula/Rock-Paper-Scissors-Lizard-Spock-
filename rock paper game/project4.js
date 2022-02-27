// document.querySelector('.right').ariaDisabled=true;
// document.querySelector('.left').ariaDisabled=true;
let n;
let a=document.querySelectorAll('.icons');
let b=document.querySelectorAll('.r-icons');
for(let x of a){
    x.addEventListener('click',function(obj){
        n=obj;
        // document.querySelector('.left').ariaDisabled=true;
        // document.querySelector('.fade').style.zIndex='9 '
        console.log(this.alt);
        document.querySelector('.uselected').innerHTML=`you choose ${this.alt}`
        this.classList.toggle('scale');
        let k=Math.trunc(Math.random()*5);
        b[k].classList.toggle('scale');
        document.querySelector('.compselected').innerHTML=`computer choose ${b[k].alt}`
        console.log(b[k].alt)
        if(this.alt==b[k].alt){
            document.querySelector('.btn').innerHTML='tied!!'
            document.querySelector('.btn').style.visibility='visible'
            document.querySelector('.btn').style.visibility='visible'
            document.querySelector('.btn').style.backgroundColor='blue'
        }else{
            if(this.alt=='lizard'){
                if(b[k].alt=='papeer'||b[k].alt=='spock'){
                    document.querySelector('.btn').innerHTML='you won'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='green'
                }else{
                    document.querySelector('.btn').innerHTML='you lost'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='red'
                }
            }else if(this.alt=='papeer'){
                if(b[k].alt=='rock'||b[k].alt=='spock'){
                    document.querySelector('.btn').innerHTML='you won'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='green'
                }else{
                    document.querySelector('.btn').innerHTML='you lost'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='red'
                }
            }else if(this.alt=='rock'){
                if(b[k].alt=='scicors'||b[k].alt=='lizard'){
                    document.querySelector('.btn').innerHTML='you won'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='green'
                }else{
                    document.querySelector('.btn').innerHTML='you lost'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='red'
                }
            }else if(this.alt=='scicors'){
                if(b[k].alt=='papeer'||b[k].alt=='lizard'){
                    document.querySelector('.btn').innerHTML='you won'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='green'
                }else{
                    document.querySelector('.btn').innerHTML='you lost'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='red'
                }
            }else if(this.alt=='spock'){
                if(b[k].alt=='scicors'||b[k].alt=='rock'){
                    document.querySelector('.btn').innerHTML='you won'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='green'
                }else{
                    document.querySelector('.btn').innerHTML='you lost'
                    document.querySelector('.btn').style.visibility='visible'
                    document.querySelector('.btn').style.backgroundColor='red'
                }
            }
        }
        document.querySelector('.cover').style.display='block'
    })
}