export const getUsers = () => {
  const users = localStorage.getItem('usuariosLavadoras');
  return users ? JSON.parse(users) : [];
};

export const registerUser = (userData) => {
  const users = getUsers();
  // Validar si el email ya existe
  const exists = users.find(u => u.email === userData.email);
  if (exists) {
    throw new Error('El correo electrónico ya está registrado.');
  }

  const newUser = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('usuariosLavadoras', JSON.stringify(users));
  return newUser;
};

export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Credenciales incorrectas.');
  }
  return user;
};
