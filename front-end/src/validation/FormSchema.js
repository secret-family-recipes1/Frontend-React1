import * as yup from 'yup'

const FormSchema = yup.object().shape({
    email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Name is Required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is Required"),
})

export default FormSchema