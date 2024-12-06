import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import { withFormik } from "formik";
import * as yup from "yup";

const RegisterFormValidationSchema = yup.object().shape({
	name: yup.string().required().min(4),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

interface RegisterFormProps {
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
	mapPropsToValues: (props) => ({ name: "", email: "", password: "" }),
	validationSchema: RegisterFormValidationSchema,
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerRegisterForm);

export default RegisterForm;
