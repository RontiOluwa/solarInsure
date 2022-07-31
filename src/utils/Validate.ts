/* eslint-disable no-useless-escape */

const Validate = (value: string) => {
  // Check if value is empty
  const empty = () => {
    if (value === undefined || value === "") {
      return false;
    } else {
      return true;
    }
  };

  // Validate if value is an email
  const isEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  //   Validate Password
  const validatePassword = () => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (value.length < 5) {
      return {
        status: false,
        mssg: "Password Length should be more than 5",
      };
    } else if (specialChars.test(value) !== true) {
      return {
        status: false,
        mssg: "Password Must Contain a Strange Character",
      };
    } else {
      return {
        status: true,
        mssg: "",
      };
    }
  };

  return { empty, isEmail, validatePassword };
};

export default Validate;
