// src/Authentication/Storage/Session.js

export const startSession = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("userName", JSON.stringify(user.displayName));
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("accessToken", user.accessToken);
  }
  
  export const getSession = () => {
    return {
      email: sessionStorage.getItem("email"),
      accessToken: sessionStorage.getItem("accessToken"),
      user: sessionStorage.getItem("user"),
      userName: sessionStorage.getItem("userName")
    }
  }
  
  export const endSession = () => {
    sessionStorage.clear();
  }
  
  export const isLoggedIn = () => {
    return getSession().accessToken;
  }