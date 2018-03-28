let UserFactory = function () {
  const user = {};

  let getUser = function () {
    return user;
  };

  let isSignedIn = function () {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
