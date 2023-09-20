"use client";
import { Button, Checkbox, Form, Input } from 'antd';
import {useUserLoginMutation} from "@/app/GlobalRedux/Auth/AuthAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useEffect, useState} from "react";
import {ColorRing} from "react-loader-spinner";
import Loader from "@/app/components/Loader";
import { useRouter } from 'next/navigation';
import {useSelector} from "react-redux";
export default function SingUpPage() {
    const router = useRouter()
    const auth = useSelector(state =>state.auth);
    const [userLogin,{data, isLoading, isSuccess, isError, error}] = useUserLoginMutation();
    const [formProcess, setFormProcess] = useState(false);

    useEffect(()=>{
        if(auth?.token){
            router.push('/user')
        }
    },[])

    useEffect(() => {
        if(isSuccess){
            toast.success('Welcome to our news aggregator.');
            router.push('/user')
        }
        if(isError){
            toast.error('Please try with proper credential.')
            setFormProcess(false)
        }
    }, [isLoading]);
    const onFinish = (values) => {
        setFormProcess(true)
        console.log('Success:', values);
        userLogin(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-1 h-[450px]">
            {isLoading ? <Loader /> : null}
            <div></div>
            <div className="flex flex-wrap justify-items-center items-center my-10">
                <Form
                    name="basic"
                    className='w-full'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type:"email",
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                len:6,
                                max:20,
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item >
                        <Button  className="bg-black hover:bg-teal-700 focus:bg-teal-700 mt-4" type="primary" htmlType="submit" disabled={formProcess}>
                            {formProcess ? (
                                <div className="flex items-center justify-center">
                                    <span>Processing</span>
                                    <ColorRing visible={true} height="25" width="25" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["#000", "#000", "#000", "#000", "#000"]} />
                                </div>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
