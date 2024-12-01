
$(document).ready(function(){
	$("#aa").mouseover(function(){
		$("#dd").addClass("d");
	});
	$("#aa").mouseout(function(){
		$("#dd").removeClass("d");
	});
	

	$("#ee").mouseover(function(){
		$("#ff").addClass("f");
	});
	$("#ee").mouseout(function(){
		$("#ff").removeClass("f");
	});
	
	
	$("#gg").mouseover(function(){
		$("#hh").addClass("h");
	});
	$("#gg").mouseout(function(){
		$("#hh").removeClass("h");
	});
	
	
	$("#ii").mouseover(function(){
		$("#jj").addClass("j");
	});
	$("#ii").mouseout(function(){
		$("#jj").removeClass("j");
	});
	
	$("#kk").mouseover(function(){
		$("#ll").addClass("l");
	});
	$("#kk").mouseout(function(){
		$("#ll").removeClass("l");
		
	});

    $("#a1").click(function(){
		$("#b2").css({'opacity':'0','transition':'1s'});
		$("#b3").css({'opacity':'0','transition':'1s'});
		$("#b1").css({'opacity':'1','transition':'1s'});
	});
	
	$("#a2").click(function(){
		$("#b1").css({'opacity':'0','transition':'1s'});
		$("#b3").css({'opacity':'0','transition':'1s'});
		$("#b2").css({'opacity':'1','transition':'1s'});
	});
	
	$("#a3").click(function(){
		$("#b1").css({'opacity':'0','transition':'1s'});
		$("#b2").css({'opacity':'0','transition':'1s'});
		$("#b3").css({'opacity':'1','transition':'1s'});
	});
	
	
	
	






















});