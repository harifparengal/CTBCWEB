import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import Modal from "./Modal";
import { useState } from "react";
import PayRequest from "./PayRequest";
const EventsV2 = () => {
    const [showModal, setShowModal] = useState(false);
    const { isLoading, error, data } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/events`);
            return await res.json();
        }
    }
    );

    if (isLoading)
        return <div className=" three-quarter-spinner"></div>
    if (error)
        return error.message;

    return (
        <section className="section">
            <Title title={'Events'} subTitle={''}></Title>

            <div className='workshops-container'>
                {data?.map(event => <div key={event?._id} className='insta-card'>

                    <img src={`data:image/jpeg;base64,${event?.img}`} alt="event photo" className='workshop-photo' />

                    <p className='workshop-text'>{event?.description}</p>

                    <button className="btn-default btn-regular btn-register-event" onClick={() => setShowModal(true)}>Register</button>

                    <Modal showModal={showModal} setShowModal={setShowModal}>
                        <PayRequest amount={event?.amount} setShowModal={setShowModal} _id={event?._id}></PayRequest>
                    </Modal>
                </div>)}
            </div>

        </section>
    );
};

export { EventsV2 };