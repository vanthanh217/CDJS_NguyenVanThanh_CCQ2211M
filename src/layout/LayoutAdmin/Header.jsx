import { IconLogout } from '../../components/icons';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 m-[20px_20px_40px] shadow-[rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_2px_6px_2px] rounded-xl">
            <div>
                <p className="text-xl font-semibold text-textPrimary">
                    WynK Coffe
                </p>
                <span className="text-sm text-text2nd">Food and Drink</span>
            </div>
            <div className="flex items-center gap-x-10">
                <span className="cursor-pointer select-none text-textPrimary">
                    <IconLogout />
                </span>
                <div className="flex items-center gap-x-3">
                    <img
                        src="https://images.unsplash.com/photo-1557409518-691ebcd96038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjBpbiUyMHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Admin"
                        className="size-[50px] object-cover rounded-full"
                    />
                    <span className="font-semibold">Văn Thành</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
