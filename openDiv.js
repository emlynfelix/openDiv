// © Emily Whetter, 2012 - to be used without any implied warranty. Free for use and modification, to be distributed including this text.


var buttonDiv, mainDiv, showImage, hideImage, state, showImageMouseover, hideImageMouseover;
var currentState = 0, divHeight = 0;

function initOpenDiv(buttonDivSel, mainDivSel, showImageSel, hideImageSel, showImageMouseoverSel, hideImageMouseoverSel) {
    buttonDiv = buttonDivSel;
    mainDiv = mainDivSel;
    showImage = showImageSel;
    hideImage = hideImageSel;
    showImageMouseover = showImageMouseoverSel;
    hideImageMouseover = hideImageMouseoverSel;
    $(mainDiv).css({display: 'none', overflow: 'hidden'});
    setButtonDiv(currentState);
}

function setButtonDiv(divState) {
    divId = buttonDiv.attr('id')+divState;
    my_html = '<a onclick="animateDiv();"><img src="'+(divState ? hideImage : showImage)+'" border="0" id="'+divId+'" onmouseover="this.src = \''+(divState ? hideImageMouseover : showImageMouseover)+'\';" onmouseout="this.src = \''+(divState ? hideImage : showImage)+'\';" /></a>';
    buttonDiv.html(my_html);
}

function animateDiv() {
    divState = 1-currentState;
    if (divState == 0) {
        $(mainDiv).slideUp(1000, function() {});
    }
    else {
        $(mainDiv).slideDown(1000, function() {});
    }
    setButtonDiv(divState);
    currentState = divState;
}