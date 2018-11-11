var bW = window.bw || {};

bW.getDOMReferences = function () {
  this.nav = document.getElementById('nav');

  this.nav_a_array = document.getElementById('nav')
                   .getElementsByTagName('a');
              
  this.masthead_h1 = document.getElementById('masthead')
                   .getElementsByTagName('h1')[0];
};

bW.listenFor = function (obj, evt, func, capt) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, func, capt);
  }
  else {
    evt = "on" + evt;
    if (obj.attachEvent) {
      obj.attachEvent(evt, func);
    }
    else {
      obj[evt] = func;
    }
  }
};

bW.textHover = function (evt) {
  var src;

  evt = evt || window.event;
  src = evt.target || evt.srcElement;

  if (evt.type == 'mouseover') {
    src.style.color = '#c00';
  }

  if (evt.type == 'mouseout') {
    src.style.color = '#999';
  } 
};

bW.buttonHover = function (evt) {
  var on, off, src, button;

  evt = evt || window.event;
  src = evt.target || evt.srcElement;
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
      this.listenFor(this.nav_a_array[i], 'mouseover', this.textHover, false);
      this.listenFor(this.nav_a_array[i], 'mouseout', this.textHover, false);
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
