"use client";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {useUserLogoutMutation} from "@/app/GlobalRedux/Auth/AuthAction";
import {useEffect} from "react";
import {toast} from "react-toastify";

export default function Navbar() {
    //initial route
    const router = useRouter()
    // initial auth data
    const auth = useSelector(state => state.auth);
    //logout mutation action
    const [userLogout, {data, isLoading, isSuccess, isError}] = useUserLogoutMutation()

    //drop down data
    const items = [
        {
            key: '1',
            label: (
                <Link rel="noopener noreferrer" href="/user">
                    Preference
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <button onClick={()=>onLogout()} rel="noopener noreferrer" >
                    Logout
                </button>
            ),
        },
    ];
    //isloading useeffect
    useEffect(() => {
        if(isSuccess){
            toast.success('Logout successfully');
            router.push('/')
        }
        if(isError){
            toast.error('Please try with proper way.')
        }
    }, [isLoading]);

    //handle logout action
    const onLogout = async () => {
        userLogout()
    };
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium">
                            <span className="text-teal-500">News Aggregator</span>
                        </h1>
                    </Link>
                    <div className="flex justify-between items-center gap-3">
                        {auth?.token ?
                            <Dropdown
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {auth?.name}
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            :
                            <>
                                <Link className="border rounded p-2" href="/signin">Sign In</Link>
                                <Link className="border rounded p-2" href="/signup">Sign up</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
