import Input from "@/app/components/shared/forms/input";
import { Form, FormikProps, withFormik } from "formik";

interface RegisterFormValues {
	name: string;
	email: string;
	password: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
	return (
		<Form className="space-y-6">
			<div>
				<Input name="name" label="Name" />
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
	);
};

interface RegisterFormProps {
	name?: string;
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
	mapPropsToValues: (props) => {
		return {
			name: props.name ?? "",
			email: "",
			password: "",
		};
	},
	handleSubmit: (values) => {
		console.log(values);
	},
})(InnerRegisterForm);

export default RegisterForm;
