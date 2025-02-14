import Container from "../Shared/Main/Container";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/ParinyaTosuwan_RESUME.pdf";
  link.download = "ParinyaTosuwan_RESUME.pdf";
  link.click();
};

function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 mb-10 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to know me more?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Don&apos;t let your opportunity slip away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-3  p-3 rounded-md">
          <div className="flex-shrink-0  text-center lg:w-auto  ">
            <a
              href=""
              onClick={handleDownload}
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              Get My RESUME
            </a>
          </div>
          <span>or</span>
          <div className="flex-shrink-0  text-center ">
            <a
              href="/company"
              className="inline-block py-3 mx-auto text-md font-medium text-center text-white bg-indigo-700 rounded-md px-2 lg:px-7 lg:py-5 "
            >
              See my Experience
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Cta;
