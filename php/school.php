    <?php

    class Students
    {
        protected $permitted_attributes = [
            'name' => ['type' => 'string',],
            'id' => ['type' => 'integer',],
            'age' => ['type' => 'integer',],
            'sex' => ['type' => 'string',],
            'religion' => ['type' => 'string',],
            'address' => ['type' => 'string',],
            'debt' => ['type' => 'boolean',],
        ];
    }

    class Classroom extends Students
    {
        protected $student_db = [];


        public function add_student($arr)
        {
            if ($this->validate_student_array($arr)) {

                $not_already_added = $this->custom_arr_find($this->student_db, $arr['id'], "Classroom::compare_id") < 0;

                if ($not_already_added) {
                    array_push($this->student_db, $arr);
                    echo "Item added<br>";
                }
            }
        }

        public function show_student($id)
        {
            $student_index = $this->custom_arr_find($this->student_db, $id, "Classroom::compare_id");

            if ($student_index < 0) {
                echo "No such student.<br>";
            } else {
                echo "<br><em><strong>Student Info</strong></em><br>";
                foreach ($this->student_db[$student_index] as $name => $value) {
                    echo "$name: $value<br>";
                }
            }
        }


        protected static function compare_id($ar_value, $b)
        {
            return ($ar_value['id'] == $b);
        }

        final protected function validate_student_array($arr)
        {
            if (!(is_array($arr) && isset($arr['id']) && isset($arr['name']))) {
                return false;
            }

            if (!(is_int($arr['id']) && is_string($arr['name']))) {
                return false;
            }

            foreach (array_keys($arr) as $attr) {
                if (!isset($this->permitted_attributes[$attr])) {
                    return false;
                }

                if ($this->permitted_attributes[$attr]['type'] !== gettype($arr[$attr])) {
                    return false;
                }
            }

            return true;
        }


        // Traverses an array with callback function until it finds value and then returns the shallow index of that value. The callback function compares the two values returns true if they match and false if they do not
        protected function custom_arr_find($arr, $value, $callback)
        {
            foreach ($arr as $index => $arr_item) {

                if ($callback($arr_item, $value) === true) {
                    return $index;
                };
            }
            return -1;
        }


        # TODO: See what can be done about this 
        function __get($name)
        {
            if ($name !== 'total') {
                print "No such property!<br>";
                return;
            }

            if (count($this->student_db) == 0) {
                print "The classroom is empty.<br>";
                return;
            }

            print "There is " . count($this->student_db) . ' students in this classroom.<br>';
        }

        function __set($name, $value)
        {
            print "Operation not permitted!<br>";

            return false;
        }
    }

    $room1 = new Classroom();
    $room1->add_student(['id' => 132, 'name' => 'Sam', 'age' => 17, 'debt' => false]);
    $room1->add_student(['id' => 3333, 'name' => 'Sam']);
    $room1->show_student(132);


    ?>