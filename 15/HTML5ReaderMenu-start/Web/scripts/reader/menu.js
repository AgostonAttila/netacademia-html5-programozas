var Reader = window.Reader || {};
Reader.Menu = Reader.Menu || {};

Reader.Menu.menuCommands = {
    'visibleSubMenu': null
};

Reader.Menu.menuIcons = {
    'menu-icon-bookmark-root': 'bookmarks',
    'menu-icon-bookshelf-root': null,
    'menu-icon-fontfamily-root': 'fontFamily',
    'menu-icon-fontsize-root': 'fontSize',
    'menu-icon-theme-root': 'themes',
    'menu-icon-toc-root': 'toc',
    'menu-icon-volume-root': 'volume'
};
Reader.Menu.menuIconsRev = {};

Reader.Menu.menuCommands.toggleSubMenu = function (name) {
    $(".reader-menu-dropdown").hide();
    if (name != undefined && Reader.Menu.menuCommands.visibleSubMenu != name) {
        $("#reader-menu-" + name).show();
        Reader.Menu.menuCommands.visibleSubMenu = name;
    }
    else {
        Reader.Menu.menuCommands.visibleSubMenu = null;
    }
};

Reader.Menu.menuCommands.selectTheme = function (name) {
    Reader.Menu.menuCommands.toggleSubMenu();
    Reader.Themes.changeTheme(name);
};

Reader.Menu.menuCommands.gotoLibrary = function () {
}

Reader.Menu.displayBookMenu = function () {
    setTimeout(function () {
        $('#reader-menu-left').children().each(function (index) {
            var self = $(this);
            setTimeout(function () {
                self.css('opacity', '1');
            }, index * 120);
        });
    }, 300);
}

