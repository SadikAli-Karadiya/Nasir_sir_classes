import React from 'react'
import {getChequeNotifications, markAsReadNotification} from '../hooks/usePost'
import Toaster from '../hooks/showToaster'
import Loader from "../Componant/Loader";

function Notification() {
    const [chequeDeposited, setChequeDeposited] = React.useState([]);
    const [chequePending, setChequePending] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isMarking, setIsMarking] = React.useState(false);

    const markAsDeposit = async (e, notification_id) =>{
        try{
            e.preventDefault();
            
            setIsMarking(true)
            const res = await markAsReadNotification(notification_id)
            setIsMarking(false)
    
            if(res.data.success) {
                Toaster('success', res.data.message);
            }

        } catch(err){
            Toaster('error', err.response.data.message);
            setIsMarking(false);
        }
    }

    React.useEffect(() => {
        async function getNotifications(){
            const res = await getChequeNotifications();
            setIsLoading(false)
            if(res.data.success && res.data.allNotifications.length > 0){
                let deposited = [];
                let pending = [];
                res.data.allNotifications.map((item)=>{
                    if(item.is_deposited){
                        deposited.push(item)
                    }
                    else{
                        pending.push(item)
                    }
                })
                setChequeDeposited(deposited)
                setChequePending(pending)
            }
        }
        getNotifications();
    },[isMarking])

    if(isLoading){
        return <Loader/>
    }

    return (
        <div className="bg-student-100 py-10 px-14" style={{minHeight: "calc(100vh - 70px)"}}>
            <div>
                <h2 className='text-3xl  font-bold text-darkblue-500'>Your Notifications</h2>
            </div>
            <div className="mt-10 bg-white">
                <h2 className="text-lg text-gray-700 font-semibold px-6 py-4">Pending Deposit</h2>
                <div className="flex justify-center items-center">
                    <table className="my-8 w-100 w-3/4" style={{borderSpacing:'0 10px', borderCollapse:'separate' }}>
                        <tbody className="">
                            {
                                chequePending?.length > 0
                                ?
                                    chequePending.map((item, idx)=>{
                                        return <React.Fragment key={idx}>
                                            <tr key={idx} className='bg-red-100'>
                                                <td className="rounded-lg overflow-hidden">
                                                    <div className='px-5 py-4 w-100 flex justify-between'>
                                                        <div className="py-2 flex justify-center items-center">
                                                            <h2 className="text-lg font-semibold">Your Cheque date is reached.</h2>
                                                            <p className="ml-5"><span className="bg-gray-300 px-2 py-1 rounded-md">Cheque No:</span> {item.cheque_no}</p>
                                                            <p className="ml-5"><span className="bg-gray-300 px-2 py-1 rounded-md">Receipt ID:</span> {item.receipt_id}</p>
                                                        </div>
                                                        <button disabled={isMarking} className={`${isMarking ? 'opacity-50' : 'hover:bg-blue-400'} text-sm bg-blue-500 text-white px-3 rounded-lg`} onClick={(e)=> {markAsDeposit(e, item._id)}}>Mark as deposited</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <tr><td></td></tr> */}
                                        </React.Fragment>
                                    })
                                : 
                                    <tr className="">
                                        <td className="rounded-lg overflow-hidden text-center">
                                            <div className='px-4'>
                                                <div className="py-2 flex justify-center items-center">
                                                    <h2 className="text-xl font-semibold text-gray-500">No Cheques Pending</h2>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-10 bg-white">
                <h2 className="text-lg text-gray-700 font-semibold px-6 py-4">Deposited</h2>
                <div className="flex justify-center items-center">

                    <table className="my-8 w-100 w-3/4" style={{borderSpacing:'0 10px', borderCollapse:'separate' }}>
                        <tbody>
                            {
                                chequeDeposited?.length > 0
                                ?
                                    chequeDeposited.map((item, idx)=>{
                                        return  <tr key={idx} className='mt-2 bg-gray-200'>
                                                <td className="rounded-lg overflow-hidden">
                                                    <div className='px-5 py-4 w-100 flex justify-center'>
                                                        <div className="py-2 flex justify-center items-center">
                                                            <h2 className="text-lg font-semibold">Cheque Deposited.</h2>
                                                            <p className="ml-5"><span className="bg-white px-2 py-1 rounded-md">Cheque No:</span> {item.cheque_no}</p>
                                                            <p className="ml-5"><span className="bg-white px-2 py-1 rounded-md">Receipt ID:</span> {item.receipt_id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                    })
                                : 
                                    <tr className="">
                                        <td className="rounded-lg overflow-hidden text-center">
                                            <div className='px-4'>
                                                <div className="py-2 flex justify-center items-center">
                                                    <h2 className="text-xl font-semibold text-gray-500">No Cheques Deposited</h2>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Notification