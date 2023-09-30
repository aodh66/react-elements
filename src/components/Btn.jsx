function Btn({ updateColor }) {
  // console.log('button stuff')
  return (
    <>
      <button
        className="redbtn"
        onClick={() =>
          updateColor((border) => (border = { border: "3px solid red" }))
        }
      >
        Red
      </button>
      <button
        className="bluebtn"
        onClick={() =>
          updateColor((border) => (border = { border: "3px solid blue" }))
        }
      >
        Blue
      </button>
      <button
        className="greenbtn"
        onClick={() =>
          updateColor((border) => (border = { border: "3px solid green" }))
        }
      >
        Green
      </button>
    </>
  );
}

export default Btn;
