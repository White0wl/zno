export const roles = {
  user: 'user',
  admin: 'admin',
  teacher: 'teacher',
}
function getRoles(userToken) {
  // TODO: Реализовать запрос на сервер для получения ролей, по переданному токену
  return ['user'];
}

function getCurrentUserToken() {
  // TODO: Реализовать получение токена из куков
  // return '1234567890';
}

function hasRole(userToken, role) {
  if (!!userToken)
    userToken = getCurrentUserToken();
  return getRoles(userToken).some(userRole => userRole.toLowerCase() === role.toLowerCase());
}

function isUser(userToken) {
  return hasRole(userToken, roles.user);
}
function isTeacher(userToken) {
  return hasRole(userToken, roles.teacher);
}
function isAdmin(userToken) {
  return hasRole(userToken, roles.admin);
}


export const isAuthenticated = () => !!getCurrentUserToken();

export { getCurrentUserToken, isUser, isTeacher, isAdmin };