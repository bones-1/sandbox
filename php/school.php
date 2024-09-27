    <?php

    interface validate_person_interface
    {
        # manipulate permitted_atributes array for selected class 
        static function add_attribute(
            string $name,
            string $type,
            array $properties
        );
        static function remove_attribute(string $name);
        static function validate_data(array $data_array);
    }

    # Validates self
    // Creates objects that accepts self data array and validates it, returning try or false. can also add additional attributes for the data to be validated against
    class Person implements validate_person_interface
    {
        private  const DATA_TYPES = ['boolean', 'integer', 'double',  'string', 'array'];

        private  const ALLOWED_PROPERTIES = [
            'value',
            'max',
            'min',
            'length',
        ];

        private  const MAX_NAME_LEN = 20;

        private const DEFAULT_RULES = [
            'name' => [
                'type' => 'string',
                'length' => 50
            ],
            'id' => [
                'type' => 'integer',
                'min' => 100,
                'max' => 999
            ],
            'age' => [
                'type' => 'integer',
                'min' => 15,
                'max' => 150
            ],
            'sex' => [
                'type' => 'string',
                'value' => [
                    'male',
                    'female',
                    'other'
                ]
            ],
            'religion' => [
                'type' => 'string',
                'length' => 40
            ],
            'address' => [
                'type' => 'string',
                'lenght' => 150
            ],
        ];

        private static $custom_rules;

        static function add_attribute(string $name, string $type, array $properties = [])
        {
            $name = trim(strtolower($name));
            $type = trim(strtolower($type));

            $temp = [];

            if (strlen($name) > self::MAX_NAME_LEN || !in_array($type, self::DATA_TYPES)) {
                return false;
            }

            if (count($properties) > 0) {

                foreach ($properties as $property_name => $property_value) {

                    if (!in_array($property_name, self::ALLOWED_PROPERTIES)) {
                        return false;
                    }

                    $temp[$property_name] = $property_value;
                }
            }

            $temp['type'] = $type;
            self::$custom_rules[$name] = $temp;

            echo var_dump(self::$custom_rules);
            return true;
        }

        static function remove_attribute(string $name)
        {
            unset(self::$custom_rules[$name]);
        }

        static function validate_data(array $data_array)
        {
            if (!array_key_exists('id', $data_array)) {
                return false;
            }

            // Code to validate input using the conditions above
        }
    }


    echo  Person::add_attribute('country', 'string', ['max' => 3]);
    Person::remove_attribute('country');

    echo 'done';
    // interface student
    // {
    //     #inherits self
    //      public function add_data(integer $id, array $data);
    //      
    // }

    // interface teacher
    // {
    //     #inherits self
    // }

    // interface admin
    // {
    //     #inherits self
    // }

    // class Students implements student {}

    // class Classroom extends Students
    // {
    //     protected $student_db = [];


    //     public function add_student($arr)
    //     {
    //         if ($this->validate_student_array($arr)) {

    //             $not_already_added = $this->custom_arr_find($this->student_db, $arr['id'], "Classroom::compare_id") < 0;

    //             if ($not_already_added) {
    //                 array_push($this->student_db, $arr);
    //                 echo "Item added<br>";
    //             }
    //         }
    //     }

    //     public function show_student($id)
    //     {
    //         $student_index = $this->custom_arr_find($this->student_db, $id, "Classroom::compare_id");

    //         if ($student_index < 0) {
    //             echo "No such student.<br>";
    //         } else {
    //             echo "<br><em><strong>Student Info</strong></em><br>";
    //             foreach ($this->student_db[$student_index] as $name => $value) {
    //                 echo "$name: $value<br>";
    //             }
    //         }
    //     }


    //     protected static function compare_id($ar_value, $b)
    //     {
    //         return ($ar_value['id'] == $b);
    //     }

    //     final protected function validate_student_array($arr)
    //     {
    //         if (!(is_array($arr) && isset($arr['id']) && isset($arr['name']))) {
    //             return false;
    //         }

    //         if (!(is_int($arr['id']) && is_string($arr['name']))) {
    //             return false;
    //         }

    //         foreach (array_keys($arr) as $attr) {
    //             if (!isset($this->RULES[$attr])) {
    //                 return false;
    //             }

    //             if ($this->RULES[$attr]['type'] !== gettype($arr[$attr])) {
    //                 return false;
    //             }
    //         }

    //         return true;
    //     }


    //     // Traverses an array with callback function until it finds value and then returns the shallow index of that value. The callback function compares the two values returns true if they match and false if they do not
    //     protected function custom_arr_find($arr, $value, $callback)
    //     {
    //         foreach ($arr as $index => $arr_item) {

    //             if ($callback($arr_item, $value) === true) {
    //                 return $index;
    //             };
    //         }
    //         return -1;
    //     }


    //     # TODO: See what can be done about this 
    //     function __get($name)
    //     {
    //         if ($name !== 'total') {
    //             print "No such property!<br>";
    //             return;
    //         }

    //         if (count($this->student_db) == 0) {
    //             print "The classroom is empty.<br>";
    //             return;
    //         }

    //         print "There is " . count($this->student_db) . ' students in this classroom.<br>';
    //     }

    //     function __set($name, $value)
    //     {
    //         print "Operation not permitted!<br>";

    //         return false;
    //     }
    // }

    // $room1 = new Classroom();
    // $room1->add_student(['id' => 132, 'name' => 'Sam', 'age' => 17, 'debt' => false]);
    // $room1->add_student(['id' => 3333, 'name' => 'Sam']);
    // $room1->show_student(132);


    // 
    ?>