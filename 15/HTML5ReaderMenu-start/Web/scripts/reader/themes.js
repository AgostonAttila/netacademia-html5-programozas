var Reader = window.Reader || {};

Reader.Themes = {
    'currentTheme': "blue"
};

Reader.Themes.blue = {
    'backgroundColor': "#DEDEDE",
    'normalColor': "black",
    'highlightColor': "#00B4F1",
    'dropdownMenuColor': "white",
    'logoNumberColor': "#00B4F1",
    'logoLetterColor': "black"
};

Reader.Themes.green = {
    'backgroundColor': "black",
    'normalColor': "#6DC51A",
    'highlightColor': "white",
    'dropdownMenuColor': "black",
    'logoNumberColor': "white",
    'logoLetterColor': "#6DC51A"
};

Reader.Themes.sand = {
    'backgroundColor': "#6A5039",
    'normalColor': "white",
    'highlightColor': "#EFB410",
    'dropdownMenuColor': "#6A4E38",
    'logoNumberColor': "white",
    'logoLetterColor': "#EFB410"
};

Reader.Themes.changeTheme = function (name) {
    Reader.Themes.currentTheme = name;

    $("#themeColors").attr("href", "stylesheets/theme-" + name + ".css");
}
