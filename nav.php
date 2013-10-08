<li class="journ">Communicator</li>
<?php
  
  $nav_array = array('Home', 'About', 'Experience', 'Portfolio', 'Photos', 'Contact');
  
  $page = $_SERVER['PHP_SELF'];
  
  echo "\t  "; // syntactic sugar for View Source
  
  foreach ($nav_array as $item) {
    if ($page == ('/' . strtolower($item) . '.php')) {
      echo '<li>' . $item . '</li>';
    }
    elseif ($item == 'Home' && $page == '/index.php') {
      echo '<li>Home</li>';
    }
    elseif ($item == 'Portfolio' && $page == '/clips.php') {
      echo '<li>Portfolio</li>';
    }
    else {
      if ($item == 'Portfolio') {
        echo '<li><a href="clips.php">' . $item . '</a></li>';
      }
      elseif ($item == 'Home') {
        echo '<li><a href="index.php">' . $item . '</a></li>';
      }
      else {
        echo '<li><a href="' . strtolower($item) . '.php">' . $item . '</a></li>';
      }
    }
    echo "\n\t  "; // syntactic sugar for View Source
  }
  
?>
<li><a href="http://www.twitter.com/naomiroslyn" class="button twitter">Twitter</a></li>
<li><a href="http://www.vimeo.com/user2049528" class="button vimeo">Vimeo</a></li>
<li><a href="http://www.linkedin.com/in/naomirpatton" class="button linkedin">LinkedIn</a></li>
