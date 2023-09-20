"use client";
import "react-toastify/dist/ReactToastify.css";
import {useEffect, useState} from "react";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from 'next/navigation';
import {Button, Form, Input, Select} from "antd";
import {ColorRing} from "react-loader-spinner";
import {useUserUpdatePreferenceMutation} from "@/app/GlobalRedux/Auth/AuthAction";
import Loader from "@/app/components/Loader";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
export default function DashboardPage() {
    const router = useRouter()
    const auth =  useSelector(state=>state.auth)
    const[author, setAuthor] = useState([]);
    const[category, setCategory] = useState([]);
    const[source, setSource] = useState([]);
    const [formProcess, setFormProcess] = useState(false);
    const [categorySelectedItems, setCategorySelectedItems] = useState([]);
    const [sourceSelectedItems, setSourceSelectedItems] = useState([]);
    const [authorSelectedItems, setAuthorSelectedItems] = useState([]);
    const [userUpdatePreference, {data, isLoading, isError, isSuccess, error}] =
        useUserUpdatePreferenceMutation();
    useEffect(() => {
        handleUserPreference();
    }, []);

    useEffect(() => {
        if(isSuccess){
            toast.success('Your Preference data updated successfully');
            setFormProcess(false)
            console.log('auth :', auth)
        }
        if(isError){
            toast.error('Please try with proper way.')
        }
    }, [isLoading]);

    const handleUserPreference = async ()=>{
        if(!auth?.token){
            router.push('/signin')
        }
        let data = await secureLocalStorage.getItem('NewsData');
        setAuthor(data?.author);
        setCategory(data?.categories);
        setSource(data?.source);
    }

    const onFinish = (values) => {
        setFormProcess(true)
        userUpdatePreference(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log('auth :', auth)
    // console.log('JSON.parse(auth?.fav_author) :', JSON.parse(auth?.fav_author))
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-1 h-[100vh]">
            {isLoading ? <Loader /> : null}
            <div className="">
                <h1 className="my-6">Preference</h1>
                <Form
                    name="basic"
                    className='w-full'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name='fav_category'
                        label='category'
                        initialValue={auth?.fav_category ? JSON.parse(auth?.fav_category):''}
                        rules={[{ required: true, message: 'Please category!' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Category"
                            value={categorySelectedItems}
                            onChange={setCategorySelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(category).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item
                        name='fav_source'
                        label='Source'
                        initialValue={auth?.fav_source ? JSON.parse(auth?.fav_source):''}
                        rules={[{ required: true, message: 'Please source!' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Source"
                            value={sourceSelectedItems}
                            onChange={setSourceSelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(source).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item
                        name='fav_author'
                        label='Author'
                        initialValue={auth?.fav_author ? JSON.parse(auth?.fav_author):''}
                        rules={[{ required: true, message: 'Please author!' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Author"
                            value={authorSelectedItems}
                            onChange={setAuthorSelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(author).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </Form.Item>

                    <Form.Item >
                        <Button  className="bg-black hover:bg-teal-700 focus:bg-teal-700 mt-4" type="primary" htmlType="submit" disabled={formProcess}>
                            {formProcess ? (
                                <div className="flex items-center justify-center">
                                    <span>Processing</span>
                                    <ColorRing visible={true} height="25" width="25" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["#000", "#000", "#000", "#000", "#000"]} />
                                </div>
                            ) : (
                                "Update"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
