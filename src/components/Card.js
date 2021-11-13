import React from 'react'

const Card = ({ formValue, datee}) => {
    return (
            <div>
                <div className="col">
                    <div className="card-body p-9">
                        <div className="fs-2 fw-bolder text-dark">{formValue.firstName} {formValue.lastName}</div>
                        <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{formValue.email} {formValue.phone}</p>
                        <div className="d-flex flex-wrap mb-4">
                            <div className="border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div className="fs-6 text-gray-800 fw-bolder">{datee.date}</div> 
                                <div className="fw-bold text-gray-400">Date</div>
                            </div>
                            <div className="border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div className="fs-6 text-gray-800 fw-bolder">{datee.time}</div>
                                <div className="fw-bold text-gray-400">Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card
