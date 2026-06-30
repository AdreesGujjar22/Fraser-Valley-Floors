export function GoogleMap() {
  // Fraser Valley coordinates (centered between all locations)
  // Abbotsford: 49.0504, -122.3045
  // Surrey: 49.1913, -122.3045
  // Delta: 49.0374, -123.0724
  // Langley: 49.1869, -122.6620
  // Chilliwack: 49.1635, -122.0903
  // Maple Ridge: 49.2103, -122.3045
  // Mission: 49.1933, -122.3045

  const mapEmbedUrl = new URL("https://www.google.com/maps/embed");
  mapEmbedUrl.searchParams.append(
    "pb",
    "!1m18!1m12!1m3!1d172948.7552033!2d-122.56!3d49.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677179000001%3A0x1234567890!2sFraser%20Valley%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890"
  );

  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border shadow-card">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172948.75520330003!2d-122.5600321!3d49.1499906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486ff3d7e8e8e8d%3A0xf00d0000000!2sFraser%20Valley%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
}
