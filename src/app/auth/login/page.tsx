"use client";

import LoginForm from "@/forms/auth/loginForm";
import { NextPage } from "next";
import { useCookies } from "react-cookie";

const LoginPage: NextPage = () => {
	const [cookies, setCookie] = useCookies(['user-token'])

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 mb-3 text-center text-xl/9 md:text-2xl/9 font-bold tracking-tight text-gray-900">
						ورود به مدیریت فروشگاه
					</h2>
					<p className="text-gray-500 text-sm md:text-base text-center">
						اطلاعات فروشگاه را برای ورود به صفحه مدیریت وارد کنید
					</p>
				</div>
				{/* w-full max-w-xl container mx-auto mt-10 px-4 sm:px-6 */}
				<div className="w-full max-w-xl container mx-auto mt-10 px-4 sm:px-6">
					<LoginForm setCookie={setCookie} />
				</div>
			</div>
		</>
	);
};

export default LoginPage;
