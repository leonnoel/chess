$(document).ready(function(){

//Creates Board
for(var board = 0; board < 4; board++){	
		for(var count = 0; count < 4; count++){
			$("#board").append("<div class='white'></div>");
			for(var count2 = 0; count2 < 1; count2++){
				$("#board").append("<div class='black'></div>");
			};
		};
	for(var board2 = 0; board2 < 1; board2++){
		for(var count3 = 0; count3 < 4; count3++){
			$("#board").append("<div class='black'></div>");
			for(var count4 = 0; count4 < 1; count4++){
				$("#board").append("<div class='white'></div>");
			};
		};
	};
};

//Adding data-x values to all Squares
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

//Adding data-y values to col 0
$(".white").slice(0, 1).attr("data-y", 0);
$(".black").slice(4, 5).attr("data-y", 0);
$(".white").slice(8, 9).attr("data-y", 0);
$(".black").slice(12, 13).attr("data-y", 0);
$(".white").slice(16, 17).attr("data-y", 0);
$(".black").slice(20, 21).attr("data-y", 0);
$(".white").slice(24, 25).attr("data-y", 0);
$(".black").slice(28, 29).attr("data-y", 0);

//Adding data-y values to col 1
$(".black").slice(0, 1).attr("data-y", 1);
$(".white").slice(4, 5).attr("data-y", 1);
$(".black").slice(8, 9).attr("data-y", 1);
$(".white").slice(12, 13).attr("data-y", 1);
$(".black").slice(16, 17).attr("data-y", 1);
$(".white").slice(20, 21).attr("data-y", 1);
$(".black").slice(24, 25).attr("data-y", 1);
$(".white").slice(28, 29).attr("data-y", 1);

//Adding data-y values to col 2
$(".white").slice(1, 2).attr("data-y", 2);
$(".black").slice(5, 6).attr("data-y", 2);
$(".white").slice(9, 10).attr("data-y", 2);
$(".black").slice(13, 14).attr("data-y", 2);
$(".white").slice(17, 18).attr("data-y", 2);
$(".black").slice(21, 22).attr("data-y", 2);
$(".white").slice(25, 26).attr("data-y", 2);
$(".black").slice(29, 30).attr("data-y", 2);

//Adding data-y values to col 3
$(".black").slice(1, 2).attr("data-y", 3);
$(".white").slice(5, 6).attr("data-y", 3);
$(".black").slice(9, 10).attr("data-y", 3);
$(".white").slice(13, 14).attr("data-y", 3);
$(".black").slice(17, 18).attr("data-y", 3);
$(".white").slice(21, 22).attr("data-y", 3);
$(".black").slice(25, 26).attr("data-y", 3);
$(".white").slice(29, 30).attr("data-y", 3);

//Adding data-y values to col 4
$(".white").slice(2, 3).attr("data-y", 4);
$(".black").slice(6, 7).attr("data-y", 4);
$(".white").slice(10, 11).attr("data-y", 4);
$(".black").slice(14, 15).attr("data-y", 4);
$(".white").slice(18, 19).attr("data-y", 4);
$(".black").slice(22, 23).attr("data-y", 4);
$(".white").slice(26, 27).attr("data-y", 4);
$(".black").slice(30, 31).attr("data-y", 4);

//Adding data-y values to col 5
$(".black").slice(2, 3).attr("data-y", 5);
$(".white").slice(6, 7).attr("data-y", 5);
$(".black").slice(10, 11).attr("data-y", 5);
$(".white").slice(14, 15).attr("data-y", 5);
$(".black").slice(18, 19).attr("data-y", 5);
$(".white").slice(22, 23).attr("data-y", 5);
$(".black").slice(26, 27).attr("data-y", 5);
$(".white").slice(30, 31).attr("data-y", 5);

//Adding data-y values to col 6
$(".white").slice(3, 4).attr("data-y", 6);
$(".black").slice(7, 8).attr("data-y", 6);
$(".white").slice(11, 12).attr("data-y", 6);
$(".black").slice(15, 16).attr("data-y", 6);
$(".white").slice(19, 20).attr("data-y", 6);
$(".black").slice(23, 24).attr("data-y", 6);
$(".white").slice(27, 28).attr("data-y", 6);
$(".black").slice(31, 32).attr("data-y", 6);

//Adding data-y values to col 7
$(".black").slice(3, 4).attr("data-y", 7);
$(".white").slice(7, 8).attr("data-y", 7);
$(".black").slice(11, 12).attr("data-y", 7);
$(".white").slice(15, 16).attr("data-y", 7);
$(".black").slice(19, 20).attr("data-y", 7);
$(".white").slice(23, 24).attr("data-y", 7);
$(".black").slice(27, 28).attr("data-y", 7);
$(".white").slice(31, 32).attr("data-y", 7);


//Intial Piece Settings

//Black Pawn
$("[data-x='1'][data-y='0']").addClass("pawnBlack");
$("[data-x='1'][data-y='1']").addClass("pawnBlack");
$("[data-x='1'][data-y='2']").addClass("pawnBlack");
$("[data-x='1'][data-y='3']").addClass("pawnBlack");
$("[data-x='1'][data-y='4']").addClass("pawnBlack");
$("[data-x='1'][data-y='5']").addClass("pawnBlack");
$("[data-x='1'][data-y='6']").addClass("pawnBlack");
$("[data-x='1'][data-y='7']").addClass("pawnBlack");
//Black Rooks
$("[data-x='0'][data-y='0']").addClass("rookBlack");
$("[data-x='0'][data-y='7']").addClass("rookBlack");
//Black Knights
$("[data-x='0'][data-y='1']").addClass("knightBlack");
$("[data-x='0'][data-y='6']").addClass("knightBlack");
//Black Bishops
$("[data-x='0'][data-y='2']").addClass("bishopBlack");
$("[data-x='0'][data-y='5']").addClass("bishopBlack");
//Black Queen
$("[data-x='0'][data-y='3']").addClass("queenBlack");
//Black King
$("[data-x='0'][data-y='4']").addClass("kingBlack");
//White Pawn
$("[data-x='6'][data-y='0']").addClass("pawnWhite");
$("[data-x='6'][data-y='1']").addClass("pawnWhite");
$("[data-x='6'][data-y='2']").addClass("pawnWhite");
$("[data-x='6'][data-y='3']").addClass("pawnWhite");
$("[data-x='6'][data-y='4']").addClass("pawnWhite");
$("[data-x='6'][data-y='5']").addClass("pawnWhite");
$("[data-x='6'][data-y='6']").addClass("pawnWhite");
$("[data-x='6'][data-y='7']").addClass("pawnWhite");
//White Rooks
$("[data-x='7'][data-y='0']").addClass("rookWhite");
$("[data-x='7'][data-y='7']").addClass("rookWhite");
//White Knights
$("[data-x='7'][data-y='1']").addClass("knightWhite");
$("[data-x='7'][data-y='6']").addClass("knightWhite");
//White Bishops
$("[data-x='7'][data-y='2']").addClass("bishopWhite");
$("[data-x='7'][data-y='5']").addClass("bishopWhite");
//White Queen
$("[data-x='7'][data-y='3']").addClass("queenWhite");
//White King
$("[data-x='7'][data-y='4']").addClass("kingWhite");


//Adding an occupied class so I know a piece is there
//Adding color making capture logic easier
if($("div").hasClass("pawnWhite") == true){
	$("div .pawnWhite").addClass("occupied");
	$("div .pawnWhite").addClass("whitePiece");
}
if($("div").hasClass("rookWhite") == true){
	$("div .rookWhite").addClass("occupied");
	$("div .rookWhite").addClass("whitePiece");
}
if($("div").hasClass("knightWhite") == true){
	$("div .knightWhite").addClass("occupied");
	$("div .knightWhite").addClass("whitePiece");
}
if($("div").hasClass("bishopWhite") == true){
	$("div .bishopWhite").addClass("occupied");
	$("div .bishopWhite").addClass("whitePiece");
}
if($("div").hasClass("queenWhite") == true){
	$("div .queenWhite").addClass("occupied");
	$("div .queenWhite").addClass("whitePiece");
}
if($("div").hasClass("kingWhite") == true){
	$("div .kingWhite").addClass("occupied");
	$("div .kingWhite").addClass("whitePiece");
}
if($("div").hasClass("pawnBlack") == true){
	$("div .pawnBlack").addClass("occupied");
	$("div .pawnBlack").addClass("blackPiece");
}
if($("div").hasClass("rookBlack") == true){
	$("div .rookBlack").addClass("occupied");
	$("div .rookBlack").addClass("blackPiece");
}
if($("div").hasClass("knightBlack") == true){
	$("div .knightBlack").addClass("occupied");
	$("div .knightBlack").addClass("blackPiece");
}
if($("div").hasClass("bishopBlack") == true){
	$("div .bishopBlack").addClass("occupied");
	$("div .bishopBlack").addClass("blackPiece");
}
if($("div").hasClass("queenBlack") == true){
	$("div .queenBlack").addClass("occupied");
	$("div .queenBlack").addClass("blackPiece");
}
if($("div").hasClass("kingBlack") == true){
	$("div .kingBlack").addClass("occupied");
	$("div .kingBlack").addClass("blackPiece");
}

//Move Options (for selected pieces)

//pawn white moves

$("#board").on("click",".pawnWhite",function(e){ //selecting white piece
	if($(".pawnWhite").hasClass("possibleCapture") != true){
	$(".selectedPiece").removeClass("selectedPiece");
	$(".possibleZone").removeClass("possibleZone");
	$(this).addClass("selectedPiece"); // add class so you know its selected

		//get possible move options (adds class .possibleZone)
		getPawnWhiteOptions($(".selectedPiece").attr("data-x"),$(".selectedPiece").attr("data-y"));

		//white pawn move options 
		function getPawnWhiteOptions(pawnWhiteX,pawnWhiteY){
			var pawnWhitePossibleXValue = parseInt(pawnWhiteX) - 1;
			var pawnWhitePossibleXValue2 = parseInt(pawnWhiteX) - 2;
			var pawnWhiteDiagonalXValue = parseInt(pawnWhiteX) - 1; 
			var pawnWhiteDiagonalYValue1 = parseInt(pawnWhiteY) - 1;
			var pawnWhiteDiagonalYValue2 = parseInt(pawnWhiteY) + 1;

			if($("[data-x='"+pawnWhitePossibleXValue+"'][data-y='"+pawnWhiteY+"']").hasClass("occupied") != true){     
			$("[data-x='"+pawnWhitePossibleXValue+"'][data-y='"+pawnWhiteY+"']").addClass("possibleZone");
			}//Move Foward 1 as long as noone is there
			if(pawnWhiteX == 6 && $("[data-x='"+pawnWhitePossibleXValue+"'][data-y='"+pawnWhiteY+"']").hasClass("occupied") != true 
				&& $("[data-x='"+pawnWhitePossibleXValue2+"'][data-y='"+pawnWhiteY+"']").hasClass("occupied") != true){
				var pawnWhitePossibleXValue = parseInt(pawnWhiteX) - 2;
				$("[data-x='"+pawnWhitePossibleXValue+"'][data-y='"+pawnWhiteY+"']").addClass("possibleZone");
			}//First move can go two
			if($("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue1+"']").hasClass("occupied") == true 
				&& $("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue1+"']").hasClass("blackPiece") == true){
				$("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue1+"']").addClass("possibleCapture");
			}//Diagonal Move 1
			if($("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue2+"']").hasClass("occupied") == true 
				&& $("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue2+"']").hasClass("blackPiece") == true){
				$("[data-x='"+pawnWhiteDiagonalXValue+"'][data-y='"+pawnWhiteDiagonalYValue2+"']").addClass("possibleCapture");
			}//Diagonal Move 2
		};//function getPawnWhiteOptions
	}//top if
});//pawnWhite moves


//pawnBlack moves

$("#board").on("click",".pawnBlack",function(e){ //selecting white piece
	if($(".pawnBlack").hasClass("possibleCapture") != true){
	$(".selectedPiece").removeClass("selectedPiece");
	$(".possibleZone").removeClass("possibleZone");
	$(this).addClass("selectedPiece"); // add class so you know its selected

		//get possible move options (adds class .possibleZone)
		getPawnBlackOptions($(".selectedPiece").attr("data-x"),$(".selectedPiece").attr("data-y"));

		//white pawn move options 
		function getPawnBlackOptions(pawnBlackX,pawnBlackY){
			var pawnBlackPossibleXValue = parseInt(pawnBlackX) + 1;
			var pawnBlackPossibleXValue2 = parseInt(pawnBlackX) + 2;
			var pawnBlackDiagonalXValue = parseInt(pawnBlackX) + 1; 
			var pawnBlackDiagonalYValue1 = parseInt(pawnBlackY) + 1;
			var pawnBlackDiagonalYValue2 = parseInt(pawnBlackY) -1;

			if($("[data-x='"+pawnBlackPossibleXValue+"'][data-y='"+pawnBlackY+"']").hasClass("occupied") != true){     
			$("[data-x='"+pawnBlackPossibleXValue+"'][data-y='"+pawnBlackY+"']").addClass("possibleZone");
			}//Move Foward 1 as long as noone is there
			if(pawnBlackX == 1 && $("[data-x='"+pawnBlackPossibleXValue+"'][data-y='"+pawnBlackY+"']").hasClass("occupied") != true 
				&& $("[data-x='"+pawnBlackPossibleXValue2+"'][data-y='"+pawnBlackY+"']").hasClass("occupied") != true){
				var pawnBlackPossibleXValue = parseInt(pawnBlackX) + 2;
				$("[data-x='"+pawnBlackPossibleXValue+"'][data-y='"+pawnBlackY+"']").addClass("possibleZone");
			}//First move can go two
			if($("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue1+"']").hasClass("occupied") == true 
				&& $("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue1+"']").hasClass("whitePiece") == true ){
				$("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue1+"']").addClass("possibleCapture");
			}//Diagonal Move 1
			if($("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue2+"']").hasClass("occupied") == true 
				&& $("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue2+"']").hasClass("whitePiece") == true){
				$("[data-x='"+pawnBlackDiagonalXValue+"'][data-y='"+pawnBlackDiagonalYValue2+"']").addClass("possibleCapture");
			}//Diagonal Move 2
		};//function getPawnBlackOptions
	}//top if
}); //pawnBlack Moves

//ROOK WHITE MOVES
$("#board").on("click",".rookWhite",function(e){ //selecting white piece
	if($(".rookWhite").hasClass("possibleCapture") != true){
	$(".selectedPiece").removeClass("selectedPiece");
	$(".possibleZone").removeClass("possibleZone");
	$(this).addClass("selectedPiece"); // add class so you know its selected

		//get possible move options (adds class .possibleZone)
		getRookWhiteOptions($(".selectedPiece").attr("data-x"),$(".selectedPiece").attr("data-y"));

		//white rook move options 
		function getRookWhiteOptions(rookWhiteX,rookWhiteY){
			var rookWhitePossibleXValue = parseInt(rookWhiteX) - 1;
			var rookWhitePossibleXValue2 = parseInt(rookWhiteX) + 1;
			var rookWhitePossibleYValue = parseInt(rookWhiteY) - 1;
			var rookWhitePossibleYValue2 = parseInt(rookWhiteY) + 1;
			

			while($("[data-x='"+rookWhitePossibleXValue+"'][data-y='"+rookWhiteY+"']").hasClass("occupied") != true 
				&& rookWhitePossibleXValue >= 0){     
			$("[data-x='"+rookWhitePossibleXValue+"'][data-y='"+rookWhiteY+"']").addClass("possibleZone");
			rookWhitePossibleXValue -= 1;
				if($("[data-x='"+rookWhitePossibleXValue+"'][data-y='"+rookWhiteY+"']").hasClass("occupied") == true 
					&& $("[data-x='"+rookWhitePossibleXValue+"'][data-y='"+rookWhiteY+"']").hasClass("blackPiece")){
					$("[data-x='"+rookWhitePossibleXValue+"'][data-y='"+rookWhiteY+"']").addClass("possibleCapture");
				}//Forward Capture
			}//Move Foward 
			while($("[data-x='"+rookWhitePossibleXValue2+"'][data-y='"+rookWhiteY+"']").hasClass("occupied") != true 
				&& rookWhitePossibleXValue2 <= 7){     
			$("[data-x='"+rookWhitePossibleXValue2+"'][data-y='"+rookWhiteY+"']").addClass("possibleZone");
			rookWhitePossibleXValue2++;
				if($("[data-x='"+rookWhitePossibleXValue2+"'][data-y='"+rookWhiteY+"']").hasClass("occupied") == true 
						&& $("[data-x='"+rookWhitePossibleXValue2+"'][data-y='"+rookWhiteY+"']").hasClass("blackPiece")){
						$("[data-x='"+rookWhitePossibleXValue2+"'][data-y='"+rookWhiteY+"']").addClass("possibleCapture");
					}//Backwards Capture
			}//Move Backwards
			while($("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue+"']").hasClass("occupied") != true 
				&& rookWhitePossibleYValue >= 0){     
			$("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue+"']").addClass("possibleZone");
			rookWhitePossibleYValue -= 1;
				if($("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue+"']").hasClass("occupied") == true 
					&& $("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue+"']").hasClass("blackPiece")){
					$("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue+"']").addClass("possibleCapture");
				}//Left Capture
			}//Move Left 
			while($("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleXValue2+"']").hasClass("occupied") != true 
				&& rookWhitePossibleYValue2 <= 7){     
			$("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue2+"']").addClass("possibleZone");
			rookWhitePossibleYValue2++;
				if($("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue2+"']").hasClass("occupied") == true 
					&& $("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue2+"']").hasClass("blackPiece")){
					$("[data-x='"+rookWhiteX+"'][data-y='"+rookWhitePossibleYValue2+"']").addClass("possibleCapture");
				}//Right Capture
			}//Move Right
			
		};//function getRookWhiteOptions
	}//top if
});//ROOK White moves

//ROOK BLACK MOVES
$("#board").on("click",".rookBlack",function(e){ //selecting white piece
	if($(".rookBlack").hasClass("possibleCapture") != true){
	$(".selectedPiece").removeClass("selectedPiece");
	$(".possibleZone").removeClass("possibleZone");
	$(this).addClass("selectedPiece"); // add class so you know its selected

		//get possible move options (adds class .possibleZone)
		getRookBlackOptions($(".selectedPiece").attr("data-x"),$(".selectedPiece").attr("data-y"));

		//black rook move options 
		function getRookBlackOptions(rookBlackX,rookBlackY){
			var rookBlackPossibleXValue = parseInt(rookBlackX) + 1;
			var rookBlackPossibleXValue2 = parseInt(rookBlackX) - 1;
			var rookBlackPossibleYValue = parseInt(rookBlackY) + 1;
			var rookBlackPossibleYValue2 = parseInt(rookBlackY) - 1;

			while($("[data-x='"+rookBlackPossibleXValue+"'][data-y='"+rookBlackY+"']").hasClass("occupied") != true 
				&& rookBlackPossibleXValue <= 7){     
			$("[data-x='"+rookBlackPossibleXValue+"'][data-y='"+rookBlackY+"']").addClass("possibleZone");
			rookBlackPossibleXValue++;
				if($("[data-x='"+rookBlackPossibleXValue+"'][data-y='"+rookBlackY+"']").hasClass("occupied") == true 
						&& $("[data-x='"+rookBlackPossibleXValue+"'][data-y='"+rookBlackY+"']").hasClass("whitePiece")){
						$("[data-x='"+rookBlackPossibleXValue+"'][data-y='"+rookBlackY+"']").addClass("possibleCapture");
					}//Forward Capture
			}//Move Foward 
			while($("[data-x='"+rookBlackPossibleXValue2+"'][data-y='"+rookBlackY+"']").hasClass("occupied") != true 
				&& rookBlackPossibleXValue2 >= 0){     
			$("[data-x='"+rookBlackPossibleXValue2+"'][data-y='"+rookBlackY+"']").addClass("possibleZone");
			rookBlackPossibleXValue2 -= 1;
				if($("[data-x='"+rookBlackPossibleXValue2+"'][data-y='"+rookBlackY+"']").hasClass("occupied") == true 
						&& $("[data-x='"+rookBlackPossibleXValue2+"'][data-y='"+rookBlackY+"']").hasClass("whitePiece")){
						$("[data-x='"+rookBlackPossibleXValue2+"'][data-y='"+rookBlackY+"']").addClass("possibleCapture");
					}//Backwards Capture
			}//Move Backwards
			while($("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue+"']").hasClass("occupied") != true 
				&& rookBlackPossibleYValue <= 7){     
			$("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue+"']").addClass("possibleZone");
			rookBlackPossibleYValue++;
				if($("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue+"']").hasClass("occupied") == true 
					&& $("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue+"']").hasClass("whitePiece")){
					$("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue+"']").addClass("possibleCapture");
				}//Left Capture
			}//Move Left 
			while($("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleXValue2+"']").hasClass("occupied") != true 
				&& rookBlackPossibleYValue2 >= 0){     
			$("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue2+"']").addClass("possibleZone");
			rookBlackPossibleYValue2 -= 1;
				if($("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue2+"']").hasClass("occupied") == true 
					&& $("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue2+"']").hasClass("whitePiece")){
					$("[data-x='"+rookBlackX+"'][data-y='"+rookBlackPossibleYValue2+"']").addClass("possibleCapture");
				}//Right Capture
			}//Move Right

		};//function getRookBlackOptions
	}//top if
});//ROOK Black moves



//Move pieces

$("#board").on("click",".black,.white",function(e){ 
$(".selectedZone").removeClass("selectedZone");
$(this).addClass("selectedZone");
	if($(".selectedZone").hasClass("possibleZone") == true){
	$(".selectedPiece").removeClass("occupied");
	if($(".selectedPiece").hasClass("pawnWhite") == true){
		$(".selectedPiece").removeClass("pawnWhite"); //if moving remove it
		$(".selectedPiece").removeClass("whitePiece");
		$(".selectedZone").addClass("pawnWhite"); //rebuild piece
		$(".selectedZone").addClass("whitePiece");
	}
	if($(".selectedPiece").hasClass("pawnBlack") == true){
		$(".selectedPiece").removeClass("pawnBlack"); //if moving remove it
		$(".selectedPiece").removeClass("blackPiece");
		$(".selectedZone").addClass("pawnBlack"); //rebuild piece
		$(".selectedZone").addClass("blackPiece");	

	}
	if($(".selectedPiece").hasClass("rookWhite") == true){
		$(".selectedPiece").removeClass("rookWhite"); //if moving remove it
		$(".selectedPiece").removeClass("whitePiece");
		$(".selectedZone").addClass("rookWhite"); //rebuild piece
		$(".selectedZone").addClass("whitePiece");	

	}
	if($(".selectedPiece").hasClass("rookBlack") == true){
		$(".selectedPiece").removeClass("rookBlack"); //if moving remove it
		$(".selectedPiece").removeClass("blackPiece");
		$(".selectedZone").addClass("rookBlack"); //rebuild piece
		$(".selectedZone").addClass("blackPiece");	

	}
			$(".selectedZone").addClass("occupied");
				$(".possibleZone").removeClass("possibleZone");
				$(".possibleCapture").removeClass("possibleCapture");
					$(".selectedPiece").removeClass("selectedPiece");
						$(".selectedZone").removeClass("selectedZone");
	}

//Capture Pieces

if($(".selectedZone").hasClass("possibleCapture") == true){
	$(".selectedPiece").removeClass("occupied");
	if($(".selectedPiece").hasClass("blackPiece") == true){
		$(".selectedPiece").removeClass("blackPiece");
		if($(".selectedPiece").hasClass("pawnBlack") == true){
			$(".selectedPiece").removeClass("pawnBlack"); //if moving remove it
			$(".selectedPiece").removeClass("blackPiece");
			$(".selectedZone").removeClass("pawnWhite");
			$(".selectedZone").removeClass("rookWhite");
			$(".selectedZone").removeClass("knightWhite");
			$(".selectedZone").removeClass("bishopWhite");
			$(".selectedZone").removeClass("queenWhite");
			$(".selectedZone").removeClass("kingWhite");
			$(".selectedZone").removeClass("whitePiece");
			$(".selectedZone").addClass("pawnBlack"); //rebuild piece
			$(".selectedZone").addClass("blackPiece");
		}
		if($(".selectedPiece").hasClass("rookBlack") == true){
			$(".selectedPiece").removeClass("rookBlack"); //if moving remove it
			$(".selectedPiece").removeClass("blackPiece");
			$(".selectedZone").removeClass("pawnWhite");
			$(".selectedZone").removeClass("rookWhite");
			$(".selectedZone").removeClass("knightWhite");
			$(".selectedZone").removeClass("bishopWhite");
			$(".selectedZone").removeClass("queenWhite");
			$(".selectedZone").removeClass("kingWhite");
			$(".selectedZone").removeClass("whitePiece");
			$(".selectedZone").addClass("rookBlack"); //rebuild piece
			$(".selectedZone").addClass("blackPiece");
		}
		/*else if($(".selectedPiece").hasClass("pawnBlack") == true){
			$(".selectedPiece").removeClass("pawnBlack"); //if moving remove it
			$(".selectedZone").removeClass("pawnWhite");
			$(".selectedZone").addClass("pawnBlack"); //rebuild piece						
		}*/
					$(".selectedZone").addClass("occupied");
					$(".selectedPiece").addClass("blackPiece");
						$(".possibleZone").removeClass("possibleZone");
						$(".possibleCapture").removeClass("possibleCapture");
							$(".selectedPiece").removeClass("selectedPiece");
								$(".selectedZone").removeClass("selectedZone");
	}
	if($(".selectedPiece").hasClass("whitePiece") == true){
		$(".selectedPiece").removeClass("whitePiece");
		if($(".selectedPiece").hasClass("pawnWhite") == true){
			$(".selectedPiece").removeClass("pawnWhite"); //if moving remove it
			$(".selectedPiece").removeClass("whitePiece");
			$(".selectedZone").removeClass("pawnBlack");
			$(".selectedZone").removeClass("rookBlack");
			$(".selectedZone").removeClass("knightBlack");
			$(".selectedZone").removeClass("bishopBlack");
			$(".selectedZone").removeClass("queenBlack");
			$(".selectedZone").removeClass("kingBlack");
			$(".selectedZone").removeClass("blackPiece");
			$(".selectedZone").addClass("pawnWhite"); //rebuild piece
			$(".selectedZone").addClass("whitePiece");
		}
		if($(".selectedPiece").hasClass("rookWhite") == true){
			$(".selectedPiece").removeClass("rookWhite"); //if moving remove it
			$(".selectedPiece").removeClass("whitePiece");
			$(".selectedZone").removeClass("pawnBlack");
			$(".selectedZone").removeClass("rookBlack");
			$(".selectedZone").removeClass("knightBlack");
			$(".selectedZone").removeClass("bishopBlack");
			$(".selectedZone").removeClass("queenBlack");
			$(".selectedZone").removeClass("kingBlack");
			$(".selectedZone").removeClass("blackPiece");
			$(".selectedZone").addClass("rookWhite"); //rebuild piece
			$(".selectedZone").addClass("whitePiece");
		}
		/*else if($(".selectedPiece").hasClass("pawnBlack") == true){
			$(".selectedPiece").removeClass("pawnBlack"); //if moving remove it
			$(".selectedZone").removeClass("pawnWhite");
			$(".selectedZone").addClass("pawnBlack"); //rebuild piece						
		}*/
					$(".selectedZone").addClass("occupied");
					$(".selectedPiece").addClass("whitePiece");
						$(".possibleZone").removeClass("possibleZone");
						$(".possibleCapture").removeClass("possibleCapture");
							$(".selectedPiece").removeClass("selectedPiece");
								$(".selectedZone").removeClass("selectedZone");
	}
}


}); //Move Pieces







}); //$(document).ready(function()