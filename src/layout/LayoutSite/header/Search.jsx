import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '../../../components/icons';
import { Button } from '../../../components/button';
import { Input } from '../../../components/form';
import { ProductService } from '../../../services';
import { urlImage } from '../../../config';

const Search = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (query.trim() === '') {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        (async () => {
            const response = await ProductService.getAllProductByQuery(
                encodeURIComponent(query),
            );
            setSuggestions(response.products);
            setShowSuggestions(true);
        })();
    }, [query]);
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        setQuery('');
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };
    const handleChangePage = (slug) => {
        navigate(`/san-pham/${slug}`);
        setQuery('');
    };
    const renderSuggestions = () => {
        if (!showSuggestions || suggestions.length === 0) {
            return null;
        }
        return (
            <div className="absolute z-10 w-full p-3 bg-white top-[110%] shadow-box rounded-xl max-h-[350px] overflow-y-auto scroll-custom">
                <ul className="flex flex-col gap-y-1">
                    {suggestions.map((item, index) => {
                        const price =
                            item?.pricesale > 0 ? item?.pricesale : item?.price;
                        return (
                            <li
                                key={index}
                                className="flex items-center p-2 overflow-hidden hover:bg-lightStrock/60 rounded-xl gap-x-4"
                                onClick={() => handleChangePage(item?.slug)}
                            >
                                <div className="overflow-hidden size-[70px] rounded-xl">
                                    <img
                                        src={`${urlImage}product/${item?.image}`}
                                        alt=""
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-lg font-medium line-clamp-2">
                                        {item?.name}
                                    </h4>
                                    <span className="text-textRed">
                                        {`${parseFloat(price).toLocaleString(
                                            'VI-vi',
                                        )} VNĐ`}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <Input
                    value={query}
                    onChange={handleChange}
                    placeholder="Find collection..."
                    className="bg-[#f0f0f0] pl-3 pr-20 h-[44px] text-sm"
                />
                <Button
                    type={'submit'}
                    className="absolute w-16 h-9 top-1 right-[5px]"
                >
                    <IconSearch />
                </Button>
            </form>
            {renderSuggestions()}
        </>
    );
};

export default Search;
