/**
 * Returns user profile object from given if it contains username and email
 * @param  {Object} object - Object in which search will be carried out.
 * @return {Object} Will return a new object with the fields username and email or null.
 */
function getUserProfileFromObj(object) {
  if (typeof(object) === "object" && object != null) {
    if ((typeof object['username'] !== "undefined") && (typeof object['email'] !== "undefined")) {
      return {
        username: object.username,
        email: object.email,
      };
    }
  }
  return null;
}

function _test() {


  console.log(getUserProfileFromObj({
    id: 1,
    username: 'Vasya',
    email: 'user@mail.ru'
  }));



  console.log(getUserProfileFromObj({
    uwsername: 'Vasya',
    email: 'user@mail.ru'
  }));


  console.log(getUserProfileFromObj({
    qw: 1,
    uwsername: 'Vasya',
    email: 'user@mail.ru'
  }));


}
