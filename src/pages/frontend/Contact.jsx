import { useId } from 'react';
import { BreadCrumbs } from '../../components/breadcrumb';
import { FormGroup, Input, Label, TextArea } from '../../components/form';
import { Button } from '../../components/button';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const id = useId();
    const { pathname } = useLocation();
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            <section className="flex items-center gap-x-10">
                <div className="w-2/5 h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1905591174022!2d106.76527012490925!3d10.873106339281575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9b6e0885d87%3A0xc8b6ed7c60347fdc!2zNTYxIFFMMUEsIEtodSBwaOG7kSAzLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MjA0MDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716113389737!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="flex-1">
                    <form action="" className="grid grid-cols-2">
                        <FormGroup className="px-4">
                            <Label htmlFor={`fullName${id}`}>Full name</Label>
                            <Input
                                name="fullName"
                                id={`fullName${id}`}
                                placeholder="Type your name"
                            />
                        </FormGroup>
                        <FormGroup className="px-4">
                            <Label htmlFor={`phone${id}`}>Phone number</Label>
                            <Input
                                name="phone"
                                id={`phone${id}`}
                                placeholder="Type your phone number"
                            />
                        </FormGroup>
                        <FormGroup className="px-4">
                            <Label htmlFor={`email${id}`}>Email address</Label>
                            <Input
                                name="email"
                                id={`email${id}`}
                                placeholder="Type your email address"
                            />
                        </FormGroup>
                        <FormGroup className="px-4">
                            <Label htmlFor={`topic${id}`}>Topic</Label>
                            <Input
                                name="topic"
                                id={`topic${id}`}
                                placeholder="Type your Topic"
                            />
                        </FormGroup>
                        <FormGroup className="col-span-2 px-4">
                            <Label htmlFor={`content${id}`}>Content</Label>
                            <TextArea
                                name="content"
                                id={`content${id}`}
                                placeholder="Space for your message"
                            />
                        </FormGroup>
                        <FormGroup className="px-4 mt-12">
                            <Button type="submit" className="w-1/2 py-3">
                                Submit
                            </Button>
                        </FormGroup>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
