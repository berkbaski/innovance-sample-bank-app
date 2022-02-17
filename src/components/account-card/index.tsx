const AccountCard = () => {
    return (
        <div className="bg-gray-100 px-4 py-2 rounded-md">
            <div className="flex flex-row justify-between mb-2">
                <h5 className="font-bold">068 - 6895967</h5>
                <h5 className="font-light">TR16 0006 2579 5778 4142 6147 27</h5>
            </div>
            <h3 className="text-4xl font-bold mb-2">$5000</h3>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h6>Garanti Bank / Galatasaray</h6>
                </div>
                <img
                    className="w-12 h-12 rounded-full"
                    alt="Garanti bank"
                    src="https://play-lh.googleusercontent.com/COWSAHa7drbVvCgIkZ4KLxZO78xu8fI7Jg_OX57Y1WBAypwkjqW7TMfTbv5bwX4TbPw9"
                />
            </div>
        </div>
    );
};

export default AccountCard;
