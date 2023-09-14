import Logo from "./Logo";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex justify-center items-center gap-3">
        <Logo color='black' />
        <div className="animate-spin">
          <div className="rounded-full h-6 w-6 border-b-4 border-r-4 border-rose-700"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
