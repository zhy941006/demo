$(function(){
    function getHeros(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:5001/getAllHero",
           success:function(res){
              var html=template("moban",res)
              $("#tbody").html(html)
            }
        })
    }
    getHeros()

    $("#tell").on("click",function(){
        //初始化弹出层
        $('.ui.modal')
        .modal('show');
    })

    $("#btnAdd").on("click",function(){
       $.ajax({
           type:"post",
            url:"http://127.0.0.1:5001/addhero",
            data:$("form").serialize(),
            dataType:"json",
            success:function(res){
               if(res){
                getHeros()
               }
            }
       })
    })
  
})