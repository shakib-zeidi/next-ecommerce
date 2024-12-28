import { Form, FormikProps } from "formik";
import Input from "../shared/forms/input";
import { LoginFormValuesInterface } from "@/contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <Input
                        name="name"
                        label="آدرس فروشگاه"
                        type="text"
                        placeholder="sazito.com."
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <Input name="email" label="ایمیل" type="email" dir="ltr" />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <Input
                        name="password"
                        label="رمز عبور"
                        type="password"
                        dir="ltr"
                    />
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex sm:flex-row sm:w-full sm:gap-3">
                <button
                    type="submit"
                    className="sm:p-5 flex w-full items-center justify-center rounded-md bg-indigo-600 py-4 text-sm/6 font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    ورود به مدیریت فروشگاه
                </button>
                <button
                    type="submit"
                    className="sm:p-5 flex items-center w-full justify-center rounded-md py-4 text-sm/6 font-semibold text-indigo-500 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    بازیابی رمز عبور
                </button>
            </div>
            <p className="text-center mt-5">
                هنوز فروشگاه ایجاد نکرده اید؟{" "}
                <a className="hover:text-indigo-500 transition" href="/auth/register">شروع کنید</a>
            </p>
        </Form>
    );
};

export default InnerLoginForm;
