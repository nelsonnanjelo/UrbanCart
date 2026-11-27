

function Contact() {
    return (
        <div className="bg-light">

            {/* Contact Hero */}
            <section className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Get In Touch</h1>
                    <p className="lead mb-0">
                        Have a question, suggestion or need assistance?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Information and Form */}
            <section className="container py-5">
                <div className="row g-4">

                    {/* Contact Details */}
                    <div className="col-md-5">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body p-4">
                                <h2 className="h3 mb-3">Contact Information</h2>

                                <p className="text-muted mb-4">
                                    Reach out to us through any of the following
                                    channels. Our team is always happy to assist you.
                                </p>

                                <div className="d-flex gap-3 mb-4">
                                    <span className="fs-3">📧</span>
                                    <div>
                                        <h3 className="h6 fw-bold">Email Address</h3>
                                        <p className="text-muted mb-0">
                                            support@urbancart.com
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 mb-4">
                                    <span className="fs-3">📞</span>
                                    <div>
                                        <h3 className="h6 fw-bold">Phone Number</h3>
                                        <p className="text-muted mb-0">
                                            +254 700 000 000
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 mb-4">
                                    <span className="fs-3">📍</span>
                                    <div>
                                        <h3 className="h6 fw-bold">Our Location</h3>
                                        <p className="text-muted mb-0">
                                            Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <span className="fs-3">🕒</span>
                                    <div>
                                        <h3 className="h6 fw-bold">Business Hours</h3>
                                        <p className="text-muted mb-0">
                                            Monday - Saturday: 8:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body p-4">
                                <h2 className="h3 mb-3">Send Us a Message</h2>

                                <p className="text-muted">
                                    Fill in the form below and we'll get back to you.
                                </p>

                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="What is your message about?"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Write your message here..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Customer Information Table */}
            <section className="container py-4">
                <h2 className="text-center mb-4">Customer Information</h2>

                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover align-middle mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>John Kamau</td>
                                        <td>john@gmail.com</td>
                                        <td>0712345678</td>
                                        <td>
                                            <span className="badge bg-success">Paid</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Mary Wanjiku</td>
                                        <td>mary@gmail.com</td>
                                        <td>0723456789</td>
                                        <td>
                                            <span className="badge bg-warning text-dark">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Peter Otieno</td>
                                        <td>peter@gmail.com</td>
                                        <td>0734567890</td>
                                        <td>
                                            <span className="badge bg-success">Paid</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Grace Achieng</td>
                                        <td>grace@gmail.com</td>
                                        <td>0745678901</td>
                                        <td>
                                            <span className="badge bg-danger">Unpaid</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Support */}
            <section className="container text-center py-5">
                <div className="bg-white rounded shadow-sm p-4">
                    <h2 className="h3 mb-3">We're Here to Help!</h2>
                    <p className="text-muted mb-0">
                        Whether you need help placing an order, tracking a delivery,
                        making a payment or understanding our products, UrbanCart
                        is ready to assist you.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <h2 className="h4 fw-bold">UrbanCart</h2>
                <p className="text-white-50">Your Everyday Shopping Destination.</p>
                <p className="small text-white-50 mb-0">
                    © 2026 UrbanCart. All Rights Reserved.
                </p>
            </footer>

        </div>
    );
}

export default Contact;