import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import {useLocation, useNavigate} from 'react-router-dom';
import {BsCheckLg} from "react-icons/bs"

const StudentAdmissionForm = () => {
    const printRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const studentDetails = location.state.studentDetails;
    
    return (
        <>
            <section className='studentAdmissionForm w-full flex justify-center items-center'>
                <div className="w-full mx-20">
                    <div ref={printRef} className="my-6 mx-5">
                        <div className="heading w-full flex justify-center items-center border-2 border-black">
                            <div className='left-content w-4/5 border-r-2 border-black'>
                                <div className="top-content font-bold flex">
                                    <h1 className="uppercase text-white bg-black px-1 ml-[7.5rem]">Admission form</h1>
                                    <h2 className="ml-3 mr-11 uppercase">Year: <span>{studentDetails.year}</span></h2>
                                    <h3 className=""><span className="border-r-2 border-black mx-1">Office </span>9173603705</h3>
                                </div>
                                <div className="middle-content flex">
                                    <div className="logo">
                                        <img className="h-36" src="images/logo.png" alt="logo"/>
                                    </div>
                                    <div className="content font-bold mt-11 mx-5">
                                        <p>K.G to 10th, 11th to 12th</p>
                                        <p>(Science / Commerce / Arts)</p>
                                        <p>(B.Com / B.B.A / M.Com)</p>
                                    </div>
                                </div>
                                <div className="bottom-content text-center font-bold border-t-2 border-black w-full">
                                    <p className="">E-35, Sumel-8, Safal Market, Nr Ajit Mill Char Rasta, Rakhial, Ahmedabad</p>
                                </div>
                            </div>
                            <div className='right-content w-1/5 '>
                                <div className="passPortSize-Photo">
                                    {
                                        studentDetails.photo != ''
                                        ?
                                            <img className="px-3" src={studentDetails.photo} alt='Passport-Photo'/>
                                        : 
                                            null

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="peragraph my-3 mx-1 border-b-2 pb-5 border-black">
                            <h1 className="font-bold ">Respected Sir,</h1>
                            <p className="text-sm">I am willing to take admission in you organization for Class <span className="border-b-2 border-black">{studentDetails.class}</span> I have received the permission from
                                my parents regarding the admission. I am aware and agree to rules and regulation of the organization. I am
                                bound to follow all the changed in rules and regulations made from time to time. 
                            </p>
                        </div>
                        <div className="academic-info my-5 mx-1">
                            <div className="grid grid-cols-3 flex justify-between">
                                <div className="left">
                                    <div className="std flex mb-2">
                                        <label className="w-20 font-bold">Std</label>
                                        <span className="font-bold">:</span>
                                        <p className="ml-2 pl-2 border-2 border-black w-24 capitalize">{studentDetails.class}</p>
                                    </div>
                                    <div className="stream flex mb-2">
                                        <label className="w-20 font-bold">Stream</label>
                                        <span className="font-bold">:</span>
                                        <p className="ml-2 pl-2 border-2 border-black w-24 capitalize">{studentDetails.stream}</p>
                                    </div>
                                    <div className="medium flex mb-2">
                                        <label className="w-20 font-bold">Medium</label>
                                        <span className="font-bold">:</span>
                                        <p className="ml-2 pl-2 border-2 border-black w-24 capitalize">{studentDetails.medium}</p>
                                    </div>
                                </div>
                                <div className="middle ml-[-20px] w-40">
                                    <p className="border-2 border-black w-36 text-center">
                                        <h1 className="font-bold">Form No.</h1>
                                        {studentDetails.formNo}
                                    </p>
                                </div>
                                <div className="right flex ml-[-40px]">
                                    <div className="font-bold">
                                        <h1 className="mb-2">Admission Date:</h1>
                                        <h1 className="text-end mb-3 mt-3">Boy:</h1>
                                        <h1 className="text-end">Girl:</h1>
                                    </div>
                                    <div className="">
                                        <div className="flex mb-2">
                                        <div className="date border-2 border-r-0 border-black px-1 ml-2">{studentDetails.admissionDate[0]}</div>
                                        <div className="month border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[1]}</div>
                                        <div className="year border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[3]}</div>
                                        <div className="year border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[4]}</div>
                                        <div className="year border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[6]}</div>
                                        <div className="year border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[7]}</div>
                                        <div className="year border-2 border-r-0 border-black px-1">{studentDetails.admissionDate[8]}</div>
                                        <div className="year border-2 border-black px-1">{studentDetails.admissionDate[9]}</div>
                                        </div>
                                        <div className="boy mb-2">
                                            <div className="border-2 border-black w-7 h-7 flex justify-center items-center ml-2">{ studentDetails.gender == 'male' ? <BsCheckLg className=""/> : null}</div>
                                        </div>
                                        <div className="girl">
                                            <div className="border-2 w-7 h-7 border-black flex justify-center items-center p-1 ml-2">{studentDetails.gender == 'female' ? <BsCheckLg className=""/> : ''}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="student-info my-3  p-1 border-2 border-black">
                            <div className="name flex my-5 mx-5">
                                <label>Name:</label>
                                <input type="text" disabled defaultValue={studentDetails.fullName} className="ml-2 border-b-2 border-black w-full capitalize"/>
                            </div>
                            <div className="occupation-mother's name grid grid-cols-2 my-5 mx-5">
                                <div className="occupation flex">
                                    <label>Occupation:</label>
                                    <input type="text" disabled defaultValue={studentDetails.fatherOccupation} className="ml-2 border-b-2 border-black w-screen capitalize"/>
                                </div>
                                <div className="mother's name flex ml-3">
                                    <label className="">Mother's Name:</label>
                                    <input type="text" disabled defaultValue={studentDetails.motherName} className="ml-2 border-b-2 border-black w-[215px] capitalize"/>
                                </div>
                            </div>
                            <div className="Resident's Address flex my-5 mx-5">
                                <label>Resident's Address:</label>
                                <input type="text" disabled defaultValue={studentDetails.address} className="ml-2 border-b-2 border-black w-[79%]"/>
                            </div>
                            <div className="whatsapp and mobile no grid grid-cols-2 my-5 mx-5">
                                <div className="whatsapp no flex">
                                    <label>Whatsapp No:</label>
                                    <div className="flex mb-2">
                                        <div className="date border-2 border-r-0 border-black px-[6px] ml-2">{studentDetails.whatsappNo[0]}</div>
                                        <div className="month border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[1]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[2]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[3]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[4]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[5]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[6]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[7]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.whatsappNo[8]}</div>
                                        <div className="year border-2 border-black px-[6px]">{studentDetails.whatsappNo[9]}</div>
                                    </div>
                                </div>
                                <div className="Mobile no flex ml-5">
                                    <label className="">Mobile No:</label>
                                    <div className="flex mb-2">
                                        <div className="date border-2 border-r-0 border-black px-[6px] ml-2">{studentDetails.alternativeNo[0]}</div>
                                        <div className="month border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[1]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[2]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[3]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[4]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[5]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[6]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[7]}</div>
                                        <div className="year border-2 border-r-0 border-black px-[6px]">{studentDetails.alternativeNo[8]}</div>
                                        <div className="year border-2 border-black px-[6px]">{studentDetails.alternativeNo[9]}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="birth of date flex my-5 mx-5">
                                <label className="">Birth of Date:</label>
                                <div className="flex mb-2">
                                    <div className="date border-2 border-r-0 border-black px-2 ml-2">{studentDetails.dob[0]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[1]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[3]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[4]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[6]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[7]}</div>
                                    <div className="date border-2 border-r-0 border-black px-2">{studentDetails.dob[8]}</div>
                                    <div className="date border-2 border-black px-2">{studentDetails.dob[9]}</div>
                                </div>
                            </div>
                            <div className="name of school flex my-5 mx-5">
                                <label>Name of School:</label>
                                <input type="text" disabled defaultValue={studentDetails.schoolName} className="ml-2 border-b-2 border-black w-[82%] capitalize"/>
                            </div>
                            <div className="note and total fess grid grid-cols-2 my-5 mx-5 gap-10">
                                <div className="grid grid-rows-2">
                                    <div className="note">
                                        <label>Note:</label>
                                        <div className="border-b-2 border-black ml-12 mt-[-22px]">
                                            <span className="">{studentDetails.note}</span>
                                        </div>
                                    </div>
                                    <div className="ref flex mt-5">
                                        <label>Ref:</label>
                                        <input type="text" defaultValue={studentDetails.reference} disabled className="ml-2 border-b-2 border-black w-full"/>
                                    </div>
                                </div>
                                <div className="total fees discount net pay mt-5">
                                    <div className="total fee flex border-2 border-black">       
                                        <label className="font-bold pl-2">Total Fees:</label>
                                        <p className="pl-2">{studentDetails.totalFees}</p>
                                    </div>
                                    <div className="discount flex border-2 border-t-0 border-black">       
                                        <label className="font-bold pl-2">Discount:</label>
                                        <p className="pl-2">{studentDetails.discount}</p>
                                    </div>
                                    <div className="net payable flex border-2 border-t-0 border-black">       
                                        <label className="font-bold pl-2">Net Payable:</label>
                                        <p className="pl-2">{studentDetails.netPayable}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="signiature  my-10 mx-5">
                                <div className="grid grid-cols-2">
                                    <div className="office sign flex">
                                        <label className="uppercase font-bold">Office sign.</label>
                                        <div className="h-16">
                                                
                                        </div>
                                    </div>
                                    <div className="parent's sign text-end">
                                        <label className="uppercase font-bold">Parent's sign.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center">
                <button className="mb-5 bg-indigo-900 py-2 px-5 rounded-md hover:bg-indigo-800 mr-3" onClick={()=> navigate(-1)}>
                    <span className="text-white text-sm">Back</span>
                </button>
                <ReactToPrint
                trigger={() => (
                    <button className="mb-5 bg-indigo-900 py-2 px-3 rounded-md hover:bg-indigo-800">
                    <span className="text-white text-sm">Download/Print</span>
                    </button>
                )}
                content={() => printRef.current}
                />

            </div>
        </>
    )
}

export default StudentAdmissionForm