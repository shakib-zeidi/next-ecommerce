import { Form, FormikProps, withFormik } from "formik";
import Input from "../../components/shared/form/input";
import * as yup from "yup";

interface LoginFormValues {
	email: string;
	password: string;
}

const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {
	return (
		<>
			<Form className="space-y-6">
				<div>
					<Input name="email" type="email" label="Email Address" />
				</div>

				<div>
					<Input name="password" type="password" label="Password" />
				</div>

				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Login
					</button>
				</div>
			</Form>
		</>
	);
};

interface LoginFormProps {
	email?: string;
	password?: string;
}

const loginFormValidationSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
	mapPropsToValues: (props) => {
		return {
			email: props.email ?? "",
			password: props.password ?? "",
		};
	},
	validationSchema: loginFormValidationSchema,
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerLoginForm);

export default LoginForm;
