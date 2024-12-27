import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
	name: string;
	label: string;
	type?: string;
	dir?: string;
	placeholder?: string;
	inputClassName?: string;
	labelClassName?: string;
	errorClassName?: string;
}

const Input: FC<InputProps> = ({
	name,
	label,
	type = "text",
	dir,
	placeholder,
	inputClassName,
	labelClassName,
	errorClassName,
}) => {
	return (
		<>
			<label
				htmlFor={name}
				className={`block tracking-wide text-gray-600 text-sm md:text-base mb-5 ${
					labelClassName ?? ""
				}`}>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				type={type}
				dir={dir}
				placeholder={placeholder}
				className={`appearance-none block w-full text-gray-500 border border-gray-300 rounded py-3 px-4 mb-3 focus:outline-indigo-500 focus:bg-white ${
					inputClassName ?? ""
				}`}
			/>
			<ErrorMessage
				name={name}
				className={`text-red-500 text-sm ${errorClassName ?? ""}`}
				component="div"
			/>
		</>
	);
};

export default Input;
