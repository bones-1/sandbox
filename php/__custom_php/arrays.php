<?php
// Traverses an array with callback function until it finds value and then returns the shallow index of that value. The callback function compares the two values returns true if they match and false if they do not
function _arr_find($arr, $value, $callback)
{
    foreach ($arr as $index => $arr_item) {
        if ($callback($arr_item, $value) === true) {
            return $index;
        };
    }
    return -1;
}
