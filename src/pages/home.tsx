import logo from '../assets/images/logo.svg';

const HomePage = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-gray-300" >

            <div className="flex flex-col max-w-3xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex w-full items-center justify-center my-4">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="flex flex-col w-xl border-b border-indigo-900 pb-2 mb-4">
                    <h1 className='text-4xl font-semibold text-indigo-950 text-shadow-lg '>Login Page</h1>
                </div>

                <form className="flex flex-col w-full gap-5">
                    <div className='flex w-full gap-5 items-center'>
                        <label htmlFor="username" className='w-1/4 font-semibold'>Username: {" "}</label>
                        <div className='w-3/4'>
                            <input type="text" id="username" className='w-full px-2 border border-gray-300 rounded-md hover:ring-1 hover:ring-green-200 shadow-9xl' />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 items-center'>
                        <label htmlFor="password" className='w-1/4 font-semibold'>Password: {" "}</label>
                        <div className='w-3/4'>
                            <input type="password" id="password" className='w-full px-2 border border-gray-300 rounded-md hover:ring-1 hover:ring-green-200 shadow-9xl' />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 justify-end'>
                        <a href="/forgot-password" className='text-sm italic text-teal-700 hover:underline transition  hover:scale-105'>Forgot Password?</a>
                    </div>
                    <div className='flex w-full gap-5'>
                        <button className='bg-red-900 text-white font-semibold w-full h-10 px-4 py-2 rounded-lg hover:cursor hover:bg-red-700 transition hover:scale-105'>
                            Cancel
                        </button>
                        <button className='bg-green-900 text-white font-semibold w-full h-10 px-4 py-2 rounded-lg hover:cursor hover:bg-green-700 transition hover:scale-105'>
                            Submit
                        </button>
                    </div>
                </form>

                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

                    <span className="shrink-0 px-4 text-gray-900">Or</span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
                </span>

                <div className="flex items-center">
                    <p className='text-center text-sm text-gray-700'>Don't have an account? <a href="/register" className='text-sm italic text-teal-700 hover:underline transition  hover:scale-105'>Register here</a></p>
                </div>
                
            </div>

        </div>

        </>
    )
}

export default HomePage;