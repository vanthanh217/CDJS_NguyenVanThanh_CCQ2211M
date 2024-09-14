import { useId, useState } from 'react';
import { BreadCrumbs } from '../../components/breadcrumb';
import { FormGroup, Input, Label, TextArea } from '../../components/form';
import { Button } from '../../components/button';
import { ContactService } from '../../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconLocation, IconMail, IconPhone } from '../../components/icons';

const contactsInfo = [
    {
        icon: <IconLocation />,
        title: 'Xóm 3, Quỳnh Ngọc I, Eana, Krông Ana, Đăk Lăk',
    },
    {
        icon: <IconPhone />,
        title: '0978684178',
    },
    {
        icon: <IconMail />,
        title: 'nguyenvanthanh210704@gmail.com',
    },
];

const Contact = () => {
    const id = useId();
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        (async () => {
            const result = await ContactService.insert(newContact);
            if (result.status === true) {
                toast.success(result.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            }
        })();
        setNewContact({
            name: '',
            email: '',
            phone: '',
            title: '',
            content: '',
        });
    };

    return (
        <>
            <ToastContainer />
            <main className="container mx-auto mb-10">
                <BreadCrumbs title={'Liên hệ'} />
                <section className="flex gap-x-10">
                    <div className="flex flex-col w-2/5 gap-y-7">
                        {/* Map */}
                        <div className="h-[450px] rounded-xl p-3 bg-white shadow-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.093836005525!2d107.9808499749355!3d12.509939087764637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317221dec71c5265%3A0xa1209a959480d7ca!2zUXXhu7NuaCBuZ-G7jWM!5e0!3m2!1svi!2s!4v1718027576590!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            />
                        </div>
                        {/* Contact info */}
                        <div className="flex flex-col justify-center p-5 bg-white shadow-box rounded-xl gap-y-3">
                            {contactsInfo &&
                                contactsInfo.length > 0 &&
                                contactsInfo.map((item, index) => (
                                    <div
                                        className="flex items-center p-5 gap-x-5 bg-lightStrock/35 rounded-xl"
                                        key={index}
                                    >
                                        <span className="p-3 text-orange-500 rounded-full bg-[#FFEADB]">
                                            {item.icon}
                                        </span>
                                        <p className="font-medium">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <form
                            className="grid grid-cols-2 gap-x-4"
                            onSubmit={handleSubmit}
                        >
                            <FormGroup>
                                <Label htmlFor={`name${id}`}>Full name</Label>
                                <Input
                                    name="name"
                                    id={`name${id}`}
                                    placeholder="Type your name"
                                    value={newContact.name}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor={`phone${id}`}>
                                    Phone number
                                </Label>
                                <Input
                                    name="phone"
                                    id={`phone${id}`}
                                    placeholder="Type your phone number"
                                    value={newContact.phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor={`email${id}`}>
                                    Email address
                                </Label>
                                <Input
                                    name="email"
                                    id={`email${id}`}
                                    placeholder="Type your email address"
                                    value={newContact.email}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor={`title${id}`}>Title</Label>
                                <Input
                                    name="title"
                                    id={`title${id}`}
                                    placeholder="Type your Title"
                                    value={newContact.title}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="col-span-2">
                                <Label htmlFor={`content${id}`}>Content</Label>
                                <TextArea
                                    name="content"
                                    id={`content${id}`}
                                    placeholder="Space for your message"
                                    className={'h-[170px]'}
                                    value={newContact.content}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mt-10">
                                <Button type="submit" className="w-1/2 py-3">
                                    Submit
                                </Button>
                            </FormGroup>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
