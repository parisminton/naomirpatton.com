var bW = window.bw || {};

bW.getDOMReferences = function () {
  this.nav = document.getElementById('nav');

  this.nav_a_array = document.getElementById('nav')
                   .getElementsByTagName('a');
              
  this.masthead_h1 = document.getElementById('masthead')
                   .getElementsByTagName('h1')[0];
};

bW.listenFor = function (obj, event, func, capt) {
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
    }
  }
};

bW.nav_highlight = function (evt) {
  var src;

  evt = evt || window.event;
  src = evt.target || evt.srcElement;

  src.style.color = '#c00';
};

bW.nav_dim = function (evt) {
  var src;

  evt = evt || window.event;
  src = evt.target || evt.srcElement;

  src.style.color = '#999';
};

bW.buttonHover = function (evt) {
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

bW.attachButtonListeners = function () {
  var i, len;

  for (i = 0, len = this.nav_a_array.length; i < len; i += 1) {
    if (this.nav_a_array[i].className.indexOf('button') != -1) {
      this.listenFor(this.nav_a_array[i], 'mouseover', this.buttonHover, true);
      this.listenFor(this.nav_a_array[i], 'mouseout', this.buttonHover, true);
    }
    else {
      this.listenFor(this.nav_a_array[i], 'mouseover', this.nav_highlight, false);
      this.listenFor(this.nav_a_array[i], 'mouseout', this.nav_dim, false);
    }
  }
};


// mobile stuff
bW.makeMobileButton = function () {
  var fragment = document.createDocumentFragment(),
      button = document.createElement('div'),
      p = document.createElement('p'),
      show = document.createTextNode('Show menu');

  p.appendChild(show);
  button.id = 'mobilebutton';
  button.appendChild(p);
  fragment.appendChild(button);

  this.nav.parentNode.insertBefore(fragment, this.nav);
};

bW.convertMobileNav = function () {
  var comp_width = window.getComputedStyle(this.masthead_h1, null)
                   .getPropertyValue('width');

  this.nav.style.width = comp_width;
  this.nav.className = 'mobilenav';
};


// set everything up
bW.go = function () {
  this.getDOMReferences();
  this.attachButtonListeners();
  if (window.innerWidth < 400) {
    this.makeMobileButton();
    this.convertMobileNav();
  }
};
