$(document).ready(function(){


    randomImg();

    function randomImg(){
        
        let arr = [1,2,3,4,5,6,7,8]
       
        let newArr =[]

        for(let i = 0; i<=arr.length;i++){
            var num = Math.round(Math.random() * (8 - 1) + 1)
            newArr.push(`assets/img/imagen-${num}.jpeg`);
            $('#picture').append( `<li><img src="assets/img/imagen-${num}.jpeg"/></li>` );   
        }
        return newArr;
    }

    $('li').click(function(){
        $(this).hide();
    })

    $('.button').click(function(e){
        e.preventDefault();
        randomImg();
    })
    



})