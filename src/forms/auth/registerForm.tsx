import Input from "@/components/shared/forms/input";
import { Form, FormikProps, withFormik } from "formik";

interface RegisterFormValues {
	name: string;
	email: string;
	password: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
	return (
		<Form className="space-y-6">
			<Input name="name" label="نام و نام خانوادگی" />
			<Input name="email" label="آدرس ایمیل" type="email" />
			<Input name="password" label="رمز عبور" type="password" />

			<div>
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					ساخت حساب کاربری
				</button>
			</div>
		</Form>
	);
};

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
	mapPropsToValues: (props) => {
		return {
			name: "",
			email: "",
			password: "",
		};
	},
	handleSubmit: (values) => console.log(values),
})(InnerRegisterForm);

export default RegisterForm;
