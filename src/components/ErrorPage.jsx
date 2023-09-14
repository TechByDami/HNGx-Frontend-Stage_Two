const ErrorPage = ({ error: { code, message } }) => {
  const reloadPage = () => {
    if (message.includes("Network Error")) {
      window.location.reload();
    } else if (message.includes("404")) {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen font-dm">
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-rose-600 to-rose-800">
        <div className=" py-12 md:px-24 px-14 bg-gray-100 rounded-tr-[8rem] rounded-bl-[8rem] border-[1rem] border-gray-300 shadow-xl flex flex-col justify-center items-center gap-1">
          <h1 className="text-9xl font-black text-rose-500 mb-4 font-dm">
            Oops!
          </h1>
          <p className="text-gray-700 text-xl font-bold mb-4">{message}</p>
          {message.includes("Network Error") || message.includes("404") ? (
            <button
              className="bg-rose-600 mt-3 text-white py-4 px-10 font-bold uppercase rounded-xl hover:bg-rose-700 focus:outline-none"
              onClick={reloadPage}
            >
              {message.includes("Network Error") ? "Retry" : "Go Home"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
