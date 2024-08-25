import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex justify-center items-center bg-gray-50 px-6 sm:px-12 h-screen">
      <div className="border-gray-200 bg-white p-8 sm:p-12 border rounded-lg w-full max-w-4xl text-center">
        <Heading
          as="h1"
          className="mb-8 font-bold text-2xl sm:text-3xl lg:text-4xl"
        >
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg text-white sm:text-xl transition-colors duration-200"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
