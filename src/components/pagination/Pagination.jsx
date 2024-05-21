import { IconArrow } from '../icons';

const Pagination = () => {
    const arrowItem =
        'flex items-center justify-center border gap-x-1 border-lightStrock w-10 h-10 text-textPrimary hover:text-white hover:bg-primary rounded-[10px] cursor-pointer';
    const numPageItem =
        'w-10 h-10 flex items-center justify-center cursor-pointer bg-white border border-lightStrock hover:text-white hover:bg-primary rounded-[10px]';
    return (
        <nav className="flex items-center justify-center">
            <span className={arrowItem}>
                <IconArrow type="left" className="w-5 h-5" />
            </span>
            <ul className="flex items-center mx-4 gap-x-[10px]">
                <li className={numPageItem}>1</li>
                <li className={numPageItem}>2</li>
                <li className={numPageItem}>3</li>
            </ul>
            <span className={arrowItem}>
                <IconArrow className="w-5 h-5" />
            </span>
        </nav>
    );
};

export default Pagination;
