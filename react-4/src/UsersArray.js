import { useRef, useState } from 'react';

function UsersArray({ usersArray, setUsersArray }) {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  function handleEditUser(index) {
    const editedUser = usersArray[index];

    setName(editedUser.name);
    setEmail(editedUser.email);

    const isConfirmed = window.confirm('Do you want to edit this user?');

    if (isConfirmed) {
      const updatedUser = { ...editedUser, name, email };

      const updatedUsersArray = [...usersArray];
      updatedUsersArray[index] = updatedUser;
      setUsersArray(updatedUsersArray);
    }
  }

  function handleDeleteUser(index) {
        const updatedUsersArray = usersArray.filter((_, i) => i !== index);
        setUsersArray(updatedUsersArray);
  }

  function handleAddUser() {
    const newUserObj = { name, email };
    setUsersArray([...usersArray, newUserObj]);
    setName('');
    setEmail('');
  }

  return (
    <div>
      <ul>
        {usersArray.map((item, index) => (
          <div key={index}>
            <b>{item.name}</b>
            <span>{item.email}</span>
            <button onClick={() => handleEditUser(index)}>Edit</button>
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </div>
        ))}
      </ul>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Name:"
          value={name}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Email:"
          value={email}
          onChange={handleInputChange}
          required
        />

        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default UsersArray;
