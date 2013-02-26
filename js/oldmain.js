$(document).ready(function(){
/*Creates Board*/	
for(var board = 0; board < 4; board++){	
		for(var count = 0; count < 4; count++){
			$("#board").append("<div class='white'></div>");
			for(var count2 = 0; count2 < 1; count2++){
				$("#board").append("<div class='black'></div>");
			}
		}
	for(var board2 = 0; board2 < 1; board2++){
		for(var count3 = 0; count3 < 4; count3++){
			$("#board").append("<div class='black'></div>");
			for(var count4 = 0; count4 < 1; count4++){
				$("#board").append("<div class='white'></div>");
			}
		}
	}
}
/*Adding data-x values to all Squares*/
$(".white").slice(0, 4).attr("data-x", 0);
$(".black").slice(0, 4).attr("data-x", 0);
$(".white").slice(4, 8).attr("data-x", 1);
$(".black").slice(4, 8).attr("data-x", 1);
$(".white").slice(8, 12).attr("data-x", 2);
$(".black").slice(8, 12).attr("data-x", 2);
$(".white").slice(12, 16).attr("data-x", 3);
$(".black").slice(12, 16).attr("data-x", 3);
$(".white").slice(16, 20).attr("data-x", 4);
$(".black").slice(16, 20).attr("data-x", 4);
$(".white").slice(20, 24).attr("data-x", 5);
$(".black").slice(20, 24).attr("data-x", 5);
$(".white").slice(24, 28).attr("data-x", 6);
$(".black").slice(24, 28).attr("data-x", 6);
$(".white").slice(28, 32).attr("data-x", 7);
$(".black").slice(28, 32).attr("data-x", 7);

/*Adding data-y values to col 0*/
$(".white").slice(0, 1).attr("data-y", 0);
$(".black").slice(4, 5).attr("data-y", 0);
$(".white").slice(8, 9).attr("data-y", 0);
$(".black").slice(12, 13).attr("data-y", 0);
$(".white").slice(16, 17).attr("data-y", 0);
$(".black").slice(20, 21).attr("data-y", 0);
$(".white").slice(24, 25).attr("data-y", 0);
$(".black").slice(28, 29).attr("data-y", 0);

/*Adding data-y values to col 1*/
$(".black").slice(0, 1).attr("data-y", 1);
$(".white").slice(4, 5).attr("data-y", 1);
$(".black").slice(8, 9).attr("data-y", 1);
$(".white").slice(12, 13).attr("data-y", 1);
$(".black").slice(16, 17).attr("data-y", 1);
$(".white").slice(20, 21).attr("data-y", 1);
$(".black").slice(24, 25).attr("data-y", 1);
$(".white").slice(28, 29).attr("data-y", 1);

/*Adding data-y values to col 2*/
$(".white").slice(1, 2).attr("data-y", 2);
$(".black").slice(5, 6).attr("data-y", 2);
$(".white").slice(9, 10).attr("data-y", 2);
$(".black").slice(13, 14).attr("data-y", 2);
$(".white").slice(17, 18).attr("data-y", 2);
$(".black").slice(21, 22).attr("data-y", 2);
$(".white").slice(25, 26).attr("data-y", 2);
$(".black").slice(29, 30).attr("data-y", 2);

/*Adding data-y values to col 3*/
$(".black").slice(1, 2).attr("data-y", 3);
$(".white").slice(5, 6).attr("data-y", 3);
$(".black").slice(9, 10).attr("data-y", 3);
$(".white").slice(13, 14).attr("data-y", 3);
$(".black").slice(17, 18).attr("data-y", 3);
$(".white").slice(21, 22).attr("data-y", 3);
$(".black").slice(25, 26).attr("data-y", 3);
$(".white").slice(29, 30).attr("data-y", 3);

/*Adding data-y values to col 4*/
$(".white").slice(2, 3).attr("data-y", 4);
$(".black").slice(6, 7).attr("data-y", 4);
$(".white").slice(10, 11).attr("data-y", 4);
$(".black").slice(14, 15).attr("data-y", 4);
$(".white").slice(18, 19).attr("data-y", 4);
$(".black").slice(22, 23).attr("data-y", 4);
$(".white").slice(26, 27).attr("data-y", 4);
$(".black").slice(30, 31).attr("data-y", 4);

/*Adding data-y values to col 5*/
$(".black").slice(2, 3).attr("data-y", 5);
$(".white").slice(6, 7).attr("data-y", 5);
$(".black").slice(10, 11).attr("data-y", 5);
$(".white").slice(14, 15).attr("data-y", 5);
$(".black").slice(18, 19).attr("data-y", 5);
$(".white").slice(22, 23).attr("data-y", 5);
$(".black").slice(26, 27).attr("data-y", 5);
$(".white").slice(30, 31).attr("data-y", 5);

/*Adding data-y values to col 6*/
$(".white").slice(3, 4).attr("data-y", 6);
$(".black").slice(7, 8).attr("data-y", 6);
$(".white").slice(11, 12).attr("data-y", 6);
$(".black").slice(15, 16).attr("data-y", 6);
$(".white").slice(19, 20).attr("data-y", 6);
$(".black").slice(23, 24).attr("data-y", 6);
$(".white").slice(27, 28).attr("data-y", 6);
$(".black").slice(31, 32).attr("data-y", 6);

/*Adding data-y values to col 7*/
$(".black").slice(3, 4).attr("data-y", 7);
$(".white").slice(7, 8).attr("data-y", 7);
$(".black").slice(11, 12).attr("data-y", 7);
$(".white").slice(15, 16).attr("data-y", 7);
$(".black").slice(19, 20).attr("data-y", 7);
$(".white").slice(23, 24).attr("data-y", 7);
$(".black").slice(27, 28).attr("data-y", 7);
$(".white").slice(31, 32).attr("data-y", 7);

/*Failed attempt at giving data values*/
/*$(".white:lt(3)").attr("data-x", 0);
$(".black:lt(3)").attr("data-x", 0);
$(".white:lt(7):gt(3)").attr("data-x", 1);
$(".black:lt(7):gt(3)").attr("data-x", 1);
$(".white:lt(13):gt(9)").attr("data-x", 2);
$(".black:lt(13):gt(9)").attr("data-x", 2);
$(".white:lt(17):gt(13)").attr("data-x", 3);
$(".black:lt(17):gt(13)").attr("data-x", 3);
$(".white:lt(23):gt(17)").attr("data-x", 4);
$(".black:lt(23):gt(17)").attr("data-x", 4);
$(".white:lt(27):gt(23)").attr("data-x", 5);
$(".black:lt(27):gt(23)").attr("data-x", 5);
$(".white:lt(31):gt(27)").attr("data-x", 6);
$(".black:lt(31):gt(27)").attr("data-x", 6);
$(".white:lt(35):gt(31)").attr("data-x", 7);
$(".black:lt(35):gt(31)").attr("data-x", 7);*/

/*Intial Piece Settings*/
/*Black Pawn*/
$("[data-x='1'][data-y='0']").addClass("pawnBlack");
$("[data-x='1'][data-y='1']").addClass("pawnBlack");
$("[data-x='1'][data-y='2']").addClass("pawnBlack");
$("[data-x='1'][data-y='3']").addClass("pawnBlack");
$("[data-x='1'][data-y='4']").addClass("pawnBlack");
$("[data-x='1'][data-y='5']").addClass("pawnBlack");
$("[data-x='1'][data-y='6']").addClass("pawnBlack");
$("[data-x='1'][data-y='7']").addClass("pawnBlack");
/*Black Rooks*/
$("[data-x='0'][data-y='0']").addClass("rookBlack");
$("[data-x='0'][data-y='7']").addClass("rookBlack");
/*Black Knights*/
$("[data-x='0'][data-y='1']").addClass("knightBlack");
$("[data-x='0'][data-y='6']").addClass("knightBlack");
/*Black Bishops*/
$("[data-x='0'][data-y='2']").addClass("bishopBlack");
$("[data-x='0'][data-y='5']").addClass("bishopBlack");
/*Black Queen*/
$("[data-x='0'][data-y='3']").addClass("queenBlack");
/*Black King*/
$("[data-x='0'][data-y='4']").addClass("kingBlack");
/*White Pawn*/
$("[data-x='6'][data-y='0']").addClass("pawnWhite");
$("[data-x='6'][data-y='1']").addClass("pawnWhite");
$("[data-x='6'][data-y='2']").addClass("pawnWhite");
$("[data-x='6'][data-y='3']").addClass("pawnWhite");
$("[data-x='6'][data-y='4']").addClass("pawnWhite");
$("[data-x='6'][data-y='5']").addClass("pawnWhite");
$("[data-x='6'][data-y='6']").addClass("pawnWhite");
$("[data-x='6'][data-y='7']").addClass("pawnWhite");
/*White Rooks*/
$("[data-x='7'][data-y='0']").addClass("rookWhite");
$("[data-x='7'][data-y='7']").addClass("rookWhite");
/*White Knights*/
$("[data-x='7'][data-y='1']").addClass("knightWhite");
$("[data-x='7'][data-y='6']").addClass("knightWhite");
/*White Bishops*/
$("[data-x='7'][data-y='2']").addClass("bishopWhite");
$("[data-x='7'][data-y='5']").addClass("bishopWhite");
/*White Queen*/
$("[data-x='7'][data-y='3']").addClass("queenWhite");
/*White King*/
$("[data-x='7'][data-y='4']").addClass("kingWhite");


/*Adding an occupied class so I know a piece is there*/
if($("div").hasClass("pawnWhite") == true){
	$("div .pawnWhite").addClass("occupied");
}
if($("div").hasClass("rookWhite") == true){
	$("div .rookWhite").addClass("occupied");
}
if($("div").hasClass("knightWhite") == true){
	$("div .knightWhite").addClass("occupied");
}
if($("div").hasClass("bishopWhite") == true){
	$("div .bishopWhite").addClass("occupied");
}
if($("div").hasClass("queenWhite") == true){
	$("div .queenWhite").addClass("occupied");
}
if($("div").hasClass("kingWhite") == true){
	$("div .kingWhite").addClass("occupied");
}
if($("div").hasClass("pawnBlack") == true){
	$("div .pawnBlack").addClass("occupied");
}
if($("div").hasClass("rookBlack") == true){
	$("div .rookBlack").addClass("occupied");
}
if($("div").hasClass("knightBlack") == true){
	$("div .knightBlack").addClass("occupied");
}
if($("div").hasClass("bishopBlack") == true){
	$("div .bishopBlack").addClass("occupied");
}
if($("div").hasClass("queenBlack") == true){
	$("div .queenBlack").addClass("occupied");
}
if($("div").hasClass("kingBlack") == true){
	$("div .kingBlack").addClass("occupied");
}

//Move Options

//whitePawnOptions




/*Showing possible moves*/
$(".pawnWhite").on("click",function(e){ //selecting white piece
	$(".selectedPiece").removeClass("selectedPiece");
	$(".possibleZone").removeClass("possibleZone");
	$(this).addClass("selectedPiece"); // add class so you know its selected
	/*if($("[data-x='6'][data-y='0']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='0']").addClass("possibleZone");
		$("[data-x='5'][data-y='0']").addClass("possibleZone");
	}*/
	//get possible move options (.possibleZone)

function getWhitePawnOptions(xVal,yVal){

	var whitePawnX = $("xVal").val();
	var whitePawnY = $("yVal").val();
	if(whitePawnX == 6){
		whitePawnPossibleXValue = whitePawnX + 2;
		$("[data-x='whitePawnPossibleXValue'][data-y='whitePawnY']").addClass("possibleZone");
	}
	else{
		whitePawnPossibleXValue = whitePawnX + 1;
		$("[data-x='whitePawnPossibleXValue'][data-y='whitePawnY']").addClass("possibleZone");
	}	
	
};


	getWhitePawnOptions('$(".selectedPiece").attr("data-x")','$(".selectedPiece").attr("data-y")');

	
	//if ($(".possibleZone").hasClass("selected") != true){ /*no piece*/
		/*if($(".selected .whitePiece").hasClass("selected")){ /*find selected piece*/
			//if($(".pawnWhite").hasClass("selected")){ /*Is the white pawn moving*/
				//$(".pawnWhite .selected").removeClass("pawnWhite"); /*if moving remove it*/
			//	$(".possibleZone").html("<div class='pawnWhite'>w</div>"); /*rebuild piece*/

	//}
/*	if($("[data-x='6'][data-y='1']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='1']").addClass("possibleZone");
		$("[data-x='5'][data-y='1']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='2']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='2']").addClass("possibleZone");
		$("[data-x='5'][data-y='2']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='3']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='3']").addClass("possibleZone");
		$("[data-x='5'][data-y='3']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='4']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='4']").addClass("possibleZone");
		$("[data-x='5'][data-y='4']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='5']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='5']").addClass("possibleZone");
		$("[data-x='5'][data-y='5']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='6']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='6']").addClass("possibleZone");
		$("[data-x='5'][data-y='6']").addClass("possibleZone");
		
	}
	if($("[data-x='6'][data-y='7']").hasClass("selectedPiece") == true){
		$("[data-x='4'][data-y='7']").addClass("possibleZone");
		$("[data-x='5'][data-y='7']").addClass("possibleZone");
		
	}*/
//}
});

/*Move Piece*/
$(".black,.white").on("click",function(e){
	e.stopPropagation();
	$(".selectedZone").removeClass("selectedZone");
	$(this).addClass("selectedZone");
	if($(".selectedZone").hasClass("possibleZone") == true){
		$(".selectedPiece").removeClass("pawnWhite"); /*if moving remove it*/
				$(".selectedZone").addClass("pawnWhite"); /*rebuild piece*/


	}
});


















});