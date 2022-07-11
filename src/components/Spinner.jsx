import spinner from "../components/assets/spinner.gif";

const Spinner = () => {
  return (
    <>
      <div className="w-100 mt-10">
        <img
          width={100}
          className="text-center mx-auto"
          src={spinner}
          alt="chill.."
        />
      </div>
    </>
  );
};

export default Spinner;
