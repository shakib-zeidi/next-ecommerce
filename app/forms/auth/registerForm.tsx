import { Form, FormikProps, withFormik } from "formik";
import Input from "../../components/shared/form/input";
import * as yup from "yup";

interface RegisterFormValues {
	name: string;
	email: string;
	password: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
	return (
		<>
			<Form className="space-y-6">
				<div>
					<Input name="name" label="Full Name" />
				</div>

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
						Register
					</button>
				</div>
			</Form>
		</>
	);
};

interface RegisterFormProps {}

const registerFormValidationSchema = yup.object().shape({
	name: yup.string().required().min(4),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
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
