// console.log(about)

var lis=document.querySelectorAll(".tab>ul>li");
lis[0].style.backgroundColor='gray'
function clickHandler(index) {
    index=index-1



 




    var pages= document.getElementsByClassName('page')
    for(let i in pages){
        if(i==index){
            lis[i].style.backgroundColor='gray'

            var classname=document.getElementsByClassName('page')[i].className
            document.getElementsByClassName(classname)[0].style.display='block'

            }
            else{
                lis[i].style.backgroundColor='#18BA9F'

                var classname=document.getElementsByClassName('page')[i].className
                document.getElementsByClassName(classname)[0].style.display='none'
                }
        // document.getElementsByClassName(classname)[0].style.display='block'



        // if(i===index){
        //     var classname=document.getElementsByClassName('page')[index].className
        //     document.getElementsByClassName(classname)[0].style.display='block'        }
        // else{
        //     var classname=document.getElementsByClassName('page')[i].className
        //     document.getElementsByClassName(classname)[0].style.display='block'        }



    }



  
    }