import InnerLoginForm from "@/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/contracts/auth";
import ValidationError from "@/exceptions/validationError";
import callApi from "@/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required('این فیلد الزامی است').email('فرمت وارد شده اشتباه می باشد'),
    password: yup.string().required('این فیلد الزامی است').min(8, 'رمز عبور نباید از 8 کاراکتر کمتر باشد'),
});

interface LoginFormProps {
    setCookie: any;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: (props) => ({
        email: "",
        password: "",
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post("/auth/login", values);
            if (res.status === 200) {
                props.setCookie("user-token", res.data.token, {
                    maxAge: 3600 * 24 * 30,
                    domain: "localhost", // در نهایت دامین خودمون رو قرار میدیم
                    path: "/",
                    sameSite: "lax",
                });
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.messages).forEach(([key, value]) =>
                    setFieldError(key, value as string)
                );
            }

            console.log(error);
        }
    },
})(InnerLoginForm);

export default LoginForm;
