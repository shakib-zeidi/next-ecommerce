import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterFace } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";


const registerFormValidationSchema = yup.object().shape({
	name: yup.string().required().min(4),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterFace>({
	mapPropsToValues: (props) => {
		return {
			name: "",
			email: "",
			password: "",
		};
	},
	validationSchema: registerFormValidationSchema,
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerRegisterForm);

export default RegisterForm;
