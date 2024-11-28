async function getUsers(names) {
  let users = names.map((person) =>
    fetch(`https://api.github.com/users/${person}`)
  );

  users = await Promise.all(users);

  users.forEach((user, index, arr) => {
    if(user.ok){
        arr[index] = user.json();
        return;
    }

    arr[index] = null;
  })

  return  Promise.all(users);
}