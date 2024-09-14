import { useParams } from 'react-router-dom';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useEffect, useState } from 'react';
import { ContactService } from '../../../services';

const ContactShow = () => {
    const { id } = useParams();
    const [contact, setContact] = useState({});

    useEffect(() => {
        (async () => {
            const { contact } = await ContactService.getById(id);
            setContact(contact);
        })();
    }, [id]);
    const createdAt = contact?.created_at;
    const date = new Date(createdAt);
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    const formatDate = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Contact detail'} />
            <section className="flex items-start justify-between mb-7">
                <div className="flex flex-col p-4 bg-white gap-y-4 shadow-box rounded-xl">
                    <div className="flex items-center gap-x-5">
                        <h5 className="text-lg font-medium text-text2nd">
                            Contact id:
                        </h5>
                        <span className="text-lg font-medium">{id}</span>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <h5 className="text-lg font-medium text-text2nd">
                            Sent in:
                        </h5>
                        <span className="text-lg font-medium">
                            {formatDate}
                        </span>
                    </div>
                </div>
                <div className="p-4 bg-white mr-7 shadow-box rounded-xl">
                    <div className="flex items-center text-lg gap-x-5">
                        <p className="text-text2nd">Name:</p>
                        <span className="font-medium ">{contact?.name}</span>
                    </div>
                    <div className="flex items-center text-lg gap-x-5">
                        <p className="text-text2nd">Email:</p>
                        <span className="font-medium ">{contact?.email}</span>
                    </div>
                    <div className="flex items-center text-lg gap-x-5">
                        <p className="text-text2nd">Phone:</p>
                        <span className="font-medium ">{contact?.phone}</span>
                    </div>
                    <div className="flex items-center text-lg gap-x-5">
                        <p className="text-text2nd">Name:</p>
                        <span className="font-medium ">{contact?.name}</span>
                    </div>
                </div>
            </section>
            <section className="w-4/5 p-5 mx-auto bg-white shadow-box rounded-xl">
                <h5 className="mb-4 text-xl font-medium">
                    Title:{' '}
                    <span className="font-light text-text2nd">
                        {contact?.title}
                    </span>
                </h5>
                <div>
                    <h5 className="mb-2 text-lg font-medium">Content: </h5>
                    <p>{contact?.content}</p>
                </div>
            </section>
        </>
    );
};

export default ContactShow;
