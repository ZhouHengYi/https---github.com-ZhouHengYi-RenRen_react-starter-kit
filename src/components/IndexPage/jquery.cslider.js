import jQuery from 'jquery';

(function ($, undefined) {

    /*
	 * Slider object.
	 */
    $.Slider = function (options, element) {

        this.$el = $(element);

        this._init(options);

    };

    $.Slider.defaults = {
        current: 0, 	// index of current slide
        //bgincrement: 50,	// increment the bg position (parallax effect) when sliding
        autoplay: false,// slideshow on / off
        interval: 4000  // time between transitions
    };

    $.Slider.prototype = {
        _init: function (options) {

            this.options = $.extend(true, {}, $.Slider.defaults, options);

            this.$slides = this.$el.children('div.da-slide');
            this.slidesCount = this.$slides.length;

            this.current = this.options.current;

            if (this.current < 0 || this.current >= this.slidesCount) {

                this.current = 0;

            }
            var currentslides = this.$slides.eq(this.current);

            currentslides.addClass('da-slide-current');
            

            var $navigation = this.$el.find('div.da-dots');
            for (var i = 0; i < this.slidesCount; ++i) {
                $navigation.append('<span/>');
            }

            this.$pages = this.$el.find('div.da-dots > span');
            this.$navNext = this.$el.find('span.da-arrows-next');
            this.$navPrev = this.$el.find('span.da-arrows-prev');

            if (this.slidesCount > 1) {
                this.$el.find('div.slider-nav').show();
            }

            this.isAnimating = false;

            this.bgpositer = 0;

            this.cssAnimations = Modernizr.cssanimations;
            this.cssTransitions = Modernizr.csstransitions;

            if (!this.cssAnimations || !this.cssAnimations) {

                this.$el.addClass('da-slider-fb');

            } else {
                //初始化所有背景   
                this.$slides.css("background", currentslides.data("bg"));
            }

            this._updatePage();

            // load the events
            this._loadEvents();

            // slideshow
            if (this.options.autoplay) {

                this._firstSlideshow();

            }

        },
        _navigate: function (page, dir) {

            var $current = this.$slides.eq(this.current), $next, _self = this;

            if (this.current === page || this.isAnimating) return false;

            this.isAnimating = true;

            // check dir
            var classTo, classFrom, d;

            if (!dir) {

                (page > this.current) ? d = 'next' : d = 'prev';

            }
            else {

                d = dir;

            }

            if (this.cssAnimations && this.cssAnimations) {

                if (d === 'next') {

                    classTo = 'da-slide-toleft';
                    classFrom = 'da-slide-fromright';
                    ++this.bgpositer;

                }
                else {

                    classTo = 'da-slide-toright';
                    classFrom = 'da-slide-fromleft';
                    --this.bgpositer;

                }

                this.$el.css('background-position', this.bgpositer * this.options.bgincrement + '% 0%');

            }

            this.current = page;

            $next = this.$slides.eq(this.current);

            if (this.cssAnimations && this.cssAnimations) {

                var rmClasses = 'da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright';
                $current.removeClass(rmClasses);
                $next.removeClass(rmClasses);
                $current.addClass(classTo);
                $next.addClass(classFrom);

                $current.removeClass('da-slide-current');
                $next.addClass('da-slide-current');

            }

            // fallback
            if (!this.cssAnimations || !this.cssAnimations) {
                $next.addClass('da-slide-current');
                $next.css('left', (d === 'next') ? '100%' : '-100%').stop().animate({
                    left: '0%'
                }, 1000, function () {
                    _self.isAnimating = false;

                });

                $current.stop().animate({
                    left: (d === 'next') ? '-100%' : '100%'
                }, 1000, function () {
                    $current.removeClass('da-slide-current');
                });

            }

            this._updatePage();

        },
        _updatePage: function () {

            this.$pages.removeClass('da-dots-current');
            this.$pages.eq(this.current).addClass('da-dots-current');

        },
        _firstSlideshow: function() {
            var _self = this;
            setTimeout(function () {

                var page = (_self.current < _self.slidesCount - 1) ? page = _self.current + 1 : page = 0;
                _self._navigate(page, 'next');

                if (_self.options.autoplay) {

                    _self._startSlideshow();
                }

            }, 2000);

        },
        _startSlideshow: function () {

            var _self = this;

            this.slideshow = setTimeout(function () {

                var page = (_self.current < _self.slidesCount - 1) ? page = _self.current + 1 : page = 0;
                _self._navigate(page, 'next');

                if (_self.options.autoplay) {

                    _self._startSlideshow();

                }

            }, this.options.interval);

        },
        page: function (idx) {

            if (idx >= this.slidesCount || idx < 0) {

                return false;

            }

            if (this.options.autoplay) {

                clearTimeout(this.slideshow);
                this.options.autoplay = false;

            }

            this._navigate(idx);

        },
        _loadEvents: function () {

            var _self = this;

            this.$pages.on('click.cslider', function (event) {

                _self.page($(this).index());
                return false;

            });

            this.$navNext.on('click.cslider', function (event) {

                if (_self.options.autoplay) {

                    clearTimeout(_self.slideshow);
                    _self.options.autoplay = false;

                }

                var page = (_self.current < _self.slidesCount - 1) ? page = _self.current + 1 : page = 0;
                _self._navigate(page, 'next');
                return false;

            });

            this.$navPrev.on('click.cslider', function (event) {

                if (_self.options.autoplay) {

                    clearTimeout(_self.slideshow);
                    _self.options.autoplay = false;

                }

                var page = (_self.current > 0) ? page = _self.current - 1 : page = _self.slidesCount - 1;
                _self._navigate(page, 'prev');
                return false;

            });

            if (this.cssTransitions) {
                if (!this.options.bgincrement) {
                    this.$el.on('webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider', function (event) {
                        var slides = $(this).children('div.da-slide');
                        //show
                        if (
                            event.originalEvent.animationName === 'homefromRightAnim3'
                            || event.originalEvent.animationName === 'homefromLeftAnim3'
                            || event.originalEvent.animationName === 'homefromRightBanner2Anim4'
                            || event.originalEvent.animationName === 'homefromLeftBanner2Anim4'
                            || event.originalEvent.animationName === 'homefromRightBanner3Anim3'
                            || event.originalEvent.animationName === 'homefromLeftBanner3Anim3'

                            || event.originalEvent.animationName === 'ukfromRightAnim3'
                            || event.originalEvent.animationName === 'ukfromLeftAnim3'

                            || event.originalEvent.animationName === 'usafromRightAnim2'
                            || event.originalEvent.animationName === 'usafromLeftAnim2'

                            || event.originalEvent.animationName === 'ausfromRightAnim1'
                            || event.originalEvent.animationName === 'ausfromLeftAnim1'

                            || event.originalEvent.animationName === 'jpfromRightAnim1'
                            || event.originalEvent.animationName === 'jpfromLeftAnim1'
                            ) {
                            _self.isAnimating = false;
                        }
                        //hide
                        if (
                            event.originalEvent.animationName === 'hometoLeftAnim3'
                            || event.originalEvent.animationName === 'hometoRightAnim1'
                            || event.originalEvent.animationName === 'hometoLeftBanner2Anim4'
                            || event.originalEvent.animationName === 'hometoRightBanner2Anim4'
                            || event.originalEvent.animationName === 'hometoLeftBanner3Anim3'
                            || event.originalEvent.animationName === 'hometoRightBanner3Anim3'

                            || event.originalEvent.animationName === 'austoLeftAnim1'
                            || event.originalEvent.animationName === 'austoLeftAnim1'

                            || event.originalEvent.animationName === 'uktoLeftAnim3'
                            || event.originalEvent.animationName === 'uktoRightAnim3'

                            || event.originalEvent.animationName === 'usatoLeftAnim2'
                            || event.originalEvent.animationName === 'usatoRightAnim2'

                            || event.originalEvent.animationName === 'austoLeftAnim1'
                            || event.originalEvent.animationName === 'austoRightAnim1'

                            || event.originalEvent.animationName === 'jptoRightAnim1'
                            || event.originalEvent.animationName === 'jptoLeftAnim1'
                            ) {
                            

                            slides.css("background", slides.siblings('.da-slide-current').data("bg"));
                        }

                    });

                }
                else {
                    this.$el.on('webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider', function (event) {

                        if (event.target.id === _self.$el.attr('id'))
                            _self.isAnimating = false;

                    });

                }

            }

        }
    };

    var logError = function (message) {
        if (this.console) {
            console.error(message);
        }
    };

    $.fn.cslider = function (options) {

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {

                var instance = $.data(this, 'cslider');

                if (!instance) {
                    logError("cannot call methods on cslider prior to initialization; " +
					"attempted to call method '" + options + "'");
                    return;
                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for cslider instance");
                    return;
                }

                instance[options].apply(instance, args);

            });

        }
        else {

            this.each(function () {

                var instance = $.data(this, 'cslider');
                if (!instance) {
                    $.data(this, 'cslider', new $.Slider(options, this));
                }
            });

        }

        return this;

    };

})(jQuery);