import SignUpForm from "./SignUpForm";

function App() {
    function handleSubmit(success) {
        if (success) alert("Signed up successful");
    }

    return (
        <div className="my-16 md:my-0 md:flex max-w-5xl mx-auto object-center flex-row justify-center md:align-middle md:h-screen">
            <div className="p-5 md:w-1/2 md:max-w-md my-auto">
                <div className="text-center md:text-left text-white">
                    <h1 className="text-3xl md:w-72 font-bold">
                        Learn to code by watching others
                    </h1>
                    <p className="mt-6">
                        See how experienced developers solve problems in
                        real-time. Watching scripted tutorials is great, but
                        understanding how developers think is invaluable
                    </p>
                </div>
            </div>
            <div className="p-5 md:w-1/2 my-auto">
                <div>
                    <div className="mt-12 md:m-0 p-5 text-center text-white bg-purple-700 rounded-lg flat-shadow">
                        <p>
                            <span className="font-bold">
                                Try it free 7 days{" "}
                            </span>
                            then $20/mo. thereafter
                        </p>
                    </div>
                    <SignUpForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default App;
