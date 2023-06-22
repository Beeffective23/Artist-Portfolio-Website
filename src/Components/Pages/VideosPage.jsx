import { URLsYoutube } from "../../helpers";

function VideosPage() {
  let videos = URLsYoutube.map((vid) => {
    return (
      <div className="col-lg-4 col-9 mb-5 d-flex justify-content-center">
        {vid}
      </div>
    );
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center">{videos}</div>
    </div>
  );
}

export default VideosPage;
