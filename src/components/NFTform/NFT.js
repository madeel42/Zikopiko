import React, { useContext, useState, useEffect } from "react";
import classes from "./form.module.css";
import { mintNFT, minttoMarketNFT } from "../../store/writeHelpers";
import { globalContext } from '../../context/GlobalState';

// import { Form, Input, InputNumber, Button, message } from "antd";
import { Form } from 'react-bootstrap';
// import { STATES } from "mongoose";
// const layout = {
//     labelCol: {
//         span: 5,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// };
// const validateMessages = {
//     required: "${label} is required!",
//     types: {
//         email: "${label} is not validate email!",
//         number: "${label} is not a validate number!",
//     },
//     number: {
//         range: "${label} must be between ${min} and ${max}",
//     },
// };
// const key = "updatable";
const NFTForm = () => {
    const [{ web3, accounts, nftContract, nftList }, dispatch] = useContext(globalContext)

    const [NFTValue, setNFTValue] = useState({
        name: "",
        description: "",
        catagory: '',
    });
    const [price, setproductPriceValue] = useState(null);
    const [SaveRes, setSaveRes] = useState('');
    // const [id, setid] = useState(null);
    const [imgUrl, setimgUrl] = useState('');
    const [nftId, setnftId] = useState('');
    const [uri, seturi] = useState('');
    const [cardImage, setcardImage] = useState();
    const handleValueChange = (e) => {
        setNFTValue({ ...NFTValue, [e.target.name]: e.target.value });
    };
    const dispatchData = (data) => {
        console.log(data, 'data')
        fetch("/postData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: formDAta,
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                if (res) {
                    setSaveRes(res.status)
                }
            });
    }
    // const handleValueChange1 = (e) => {
    //     setid(e.target.value);
    // };
    const handlePriceChange = (e) => {
        setproductPriceValue(e.target.value);
    };
    function handleChange(e) {
        setNFTValue({ ...NFTValue, catagory: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("in submit", price, accounts);
        let name = NFTValue.name;
        let description = NFTValue.description;
        let catagory = NFTValue.catagory;
        try {
            let response = await minttoMarketNFT(web3, nftContract, accounts, price, dispatch);
            if (response) {

                setnftId(response.events.nftCreated.returnValues._tokenId);
                seturi(response.events.nftCreated.returnValues._tokenUri);
                console.log("response afterminting", response);

                console.log("Id after Minting", response.events.nftCreated.returnValues._tokenId);
                let id = response.events.nftCreated.returnValues._tokenId
                setTimeout(() => {
                    return NFTValue.name === "" ||
                        NFTValue.description === "" || NFTValue.catagory === "" ||
                        response.events.nftCreated.returnValues._tokenId === null || price === null || imgUrl === ''
                        ? alert(` ${imgUrl.length !== 0 ? "fill required field" : 'uploading img save again...'}`)
                        :
                        // };
                        dispatchData({
                            name,
                            description,
                            imgUrl,
                            id,
                            catagory,
                            price
                        });
                }, 1000);
            }
        } catch (error) {
            console.log("error in create nft", error);
        }


        console.log("States of Tokens", nftId, uri);



        //   console.log("imgUrl",uri)
        // e.preventDefault();
        // message.loading({ content: "creating...", key });



    };
    const NAME_OF_UPLOAD_PRESET = "dya03eiu";
    const handleImageChange = async (e) => {
        console.log(e.target.files[0]);
        setcardImage(e.target.files[0]);

        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/ecomerenceapp/image/upload`,
            {
                method: "POST",
                body: data
            }
        );
        const img = await res.json();
        console.log(img);
        let ImageLink = img.url
        setimgUrl(ImageLink);
    };


    console.log(NFTValue);
    // console.log(id);
    return (
        <div>
            {/* {RedirectCom()}{" "} */}
            <div className={classes.formNavDiv}>
                <h1 className={classes.heading}>NFT Form</h1>
                <div> <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: '20px', color: '#fff' }}></i></div>
            </div>
            <div className={classes.formWholeDiv}>
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{SaveRes.length > 0 ? SaveRes : ''}</h4>
                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="exampleInputName1">Name</label>
                                    <Form.Control type="text" className="form-control" name="name"
                                        value={NFTValue.name}
                                        onChange={handleValueChange} id="exampleInputName1" placeholder="Name" />
                                </Form.Group>
                                {/* <Form.Group>
                                    <label htmlFor="exampleInputName1">id</label>
                                    <Form.Control type="number" className="form-control" name='id' value={id} required onChange={handleValueChange1} placeholder="id" />
                                </Form.Group> */}
                                <Form.Group>
                                    <label>Price</label>
                                    <Form.Control type="number" className="form-control" value={price} onChange={handlePriceChange} name='price' placeholder="price" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleSelectGender">Catagory</label>
                                    <select className="form-control" id="exampleSelectGender" onChange={handleChange}>
                                        <option>select catagory</option>
                                        <option value={'nft'}>nft</option>
                                        <option value={'eth'}>Eth</option>
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label>File upload</label>
                                    <div className="custom-file">
                                        <Form.Control type="file" onChange={handleImageChange} className="form-control visibility-hidden" id="customFileLang" lang="es" />
                                        <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleTextarea1">Description</label>
                                    <textarea className="form-control" value={NFTValue.description}
                                        name="description"
                                        onChange={handleValueChange} id="exampleTextarea1" rows="4"></textarea>
                                </Form.Group>

                                <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3 mr-2">Submit</button>
                                {/* <button className="btn btn-dark">Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>
                {/* <Form
                    {...layout}
                    name="nest-messages"
                    // onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            name="name"
                            value={NFTValue.name}
                            onChange={handleValueChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        name={["id", "id"]}
                        label="id"
                        rules={[
                            {
                                type: "number",
                                min: 0,
                                required: true,
                                // max: 99,
                            },
                        ]}
                    >
                        <InputNumber value={id} required onChange={handleValueChange1} />
                    </Form.Item>
                    <Form.Item name={["user", "description"]} label="Description">
                        <Input.TextArea
                            value={NFTValue.description}
                            name="description"
                            onChange={handleValueChange}
                            required
                            rows="10" cols="10"
                        />
                    </Form.Item>
                    <Form.Item label="Upload Picture">
                        <input type="file" onChange={handleImageChange} required />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                        <Button type="primary" htmlType="save" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Form.Item>
                </Form> */}
            </div>
        </div>
    );
};

export default NFTForm;
