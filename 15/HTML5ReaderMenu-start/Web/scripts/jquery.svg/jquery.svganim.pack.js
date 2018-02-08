/* http://keith-wood.name/svg.html
   SVG attribute animations for jQuery v1.4.4.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(A($){$.2f([\'x\',\'y\',\'2g\',\'2S\',\'2T\',\'2U\',\'2V\',\'2W\',\'r\',\'2X\',\'2Y\',\'2Z\',\'31\',\'U-2g\',\'33\',\'1F\',\'2h-1F\',\'36\',\'U-1F\',\'37\',\'U-38\',\'39\',\'2i-3a\',\'3b\',\'2i-3c\',\'3d\',\'3e-2j\',\'3f\',\'3g-2j\',\'3h\'],A(i,f){l g=f.1G(0).2k()+f.1H(1);q($.1I){$.1I[\'u\'+g]=$.1I[\'u-\'+f]=f}$.D.E[\'u\'+g]=$.D.E[\'u-\'+f]=A(a){l b=$.u.3i[f]||f;l c=a.B.1l.1m(b);q(!a.N){a.k=(c?p(c.O):0);l d=($.1J.1K>=\'1.6\'?\'\':a.V.W[\'u\'+g]||a.V.W[\'u-\'+f]);q(/^[+-]=/.L(d)){a.o=a.k+p(d.1L(/=/,\'\'))}$(a.B).1M(b,\'\');a.N=1n}l e=(a.w*(a.o-a.k)+a.k)+(a.3j==\'%\'?\'%\':\'\');(c?c.O=e:a.B.1o(b,e))}});$.D.E[\'2l\']=$.D.E[\'u-2m\']=$.D.E[\'2n-17\']=$.D.E[\'u-U-17\']=A(a){l b=a.B.1l.1m(\'U-17\');q(!a.N){a.k=1N(b?b.O:\'\');l c=($.1J.1K>=\'1.6\'?a.o:a.V.W[\'2l\']||a.V.W[\'u-2m\']||a.V.W[\'2n-17\']||a.V.W[\'u-U-17\']);a.o=1N(c);q(/^[+-]=/.L(c)){c=c.1r(/[, ]+/);q(c.F%2==1){l d=c.F;X(l i=0;i<d;i++){c.1s(c[i])}}X(l i=0;i<c.F;i++){q(/^[+-]=/.L(c[i])){a.o[i]=a.k[i]+p(c[i].1L(/=/,\'\'))}}}a.N=1n}l e=$.2o(a.k,A(n,i){G(a.w*(a.o[i]-n)+n)}).1O(\',\');(b?b.O=e:a.B.1o(\'U-17\',e))};A 1N(a){l b=a.1r(/[, ]+/);X(l i=0;i<b.F;i++){b[i]=p(b[i]);q(2p(b[i])){b[i]=0}}q(b.F%2==1){l c=b.F;X(l i=0;i<c;i++){b.1s(b[i])}}G b}$.D.E[\'2q\']=$.D.E[\'u-1t\']=A(a){l b=a.B.1l.1m(\'1t\');q(!a.N){a.k=1P(b?b.O:\'\');l c=($.1J.1K>=\'1.6\'?a.o:a.V.W[\'2q\']||a.V.W[\'u-1t\']);a.o=1P(c);q(/^[+-]=/.L(c)){c=c.1r(/[, ]+/);1u(c.F<4){c.1s(\'0\')}X(l i=0;i<4;i++){q(/^[+-]=/.L(c[i])){a.o[i]=a.k[i]+p(c[i].1L(/=/,\'\'))}}}a.N=1n}l d=$.2o(a.k,A(n,i){G(a.w*(a.o[i]-n)+n)}).1O(\' \');(b?b.O=d:a.B.1o(\'1t\',d))};A 1P(a){l b=a.1r(/[, ]+/);X(l i=0;i<b.F;i++){b[i]=p(b[i]);q(2p(b[i])){b[i]=0}}1u(b.F<4){b.1s(0)}G b}$.D.E[\'3k\']=$.D.E[\'u-1Q\']=A(a){l b=a.B.1l.1m(\'1Q\');q(!a.N){a.k=1R(b?b.O:\'\');a.o=1R(a.o,a.k);a.N=1n}l c=\'\';X(l i=0;i<a.o.M.F;i++){2r(a.o.M.1G(i)){H\'t\':c+=\' 2s(\'+(a.w*(a.o.18-a.k.18)+a.k.18)+\',\'+(a.w*(a.o.1a-a.k.1a)+a.k.1a)+\')\';I;H\'s\':c+=\' 2t(\'+(a.w*(a.o.1b-a.k.1b)+a.k.1b)+\',\'+(a.w*(a.o.1p-a.k.1p)+a.k.1p)+\')\';I;H\'r\':c+=\' 2u(\'+(a.w*(a.o.1c-a.k.1c)+a.k.1c)+\',\'+(a.w*(a.o.1d-a.k.1d)+a.k.1d)+\',\'+(a.w*(a.o.1e-a.k.1e)+a.k.1e)+\')\';I;H\'x\':c+=\' 13(\'+(a.w*(a.o.13-a.k.13)+a.k.13)+\')\';H\'y\':c+=\' 14(\'+(a.w*(a.o.14-a.k.14)+a.k.14)+\')\';I;H\'m\':l d=\'\';X(l j=0;j<6;j++){d+=\',\'+(a.w*(a.o.z[j]-a.k.z[j])+a.k.z[j])}c+=\' z(\'+d.1H(1)+\')\';I}}(b?b.O=c:a.B.1o(\'1Q\',c))};A 1R(a,b){a=a||\'\';q(3l a==\'3m\'){a=a.O}l c=$.3n({18:0,1a:0,1b:0,1p:0,1c:0,1d:0,1e:0,13:0,14:0,z:[0,0,0,0,0,0]},b||{});c.M=\'\';l d=/([a-3o-Z]+)\\(\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*)?)?)?\\)/g;l e=d.L(a);1u(e){2r(e[1]){H\'2s\':c.M+=\'t\';c.18=p(e[2]);c.1a=(e[3]?p(e[3]):0);I;H\'2t\':c.M+=\'s\';c.1b=p(e[2]);c.1p=(e[3]?p(e[3]):c.1b);I;H\'2u\':c.M+=\'r\';c.1c=p(e[2]);c.1d=(e[3]?p(e[3]):0);c.1e=(e[4]?p(e[4]):0);I;H\'13\':c.M+=\'x\';c.13=p(e[2]);I;H\'14\':c.M+=\'y\';c.14=p(e[2]);I;H\'z\':c.M+=\'m\';c.z=[p(e[2]),p(e[3]),p(e[4]),p(e[5]),p(e[6]),p(e[7])];I}e=d.L(a)}q(c.M==\'m\'&&J.1v(c.z[0])==J.1v(c.z[3])&&c.z[1]!=0&&J.1v(c.z[1])==J.1v(c.z[2])){l f=J.3p(c.z[0])*1w/J.3q;f=(c.z[1]<0?3r-f:f);c.M=\'3s\';c.1c=f;c.1d=c.1e=0;c.18=c.z[4];c.1a=c.z[5]}G c}$.2f([\'2h\',\'U\'],A(i,e){l f=e.1G(0).2k()+e.1H(1);$.D.E[\'u\'+f]=$.D.E[\'u-\'+e]=A(a){q(!a.N){a.k=$.u.1S(a.B,e);l b=(a.o==\'1f\');a.o=(b?$.u.1S(a.B.3t,e):$.u.1T(a.o));a.o[3]=b;$(a.B).1M(e,\'\');a.N=1n}l c=a.B.1l.1m(e);l d=\'1U(\'+[J.1V(J.1W(K((a.w*(a.o[0]-a.k[0]))+a.k[0],10),0),8),J.1V(J.1W(K((a.w*(a.o[1]-a.k[1]))+a.k[1],10),0),8),J.1V(J.1W(K((a.w*(a.o[2]-a.k[2]))+a.k[2],10),0),8)].1O(\',\')+\')\';d=(a.o[3]&&a.3u==1?\'1f\':d);(c?c.O=d:a.B.1o(e,d))}});$.u.1S=A(a,b){a=$(a);l c;3v{c=a.3w(b)||a.1M(b);q((c!=\'\'&&c!=\'1f\')||a.3x(\'3y\')){I}}1u(a=a.3z());G $.u.1T(c)};$.u.1T=A(a){l b;q(a&&a.3A==3B){G(a.F==3||a.F==4?a:h[\'1f\'])}q(b=/^1U\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)$/.L(a)){G[K(b[1],10),K(b[2],10),K(b[3],10)]}q(b=/^1U\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)$/.L(a)){G[p(b[1])*2.55,p(b[2])*2.55,p(b[3])*2.55]}q(b=/^#([a-1g-1h-9]{2})([a-1g-1h-9]{2})([a-1g-1h-9]{2})$/.L(a)){G[K(b[1],16),K(b[2],16),K(b[3],16)]}q(b=/^#([a-1g-1h-9])([a-1g-1h-9])([a-1g-1h-9])$/.L(a)){G[K(b[1]+b[1],16),K(b[2]+b[2],16),K(b[3]+b[3],16)]}G h[$.3C(a).3D()]||h[\'1f\']};l h={\'\':[8,8,8,1],1f:[8,8,8,1],3E:[P,1x,8],3F:[C,1X,2v],3G:[0,8,8],3H:[1y,8,3I],3J:[P,8,8],3K:[Q,Q,1i],3L:[8,1Y,2w],3M:[0,0,0],3N:[8,1X,S],3O:[0,0,8],3P:[3Q,43,3R],3S:[1Z,42,42],3T:[1z,2x,22],3U:[3V,3W,1A],3X:[1y,8,0],3Y:[23,T,30],3Z:[8,1y,40],41:[2y,44,48],49:[8,1x,1i],4a:[1i,20,60],4b:[0,8,8],4c:[0,0,R],4d:[0,R,R],4e:[2x,4f,11],4g:[1j,1j,1j],4h:[0,2y,0],4i:[1j,1j,1j],4j:[4k,4l,24],4m:[R,0,R],4n:[2z,24,47],4o:[8,26,0],4p:[27,50,2A],4q:[R,0,0],4r:[4s,4t,2B],4u:[1B,2C,1B],4v:[2D,61,R],4w:[47,1C,1C],4x:[47,1C,1C],4y:[0,28,2E],4z:[4A,0,Y],4B:[8,20,29],4C:[0,2F,8],4D:[T,T,T],4E:[T,T,T],4F:[30,1q,8],4G:[2G,34,34],4H:[8,C,P],4I:[34,R,34],4J:[8,0,8],4K:[1i,1i,1i],4L:[1x,1x,8],4M:[8,2v,0],4N:[2a,1Z,32],4O:[v,v,v],4P:[v,v,v],4Q:[0,v,0],4R:[2b,8,47],4S:[P,8,P],4T:[8,T,1w],4U:[S,2H,2H],4V:[4W,0,2c],4X:[8,8,P],4Y:[P,15,26],4Z:[15,15,C],51:[8,P,Q],52:[53,54,0],56:[8,C,S],57:[2b,2d,15],58:[P,v,v],59:[1D,8,8],5a:[C,C,23],5b:[Y,Y,Y],5c:[1q,12,1q],5d:[Y,Y,Y],5e:[8,5f,5g],5h:[8,1A,2B],5i:[32,2G,2e],5j:[22,28,C],5k:[2I,2J,27],5l:[2I,2J,27],5m:[2K,2w,1z],5n:[8,8,1D],5o:[0,8,0],5p:[50,S,50],5q:[C,P,15],5r:[8,0,8],5s:[v,0,0],5t:[5u,S,2e],5v:[0,0,S],5w:[5x,2z,Y],5y:[29,1k,2L],5z:[60,2M,5A],5B:[5C,5D,12],5E:[0,C,2N],5F:[2D,2E,2A],5G:[5H,21,2O],5I:[25,25,1k],5J:[Q,8,C],5K:[8,1Y,2P],5L:[8,1Y,5M],5N:[8,1z,2b],5O:[0,0,v],5P:[5Q,Q,15],5R:[v,v,0],5S:[24,5T,35],5U:[8,1Z,0],5V:[8,69,0],5W:[2a,1k,5X],5Y:[12,5Z,2e],62:[2Q,66,2Q],67:[68,12,12],6a:[2L,1k,29],6b:[8,6c,6d],6e:[8,2a,6f],6g:[S,2O,63],6h:[8,1E,6i],6j:[2R,1A,2R],6k:[2K,1D,15],6l:[v,0,v],6m:[8,0,0],6n:[2C,1B,1B],6o:[65,T,2P],6p:[R,69,19],6q:[C,v,6r],6s:[6t,6u,6v],6w:[46,R,6x],6y:[8,Q,12],6z:[1A,6A,45],6B:[1E,1E,1E],6C:[22,28,1X],6D:[6E,6F,S],6G:[1k,v,1q],6H:[1k,v,1q],6I:[8,C,C],6J:[0,8,1y],6K:[70,2c,1w],6L:[23,1w,26],6M:[0,v,v],6N:[2d,2F,2d],6O:[8,6P,6Q],6R:[64,1D,6S],6T:[12,2c,12],6U:[Q,1z,2M],6V:[8,8,8],6W:[Q,Q,Q],6X:[8,8,0],6Y:[2N,S,50]}})(6Z);',62,435,'||||||||255||||||||||||start|var|||end|parseFloat|if||||svg|128|pos|||matrix|function|elem|250|fx|step|length|return|case|break|Math|parseInt|exec|order|set|nodeValue|240|245|139|205|105|stroke|options|curAnim|for|211||||238|skewX|skewY|230||dasharray|translateX||translateY|scaleX|rotateA|rotateX|rotateY|none|fA|F0|220|169|112|attributes|getNamedItem|true|setAttribute|scaleY|144|split|push|viewBox|while|abs|180|248|127|222|160|143|79|224|192|opacity|charAt|substr|cssProps|fn|jquery|replace|css|parseDashArray|join|parseViewBox|transform|parseTransform|_getColour|_getRGB|rgb|min|max|235|228|165|||135|210|107||140|153|206|147|218|173|130|216|170|each|width|fill|font|spacing|toUpperCase|svgStrokeDashArray|strokeDashArray|svgStroke|map|isNaN|svgViewBox|switch|translate|scale|rotate|215|196|184|100|85|204|122|188|72|209|191|178|92|119|136|176|219|179|154|133|225|152|221|height|rx|ry|cx|cy|x1|y1|x2||y2||strokeWidth|||fillOpacity|strokeOpacity|dashoffset|strokeDashOffset|size|fontSize|weight|fontWeight|letter|letterSpacing|word|wordSpacing|_attrNames|unit|svgTransform|typeof|object|extend|zA|acos|PI|360|rt|parentNode|state|do|attr|hasClass|hasSVG|parent|constructor|Array|trim|toLowerCase|aliceblue|antiquewhite|aqua|aquamarine|212|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|138|226|brown|burlywood|cadetblue|95|158|chartreuse|chocolate|coral|80|cornflowerblue|||149||||237|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|134|darkgray|darkgreen|darkgrey|darkkhaki|189|183|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|233|150|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|148|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|75|ivory|khaki|lavender||lavenderblush|lawngreen|124|252||lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|182|193|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|102|mediumblue|mediumorchid|186|mediumpurple|mediumseagreen|113|mediumslateblue|123|104|mediumspringgreen|mediumturquoise|mediumvioletred|199|midnightblue|mintcream|mistyrose|moccasin|181|navajowhite|navy|oldlace|253|olive|olivedrab|142|orange|orangered|orchid|214|palegoldenrod|232|||palegreen||||251|paleturquoise|175||palevioletred|papayawhip|239|213|peachpuff|185|peru|pink|203|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|114|sandybrown|244|164|96|seagreen|87|seashell|sienna|82|silver|skyblue|slateblue|106|90|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|99|71|turquoise|208|violet|wheat|white|whitesmoke|yellow|yellowgreen|jQuery|'.split('|'),0,{}))