import { RegisterFormValuesInterface } from "@/contracts/auth";
import { Form, FormikProps } from "formik";
import Input from "../shared/forms/input";
import Link from "next/link";

const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
	return (
		<Form>
			<div className="flex flex-wrap mb-6">
				<div className="w-full">
					<Input
						name="name"
						label="نام فروشگاه (به انگلیسی)"
						placeholder="با حروف انگلیسی بنویسید"
						dir="ltr"
					/>
					<div className="flex flex-col gap-3 mt-5">
						<div className="flex justify-between font-bold text-sm md:text-base">
							<p>آدرس موقت فروشگاه شما : </p>
							<p>testshop75.sazito.com</p>
						</div>
						<p className="text-sm text-gray-500">
							این آدرس اینترنتی موقت فروشگاه شماست بعد از ایجاد
							فروشگاه و تکمیل آن دامنه دلخواه خودتان را متصل کنید.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap mb-6">
				<div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
					<Input name="email" label="ایمیل" type="email" dir="ltr" />
				</div>
				<div className="w-full md:w-1/2 px-2">
					<Input
						name="phone"
						label="شماره همراه"
						type="text"
						dir="ltr"
					/>
				</div>
			</div>

			<div className="flex flex-wrap mb-6">
				<div className="w-full">
					<Input
						name="password"
						label="رمز عبور"
						type="password"
						dir="ltr"
					/>
				</div>
			</div>
			<div className="flex flex-wrap mb-6">
				<button
					type="submit"
					className="bg-indigo-600 hover:bg-indigo-500 transition text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline w-full">
					ایجاد رایگان فروشگاه
				</button>
			</div>
			<div className="flex flex-wrap justify-center mb-6">
				<p className="text-gray-500">
					قبلا سایت ساخته اید؟{" "}
					<Link
						className="text-gray-700 hover:text-indigo-500 transition"
						href="/auth/login">
						وارد شوید
					</Link>
				</p>
			</div>
		</Form>
	);
};

export default InnerRegisterForm;
