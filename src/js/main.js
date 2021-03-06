$(document).ready(function(){

  (function() {
    var tp = new Typograf({
      locale: ['ru', 'en-US'],
      ascii_only: false
    });
    var elem = document.querySelector('body');
    elem.innerHTML = tp.execute(elem.innerHTML);
  })();

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  ////////////
  // READY - triggered when PJAX DONE
  ////////////
  function pageReady(){
    heroReady();
    handleUTM();
    legacySupport();
    initScrollMonitor();
    // initVideos();
    // _window.on('resize', debounce(initVideos, 200))
    initSmartBanner();
    initTeleport();
    initMasks();
    initModals();

  }

  // this is a master function which should have all functionality
  pageReady();


  //////////
  // COMMON
  //////////

  function legacySupport(){
    // svg support for laggy browsers
    svg4everybody();

    // Viewport units buggyfill
    window.viewportUnitsBuggyfill.init({
      force: true,
      refreshDebounceWait: 150,
      appendToBody: true
    });
  }

  // HANDLE UTM
  function handleUTM(){
    // selectors
    var logoLink = $('[js-paste-link-logo]');
    var appstoreLink = $('[js-paste-link-appstore]');
    var googleLink = $('[js-paste-link-google]');

    var hrefRefer = window.location.pathname.slice(1);

    var appLinkVal, siteLinkVal;

    switch (hrefRefer) {
      case "yt":
        appLinkVal = "?pid=landing_abm_siz&c=YouTube_abm"
        siteLinkVal = "?platformId=landing_abm_siz_youtube&utm_source=landing_page&utm_medium=video&utm_campaign=abm_siz_landing_youtube"
        break;
      case "mt_video":
        appLinkVal = "?pid=landing_abm_siz&c=MyTarget_video_abm"
        siteLinkVal = "?platformId=landing_abm_siz_mytarget_video&utm_source=landing_page&utm_medium=video&utm_campaign=abm_siz_landing_mytarget_video"
        break;
      case "mt_post":
        appLinkVal = "?pid=landing_abm_siz&c=MyTarget_banner_abm"
        siteLinkVal = "?platformId=landing_abm_siz_mytarget_post&utm_source=landing_page&utm_medium=cpc&utm_campaign=abm_siz_landing_mytarget_post"
        break;
      case "fb_video":
        appLinkVal = "?pid=landing_abm_siz&c=FB_video_abm"
        siteLinkVal = "?platformId=landing_abm_siz_fb_video&utm_source=landing_page&utm_medium=video&utm_campaign=abm_siz_landing_fb_video"
        break;
      case "email":
        appLinkVal = "?pid=landing_abm_siz&c=Email_abm"
        siteLinkVal = "?platformId=landing_abm_siz_email&utm_source=landing_page&utm_medium=email&utm_campaign=abm_siz_landing_email"
        break;
      case "vk_post":
        appLinkVal = "?pid=landing_abm_siz&c=VK_posts_abm"
        siteLinkVal = "?platformId=landing_abm_siz_vk_post&utm_source=landing_page&utm_medium=social&utm_campaign=abm_siz_landing_vk_post"
        break;
      case "fb_post":
        appLinkVal = "?pid=landing_abm_siz&c=FB_posts_abm"
        siteLinkVal = "?platformId=landing_abm_siz_fb_post&utm_source=landing_page&utm_medium=social&utm_campaign=abm_siz_landing_fb_post"
        break;
      case "vk_video":
        appLinkVal = "?pid=landing_abm_siz&c=VK_video_abm"
        siteLinkVal = "?platformId=landing_abm_siz_vk_video&utm_source=landing_page&utm_medium=social&utm_campaign=abm_siz_landing_vk_video"
        break;
      case "spare":
        appLinkVal = "?pid=landing_abm_siz&c=spare_abm"
        siteLinkVal = "?platformId=landing_abm_siz_spare&utm_source=landing_page&utm_medium=organic&utm_campaign=abm_siz_landing_spare"
        break;
      default:
        appLinkVal = "?pid=landing_abm_siz&c=main_landing_abm"
        siteLinkVal = "?platformId=landing_abm_siz_main&utm_source=landing_page&utm_medium=organic&utm_campaign=abm_siz_landing_main"
    }

    logoLink.attr('href', logoLink.attr('href') + '/' + siteLinkVal );
    appstoreLink.attr('href', appstoreLink.attr('href') + appLinkVal );
    googleLink.attr('href', googleLink.attr('href') + appLinkVal );

  }

  // smartbanner (app store, gplay)
  function initSmartBanner(){
    $.smartbanner({
      title: "Альфа-Бизнес", // What the title of the app should be in the banner (defaults to <title>)
      author: "AO ALFA-BANK", // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
      price: 'FREE', // Price of the app
      appStoreLanguage: 'ru', // Language code for App Store
      inAppStore: 'Загрузить в App Store', // Text of price for iOS
      inGooglePlay: 'В Google Play', // Text of price for Android
      // inAmazonAppStore: 'In the Amazon Appstore',
      // inWindowsStore: 'In the Windows Store', // Text of price for Windows
      GooglePlayParams: null, // Aditional parameters for the market
      icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
      iconGloss: null, // Force gloss effect for iOS even for precomposed
      url: null, // The URL for the button. Keep null if you want the button to link to the app store.
      button: 'Смотреть', // Text for the install button
      scale: 'auto', // Scale based on viewport size (set to 1 to disable)
      speedIn: 300, // Show animation speed of the banner
      speedOut: 400, // Close animation speed of the banner
      daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
      daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
      force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
      hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
      layer: false, // Display as overlay layer or slide down the page
      iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
      appendToSelector: 'body', //Append the banner to a specific selector
    })
  }

  // css3 filter support
  function css3FilterFeatureDetect(enableWebkit) {
    if(enableWebkit === undefined) {
        enableWebkit = false;
    }
    el = document.createElement('div');
    el.style.cssText = (enableWebkit?'-webkit-':'') + 'filter: blur(2px)';
    test1 = (el.style.length != 0);
    test2 = (
        document.documentMode === undefined //non-IE browsers, including ancient IEs
        || document.documentMode > 9 //IE compatibility moe
    );
    return test1 && test2;
  }

  css3FilterFeatureDetect(true);
  if(document.body.style.webkitFilter !== undefined){
    $('body').addClass('css3-filter-enabled');
  } else {
    $('body').addClass('css3-filter-disabled');
  }


  function heroReady(){
    setTimeout(function(){
      $('.hero').addClass('is-ready');
    }, 800)
  }
  // Prevent # behavior
	_document
    .on('click', '[href="#"]', function(e) {
  		e.preventDefault();
  	})
    .on('click', '[js-scrollTo]', function(){
      var target = $(this).data('scroll-to');
      $('body, html').animate({
          scrollTop: $('[data-target="'+target+'"]').offset().top}, 1000);
      return false;
    })

  // VIDEO
  function initVideos(){
    if ( _window.width() > 768 ){
      $('video[data-video-id="1"]').on('ended', function(){
        setTimeout(function(){
          playVideo(2);
        }, 2000)
      });
      $('video[data-video-id="2"]').on('ended', function(){
        setTimeout(function(){
          playVideo(1);
        }, 2000)
      });

      // _document.on('click', '[js-toggle-video]', function(){
      //   var videoId = $(this).data('video');
      //   if ( _window.width() > 768 ){
      //     playVideo(videoId);
      //   }
      // });

      // refactor
      var allVideos = $('[js-video-logic] video');
      var videos = [];
      allVideos.each(function(i, video){
        var $video = $(video);
        var videoDuration = 0;

        // load sources
        var sources = $video.find('source');
        $.each(sources, function(i, source){
          source.setAttribute('src', source.getAttribute('data-src'));
        })

        video.load();
        $video.on('loadedmetadata', function(){
          videoDuration = Math.round(video.duration);
          videos.push({
            video: $video,
            videoDuration: videoDuration + 1, // 1 second delay for slides change
            index: i + 1
          });

          // check that all ready for the last element
          if ( allVideos.length == i + 1 ){
            // checkAvailable();
            playVideo(1);
          };
        });
      });
    }

    function playVideo(index){
      // cleanup
      $('.step-nav__el').removeClass('is-active');
      $('video').removeClass('is-active');
      $('video').each(function(i, video){
        video.currentTime = 0;
        video.pause();
      })

      // add active classes and play
      var targetVideo = $('video[data-video-id="'+index+'"]');
      targetVideo.get(0).play();
      targetVideo.addClass('is-active');
      $('.step-nav__el[data-video="'+index+'"]').addClass('is-active');

    }

  }

  ////////////
  // TELEPORT PLUGIN
  ////////////
  function initTeleport(){
    $('[js-teleport]').each(function (i, val) {
      var self = $(val)
      var objHtml = $(val).html();
      var target = $('[data-teleport-target=' + $(val).data('teleport-to') + ']');
      var conditionMedia = $(val).data('teleport-condition').substring(1);
      var conditionPosition = $(val).data('teleport-condition').substring(0, 1);

      if (target && objHtml && conditionPosition) {

        function teleport() {
          var condition;

          if (conditionPosition === "<") {
            condition = _window.width() < conditionMedia;
          } else if (conditionPosition === ">") {
            condition = _window.width() > conditionMedia;
          }

          if (condition) {
            target.html(objHtml)
            self.html('')
          } else {
            self.html(objHtml)
            target.html("")
          }
        }

        teleport();
        _window.on('resize', debounce(teleport, 100));


      }
    })
  }

  ////////////
  // MODALS
  ////////////

  function initModals(){
    // Magnific Popup
    var startWindowScroll = 0;
    $('[js-popup]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'popup-buble',
      closeMarkup: '<button title="%title%" type="button" class="modal__close"><svg class="ico ico-close"><use xlink:href="img/sprite.svg#ico-close"></use></svg></button>',
      callbacks: {
        beforeOpen: function() {
          startWindowScroll = _window.scrollTop();
          // $('html').addClass('mfp-helper');
        },
        close: function() {
          // $('html').removeClass('mfp-helper');
          _window.scrollTop(startWindowScroll);
        }
      }
    });
  }

  function closeMfp(){
    $.magnificPopup.close();
  }

  _document
    .on('click', '.modal__close', closeMfp)


  ////////////
  // UI
  ////////////
  // Masked input
  function initMasks(){
    $("[js-cta-phone]").mask("000 000-00-00", {
      // placeholder: "+7 (___) ___-____"
    });
  }

  // CTA FORM LOGIC
  var $form = $('[js-cta-form]')
  var $formInput = $('[js-cta-phone]');
  var $formCheckbox = $('[js-cta-checkbox]')
  var $formButton = $('[js-cta-button]');

  $form.on('change', function(e){

  })
  $form.on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();

    if ( formIsValid() ){

      var trimedPhone = "7" + $formInput.val().replace(/-|\s/g,"");

      var leadParams = {
        "phone": trimedPhone,
        "advCode": "alfasite",
        "platformId": getParameterByName("platformId") || "landing_abm_siz"
        // дефолты для органического трафика
        // для лендинга АБМ platformID - landing_abm_siz
        // для виртуальной карты platformID - landing_virtual_card
      }

      $.ajax({
        method: 'GET',
        url: "https://anketa.alfabank.ru/ona/lead?userType=nc",
        // url: 'https://cors-anywhere.herokuapp.com/https://anketa.alfabank.ru/ona/lead',
        dataType: 'jsonp',
        // contentType: "application/json",
        data: leadParams
      })
      .done(function(res){
        console.log('done', res)
      })
      .always(function(res) {
        console.log("always", res);
        window.location.href = "https://anketa.alfabank.ru/ona/auth/login"
      });
    }
  })

  // emulate focus triggers
  $('.cta-form__input-wrapper').on('click', function(){
    $formInput.focus();
  })

  $formInput.on('blur', function(e){ // blur is like focusout
    // blur - remove focus if blank
    $form.removeClass('is-bordered');

    if ( $formInput.val().trim().length === 0 ){ // TODO - trim ?
      $form.removeClass('is-focused')
    } else {
      $form.addClass('is-focused');
    }
  })

  $formInput.on('focus', function(e){ // focus is like focusin
    // focus - always visible
    $form.addClass('is-focused');
    $form.addClass('is-bordered');
  })

  $formInput.on('keyup', function(e){
    controllButton();
    toggleCheckbox();
  })

  $formCheckbox.on('change', function(){
    controllButton();
  })

  function phoneIsValid(){
    return $formInput.val().length === 13
  }

  function formIsValid(){
    return phoneIsValid() && $formCheckbox.is(':checked')
  }

  function controllButton(){
    if ( formIsValid() ){
      $formButton.attr('disabled', false)
      $form.addClass('is-valid')
    } else {
      $formButton.attr('disabled', true);
      $form.removeClass('is-valid');
    }
  }

  function toggleCheckbox(){
    if ( phoneIsValid() ){
      $form.addClass('is-phone-valid')
      $formCheckbox.parent().fadeIn(250)
    } else {
      $form.removeClass('is-phone-valid')
      $formCheckbox.parent().fadeOut(250)
    }
  }


  $.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
  };

  $('[js-cta-phone]').on('input', function() {
    var inputWidth = Math.ceil($(this).textWidth()) + 1;

    $(this).css({
      width: inputWidth
    })
  }).trigger('input');


  function inputWidth(elem, minW, maxW) {
    elem = $(this);
  }

  inputWidth($('[js-cta-phone]'));


  ////////////
  // SCROLLMONITOR - WOW LIKE
  ////////////
  function initScrollMonitor(){
    $('.wow').each(function(i, el){
      var $el = $(el);
      var elWatcher = scrollMonitor.create( $el );
      var fullyEntered = $el.data('fully-entered');

      var delay;
      if ( $(window).width() < 768 ){
        delay = 0
      } else {
        delay = $el.data('animation-delay');
      }

      var animationClass = $el.data('animation-class') || "wowFadeUp"
      var animationName = $el.data('animation-name') || "wowFade"
      var animationDuration = $el.data('animation-duration') || "0.75s"

      if ( fullyEntered ){
        elWatcher.fullyEnterViewport(throttle(show, 100, {
          'leading': true
        }));
      } else {
        elWatcher.enterViewport(throttle(show, 100, {
          'leading': true
        }));
      }

      function show(){
        $el.addClass(animationClass);
        $el.css({
          'animation-name': animationName,
          'animation-delay': delay,
          'animation-duration': animationDuration,
          'visibility': 'visible'
        });
      }
    });

    $('.wow2').each(function(i, el){
      var $el = $(el);
      var elWatcher = scrollMonitor.create( $el );

      elWatcher.fullyEnterViewport(throttle(function(){
        $el.addClass('animated');
      }, 100, {
        'leading': true
      }));

    });
  }


  // HELPER FUNCTIONS
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

});
