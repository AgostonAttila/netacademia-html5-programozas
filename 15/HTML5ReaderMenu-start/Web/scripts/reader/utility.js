var Reader = window.Reader || {};
Reader.Utility = Reader.Utility || {};

Reader.Utility.hasValue = function (value) {
    return !(value == undefined || value == null);
}

Reader.Utility.tooltipHideTimeoutHandler = null;
Reader.Utility.showTooltip = function (text, parentDiv, hideDelay) {
    if (Reader.Utility.tooltipHideTimeoutHandler != null) {
        clearTimeout(Reader.Utility.tooltipHideTimeoutHandler);
    }

    var offset = $(parentDiv).offset();
    $("#tooltip").text(text).css("top", offset.top + 50).css("left", offset.left).show();
    Reader.Utility.tooltipHideTimeoutHandler = setTimeout(Reader.Utility.hideTooltip, hideDelay);
}
Reader.Utility.hideTooltip = function () {
    if (Reader.Utility.tooltipHideTimeoutHandler != null) {
        clearTimeout(Reader.Utility.tooltipHideTimeoutHandler);
    }
    $("#tooltip").hide();
}