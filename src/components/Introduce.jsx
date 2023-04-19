const Introduce = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const onClickBtn = () => {};

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-evenly items-center">
      <div>
        <div className="flex justify-center mb-3">Title</div>
        <div className="flex">
          <button onClick={onClickBtn}>
            {/* className="bg-gray-50 h-10 w-10 rounded-3xl flex justify-center" */}
            {`<`}
          </button>
          <div className="mx-auto py-36 px-28 rounded-lg bg-gray-300"></div>
          <button>{`>`} </button>
        </div>
      </div>
      <div>
        <div className="mx-auto py-36 px-28 rounded-lg bg-gray-300"></div>
      </div>
      <div>
        <div className="mx-auto py-36 px-28 rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
};
export default Introduce;
