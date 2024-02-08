import Map from "./Map";

function Footer() {
  return (
    <>
      <hr className="border-primary border-5" />
      <div className="d-flex justify-content-around">
        <div className="fs-1">This is footer</div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
}

export default Footer;
