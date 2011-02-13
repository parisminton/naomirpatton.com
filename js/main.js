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

function nav_behavior (evt) {
  evt = evt || window.event;
  var typ = evt.type;
  var src = evt.target || evt.srcElement;
  alert(typ + ", " + src.nodeName);
};

function nav_highlight () {
  this.style.color = '#c00';
};

function nav_dim () {
  this.style.color = '#999';
};

/* ...get rid of this global... */
var the_nav = document.getElementById('nav').getElementsByTagName('A');
for (var i = 0; i < the_nav.length; i++) {
  listenFor(the_nav[i], "mouseover", nav_highlight, false);
  // listenFor(the_nav[i], "mouseover", nav_behavior, false);
  listenFor(the_nav[i], "mouseout", nav_dim, false);
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
  var i, len,
      the_nav2 = document.getElementById('nav'),
      the_as = the_nav2.getElementsByTagName('a');
  for (i = 0, len = the_as.length; i < len; i += 1) {
    if (the_as[i].className.indexOf('button') != -1) {
      listenFor(the_as[i], 'mouseover', buttonHover, true);
      listenFor(the_as[i], 'mouseout', buttonHover, true);
    }
  }
})();