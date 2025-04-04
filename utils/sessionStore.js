const users = new Map();

function createUser(username, passwordHash) {
  if (users.has(username)) {
    throw new Error('Пользователь уже существует');
  }
  
  const user = {
    id: Date.now().toString(),
    username,
    passwordHash,
    createdAt: new Date()
  };
  
  users.set(username, user);
  return user;
}

function findUserByUsername(username) {
  return users.get(username) || null;
}

function findUserById(userId) {
  for (const [_, user] of users) {
    if (user.id === userId) {
      return user;
    }
  }
  return null;
}

module.exports = {
  createUser,
  findUserByUsername,
  findUserById
};