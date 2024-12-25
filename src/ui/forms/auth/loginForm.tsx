import Input from "@/components/shared/forms/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";

interface LoginFormValues {
	email: string;
	password: string;
}

const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {
	return (
		<Form className="space-y-6">
			<Input name="email" label="آدرس ایمیل" type="email" />
			<Input name="password" label="رمز عبور" type="password" />
			<div>
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					ورود
				</button>
			</div>
		</Form>
	);
};

interface LoginFormProps {}

const loginFormValidationSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
	mapPropsToValues: (props) => ({
		email: "",
		password: "",
	}),
	validationSchema: loginFormValidationSchema,
	handleSubmit: (values) => console.log(values),
})(InnerLoginForm);

export default LoginForm;