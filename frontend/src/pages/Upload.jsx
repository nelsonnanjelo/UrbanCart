
import alertify from 'alertifyjs';

import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

alertify.set('notifier', 'position', 'top-center');

function Upload() {

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch('http://127.0.0.1:8000/upload/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        });

        const result = await response.json();

        alertify.success(result.message);

        e.target.reset();

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <h1 className="mb-4">Upload Product</h1>

                    <form action="" onSubmit={handleSubmit}>

                        {/* Product Name */}
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Product Name"
                                autoComplete="off"
                                minLength="2"
                                maxLength="100"
                                required
                            />
                            <label htmlFor="name">Product Name</label>
                        </div>

                        {/* Quantity */}
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                name="quantity"
                                placeholder="Quantity"
                                min="1"
                                max="10000"
                                step="1"
                                required
                            />
                            <label htmlFor="quantity">Quantity</label>
                        </div>

                        {/* Price */}
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Price"
                                min="0.01"
                                max="1000000"
                                step="0.01"
                                required
                            />
                            <label htmlFor="price">Price (KES)</label>
                        </div>

                        {/* Description */}
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Description"
                                minLength="10"
                                maxLength="500"
                                rows="4"
                                style={{ height: "120px" }}
                                required
                            ></textarea>
                            <label htmlFor="description">
                                Product Description
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Upload Product
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Upload;
