import { useState } from 'react';
import Input from './components/Input';
import Button from "./components/Button";
import Spinner from "./components/Spinner";
import { Link } from "react-router-dom";

const Form = () => {
    const [submitting, setSubmitting] = useState(false);

    const [datee, setDate] = useState({
        date: '',
        time: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setDate({
            date: '1/1/2021',
            time: '12pm'
        });
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });



    let changeValue = (event) => {
      const {value, name} = event.target;

      setFormValue({
          ...formValue,
          [name]: value
      })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Event Registration</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                            Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                            and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                            plugins.
                        </p>
                        {submitting &&<Spinner />}
                    </div>
                </div>
            </div>

             {/* form component */}
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="col-md-6">
                            <label htmlFor="firstname" className="form-label">Firstname</label>
                            <Input type="text" className="form-control" id="firstname" name="firstName" onChange={changeValue} value={formValue.firstName}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastname" className="form-label">Lastname</label>
                            <Input type="text" className="form-control" id="lastname" name="lastName" onChange={changeValue} value={formValue.lastName}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Input type="email" className="form-control" id="email" name="email" onChange={changeValue} value={formValue.email}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Input type="tel" className="form-control" id="inputAddress" name="phone" onChange={changeValue} value={formValue.phone}/>
                        </div>

                        <div className="col-12">
                            <Link to="/card">
                                <Button type="submit" className="btn btn-primary">Save</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
    
}

export default Form
