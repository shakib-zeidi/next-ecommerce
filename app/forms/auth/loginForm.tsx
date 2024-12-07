import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import { withFormik } from "formik";
import * as yup from "yup";

const LoginFormValidationSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

interface LoginFormProps {}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
	mapPropsToValues: (props) => ({ email: "", password: "" }),
	validationSchema: LoginFormValidationSchema,
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerLoginForm);

export default LoginForm;
