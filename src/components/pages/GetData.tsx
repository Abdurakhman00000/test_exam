"use client";

import React, { useState } from 'react';
import scss from "./GetData.module.scss";
import { useDeleteDataMutation, useGetDataQuery, usePutDataMutation } from '@/redux/api/data';

const GetData = () => {
    const { data } = useGetDataQuery();
    const [putData] = usePutDataMutation();
    const [deleteData] = useDeleteDataMutation();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<any>(null);

    const deleteItem = async (_id: string) => {
        try {
            await deleteData(_id);
            console.log('Item deleted');
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = (item: any) => {
        setEditMode(true);
        setEditItem(item); 
    }

    const saveEdit = async () => {
        try {
            const { _id, ...updatedData } = editItem;
            const response = await putData({ _id, ...updatedData });
            console.log('Item updated:', response);
            setEditMode(false); 
            setEditItem(null); 
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <section className={scss.Get}>
            <h1>Данные</h1>
            <div className="container">
            <div className={scss.content}>
                {
                    data?.slice().reverse().map((item, index) => (
                        <div className={scss.card} key={index}>
                            {editMode && editItem?._id === item._id ? (
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editItem.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="price"
                                        value={editItem.price}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="sneakerType"
                                        value={editItem.sneakerType}
                                        onChange={handleChange}
                                    />
                                    <button onClick={saveEdit}>Save</button>
                                </div>
                            ) : (
                                <div className={scss.card_items}>
                                    {
                                        item.img ? (
                                            <img src={item.img} alt="" />
                                        ) : (
                                            <img src="https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" alt="" />
                                        )
                                    }
                                    <div className="container_for_des">
                                    <h3>{item.name}</h3>
                                    </div>
                                    <p>{item.price} сом</p>
                                    <p>{item.sneakerType}</p>
                                    <button onClick={() => deleteItem(item._id)}>Delete</button>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            </div>
        </section>
    )
}

export default GetData;
