<?php
require("./header2.php");
?>


<?php
class A
{
    private function operation1()
    {
        echo "operation1 called";
    }
    protected function operation2()
    {
        echo "operation2 called";
    }
    public function operation3()
    {
        echo "operation3 called";
    }
}
final class B extends A
{
    function __construct()
    {
        // $this->operation1();
        $this->operation2();
        $this->operation3();
    }
}



interface pupil
{
    public function get_student_name();
    public function set_student_name($name);
}

interface mentor
{
    public function get_teacher_name();
    public function set_teacher_name($name);
}

interface manager
{
    public function get_admin_name();
    public function set_admin_name($name);
}

class School implements pupil, mentor, manager
{
    protected $s_name = 'student';

    public function get_student_name()
    {
        echo "Student name: ". $this -> s_name."</br>";
    }

    public function set_student_name($name)
    {
        $this->s_name = $name;
    }

    protected $t_name = 'teacher';

    public function get_teacher_name()
    {
        echo "Teacher name: " . $this->s_name . "</br>";
    }

    public function set_teacher_name($name)
    {
        $this->t_name = $name;
    }

    protected $a_name = 'admin';

    public function get_admin_name()
    {
        echo "Admin name: " . $this->s_name . "</br>";
    }

    public function set_admin_name($name)
    {
        $this->a_name = $name;
    }
}

$uwi = new School();
$uwi ->set_student_name ("james");
$uwi->get_admin_name();



?>



<?php
require("./footer2.php");
?>