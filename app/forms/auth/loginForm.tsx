import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterFace } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";

const loginFormValidationSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

interface LoginFormProps {} 

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterFace>({
	mapPropsToValues: (props) => {
		return {
			email: "",
			password:  "",
		};
	},
	validationSchema: loginFormValidationSchema,
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerLoginForm);

export default LoginForm;
