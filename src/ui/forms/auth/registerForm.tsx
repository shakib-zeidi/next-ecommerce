import InnerRegisterForm from "@/components/auth/innerRegsiterForm";
import { RegisterFormValuesInterface } from "@/contracts/auth";
import callApi from "@/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

const registerFormValidationSchema = yup.object().shape({
	name: yup.string().required().min(4),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
	{
		mapPropsToValues: (props) => ({
			name: "",
			email: "",
			password: "",
		}),
		validationSchema: registerFormValidationSchema,
		handleSubmit: async (values) => {
			const res = await callApi().post("/auth/register", values);
			console.log(res);
		},
	}
)(InnerRegisterForm);

export default RegisterForm;
