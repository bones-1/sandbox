<?php

class Page
{

    public $content;
    public $title = "TLA Consulting Pty Ltd";
    public $keywords = "TLA Consulting, Three Letter Abbreviation,
some of my best friends are search engines";

    public $buttons = [
        'Home' => 'home.php',
        'Contacts' => 'contacts.php',
        'services' => 'services.php',
        'Site Map' => 'map.php',
    ];

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function display()
    {
        echo <<<SAY
        <html>
        <head>
        $this -> displayTitle();
        $this -> displayKeywords();
        $this -> displayStyles();
        </head>
        <body>
        $this -> displayHeader();
        $this -> displayMenu($this -> buttons);
        $this -> content();
        $this -> displayFooter();
        </body>
        </html>
        SAY;
    }
    public function DisplayTitle()
    {
        echo "<title>" . $this->title . "</title>";
    }
    public function DisplayKeywords()
    {
        echo "<meta name='keywords' content='" . $this->keywords . "'/>";
    }
    public function DisplayStyles()
    {
?>
        <link href="styles.css" type="text/css" rel="stylesheet">

    <?php
    }
    public function DisplayHeader()
    {
    ?>
        <!-- page header -->
        <header>
            <img src="logo.gif" alt="TLA logo" height="70" width="70" />
            <h1>TLA Consulting</h1>
        </header>
        <?php
    }
    public function DisplayMenu($buttons)
    {
        echo "<!-- menu -->
<nav>";
        foreach($buttons as $name => $url) {
            $this->DisplayButton(
                $name,
                $url,
                !$this->IsURLCurrentPage($url)
            );
        }
        echo "</nav>\n";
    }
    public function IsURLCurrentPage($url)
    {
        if (strpos($_SERVER['PHP_SELF'], $url) === false) {
            return false;
        } else {
            return true;
        }
    }
    public function DisplayButton($name, $url, $active = true)
    {
        if ($active) { ?>
            <div class="menuitem">
                <a href="<?= $url ?>">
                    <img src="s-logo.gif" alt="" height="20" width="20" />
                    <span class="menutext"><?= $name ?></span>
                </a>
            </div>
        <?php
        } else { ?>

            <div class="menuitem">
                <img src="side-logo.gif">
                <span class="menutext"><?= $name ?></span>
            </div>
        <?php
        }
    }
    public function DisplayFooter()
    {
        ?>
        <!-- page footer -->
        <footer>
            <p>&copy; TLA Consulting Pty Ltd.<br />
                Please see our
                <a href="legal.php">legal information page</a>.
            </p>
        </footer>
<?php
    }
}
?>