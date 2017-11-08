$(function(){
        //$('#summernote').summernote();
        //$('#summernote1').summernote();
        //$('#btnn').click(function(){
        //    var t4=$('#summernote').summernote('code');
        //    var t1=$('#exampleInputEmail1').val();
        //    var t2=$('#exampleInputPassword1').val();
        //    var t3=$('#exampleInputPassword2').val();
        //    console.log(t1,t2,t3,t4);
        //    $.ajax({
        //        url: "http://localhost:3000/item/list",
        //        type:'post',
        //        dtatType:'json',
        //        data:{T4:t4,T1:t1,T2:t2,T3:t3},
        //        success:function(){
        //            $.ajax({
        //                url:'http://localhost:3000/item/detail',
        //                dataType:'json',
        //                type:'post',
        //                success:function(e){
        //                    var str=''
        //                    for(var i in e){
        //                        str+='<tr><td data-id='+e[i].id+'>'+i+'</td><td>'+e[i].title+'</td><td>'+e[i].people+'</td><td>'+e[i].timer+'</td><td>'+e[i].detail+'</td><td  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" data-id='+e[i].id+'>修改</td><td data-id='+e[i].id+'>删除</td></tr>'
        //                    }
        //                    $('tbody').html(str);
        //                }
        //            })
        //        }
        //    })
        //})
        //
        //
        //$.ajax({
        //    url:'http://localhost:3000/item/detail',
        //    dataType:'json',
        //    type:'post',
        //    success:function(e){
        //        var str=''
        //        for(var i in e){
        //            str+='<tr><td data-id='+e[i].id+'>'+i+'</td><td>'+e[i].title+'</td><td>'+e[i].people+'</td><td>'+e[i].timer+'</td><td>'+e[i].detail+'</td><td  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" data-cc='+e[i].id+'>修改</td><td data-id='+e[i].id+'>删除</td></tr>'
        //        }
        //        $('tbody').html(str);
        //        $('td:last-child').click(function(){
        //            var id=$(this).attr('data-id');
        //            var _this=$(this);
        //            $.ajax({
        //                url:'http://localhost:3000/item/del',
        //                type:'post',
        //                dataType:'json',
        //                data:{bbid:id},
        //                success:function(e){
        //                    console.log(e);
        //                    _this.parent().remove()
        //                }
        //            })
        //        });
        //
        //
        //
        //
        //        $('td:nth-child(6)').click(function(){
        //            var ID=$(this).attr('data-cc');
        //            $('#btn2').attr('data-cc',ID);
        //        });
        //            $('#btn2').click(function(){
        //                var id1=$(this).attr('data-cc');
        //                console.log(id1);
        //                var b3=$('#summernote1').summernote('code');
        //                var b1=$('#recipient-name').val();
        //                var b2=$('#recipient-name1').val();
        //                console.log(b1,b2,b3)
        //            $.ajax({
        //                url:'http://localhost:3000/item/update',
        //                type:'post',
        //                dataType:'json',
        //                data:{b1:b1,b2:b2,b3:b3,id1:id1},
        //                success:function(e){
        //                    console.log(e);
        //                }
        //            })
        //
        //
        //
        //                var t4=$('#summernote').summernote('code');
        //                var t1=$('#exampleInputEmail1').val();
        //                var t2=$('#exampleInputPassword1').val();
        //                var t3=$('#exampleInputPassword2').val();
        //                console.log(t1,t2,t3,t4);
        //                $.ajax({
        //                    url: "http://localhost:3000/item/list",
        //                    type:'post',
        //                    dtatType:'json',
        //                    data:{T4:t4,T1:t1,T2:t2,T3:t3},
        //                    success:function(){
        //                        $.ajax({
        //                            url:'http://localhost:3000/item/detail',
        //                            dataType:'json',
        //                            type:'post',
        //                            success:function(e){
        //                                var str=''
        //                                for(var i in e){
        //                                    str+='<tr><td data-id='+e[i].id+'>'+i+'</td><td>'+e[i].title+'</td><td>'+e[i].people+'</td><td>'+e[i].timer+'</td><td>'+e[i].detail+'</td><td  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" data-id='+e[i].id+'>修改</td><td data-id='+e[i].id+'>删除</td></tr>'
        //                                }
        //                                $('tbody').html(str);
        //                            }
        //                        })
        //                    }
        //                })
        //
        //
        //
        //            })
        //    }
        //})

    //第一个数据库  上传图片
    //var file;
    //function getFiles (el) {
    //    file=el.files //获取文件属性
//           console.log(file)
//    }

    $('#tu1').click(function(){
        var biao=$('#biao').val();
        var nei=$('#nei').val();
        console.log(biao,nei)
        //var fd = new FormData();

        //for(var i = 0;i<file.length;i++){
        //    fd.append('files',file[i])
            //通过append方法把file属性转化为键值对形式
        //}

//       		 console.log(fd)
        $.ajax({
            url:'http://localhost:3000/item/img',
            type:'post',
            dataType:'json',
            //data:fd,biao:Biao,nei:Nei,
            data:{biao:biao,nei:nei},
            //contentType:false,
            //要求为String类型的参数，当发送信息至服务器时，内容编码类型默认为"application/x-www-form-urlencoded"。该默认值适合大多数应用场合。
            //processData:false,
            //要 求为Boolean类型的参数，默认为true。默认情况下，发送的数据将被转换为对象（从技术角度来讲并非字符串）以配合默认内容类 型"application/x-www-form-urlencoded"。如果要发送DOM树信息或者其他不希望转换的信息，请设置为false。
            success:function(e){
                console.log(e)
                //$.ajax({
                //    url:'http://localhost:3000/item/img-1',
                //    dataType:'json',
                //    type:'post',
                //    success:function(e){
                //        var str=''
                //        for(var i in e){
                //            //str+='<tr><td data-id='+e[i].id+'>'+i+'</td><td>'+e[i].title+'</td><td>'+e[i].content+'</td><td>'+e[i].timer+'</td><td>'+e[i].detail+'</td><td  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" data-id='+e[i].id+'>修改</td><td data-id='+e[i].id+'>删除</td></tr>'
                //            str+='<tr><td data-id='+e[i].id+'>'+i+'</td><td>'+e[i].title+'</td><td>'+e[i].content+'</td><td>'+e[i].timer+'</td></tr>'
                //        }
                //        $('tbody').html(str);
                //    }
                //})

            }
        })

    })




})