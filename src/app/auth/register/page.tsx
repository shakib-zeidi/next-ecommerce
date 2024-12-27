"use client";

import RegisterForm from "@/forms/auth/registerForm";
import { NextPage } from "next";
import Image from "next/image";

const RegisterPage: NextPage = () => {
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-xl">
					<Image
						alt="Your Company"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
						width={10}
						height={10}
					/>
					<h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
						ساخت سایت فروشگاهی آماده برای شروع فروش آنلاین
					</h2>
					<p className="text-gray-500 text-center mt-5">با چند کلیک ساده، سایت فروشگاهی شما آماده‌ست.</p>
				</div>

				<div className="w-full max-w-xl container mx-auto mt-10 px-4 sm:px-6">
					<RegisterForm />
				</div>
			</div>
		</>
	);
};

export default RegisterPage;
