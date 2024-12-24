"use client";

import { Field, Form, Formik } from "formik";
import { NextPage } from "next";

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
}

const RegisterPage: NextPage = () => {
	const initialValues: RegisterFormValues = {
        name: "",
        email: "",
        password: "",
    };

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						ساخت حساب کاربری
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => console.log(values)}
					>
						<Form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm/6 font-medium text-gray-900"
								>
									نام و نام خانوادگی
								</label>
								<div className="mt-2">
									<Field
										id="name"
										name="name"
										type="text"
										required
										autoComplete="name"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm/6 font-medium text-gray-900"
								>
									آدرس ایمیل
								</label>
								<div className="mt-2">
									<Field
										id="email"
										name="email"
										type="email"
										required
										dir="ltr"
										autoComplete="email"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm/6 font-medium text-gray-900"
									>
										رمز عبور
									</label>
								</div>
								<div className="mt-2">
									<Field
										id="password"
										name="password"
										type="password"
										required
										dir="ltr"
										autoComplete="current-password"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									ساخت حساب کاربری
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default RegisterPage;
