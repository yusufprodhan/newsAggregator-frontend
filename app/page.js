"use client";
import {useGetNewsListQuery} from "@/app/GlobalRedux/News/NewsAction";
import Loader from "@/app/components/Loader";
import {useEffect, useState,} from "react";
import { Select,Input,Pagination } from 'antd';
export default function Home() {
    const [pageNumber, setPageNumber] = useState(1)
    const [keywordSearch, setKeywordSearch] = useState([]);
    const [categorySelectedItems, setCategorySelectedItems] = useState([]);
    const [sourceSelectedItems, setSourceSelectedItems] = useState([]);
    const [authorSelectedItems, setAuthorSelectedItems] = useState([]);
    const [pageSize, setPageSize] = useState(20);
    const {refetch, data, isError, isLoading,isSuccess, error}
        = useGetNewsListQuery({query:`pageSize=${pageSize}&page=${pageNumber}&keyword=${keywordSearch}&category=${categorySelectedItems.join()}&source_name=${sourceSelectedItems.join()}&author=${authorSelectedItems.join()}`});
    useEffect(()=>{
      if(isError){
        console.log('errors', error);
      }
      if(isSuccess){
        // console.log('success', data);
        // console.log('success', Object.values(data?.data?.news?.links));
      }
    },[isLoading]);

    useEffect(()=>{
        refetch();
    },[pageNumber, keywordSearch, categorySelectedItems, sourceSelectedItems, authorSelectedItems])

    const onPageChange = (event) => {
        setPageNumber(event)
        console.log(event)
    };
    const handleKeyWordSearch =(event) =>{
        setKeywordSearch(event.target.value);
    }

    return (
    <div className="">
        {isLoading ? <Loader /> : null}
        {isSuccess &&
            <>
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h3 className="font-bold text-2xl text-center">
                        All Posts
                    </h3>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-1">
                    <div className="my-2">
                        <input className="border h-8 rounded" placeholder="type Key word" defaultValue={keywordSearch} autoFocus={true} onInput={(e)=>handleKeyWordSearch(e)} />
                    </div>
                    <div className="my-2">
                        <Select
                            mode="multiple"
                            placeholder="Categories"
                            value={categorySelectedItems}
                            onChange={setCategorySelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(data?.data?.categories).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </div>
                    <div className="my-2">
                        <Select
                            mode="multiple"
                            placeholder="Source"
                            value={sourceSelectedItems}
                            onChange={setSourceSelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(data?.data?.source).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </div>
                    <div className="my-2">
                        <Select
                            mode="multiple"
                            placeholder="Author"
                            value={authorSelectedItems}
                            onChange={setAuthorSelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={Object.values(data?.data?.author).map((item) => ({
                                value: item?.code,
                                label: item?.name,
                            }))}
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-1">
                    {Object.values(data?.data?.news?.data)?.length > 0 && Object.values(data?.data?.news?.data).map((item, index) =>
                        <div className="border rounded shadow-2xl" key={index}>
                            <img  src={item?.urlToImage?item?.urlToImage:'/no_image.jpg'} alt={item?.title} className="h-40 border-b w-full"/>
                            <div className="p-2 relative">
                                <span className="text-[11px]">{item?.author}</span>
                                <h3 className="font-bold text-sm">{item?.title}</h3>
                                <p className="text-[12px] my-3">{item?.description}</p>
                            </div>
                            <div className="p-2">
                                <p className="text-[11px]">{item?.source_name}</p>
                                <p className="text-[11px]">{item?.publishedAt}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-center items-center my-4">
                    <Pagination defaultCurrent={1} onChange={onPageChange} showSizeChanger={false} responsive={true} total={data?.data?.news?.total} />
                </div>

                {/*<div className="card">*/}
                {/*    <Paginator first={first} rows={rows} totalRecords={data?.data?.news?.total} onPageChange={onPageChange} />*/}
                {/*</div>*/}
            </>
        }
    </div>
  )
}
