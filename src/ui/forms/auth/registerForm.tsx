'use client';

import InnerRegisterForm from "@/components/auth/innerRegsiterForm";
import { RegisterFormValuesInterface } from "@/contracts/auth";
import callApi from "@/helpers/callApi";
import { withFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps & { router: any }, RegisterFormValuesInterface>({
    mapPropsToValues: (props) => ({
        name: '',
        email: '',
        password: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values, { props }) => {
        const res = await callApi().post('/auth/register', values);

        if (res.status === 201) {
            props.router.push('/auth/login');
        }
    },
})(InnerRegisterForm);

export default function WrappedRegisterForm() {
    const router = useRouter();
    return <RegisterForm router={router} />;
}
