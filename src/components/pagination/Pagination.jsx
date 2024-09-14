import classNames from '../../utils/classNames';
import { IconArrow, IconArrowLong } from '../icons';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const arrowItem =
        'flex items-center justify-center select-none border gap-x-1 border-lightStrock w-10 h-10 text-textPrimary hover:text-primary hover:bg-[#eceeef] rounded-[10px] cursor-pointer';
    const numPageItem =
        'w-10 h-10 flex items-center justify-center select-none cursor-pointer border border-lightStrock hover:text-white hover:bg-sky-400 rounded-[10px]';

    const {
        handlePageChange,
        prevPage,
        nextPage,
        currentPage,
        totalPage,
        kind = 'version01',
        className = '',
    } = props;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={classNames(
                        numPageItem,
                        i === currentPage ? 'bg-sky-400 text-white' : '',
                    )}
                >
                    {i}
                </li>,
            );
        }
        return pageNumbers;
    };

    if (kind === 'version01') {
        return (
            <nav className="flex items-center justify-center">
                <span
                    className={classNames(
                        arrowItem,
                        currentPage === 1
                            ? 'opacity-50 pointer-events-none'
                            : '',
                    )}
                    onClick={prevPage}
                >
                    <IconArrow type="left" className="w-5 h-5" />
                </span>
                <ul className="flex items-center mx-4 gap-x-[10px]">
                    {renderPageNumbers()}
                </ul>
                <span
                    className={classNames(
                        arrowItem,
                        currentPage === totalPage
                            ? 'opacity-50 pointer-events-none'
                            : '',
                    )}
                    onClick={nextPage}
                >
                    <IconArrow className="w-5 h-5" />
                </span>
            </nav>
        );
    } else if (kind === 'version02') {
        return (
            <div className={classNames('flex items-center gap-x-3', className)}>
                <span
                    className={classNames(
                        'cursor-pointer',
                        currentPage === 1
                            ? 'opacity-50 pointer-events-none'
                            : '',
                    )}
                    onClick={prevPage}
                >
                    <IconArrowLong />
                </span>
                <span
                    className={classNames(
                        'cursor-pointer',
                        currentPage === totalPage
                            ? 'opacity-50 pointer-events-none'
                            : '',
                    )}
                    onClick={nextPage}
                >
                    <IconArrowLong kind="right" />
                </span>
            </div>
        );
    }
};

Pagination.propTypes = {
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number,
    totalPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func,
    kind: PropTypes.oneOf(['version01', 'version02']),
    className: PropTypes.string,
};

export default Pagination;
