import InnerLoginForm from "@/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/contracts/auth";
import ValidationError from "@/exceptions/validationError";
import callApi from "@/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";

const loginFormValidationSchema = yup.object().shape({
    name: yup.string().required('لطفا آدرس فروشگاه را وارد کنید'),
    email: yup
        .string()
        .required("لطفا ایمیل را وارد کنید")
        .email("ایمیل صحیح نیست"),
    password: yup.string().required("لطفا رمز عبور را وارد کنید"),
});

interface LoginFormProps {
    setCookie: any;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: (props) => ({
        name: "",
        email: "",
        password: "",
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        console.log(values);
        // try {
        //     const res = await callApi().post("/auth/login", values);
        //     if (res.status === 200) {
        //         props.setCookie("user-token", res.data.token, {
        //             maxAge: 3600 * 24 * 30,
        //             domain: "localhost", // در نهایت دامین خودمون رو قرار میدیم
        //             path: "/",
        //             sameSite: "lax",
        //         });
        //     }
        // } catch (error) {
        //     if (error instanceof ValidationError) {
        //         Object.entries(error.messages).forEach(([key, value]) =>
        //             setFieldError(key, value as string)
        //         );
        //     }

        //     console.log(error);
        // }
    },
})(InnerLoginForm);

export default LoginForm;
