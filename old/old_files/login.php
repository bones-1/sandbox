<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Login</title>
  <style>
    :root {
      box-sizing: border-box;
    }

    body, h1 {
      margin: 0;
      background-color: rgb(111, 111, 111);
    }

    h1 {
      background-color: lightgray;
      margin: 0;
      padding-left: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px auto 0;
      width: 400px;
      height: 200px;
      background-color: navajowhite;
      row-gap: 15px;
    }

    .field-name {
      display: block;
      direction: rtl;
      font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    #username, #password, .field-name{
      width: 200px;
    }

    #username, #password {
      box-sizing: border-box;
    }

    #submit-button {
      display: block;
      border-radius: 0;
      border: unset;
      height: 30px;
      width: 50px;
    }
  </style>
</head>

<body>
  <h1>User Login</h1>
  <form action="authenticate.php" method="post">
    <label for="username">
      <span class="field-name">Name </span><input type="text" id="username" name="username" maxlength="100" />
    </label>
    <label for="password"><span class="field-name">Password </span><input type="password" id="password" name="password" maxlength="30" />
    </label>
    <button type="submit" id="submit-button">Login</button>
  </form>
</body>

</html>