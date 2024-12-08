import { iconData } from "./icon-data";

const Choose = () => {
  return (
    <>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center" }}>
        Why Choose Us?
      </h1>
      <br />
      <br />
      <div style={{ display: "flex", height: "100vh", flexWrap: "wrap" }}>
        {/* Left Side */}
        <div style={{ flex: 1, padding: "20px", textAlign: "justify" }}>
          <p>
          At Techapsoft, we specialize in creating customizable software solutions designed to meet your unique 
          business needs. Our expert team of developers and designers works closely with you to deliver intuitive, 
          scalable, and robust software that aligns perfectly with your vision. Leveraging cutting-edge technologies, 
          we craft future-ready solutions that grow with your business.
          </p>
          <br />
          <p>
          We are committed to cost-effective and timely delivery, ensuring high-quality results without exceeding 
          your budget or deadlines. Beyond development, we provide comprehensive support to keep your software 
          running flawlessly. With Techapsoft, you get more than just software—you get a trusted partner dedicated 
          to turning your ideas into impactful solutions.
          </p>
          <br />
          <p>
          What sets us apart is our customer-first approach. We prioritize understanding your business goals and 
          challenges, ensuring the solutions we create not only meet your requirements but exceed your expectations. 
          At Techapsoft, your success is our success. Our agile development process ensures that we can quickly adapt 
          to changes, keeping you ahead of the competition. We focus on building long-term relationships and continually
          evolving your software to match the growth of your business.With Techapsoft, you can trust that your vision 
          will be brought to life with precision, expertise, and a commitment to excellence at every step. With Techapsoft, 
          your vision becomes reality
          </p>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            padding: "20px",
          }}
        >
          {iconData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100px",
              }}
            >
              <div style={{ marginBottom: "-10px" }}>{item.icon}</div>
              <p style={{ margin: "20px 0 0" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Choose;
