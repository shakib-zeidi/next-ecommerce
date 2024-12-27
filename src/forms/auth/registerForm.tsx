'use client';

import InnerRegisterForm from "@/components/auth/innerRegsiterForm";
import { RegisterFormValuesInterface } from "@/contracts/auth";
// import callApi from "@/helpers/callApi";
import { withFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required('لطفا نام فروشگاه خود را وارد کنید').min(3, 'نام باید حداقل 3 کاراکتر باشد'),
    email: yup.string().required('لطفا ایمیل را وارد کنید').email('ایمیل صحیح نیست'),
    phone: yup.string().required('لطفا شماره تلفن خود را وارد کنید'),
    password: yup.string().required('لطفا رمز عبور را وارد کنید').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps & { router: any }, RegisterFormValuesInterface>({
    mapPropsToValues: (props) => ({
        name: '',
        email: '',
        phone: '',
        password: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values, { props }) => {
        console.log(values);
        // const res = await callApi().post('/auth/register', values);

        // if (res.status === 201) {
        //     props.router.push('/auth/login');
        // }
    },
})(InnerRegisterForm);

export default function WrappedRegisterForm() {
    const router = useRouter();
    return <RegisterForm router={router} />;
}
