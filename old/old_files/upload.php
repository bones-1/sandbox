<?php
$tmp_file_name = $_FILES['image']['tmp_name'];
$file_name = basename($_FILES['image']['name']);

$fileinfo = finfo_open(FILEINFO_MIME_TYPE);

if (! str_starts_with(finfo_file($fileinfo, $tmp_file_name), 'image')) {
    echo "<em>Invalid file type!<em>";
    die();
}

if (! is_uploaded_file($tmp_file_name)) {
    echo "<em>Invalid file!<em>";
    die();
}

$upload_dir = './uploads';
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0760);
}
if (! move_uploaded_file($tmp_file_name, $upload_dir. '/' .$file_name)) {
    // throw new Error('File save unsuccessful');
    echo "<em>Move failed!<em>";
} else {
    chmod($upload_dir . '/' . $file_name, 0440);

    echo "<img src='$upload_dir/$file_name' alt='user uploaded image'>";
}

?>
