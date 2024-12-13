import { EMAIL_VALIDATION_REGEX } from "../constants";

// email validation
export const validateEmail = (value) => {
  return EMAIL_VALIDATION_REGEX.test(value);
};

// handle upload user's avatar
export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result.toString());
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};
