import { Link } from 'react-router-dom';
import Background from '../../assets/images/background.jpg';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const LayoutAuthentication = (props) => {
    const { children, title = '', desc = '', to = '', image } = props;
    return (
        <main className="mt-0 overflow-hidden authentication-wrapper">
            <section className="min-h-screen mb-32">
                <div
                    className="relative flex justify-center pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-[50vh] rounded-xl"
                    style={{
                        backgroundImage: `url('${Background}')`,
                    }}
                >
                    <span className="absolute inset-0 bg-center bg-gradient-to-tl from-gray-900 to-slate-800 opacity-30"></span>
                    <div className="container z-10">
                        <div className="flex flex-wrap justify-center -mx-3">
                            <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-[0_0_auto] shrink-0 lg:w-5/12">
                                {image && (
                                    <Link
                                        to={to}
                                        className="flex items-center justify-center"
                                    >
                                        <img src={image} alt="Logo" />
                                    </Link>
                                )}
                                <h1
                                    className={classNames(
                                        'mb-2 text-5xl font-semibold text-white',
                                        image ? 'mt-7' : 'mt-12',
                                    )}
                                >
                                    {title}
                                </h1>
                                <p className="text-white">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                        <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-[0_0_auto] shrink-0 md:w-7/12 lg:w-5/12">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

LayoutAuthentication.propTypes = {
    children: PropTypes.node,
    image: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default LayoutAuthentication;
