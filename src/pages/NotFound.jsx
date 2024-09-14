import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/404.png';

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="mb-2 text-5xl font-semibold">Oops!</h1>
            <h4 className="mb-8 text-2xl font-semibold">You are lost</h4>
            <div className="mb-8">
                <img
                    src={notFoundImage}
                    alt="404"
                    className="object-cover w-full h-full"
                />
            </div>
            <Link
                to={'/'}
                className="flex items-center p-2 border-b border-textPrimary gap-x-5"
            >
                <svg
                    width={26}
                    height={17}
                    viewBox="0 0 26 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.19727 5.94779L20.6424 5.94779C22.9394 5.94779 24.8014 7.80985 24.8014 10.1068L24.8014 11.6325C24.8014 13.9294 22.9394 15.7915 20.6424 15.7915L6.20768 15.7915"
                        stroke="black"
                        strokeWidth="2.08134"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.84375 1.57276C4.13521 3.2813 3.17729 4.23921 1.46875 5.94776L5.84375 10.3228"
                        stroke="black"
                        strokeWidth="2.08134"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>Go home</span>
            </Link>
        </main>
    );
};

export default NotFound;
