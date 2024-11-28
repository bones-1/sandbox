<?php
# Reads an entire file line-by-line instead of globbing all into memory before outputtting.
function safe_readfile($file, $mode, $length = null)
{
    if (empty($file) || empty($mode)) {
        print "\$file and \$mode arguments are mandatory<br>";
        return false;
    }

    $fh_file = fopen($file, $mode);
    if ($fh_file === false) {
        print "Failed to open file: $file.<br>";
        return false;
    }

    flock($fh_file, LOCK_SH);
    $string = '';

    if (isset($length)) {
        while (($string = fgets($fh_file, $length)) !== false) {
            print nl2br("$string");
        };
        return true;
    } else {
        while (($string = fgets($fh_file)) !== false) {
            print nl2br("$string");
        }
        return true;
    }
    
    flock($fh_file, LOCK_UN);
    fclose($fh_file);
}
