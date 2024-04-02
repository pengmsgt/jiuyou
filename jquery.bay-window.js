! function ($) {
    $.fn.autoMove = function (args) {
        function isTop(pos, w_w, w_h, d_w, d_h) {
            return (pos.top <= 0) ? true : false;
        }

        function isBottom(pos, w_w, w_h, d_w, d_h) {
            return (pos.top >= (w_h - d_h)) ? true : false;
        }

        function isLeft(pos, w_w, w_h, d_w, d_h) {
            return (pos.left <= 0) ? true : false;
        }

        function isRight(pos, w_w, w_h, d_w, d_h) {
            return (pos.left >= (w_w - d_w)) ? true : false;
        }
        return this.each(function () {
            var w_w = parseInt($(window).width()),
                w_h = parseInt($(window).height()),
                d_w = parseInt($(this).width()),
                d_h = parseInt($(this).height()),
                d_l = (w_w - d_w) / 2,
                d_t = (w_h - d_h) / 2,
                max_l = w_w - d_w;
            max_t = w_h - d_h;
            var setobj = $.extend({
                startL: d_l,
                startT: d_t,
                angle: Math.PI / 4,
                speed: 100
            }, args);
            $(this).css({
                position: 'fixed',
                left: setobj['startL'] + 'px',
                top: setobj['startT'] + 'px'
            });
            var position = {
                left: setobj['startL'],
                top: setobj['startT']
            };
            var that = $(this);
            var angle = setobj.angle;
            var time = 10;
            var step = setobj.speed * (time / 1000);
            var decoration = {
                x: step * Math.cos(angle),
                y: step * Math.sin(angle)
            };
            var mvtid;
            $(window).on('resize', function () {
                w_w = parseInt($(window).width());
                w_h = parseInt($(window).height());
                max_l = w_w - d_w;
                max_t = w_h - d_h;
            });

            function move() {
                position.left += decoration.x;
                position.top += decoration.y;
                if (isLeft(position, w_w, w_h, d_w, d_h) || isRight(position, w_w, w_h, d_w, d_h)) {
                    decoration.x = -1 * decoration.x;
                }
                if (isRight(position, w_w, w_h, d_w, d_h)) {
                    position.left = max_l;
                }
                if (isTop(position, w_w, w_h, d_w, d_h) || isBottom(position, w_w, w_h, d_w, d_h)) {
                    decoration.y = -1 * decoration.y;
                }
                if (isBottom(position, w_w, w_h, d_w, d_h)) {
                    position.top = max_t;
                }
                that.animate({
                    left: position.left,
                    top: position.top
                }, time);
                mvtid = setTimeout(move, time);
            }
            move();
            that.on('mouseenter', function () {
                clearTimeout(mvtid)
            });
            that.on('mouseleave', function () {
                move()
            });
        });
    };
}(jQuery);