import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";
import { LoginFormValuesInterFace } from "../../contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterFace>) => {
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

export default InnerLoginForm;
