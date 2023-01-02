import { defineRule } from "vee-validate";
defineRule("redberry_email", (value) => {
  const emailIsValid = value.trim().includes("@redberry.ge");
  if (!emailIsValid) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
defineRule("check_value", (value) => {
  if (value !== null) {
    return true;
  }
  return "სავალდებულოა";
});
