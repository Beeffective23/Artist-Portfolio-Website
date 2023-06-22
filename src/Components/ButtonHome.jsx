function ButtonHome(props) {
  return (
    <button
      type={`${props.type}`}
      className={`homeBtns shadow-lg rounded ${props.m}3`}
    >
      {props.name}
    </button>
  );
}

export default ButtonHome;
