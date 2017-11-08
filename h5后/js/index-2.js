/**
 * Created by Administrator on 2017/11/8.
 */
$(function(){

    $('#tu1').click(function(){
        var biao=$('#biao').val();
        var nei=$('#nei').val();
        console.log(biao,nei)
        $.ajax({
            url:"http://localhost:3000/item/tu",
            type:"POST",
            data:{biao:"1",nei:"w"},
            success:function(r){

            }
        })

    })

})
