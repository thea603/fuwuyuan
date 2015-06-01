
$(function(){
	$('.time').each(function(){
		$(this).click(function(){
			$('.box_infor').hide();
			$(this).next().show();
		})
	})
	$('.place').each(function(){
		$(this).click(function(){
			$('.shangbao').hide();
			$('.xiadan').show();
		})
	})
	$('.report').each(function(){
		$(this).click(function(){
			$('.shangbao').show();
			$('.xiadan').hide();
		})
	})
	$('.icon-edit').each(function(){
		$(this).click(function(){
			window.location.href='YuYue_bianji.html';
		})
	})
})




