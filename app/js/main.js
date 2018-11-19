function listenFor (obj, event, func, capt) {
  if (obj.addEventListener) {
    obj.addEventListener(event, func, capt);
  }
  else {
    event = "on" + event;
    if (obj.attachEvent) {
      obj.attachEvent(event, func);
    }
    else {
      obj[event] = func;
    };
  };
};

function buttonHover (evt) {
  evt = evt || window.event;
  var on, off,
      src = evt.target || evt.srcElement,
      button = src.className.substring(7);
  switch (button) {
    case 'twitter':
      on = '-189px 0px';
      off = '-189px -24px';
      break;
    case 'vimeo':
      on = '-151px 0px';
      off = '-151px -24px';
      break;
    case 'linkedin':
      on = '-227px 0px';
      off = '-227px -24px';
      break;
  }
  if (evt.type == 'mouseover') {
    src.style.backgroundPosition = on;
  }
  if (evt.type == 'mouseout') {
    src.style.backgroundPosition = off;
  } 
};

(function () {
  var i,
      len,
      body = document.getElementsByTagName('body')[0],
      the_nav = document.getElementById('nav'),
      the_as = the_nav.getElementsByTagName('a'),
      mobile_nav_button = document.getElementById('mobile-menu');
  
  function checkWindowWidth () {
    if (window.innerWidth < 420) {
      body.classList.add('mobile');
      body.classList.remove('standard');
    }
    else {
      body.classList.add('standard');
      body.classList.remove('mobile');
    }
  }

  function toggleMobileMenu () {
    if (/mobile/.test(body.className)) {
      if (the_nav.classList.length === 0) {
        the_nav.style.display = 'block';
        the_nav.classList.add('closed');
      }

      if (/closed/.test(the_nav.className)) {
        the_nav.classList.add('open');
        the_nav.classList.remove('closed');
        the_nav.style.height = the_nav.scrollHeight + 'px';
      }
      else {
        the_nav.classList.add('closed');
        the_nav.classList.remove('open');
        the_nav.style.height = 0;
      }
    }
  }

  function loadStates () {
    checkWindowWidth();
  }

  listenFor(window, 'load', loadStates, true);
  listenFor(window, 'resize', checkWindowWidth, true);
  listenFor(mobile_nav_button, 'click', toggleMobileMenu, true);

  for (i = 0, len = the_as.length; i < len; i += 1) {
    if (the_as[i].className.indexOf('button') != -1) {
      listenFor(the_as[i], 'mouseover', buttonHover, true);
      listenFor(the_as[i], 'mouseout', buttonHover, true);
    }
  }
})();
