import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
	name: string;
    label: string;
	type?: string;
	inputClassName?: string;
    labelClassName?: string;
	errorClassName?: string;
}

const Input: FC<InputProps> = ({
	name,
    label,
	type = "text",
	inputClassName,
    labelClassName,
	errorClassName,
}) => {
	return (
		<div>
			<label
				htmlFor={name}
				className={`block text-sm/6 font-medium text-gray-900 ${labelClassName ?? ""}`}
			>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				type={type}
				className={`mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
					inputClassName ?? ""
				}`}
			/>
			<ErrorMessage
				name={name}
				className={`text-red-500 text-sm ${errorClassName ?? ""}`}
				component="div"
			/>
		</div>
	);
};

export default Input;
