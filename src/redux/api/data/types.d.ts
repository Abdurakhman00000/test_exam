/* eslint-disable @typescript-eslint/no-unused-vars */
namespace DATA {
    type GetDataResponse = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }[]

    type GetDataRequest = void;


    type PostDataResponse = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }

    type PostDataRequest = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }


    type PutDataResponse = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }

    type PutDataRequest = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }


    type DeleteDataResponse = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }

    type DeleteDataRequest = {
        _id: number;
        img: string;
        name: string;
        price: string;
        sneakerType: string;
    }
}