"use client";

import React from 'react'
import scss from "./PostData.module.scss"
import {SubmitHandler, useForm} from "react-hook-form"
import {usePostDataMutation} from '@/redux/api/data';
import { toast } from 'react-toastify';

interface IData {
    _id: number
    img: string;
    name: string;
    price: string;
    sneakerType: string;
}

const PostData = () => {
    const [postData] = usePostDataMutation();
    const {register, handleSubmit} = useForm<IData>()
    const onSumbit: SubmitHandler<IData> = async (data) => {
        try {
            const response = await postData(data);
            console.log(response);
    
            toast.success('Данные успешно добавлены!', {
                position: 'top-right',
                autoClose: 3000, 
            });
        } catch (error) {
            console.log(error);
    
            toast.error('Произошла ошибка при добавлении данных!', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    }

    return (
        <section className={scss.Post}>
            <div className="container">
            <div className={scss.content}>
                <form onSubmit={handleSubmit(onSumbit)}>
                    <input type="text" placeholder='print img' {...register('img', {required: true})}/>
                    <input type="text" placeholder='print name' {...register('name', {required: true})}/>
                    <input type="text" placeholder='print price' {...register('price', {required: true})}/>
                    <input type="text" placeholder='print type' {...register('sneakerType', {required: true})}/>
                    <button>Add data</button>
                </form>
            </div>
            </div>
        </section>
      )
    }

export default PostData