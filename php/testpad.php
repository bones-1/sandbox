<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta id="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestPad</title>
    <style>
        body {
            background-color: rgb(55, 55, 55);
            color: white;
        }
    </style>
</head>

<body>

    <?php
    class Classroom
    {
        protected $student_db = [];

        function callback($ar_value, $b)
        {
            return ($ar_value['id'] == $b);
            echo "callback called<br>";
        }


        public function add_student($arr)
        {

            if ($this->validate_student_array($arr)) {
                if (count($this->student_db) == 0) {
                    array_push($this->student_db, $arr);
                } else if ($this->_arr_find($this->student_db, $arr['id'], function ($ar_value, $b) {
                    return ($ar_value['id'] == $b);
                    echo "callback called<br>";
                }) > 0) {
                    echo "Item added<br>";
                }
            }
        }

        // public function show_student($id)
        // {


        //     if ($this->student_index($id)) {
        //         echo "No such student.<br>";
        //     } else {
        //         echo "<em>Student Info</em><br>";
        //     }
        // }

        protected function validate_student_array($arr)
        {
            if (!(is_array($arr) && isset($arr['id']) && isset($arr['name']))) {
                return false;
            }

            if (!(is_int($arr['id']) && is_string($arr['name']))) {
                return false;
            }

            return true;
        }


        // Traverses an array with callback function until it finds value and then returns the shallow index of that value. The callback function compares the two values returns true if they match and false if they do not
        protected function _arr_find($arr, $value, $callback)
        {
            foreach ($arr as $index => $arr_item) {

                if ($callback($arr_item, $value) === true) {
                    return $index;
                    echo "Item found<br>";
                };
            }
            echo "Item not found<br>";

            return -1;
        }


        // Handle getting atributes tht do not exist;
        # Returns nothing;
        function __get($name)
        {
            if ($name !== 'total') {
                print "No such property!";
                return;
            }

            if (count($this->student_db) == 0) {
                print "The classroom is empty.<br>";
                return;
            }

            print "There is " . count($this->student_db) . ' students in this classroom.<br>';
        }

        # Returns bool: true on success, bool: false on failure;
        function __set($name, $value)
        {
            // if (!isset($this->$id)) {
            //     print "The atribute \"$id\" does not exist!<br>";
            // } else if ($value < 0 || $value > 100) {
            //     print "The value is out of range!<br>";
            // } else {
            //     $this->$id = $value;
            //     return true;
            // }
            print "Operation not permitted!<br>";

            return false;
        }
    }

    $room1 = new Classroom();
    $room1->add_student(['id' => 132, 'name' => 'Sam']);
    $room1->add_student(['id' => 3333, 'name' => 'Sam']);
    $room1->add_student(['id' => 132, 'name' => 'Sam']);

    $room1->total;
    // $room1->show_student(132);


    ?>
</body>

</html>