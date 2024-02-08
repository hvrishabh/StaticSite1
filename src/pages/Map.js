function Map() {
  return (
    <div>
      <iframe
        title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118156.78090376203!2d73.14800625033844!3d22.262855393678098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc63f95df6cdd%3A0x657cf8092a78cbe4!2sBAPS%20Shri%20Swaminarayan%20Mandir%2C%20Atladara!5e0!3m2!1sen!2sin!4v1707382565151!5m2!1sen!2sin"
        width="300"
        height="150"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br />
      <span> Map for the Right location</span>
    </div>
  );
}

export default Map;
