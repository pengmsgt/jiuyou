// 相关链接
$(function () {
	$('.xglj_ul li').click(function(){
		//alert($('.xglj_ul li'));
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.tab-content .tab-item').removeClass('active');
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			var index = $('.xglj_ul li').index(this);
			$('.tab-content .tab-item').removeClass('active').eq(index).addClass('active');
		}
	})

        //飘窗
//         if($("#bay").html() == "" && $("#day").html() == null){
//              $('#bay').hide();
//         }else{
//              $('#bay').autoMove({angle:-Math.PI/4, speed:200});
//         }
});

$(function(){
//一级页面导航nav添加active
function func5(arg){
	var lmcode = $('meta[name="ColumnName"]').attr('content');
        var id=0;
	$(arg).each(function() {
		var lmmc = $(this).text().replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "").replace(/\s+/g, "");
		if(lmcode == lmmc) {
			$(arg).removeClass('dis');
			$(this).addClass('dis');
                        id=$(this).index()
		}
	});
}
func5('.nav_ul ul li');
//非一级页面导航nav添加active
function func6(arg,arg1){
	var lmcode = $(arg1).text().replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "").replace(/\s+/g, "");
	$(arg).each(function() {
		var lmmc = $(this).text().replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "").replace(/\s+/g, "");
		if(lmcode.indexOf(lmmc)!=-1) {
			$(arg).removeClass('dis');
			$(this).addClass('dis');
		}
	});
}
func6('.nav_ul ul li','.crumbs');
});
//外链离开提示
$(function(){
	for(var i = 0; i < document.links.length; i++) {
		var url = document.links[i].href.toLowerCase();
		if (url.indexOf("http://172.31.0.11") == -1 && url.indexOf("http://localhost") == -1 && url.indexOf("http://localhost") == -1 && url.indexOf("javascript:") == -1 && url.indexOf("#") == -1 && 
 url.indexOf("http://rsj.changdu.gov.cn") == -1&& 
 url.indexOf("http://cms.changdu.gov.cn:8004") == -1&&!document.links[i].onclick) {
			document.links[i].onclick = function () {
				return confirm("您将离开昌都市人力资源和社会保障局，请您注意网络安全，保护隐私！")
			};
		}
	}

                $(document).ready(function(){

           $("img").each(function(){
               var src = $(this).attr("src");
               if(src.indexOf("cdrmzf") != -1){
                   $(this).attr("src","http://www.changdu.gov.cn" + src);
               }else{
                   $(this).attr("src",src);
               };
           });

        });
});