import { Button } from "@/components/ui/button";

const WelcomePage = () => {
    return (
        <div className="min-h-screen bg-[#E0F4EC] flex flex-col">
            {/* Navbar */}
            <header className="w-full bg-[#E0F4EC] border-b border-[#C4EDD7] flex justify-between items-center px-6 py-3 shadow-sm">
                <div className="flex items-center">
                    <div className="bg-[#004D40] text-white font-semibold px-3 py-1 rounded-sm text-[20px] tracking-wide">
                        CHAPTER <span className="text-[#C4EDD7]">.1</span>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <Button className="bg-[#004D40] text-white px-4 py-2 text-sm rounded hover:bg-[#00695C] transition">
                        CREATE COMPANY
                    </Button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                        <img
                            src="/image/Rectangle 2171.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            <div className="px-6 py-3 text-sm text-gray-600">
                Accounting Books / <span className="font-medium">Select Company</span>
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center bg-white mx-6 mt-2 mb-6 shadow-lg rounded-lg">
                <h1 className="text-[36px] font-bold text-green-800 mb-2">
                    Welcome <span className="text-green-600">!</span>
                </h1>

                <p className="text-gray-600 text-center max-w-md mb-4">
                    Unleash the full potential of your numerical data. Explore how our
                    innovative accounting solutions empower you to make well-informed
                    financial decisions with confidence.
                </p>

                <p className="text-gray-900 font-semibold tracking-wide mb-6">
                    YOU NEED TO CREATE YOUR COMPANY FIRST!
                </p>

                <img
                    src="/image/Group 1000000786.png"
                    alt="illustration"
                    className="w-48 h-48 mb-6"
                />

                <Button className="bg-[#004D40] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#00695C] transition">
                    NEED HELP?
                </Button>
            </main>
        </div>
    );
};

export default WelcomePage;
