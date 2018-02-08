//! SharpShooter.debug.js
//

(function($) {

Type.registerNamespace('SharpShooter');

////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Alignment

SharpShooter.Alignment = function() { 
    /// <field name="left" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="right" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="center" type="Number" integer="true" static="true">
    /// </field>
};
SharpShooter.Alignment.prototype = {
    left: 0, 
    right: 1, 
    center: 2
}
SharpShooter.Alignment.registerEnum('SharpShooter.Alignment', false);


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.KeyCodes

SharpShooter.KeyCodes = function() { 
    /// <field name="backspace" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="tab" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="enter" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="shift" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="ctrl" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="alt" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="pause_break" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="caps_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="escape" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="space" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="page_up" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="page_down" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="end" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="home" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="left_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="up_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="right_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="down_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="insert" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="delete_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d0" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="a" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="b" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="c" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="e" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="g" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="h" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="i" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="j" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="k" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="l" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="m" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="n" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="o" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="p" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="q" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="r" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="s" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="t" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="u" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="v" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="w" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="x" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="y" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="z" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="left_window_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="right_window_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="select_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_0" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="multiply" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="add" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="subtract" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="decimal_point" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="divide" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f10" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f11" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f12" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="num_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="scroll_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="semi_colon" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="equal_sign" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="comma" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="dash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="period" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="forward_slash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="grave_accent" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="open_bracket" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="back_slash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="close_braket" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="single_quote" type="Number" integer="true" static="true">
    /// </field>
};
SharpShooter.KeyCodes.prototype = {
    backspace: 8, 
    tab: 9, 
    enter: 13, 
    shift: 16, 
    ctrl: 17, 
    alt: 18, 
    pause_break: 19, 
    caps_lock: 20, 
    escape: 27, 
    space: 32, 
    page_up: 33, 
    page_down: 34, 
    end: 35, 
    home: 36, 
    left_arrow: 37, 
    up_arrow: 38, 
    right_arrow: 39, 
    down_arrow: 40, 
    insert: 45, 
    delete_key: 46, 
    d0: 48, 
    d1: 49, 
    d2: 50, 
    d3: 51, 
    d4: 52, 
    d5: 53, 
    d6: 54, 
    d7: 55, 
    d8: 56, 
    d9: 57, 
    a: 65, 
    b: 66, 
    c: 67, 
    d: 68, 
    e: 69, 
    f: 70, 
    g: 71, 
    h: 72, 
    i: 73, 
    j: 74, 
    k: 75, 
    l: 76, 
    m: 77, 
    n: 78, 
    o: 79, 
    p: 80, 
    q: 81, 
    r: 82, 
    s: 83, 
    t: 84, 
    u: 85, 
    v: 86, 
    w: 87, 
    x: 88, 
    y: 89, 
    z: 90, 
    left_window_key: 91, 
    right_window_key: 92, 
    select_key: 93, 
    numpad_0: 96, 
    numpad_1: 97, 
    numpad_2: 98, 
    numpad_3: 99, 
    numpad_4: 100, 
    numpad_5: 101, 
    numpad_6: 102, 
    numpad_7: 103, 
    numpad_8: 104, 
    numpad_9: 105, 
    multiply: 106, 
    add: 107, 
    subtract: 109, 
    decimal_point: 110, 
    divide: 111, 
    f1: 112, 
    f2: 113, 
    f3: 114, 
    f4: 115, 
    f5: 116, 
    f6: 117, 
    f7: 118, 
    f8: 119, 
    f9: 120, 
    f10: 121, 
    f11: 122, 
    f12: 123, 
    num_lock: 144, 
    scroll_lock: 145, 
    semi_colon: 186, 
    equal_sign: 187, 
    comma: 188, 
    dash: 189, 
    period: 190, 
    forward_slash: 191, 
    grave_accent: 192, 
    open_bracket: 219, 
    back_slash: 220, 
    close_braket: 221, 
    single_quote: 222
}
SharpShooter.KeyCodes.registerEnum('SharpShooter.KeyCodes', false);


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.ICollideableVisitor

SharpShooter.ICollideableVisitor = function() { 
};
SharpShooter.ICollideableVisitor.prototype = {
    visitBullet : null,
    visitPlayer : null,
    visitEnemy : null
}
SharpShooter.ICollideableVisitor.registerInterface('SharpShooter.ICollideableVisitor');


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.MovementStrategies

SharpShooter.MovementStrategies = function SharpShooter_MovementStrategies() {
}
SharpShooter.MovementStrategies.framed = function SharpShooter_MovementStrategies$framed(g, ms) {
    /// <param name="g" type="SharpShooter.GameObject">
    /// </param>
    /// <param name="ms" type="Number" integer="true">
    /// </param>
    g.x = Math.min(Math.max(g.x + g.vx * (ms / 1000), 0), SharpShooter.Engine.screenWidth - g.width);
    g.y = Math.min(Math.max(g.y + g.vy * (ms / 1000), 0), SharpShooter.Engine.screenHeight - g.height);
}
SharpShooter.MovementStrategies.continuous = function SharpShooter_MovementStrategies$continuous(g, ms) {
    /// <param name="g" type="SharpShooter.GameObject">
    /// </param>
    /// <param name="ms" type="Number" integer="true">
    /// </param>
    g.x += g.vx * (ms / 1000);
    g.y += g.vy * (ms / 1000);
    if (g.x > SharpShooter.Engine.screenWidth) {
        g.x -= SharpShooter.Engine.screenWidth;
    }
    else if (g.x < -g.width) {
        g.x += SharpShooter.Engine.screenWidth;
    }
    if (g.y > SharpShooter.Engine.screenHeight) {
        g.y -= SharpShooter.Engine.screenHeight;
    }
    else if (g.y < -g.height) {
        g.y += SharpShooter.Engine.screenHeight;
    }
}
SharpShooter.MovementStrategies.free = function SharpShooter_MovementStrategies$free(g, ms) {
    /// <param name="g" type="SharpShooter.GameObject">
    /// </param>
    /// <param name="ms" type="Number" integer="true">
    /// </param>
    g.x += g.vx * (ms / 1000);
    g.y += g.vy * (ms / 1000);
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.NumberDrawer

SharpShooter.NumberDrawer = function SharpShooter_NumberDrawer() {
    /// <field name="_empty" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d0" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d1" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d2" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d3" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d4" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d5" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d6" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d7" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d8" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="_d9" type="Array" elementType="Array" static="true">
    /// </field>
    /// <field name="pixelWidth" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="pixelHeight" type="Number" integer="true" static="true">
    /// </field>
}
SharpShooter.NumberDrawer.draw = function SharpShooter_NumberDrawer$draw(ctx, x, y, number, align) {
    /// <param name="ctx" type="CanvasContext2D">
    /// </param>
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="number" type="Number" integer="true">
    /// </param>
    /// <param name="align" type="SharpShooter.Alignment">
    /// </param>
    ctx.save();
    ctx.fillStyle = 'white';
    var digits = SharpShooter.NumberDrawer._getDigits(number);
    switch (align) {
        case SharpShooter.Alignment.right:
            ctx.translate(-(digits.length * 3 + digits.length - 1) * SharpShooter.NumberDrawer.pixelWidth, 0);
            break;
        case SharpShooter.Alignment.center:
            break;
    }
    var offset = 0;
    var $enum1 = ss.IEnumerator.getEnumerator(digits);
    while ($enum1.moveNext()) {
        var digit = $enum1.current;
        var pattern = SharpShooter.NumberDrawer._getPattern(digit);
        SharpShooter.NumberDrawer._drawDigit(ctx, x + offset, y, pattern);
        offset += SharpShooter.NumberDrawer.pixelWidth * (pattern[0].length + 1);
    }
    ctx.restore();
}
SharpShooter.NumberDrawer._drawDigit = function SharpShooter_NumberDrawer$_drawDigit(ctx, x, y, pattern) {
    /// <param name="ctx" type="CanvasContext2D">
    /// </param>
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="pattern" type="Array" elementType="Array">
    /// </param>
    ctx.save();
    ctx.translate(x, y);
    for (var i = 0; i < pattern.length; i++) {
        for (var j = 0; j < pattern[i].length; j++) {
            if (pattern[i][j]) {
                ctx.fillRect(SharpShooter.NumberDrawer.pixelWidth * j, SharpShooter.NumberDrawer.pixelHeight * i, SharpShooter.NumberDrawer.pixelWidth, SharpShooter.NumberDrawer.pixelHeight);
            }
        }
    }
    ctx.restore();
}
SharpShooter.NumberDrawer._getPattern = function SharpShooter_NumberDrawer$_getPattern(number) {
    /// <param name="number" type="Number" integer="true">
    /// </param>
    /// <returns type="Array" elementType="Array"></returns>
    switch (number) {
        case 0:
            return SharpShooter.NumberDrawer._d0;
        case 1:
            return SharpShooter.NumberDrawer._d1;
        case 2:
            return SharpShooter.NumberDrawer._d2;
        case 3:
            return SharpShooter.NumberDrawer._d3;
        case 4:
            return SharpShooter.NumberDrawer._d4;
        case 5:
            return SharpShooter.NumberDrawer._d5;
        case 6:
            return SharpShooter.NumberDrawer._d6;
        case 7:
            return SharpShooter.NumberDrawer._d7;
        case 8:
            return SharpShooter.NumberDrawer._d8;
        case 9:
            return SharpShooter.NumberDrawer._d9;
        default:
            return SharpShooter.NumberDrawer._empty;
    }
}
SharpShooter.NumberDrawer._getDigits = function SharpShooter_NumberDrawer$_getDigits(number) {
    /// <param name="number" type="Number" integer="true">
    /// </param>
    /// <returns type="Array"></returns>
    var result = [];
    if (!number) {
        result.insert(0, 0);
    }
    else {
        while (number > 0) {
            var digit = number % 10;
            result.insert(0, digit);
            number = Math.floor(number / 10);
        }
    }
    return result;
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Rectangle

SharpShooter.Rectangle = function SharpShooter_Rectangle(x, y, width, height) {
    /// <param name="x" type="Number" integer="true">
    /// </param>
    /// <param name="y" type="Number" integer="true">
    /// </param>
    /// <param name="width" type="Number" integer="true">
    /// </param>
    /// <param name="height" type="Number" integer="true">
    /// </param>
    /// <field name="x" type="Number" integer="true">
    /// </field>
    /// <field name="y" type="Number" integer="true">
    /// </field>
    /// <field name="width" type="Number" integer="true">
    /// </field>
    /// <field name="height" type="Number" integer="true">
    /// </field>
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
SharpShooter.Rectangle.createFromDoubles = function SharpShooter_Rectangle$createFromDoubles(x, y, width, height) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="width" type="Number">
    /// </param>
    /// <param name="height" type="Number">
    /// </param>
    /// <returns type="SharpShooter.Rectangle"></returns>
    var _x = (1000 * x);
    var _y = (1000 * y);
    var _w = (1000 * width);
    var _h = (1000 * height);
    return new SharpShooter.Rectangle(_x, _y, _w, _h);
}
SharpShooter.Rectangle.intersect = function SharpShooter_Rectangle$intersect(value1, value2) {
    /// <param name="value1" type="SharpShooter.Rectangle">
    /// </param>
    /// <param name="value2" type="SharpShooter.Rectangle">
    /// </param>
    /// <returns type="SharpShooter.Rectangle"></returns>
    var num = value1.x + value1.width;
    var num2 = value2.x + value2.width;
    var num3 = value1.y + value1.height;
    var num4 = value2.y + value2.height;
    var num5 = (value1.x > value2.x) ? value1.x : value2.x;
    var num6 = (value1.y > value2.y) ? value1.y : value2.y;
    var num7 = (num < num2) ? num : num2;
    var num8 = (num3 < num4) ? num3 : num4;
    var result = new SharpShooter.Rectangle(0, 0, 0, 0);
    if (num7 > num5 && num8 > num6) {
        result.x = num5;
        result.y = num6;
        result.width = num7 - num5;
        result.height = num8 - num6;
    }
    else {
        result.x = 0;
        result.y = 0;
        result.width = 0;
        result.height = 0;
    }
    return result;
}
SharpShooter.Rectangle.union = function SharpShooter_Rectangle$union(value1, value2) {
    /// <param name="value1" type="SharpShooter.Rectangle">
    /// </param>
    /// <param name="value2" type="SharpShooter.Rectangle">
    /// </param>
    /// <returns type="SharpShooter.Rectangle"></returns>
    var num = value1.x + value1.width;
    var num2 = value2.x + value2.width;
    var num3 = value1.y + value1.height;
    var num4 = value2.y + value2.height;
    var num5 = (value1.x < value2.x) ? value1.x : value2.x;
    var num6 = (value1.y < value2.y) ? value1.y : value2.y;
    var num7 = (num > num2) ? num : num2;
    var num8 = (num3 > num4) ? num3 : num4;
    var result = new SharpShooter.Rectangle(0, 0, 0, 0);
    result.x = num5;
    result.y = num6;
    result.width = num7 - num5;
    result.height = num8 - num6;
    return result;
}
SharpShooter.Rectangle.prototype = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    
    offset: function SharpShooter_Rectangle$offset(offsetX, offsetY) {
        /// <param name="offsetX" type="Number" integer="true">
        /// </param>
        /// <param name="offsetY" type="Number" integer="true">
        /// </param>
        this.x += offsetX;
        this.y += offsetY;
    },
    
    inflate: function SharpShooter_Rectangle$inflate(horizontalAmount, verticalAmount) {
        /// <param name="horizontalAmount" type="Number" integer="true">
        /// </param>
        /// <param name="verticalAmount" type="Number" integer="true">
        /// </param>
        this.x -= horizontalAmount;
        this.y -= verticalAmount;
        this.width += horizontalAmount * 2;
        this.height += verticalAmount * 2;
    },
    
    contains: function SharpShooter_Rectangle$contains(x, y) {
        /// <param name="x" type="Number" integer="true">
        /// </param>
        /// <param name="y" type="Number" integer="true">
        /// </param>
        /// <returns type="Boolean"></returns>
        return this.x <= x && x < this.x + this.width && this.y <= y && y < this.y + this.height;
    },
    
    containsPoint: function SharpShooter_Rectangle$containsPoint(value) {
        /// <param name="value" type="SharpShooter.Point">
        /// </param>
        /// <returns type="Boolean"></returns>
        return this.x <= value.x && value.x < this.x + this.width && this.y <= value.y && value.y < this.y + this.height;
    },
    
    containsRectangle: function SharpShooter_Rectangle$containsRectangle(value) {
        /// <param name="value" type="SharpShooter.Rectangle">
        /// </param>
        /// <returns type="Boolean"></returns>
        return this.x <= value.x && value.x + value.width <= this.x + this.width && this.y <= value.y && value.y + value.height <= this.y + this.height;
    },
    
    intersects: function SharpShooter_Rectangle$intersects(value) {
        /// <param name="value" type="SharpShooter.Rectangle">
        /// </param>
        /// <returns type="Boolean"></returns>
        return value.x < this.x + this.width && this.x < value.x + value.width && value.y < this.y + this.height && this.y < value.y + value.height;
    },
    
    equals: function SharpShooter_Rectangle$equals(other) {
        /// <param name="other" type="SharpShooter.Rectangle">
        /// </param>
        /// <returns type="Boolean"></returns>
        return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Theme

SharpShooter.Theme = function SharpShooter_Theme() {
    /// <field name="enemyStyle" type="String">
    /// </field>
    /// <field name="backgroundStyle1" type="String">
    /// </field>
    /// <field name="backgroundStyle2" type="String">
    /// </field>
    /// <field name="backgroundStyle3" type="String">
    /// </field>
    /// <field name="playerStyle" type="String">
    /// </field>
    /// <field name="bulletStyle" type="String">
    /// </field>
    /// <field name="classic" type="SharpShooter.Theme" static="true">
    /// </field>
    /// <field name="current" type="SharpShooter.Theme" static="true">
    /// </field>
}
SharpShooter.Theme.prototype = {
    enemyStyle: null,
    backgroundStyle1: null,
    backgroundStyle2: null,
    backgroundStyle3: null,
    playerStyle: null,
    bulletStyle: null
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter._default

window._start = function SharpShooter__default$_start() {
    _createBackground();
    for (var i = 0; i < 10; i++) {
        SharpShooter.Engine.instance.addObject(new SharpShooter.Enemy(150 + i * 40, i * 50 + 60, SharpShooter.Theme.current.enemyStyle));
    }
    for (var i = 0; i < 10; i++) {
        SharpShooter.Engine.instance.addObject(new SharpShooter.Enemy(350 + i * 40, i * 50 + 60, SharpShooter.Theme.current.enemyStyle));
    }
    SharpShooter.Player.current = new SharpShooter.Player(60, SharpShooter.Engine.screenHeight / 2, SharpShooter.Theme.current.playerStyle);
    SharpShooter.Engine.instance.addObject(SharpShooter.Player.current);
    SharpShooter.Engine.instance.initializeLoop();
}
window._createBackground = function SharpShooter__default$_createBackground() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 5; j++) {
            var d = new SharpShooter.MovingBackgroundTile(j * 150, 520 - i * 100, 200, 200, SharpShooter.Theme.current.backgroundStyle2);
            d.width = 15;
            d.height = 15;
            SharpShooter.Engine.instance.addDecoration(d);
        }
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 5; j++) {
            SharpShooter.Engine.instance.addDecoration(new SharpShooter.MovingBackgroundTile(j * 100, 525 - i * 100, 350, 350, SharpShooter.Theme.current.backgroundStyle3));
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Engine

SharpShooter.Engine = function SharpShooter_Engine() {
    /// <field name="_objects" type="Array">
    /// </field>
    /// <field name="_decoration" type="Array">
    /// </field>
    /// <field name="instance" type="SharpShooter.Engine" static="true">
    /// </field>
    /// <field name="_ctx" type="CanvasContext2D">
    /// </field>
    /// <field name="_previousUpdate" type="Date">
    /// </field>
    /// <field name="screenWidth" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="screenHeight" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="isStarted" type="Boolean">
    /// </field>
    this._objects = [];
    this._decoration = [];
}
SharpShooter.Engine.prototype = {
    _ctx: null,
    _previousUpdate: null,
    
    initializeLoop: function SharpShooter_Engine$initializeLoop() {
        var can = document.getElementById('canvas');
        this._ctx = can.getContext('2d');
        window.setInterval(ss.Delegate.create(this, this._tick), 30);
    },
    
    _drawMessage: function SharpShooter_Engine$_drawMessage(message) {
        /// <param name="message" type="String">
        /// </param>
        this._ctx.save();
        this._ctx.font = '72px MunroRegular';
        this._ctx.fillStyle = 'Black';
        var height = 40;
        var width = this._ctx.measureText(message).width;
        var measurement = this._ctx.measureText(message);
        this._ctx.fillRect(SharpShooter.Engine.screenWidth / 2 - (width + 20) / 2, SharpShooter.Engine.screenHeight / 2 - height / 2, (width + 20), height);
        this._ctx.fillStyle = 'White';
        this._ctx.fillText(message, SharpShooter.Engine.screenWidth / 2 - width / 2, SharpShooter.Engine.screenHeight / 2 + 14);
        this._ctx.restore();
    },
    
    isStarted: false,
    
    start: function SharpShooter_Engine$start() {
        this.isStarted = true;
        this._previousUpdate = Date.get_now();
    },
    
    _tick: function SharpShooter_Engine$_tick() {
        this._ctx.fillStyle = '#' + (777777 - (this._getCurrentLevel() * 111111));
        this._ctx.fillRect(0, 0, SharpShooter.Engine.screenWidth, SharpShooter.Engine.screenHeight);
        this._objects = this._objects.filter(function(g) {
            return !g.isDead;
        });
        var now = Date.get_now();
        var ms = (this.isStarted) ? now - this._previousUpdate : 0;
        this._previousUpdate = now;
        for (var i = 0; i < this._decoration.length; i++) {
            this._decoration[i].update(ms);
        }
        for (var i = 0; i < this._objects.length; i++) {
            this._objects[i].update(ms);
        }
        for (var i = 0; i < this._decoration.length; i++) {
            this._decoration[i].move(ms);
        }
        for (var i = 0; i < this._objects.length; i++) {
            this._objects[i].move(ms);
        }
        for (var i = 0; i < this._objects.length; i++) {
            for (var j = i + 1; j < this._objects.length; j++) {
                this._objects[i].collide(this._objects[j]);
                this._objects[j].collide(this._objects[i]);
            }
        }
        for (var i = 0; i < this._decoration.length; i++) {
            this._decoration[i].draw(this._ctx);
        }
        for (var i = 0; i < this._objects.length; i++) {
            this._objects[i].draw(this._ctx);
        }
        SharpShooter.NumberDrawer.draw(this._ctx, SharpShooter.Engine.screenWidth - 30, 30, SharpShooter.Enemy.killCount, SharpShooter.Alignment.right);
        if (!this.isStarted) {
            this._drawMessage('SHOOT TO START');
        }
        else if (SharpShooter.Player.current.isDead) {
            this._drawMessage('PRESS [ENTER] TO RETRY');
        }
    },
    
    _getCurrentLevel: function SharpShooter_Engine$_getCurrentLevel() {
        /// <returns type="Number" integer="true"></returns>
        var xp = SharpShooter.Enemy.killCount;
        if (xp < 10) {
            return 0;
        }
        else if (xp < 20) {
            return 1;
        }
        else if (xp < 40) {
            return 2;
        }
        else if (xp < 80) {
            return 3;
        }
        else if (xp < 160) {
            return 4;
        }
        else if (xp < 320) {
            return 5;
        }
        else {
            return 6;
        }
    },
    
    addObject: function SharpShooter_Engine$addObject(o) {
        /// <param name="o" type="SharpShooter.Collideable">
        /// </param>
        this._objects.add(o);
    },
    
    addDecoration: function SharpShooter_Engine$addDecoration(o) {
        /// <param name="o" type="SharpShooter.GameObject">
        /// </param>
        this._decoration.add(o);
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Collideable

SharpShooter.Collideable = function SharpShooter_Collideable(x, y, style) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    SharpShooter.Collideable.initializeBase(this, [ x, y, style ]);
}
SharpShooter.Collideable.prototype = {
    
    collide: function SharpShooter_Collideable$collide(other) {
        /// <param name="other" type="SharpShooter.Collideable">
        /// </param>
        if (other.getPosition().intersects(this.getPosition())) {
            other.acceptVisitor(this.getVisitor());
        }
    },
    
    getVisitor: function SharpShooter_Collideable$getVisitor() {
        /// <returns type="SharpShooter.ICollideableVisitor"></returns>
        return new SharpShooter.EmptyVisitor();
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.EmptyVisitor

SharpShooter.EmptyVisitor = function SharpShooter_EmptyVisitor() {
}
SharpShooter.EmptyVisitor.prototype = {
    
    visitBullet: function SharpShooter_EmptyVisitor$visitBullet(b) {
        /// <param name="b" type="SharpShooter.Bullet">
        /// </param>
    },
    
    visitPlayer: function SharpShooter_EmptyVisitor$visitPlayer(p) {
        /// <param name="p" type="SharpShooter.Player">
        /// </param>
    },
    
    visitEnemy: function SharpShooter_EmptyVisitor$visitEnemy(e) {
        /// <param name="e" type="SharpShooter.Enemy">
        /// </param>
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Bullet

SharpShooter.Bullet = function SharpShooter_Bullet(x, y, vx, vy, style, ttl) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="vx" type="Number">
    /// </param>
    /// <param name="vy" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    /// <param name="ttl" type="Number" integer="true">
    /// </param>
    /// <field name="_ttl$3" type="Number" integer="true">
    /// </field>
    SharpShooter.Bullet.initializeBase(this, [ x, y, style ]);
    this.vx = vx;
    this.vy = vy;
    this._ttl$3 = ttl;
    this.width = 16;
    this.height = 16;
}
SharpShooter.Bullet.prototype = {
    _ttl$3: 0,
    
    update: function SharpShooter_Bullet$update(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        SharpShooter.Bullet.callBaseMethod(this, 'update', [ milliseconds ]);
        this._ttl$3 -= milliseconds;
        if (this._ttl$3 <= 0) {
            this.isDead = true;
        }
    },
    
    move: function SharpShooter_Bullet$move(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        SharpShooter.MovementStrategies.free(this, milliseconds);
    },
    
    getVisitor: function SharpShooter_Bullet$getVisitor() {
        /// <returns type="SharpShooter.ICollideableVisitor"></returns>
        return new SharpShooter.BulletVisitor(this);
    },
    
    acceptVisitor: function SharpShooter_Bullet$acceptVisitor(v) {
        /// <param name="v" type="SharpShooter.ICollideableVisitor">
        /// </param>
        v.visitBullet(this);
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.BulletVisitor

SharpShooter.BulletVisitor = function SharpShooter_BulletVisitor(parent) {
    /// <param name="parent" type="SharpShooter.Bullet">
    /// </param>
    /// <field name="_parent$1" type="SharpShooter.Bullet">
    /// </field>
    SharpShooter.BulletVisitor.initializeBase(this);
    this._parent$1 = parent;
}
SharpShooter.BulletVisitor.prototype = {
    _parent$1: null,
    
    visitEnemy: function SharpShooter_BulletVisitor$visitEnemy(e) {
        /// <param name="e" type="SharpShooter.Enemy">
        /// </param>
        this._parent$1.isDead = true;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Drawable

SharpShooter.Drawable = function SharpShooter_Drawable(x, y, style) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    /// <field name="style" type="Object">
    /// </field>
    /// <field name="width" type="Number" integer="true">
    /// </field>
    /// <field name="height" type="Number" integer="true">
    /// </field>
    SharpShooter.Drawable.initializeBase(this);
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.style = style;
}
SharpShooter.Drawable.prototype = {
    style: null,
    width: 20,
    height: 20,
    
    draw: function SharpShooter_Drawable$draw(ctx) {
        /// <param name="ctx" type="CanvasContext2D">
        /// </param>
        ctx.save();
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Enemy

SharpShooter.Enemy = function SharpShooter_Enemy(x, y, style) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    /// <field name="killCount" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="_direction$3" type="Number" integer="true">
    /// </field>
    SharpShooter.Enemy.initializeBase(this, [ x, y, style ]);
    this.vx = -200;
    this.vy = Math.random() * 200 - 100;
}
SharpShooter.Enemy.prototype = {
    
    acceptVisitor: function SharpShooter_Enemy$acceptVisitor(v) {
        /// <param name="v" type="SharpShooter.ICollideableVisitor">
        /// </param>
        v.visitEnemy(this);
    },
    
    getVisitor: function SharpShooter_Enemy$getVisitor() {
        /// <returns type="SharpShooter.ICollideableVisitor"></returns>
        return new SharpShooter.EnemyVisitor(this);
    },
    
    _direction$3: 1,
    
    update: function SharpShooter_Enemy$update(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        this.vy += 1 * this._direction$3 * (milliseconds / 1000);
        if (this.vy < -100 || this.vy > 100) {
            this._direction$3 *= -1;
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.EnemyVisitor

SharpShooter.EnemyVisitor = function SharpShooter_EnemyVisitor(parent) {
    /// <param name="parent" type="SharpShooter.Enemy">
    /// </param>
    /// <field name="_parent$1" type="SharpShooter.Enemy">
    /// </field>
    SharpShooter.EnemyVisitor.initializeBase(this);
    this._parent$1 = parent;
}
SharpShooter.EnemyVisitor.prototype = {
    _parent$1: null,
    
    visitBullet: function SharpShooter_EnemyVisitor$visitBullet(b) {
        /// <param name="b" type="SharpShooter.Bullet">
        /// </param>
        this._parent$1.isDead = true;
        SharpShooter.Enemy.killCount++;
        var newEnemy = new SharpShooter.Enemy(SharpShooter.Engine.screenWidth, Math.random() * SharpShooter.Engine.screenHeight, this._parent$1.style);
        newEnemy.vx *= 1.3;
        SharpShooter.Engine.instance.addObject(newEnemy);
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.MovingBackgroundTile

SharpShooter.MovingBackgroundTile = function SharpShooter_MovingBackgroundTile(x, y, vxAmount, vyAmount, style) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="vxAmount" type="Number">
    /// </param>
    /// <param name="vyAmount" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    /// <field name="_vxAmount$2" type="Number">
    /// </field>
    /// <field name="_vyAmount$2" type="Number">
    /// </field>
    SharpShooter.MovingBackgroundTile.initializeBase(this, [ x, y, style ]);
    this.vx = -vxAmount;
}
SharpShooter.MovingBackgroundTile.prototype = {
    _vxAmount$2: 0,
    _vyAmount$2: 0
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Player

SharpShooter.Player = function SharpShooter_Player(x, y, style) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="style" type="Object">
    /// </param>
    /// <field name="_originalVx$3" type="Number" integer="true">
    /// </field>
    /// <field name="_originalVy$3" type="Number" integer="true">
    /// </field>
    /// <field name="current" type="SharpShooter.Player" static="true">
    /// </field>
    /// <field name="coolDown" type="Number" integer="true">
    /// </field>
    /// <field name="_isShooting$3" type="Boolean">
    /// </field>
    SharpShooter.Player.initializeBase(this, [ x, y, style ]);
    this.vx = 0;
    this.vy = 0;
    this.width = 30;
    this.height = 40;
    $(document).keydown(null, ss.Delegate.create(this, function(e) {
        switch (e.which) {
            case SharpShooter.KeyCodes.left_arrow:
            case SharpShooter.KeyCodes.a:
                this.vx = -this._originalVx$3;
                break;
            case SharpShooter.KeyCodes.right_arrow:
            case SharpShooter.KeyCodes.d:
                this.vx = this._originalVx$3;
                break;
            case SharpShooter.KeyCodes.up_arrow:
            case SharpShooter.KeyCodes.w:
                this.vy = -this._originalVy$3;
                break;
            case SharpShooter.KeyCodes.down_arrow:
            case SharpShooter.KeyCodes.s:
                this.vy = this._originalVy$3;
                break;
            case SharpShooter.KeyCodes.space:
            case SharpShooter.KeyCodes.x:
                this._isShooting$3 = true;
                break;
        }
    }));
    $(document).keyup(null, ss.Delegate.create(this, function(e) {
        switch (e.which) {
            case SharpShooter.KeyCodes.left_arrow:
            case SharpShooter.KeyCodes.right_arrow:
            case SharpShooter.KeyCodes.a:
            case SharpShooter.KeyCodes.d:
                this.vx = 0;
                break;
            case SharpShooter.KeyCodes.up_arrow:
            case SharpShooter.KeyCodes.down_arrow:
            case SharpShooter.KeyCodes.w:
            case SharpShooter.KeyCodes.s:
                this.vy = 0;
                break;
            case SharpShooter.KeyCodes.space:
            case SharpShooter.KeyCodes.x:
                this._isShooting$3 = false;
                break;
        }
    }));
}
SharpShooter.Player.prototype = {
    _originalVx$3: 250,
    _originalVy$3: 250,
    
    move: function SharpShooter_Player$move(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        SharpShooter.MovementStrategies.framed(this, milliseconds);
    },
    
    draw: function SharpShooter_Player$draw(ctx) {
        /// <param name="ctx" type="CanvasContext2D">
        /// </param>
        ctx.save();
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y - 10, 15, this.height + 20);
        ctx.fillRect(this.x, this.y + 10, this.width + 15, this.height - 20);
        ctx.restore();
    },
    
    update: function SharpShooter_Player$update(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        if (this.coolDown > 0) {
            this.coolDown -= milliseconds;
        }
        else if (this._isShooting$3) {
            this.shoot();
        }
    },
    
    coolDown: 0,
    _isShooting$3: false,
    
    shoot: function SharpShooter_Player$shoot() {
        if (this.isDead) {
            return;
        }
        if (this.coolDown > 0) {
            return;
        }
        var vx = this._originalVx$3 * 2;
        var vy = 0;
        SharpShooter.Engine.instance.addObject(new SharpShooter.Bullet(this.x + this.width, this.y + this.height / 2 - 8, vx, vy, SharpShooter.Theme.current.bulletStyle, 2000));
        this.coolDown = 250;
    },
    
    acceptVisitor: function SharpShooter_Player$acceptVisitor(v) {
        /// <param name="v" type="SharpShooter.ICollideableVisitor">
        /// </param>
        v.visitPlayer(this);
    },
    
    getVisitor: function SharpShooter_Player$getVisitor() {
        /// <returns type="SharpShooter.ICollideableVisitor"></returns>
        return new SharpShooter.PlayerVisitor(this);
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.PlayerVisitor

SharpShooter.PlayerVisitor = function SharpShooter_PlayerVisitor(parent) {
    /// <param name="parent" type="SharpShooter.Player">
    /// </param>
    /// <field name="_parent$1" type="SharpShooter.Player">
    /// </field>
    SharpShooter.PlayerVisitor.initializeBase(this);
    this._parent$1 = parent;
}
SharpShooter.PlayerVisitor.prototype = {
    _parent$1: null,
    
    visitEnemy: function SharpShooter_PlayerVisitor$visitEnemy(e) {
        /// <param name="e" type="SharpShooter.Enemy">
        /// </param>
        this._parent$1.isDead = true;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.GameObject

SharpShooter.GameObject = function SharpShooter_GameObject() {
    /// <field name="isDead" type="Boolean">
    /// </field>
    /// <field name="x" type="Number">
    /// </field>
    /// <field name="y" type="Number">
    /// </field>
    /// <field name="vx" type="Number">
    /// </field>
    /// <field name="vy" type="Number">
    /// </field>
    /// <field name="width" type="Number">
    /// </field>
    /// <field name="height" type="Number">
    /// </field>
}
SharpShooter.GameObject.prototype = {
    isDead: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    width: 0,
    height: 0,
    
    getPosition: function SharpShooter_GameObject$getPosition() {
        /// <returns type="SharpShooter.Rectangle"></returns>
        return SharpShooter.Rectangle.createFromDoubles(this.x, this.y, this.width, this.height);
    },
    
    update: function SharpShooter_GameObject$update(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
    },
    
    move: function SharpShooter_GameObject$move(milliseconds) {
        /// <param name="milliseconds" type="Number" integer="true">
        /// </param>
        SharpShooter.MovementStrategies.continuous(this, milliseconds);
    }
}


////////////////////////////////////////////////////////////////////////////////
// SharpShooter.Point

SharpShooter.Point = function SharpShooter_Point(x, y) {
    /// <param name="x" type="Number" integer="true">
    /// </param>
    /// <param name="y" type="Number" integer="true">
    /// </param>
    /// <field name="x" type="Number" integer="true">
    /// </field>
    /// <field name="y" type="Number" integer="true">
    /// </field>
    this.x = x;
    this.y = y;
}
SharpShooter.Point.prototype = {
    x: 0,
    y: 0
}


SharpShooter.MovementStrategies.registerClass('SharpShooter.MovementStrategies');
SharpShooter.NumberDrawer.registerClass('SharpShooter.NumberDrawer');
SharpShooter.Rectangle.registerClass('SharpShooter.Rectangle');
SharpShooter.Theme.registerClass('SharpShooter.Theme');
SharpShooter.Engine.registerClass('SharpShooter.Engine');
SharpShooter.GameObject.registerClass('SharpShooter.GameObject');
SharpShooter.Drawable.registerClass('SharpShooter.Drawable', SharpShooter.GameObject);
SharpShooter.Collideable.registerClass('SharpShooter.Collideable', SharpShooter.Drawable);
SharpShooter.EmptyVisitor.registerClass('SharpShooter.EmptyVisitor', null, SharpShooter.ICollideableVisitor);
SharpShooter.Bullet.registerClass('SharpShooter.Bullet', SharpShooter.Collideable);
SharpShooter.BulletVisitor.registerClass('SharpShooter.BulletVisitor', SharpShooter.EmptyVisitor);
SharpShooter.Enemy.registerClass('SharpShooter.Enemy', SharpShooter.Collideable);
SharpShooter.EnemyVisitor.registerClass('SharpShooter.EnemyVisitor', SharpShooter.EmptyVisitor);
SharpShooter.MovingBackgroundTile.registerClass('SharpShooter.MovingBackgroundTile', SharpShooter.Drawable);
SharpShooter.Player.registerClass('SharpShooter.Player', SharpShooter.Collideable);
SharpShooter.PlayerVisitor.registerClass('SharpShooter.PlayerVisitor', SharpShooter.EmptyVisitor);
SharpShooter.Point.registerClass('SharpShooter.Point');
SharpShooter.NumberDrawer._empty = [ [ false, false, false ], [ false, false, false ], [ false, false, false ], [ false, false, false ], [ false, false, false ] ];
SharpShooter.NumberDrawer._d0 = [ [ true, true, true ], [ true, false, true ], [ true, false, true ], [ true, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d1 = [ [ false, false, true ], [ false, false, true ], [ false, false, true ], [ false, false, true ], [ false, false, true ] ];
SharpShooter.NumberDrawer._d2 = [ [ true, true, true ], [ false, false, true ], [ true, true, true ], [ true, false, false ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d3 = [ [ true, true, true ], [ false, false, true ], [ true, true, true ], [ false, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d4 = [ [ true, false, true ], [ true, false, true ], [ true, true, true ], [ false, false, true ], [ false, false, true ] ];
SharpShooter.NumberDrawer._d5 = [ [ true, true, true ], [ true, false, false ], [ true, true, true ], [ false, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d6 = [ [ true, true, true ], [ true, false, false ], [ true, true, true ], [ true, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d7 = [ [ true, true, true ], [ false, false, true ], [ false, false, true ], [ false, false, true ], [ false, false, true ] ];
SharpShooter.NumberDrawer._d8 = [ [ true, true, true ], [ true, false, true ], [ true, true, true ], [ true, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer._d9 = [ [ true, true, true ], [ true, false, true ], [ true, true, true ], [ false, false, true ], [ true, true, true ] ];
SharpShooter.NumberDrawer.pixelWidth = 10;
SharpShooter.NumberDrawer.pixelHeight = 10;
SharpShooter.Theme.classic = null;
SharpShooter.Theme.current = null;
(function () {
    SharpShooter.Theme.classic = new SharpShooter.Theme();
    SharpShooter.Theme.classic.enemyStyle = '#DD0000';
    SharpShooter.Theme.classic.backgroundStyle1 = '#666666';
    SharpShooter.Theme.classic.backgroundStyle2 = '#505050';
    SharpShooter.Theme.classic.backgroundStyle3 = '#404040';
    SharpShooter.Theme.classic.playerStyle = 'white';
    SharpShooter.Theme.classic.bulletStyle = 'white';
    SharpShooter.Theme.current = SharpShooter.Theme.classic;
})();
(function () {
    $(function() {
        _start();
    });
    $(document).keydown(null, function(e) {
        switch (e.which) {
            case SharpShooter.KeyCodes.enter:
                window.open(window.document.URL, '_self');
                break;
            case SharpShooter.KeyCodes.space:
            case SharpShooter.KeyCodes.x:
                if (!SharpShooter.Engine.instance.isStarted) {
                    SharpShooter.Engine.instance.start();
                }
                break;
        }
    });
})();
SharpShooter.Engine.instance = new SharpShooter.Engine();
SharpShooter.Engine.screenWidth = 800;
SharpShooter.Engine.screenHeight = 600;
SharpShooter.Enemy.killCount = 0;
SharpShooter.Player.current = null;
})(jQuery);

//! This script was generated using Script# v0.7.0.0
