import React, {  useState } from 'react'
import './Add.css'
const Add = () => {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: '',
        description: '',
        category: 'Salad',
        price: '',
    })
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {  
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('category', data.category)
        formData.append('price', Number(data.price))
        console.log(data)
    }
    
    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="Preview" className='image-preview'/>
                        ) : (
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                        )}
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows={6} placeholder='Write content here' required />

                </div>
                <div className="add-category-price ">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category" onChange={onChangeHandler} >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p> Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' />
                    </div>
                </div>
                
                <button type='submit' className='add-btn'>Add Product</button>
            </form>
        </div>
    )
}

export default Add