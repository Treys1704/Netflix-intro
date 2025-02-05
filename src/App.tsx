import { useState } from 'react';
import NetflixLoader from "./components/NetflixLoader.tsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <NetflixLoader onComplete={() => setIsLoading(false)}/>}
            <div
                className="min-h-screen bg-cover bg-no-repeat bg-[url('../public/images/background-img.jpg')]"
            >
                <div className="bg-black/70 h-[100vh]">
                    <div className="flex items-center justify-between ">
                        <img
                            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
                            src="../public/images/Netflix_Logo.png"
                            alt="logo_red"
                        />
                        <div className="flex mr-4 sm:mr-10">
                            <button
                                className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded hover:bg-[#e50914]"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div
                        className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center"
                    >
                        <h1
                            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium"
                        >
                            Unlimited movies, TV shows and more.
                        </h1>
                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium m-2 sm:m-4">
                            Watch anywhere. Cancel anytime.
                        </h2>
                        <p
                            className="text-lg lg:text-xl font-medium sm:px-[26%] md:px-[10%] m-2 sm:m-3 px-12"
                        >
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center">
                            <input
                                className="h-12 md:h-14 xl:h-16 w-[70vw] sm:w-[32rem] md:w-[28rem] lg:w-[34rem] sm:my-2 rounded px-3 bg-transparent border border-gray-100"
                                type="email"
                                name="email"
                                placeholder="Email address"
                            />
                            <button
                                className="flex self-center w-32 md:w-52 items-center bg-red-700 hover:bg-[#e50914] pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:mx-2 md:text-2xl rounded"
                            >
                                Get Started
                                <img
                                    className="w-4 md:w-7 pt-1 text-white"
                                    src="../public/images/right-arrow-angle.png"
                                    alt="right-angle"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;