import { Form, FormikProps } from "formik";
import Input from "../shared/forms/input";
import { LoginFormValuesInterface } from "@/contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
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

export default InnerLoginForm;
