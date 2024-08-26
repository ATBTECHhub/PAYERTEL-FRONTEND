import Heading from "./Headings";
import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex justify-center items-center bg-gray-50 p-12 h-screen">
      <div className="border-gray-200 bg-white p-12 border rounded-md max-w-4xl text-center">
        <Heading as="h1" className="mb-4">
          Something went wrong
        </Heading>
        <p className="mb-8 font-sono text-gray-500">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
