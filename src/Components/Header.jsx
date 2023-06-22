import portrait from "/Users/petertsekov/Desktop/Projects/Test2/my-app/src/Pictures/Portrait.jpg";
import vid from "/Users/petertsekov/Desktop/Projects/Test2/my-app/src/Pictures/My Movie 2.MOV";
function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-3 col-5  bg-black text-white z-1 position-relative">
          <video
            className="myVid position-absolute top-50 start-0 translate-middle-y"
            src={vid}
            autoPlay
            muted
          ></video>
        </div>
        <div className="col p-0">
          <img className="paintOne h-100 w-100" src={portrait} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
