import { useState, useEffect } from "react";
import tour1 from "../images/services/buttterfly.jpg";
import tour2 from "../images/services/co2.jpg";
import tour3 from "../images/services/conflict.gif";
import tour4 from "../images/services/eia.jpeg";
import tour5 from "../images/services/esg.jpg";
import tour6 from "../images/services/greenAudit.jpg";
import tour7 from "../images/services/medicinal.jpg";
import tour8 from "../images/services/plantID.jpg";
import tour9 from "../images/services/restoration.jpg";
import tour10 from "../images/services/tree.jpg";
import tour11 from "../images/services/wild.jpg";
import tour12 from "../images/services/sustainableArchitecture.jpg";
import tour13 from "../images/services/wildliferesearch.gif";
import tour14 from "../images/services/drone.jpeg";
import tour15 from "../images/services/urban2.jpeg";
import tour16 from "../images/services/hydrology.jpeg";
import tour17 from "../images/services/ensemble.jpg";
import tour18 from "../images/services/carto.jpeg";
import tour19 from "../images/services/consultation.jpg";
import tour20 from "../images/services/PLA.webp";
import tour21 from "../images/services/CBPR.webp";
import tour22 from "../images/services/RRA.webp";
import tour23 from "../images/services/Assistance.png";
import tour24 from "../images/services/herbarium.png";
import tour25 from "../images/services/PLA.png";
import tour26 from "../images/services/Ctalk.jpg";
import tour27 from "../images/services/ABCD.png";
import tour28 from "../images/services/SIA.jpg";
import tour29 from "../images/services/AI.png";
import tour30 from "../images/services/PLA.png";
import tour31 from "../images/services/PLA.png";
import DataUpcomingEvents from "./DataUpcomingEvents";
import { useLocation } from "react-router-dom";

const data = [
  {
    id: 1,
    image: tour1,
    title: "Activities",
    ptitle: "Buttterfly Expertise",
    isPaid: true,
    info: "Unveil the enchanting world of butterflies with our expert guidance—your passport to captivating butterfly expertise.",
    emailinfo: "rc@ctbci.org",
  },
  
  {
    id: 2,
    image: tour2,
    title: "Assessment",
    ptitle: "Carbon sequestration",
    isPaid: true,
    info: "Enhance sustainability, mitigate climate impact. Our service: Nature's ally, locking carbon for a greener future.",
    emailinfo: "Plant@ctbci.org",
  },
  {
    id: 3,
    image: tour3,
    title: "Expertise and Support",
    ptitle: "Human wildlife conflict",
    isPaid: true,
    info: "Mitigating conflict, fostering harmony; navigating coexistence for a sustainable balance between humans and wildlife.",
    emailinfo: "Consbio@ctbci.org",
  },
  {
    id: 4,
    image: tour4,
    title: "Assessment",
    ptitle: "environmental impact assessment",
    isPaid: true,
    info: "Assessing ecological footprint, ensuring sustainable practices, and guiding towards environmentally responsible decisions for informed progress.",
    emailinfo: "EIA@ctbci.org",
  },
  {
    id: 5,
    image: tour5,
    title: "Assessment",
    ptitle: "Environmental, Social, and Governance",
    isPaid: true,
    info: "Enhancing sustainability, fostering positive impact. Our ESG service champions responsible practices for enduring success.",
    emailinfo: "EIA@ctbci.org",
  },
  {
    id: 6,
    image: tour6,
    title: "Assessment",
    ptitle: "green Audit",
    isPaid: true,
    info: "Elevate sustainability with our concise Green Audit – fostering eco-friendly practices for a brighter future.",
    emailinfo: "EIA@ctbci.org",
  },
  {
    id: 7,
    image: tour7,
    title: "Expertise and Support",
    ptitle: "Medicinal plant",
    isPaid: true,
    info: "Comprehensive expertise and support in wildlife, research, and social science for impactful, informed initiatives.",
    emailinfo: "Plant@ctbci.org",
  },
  {
    id: 8,
    image: tour8,
    title: "Expertise and Support",
    ptitle: "Plant identification",
    isPaid: true,
    info: "Precision and speed unite in our Plant Identification service, delivering accurate results for effortless botanical recognition.",
    emailinfo: "Plant@ctbci.org",
  },
  {
    id: 9,
    image: tour9,
    title: "Technical Support",
    ptitle: "habitat restoration",
    isPaid: true,
    info: "Reviving ecosystems, restoring balance—transforming habitats for a sustainable and harmonious environment, one project at a time.",
    emailinfo: "restoration@ctbci.org",
  },
  {
    id: 10,
    image: tour10,
    title: "Expertise and Support",
    ptitle: "Miyawaki plantation",
    isPaid: true,
    info: "Revitalize ecosystems with our Miyawaki plantation service—nurturing biodiversity and fostering sustainable green environments for longevity.",
    emailinfo: "Plant@ctbci.org",
  },
  {
    id: 11,
    image: tour11,
    title: "Technical Support",
    ptitle: "Rescue and Rehabilitation",
    isPaid: false,
    info: "Empowering wildlife through compassionate rescue and rehabilitation, restoring health and habitats for a thriving ecosystem.",
    emailinfo: "Consbio@ctbci.org",
  },
  {
    id: 12,
    image: tour12,
    title: "Expertise and Support",
    ptitle: "Sustainable architecture",
    isPaid: true,
    info: "Create eco-friendly, resilient spaces with our sustainable architecture service, blending innovation and environmental responsibility seamlessly.",
    emailinfo: "socialecology@ctbci.org",
  },
  {
    id: 13,
    image: tour13,
    title: "Expertise and Support",
    ptitle: "Wildlife Research",
    isPaid: true,
    info: "Exploring nature's secrets, our Wildlife Research unveils the mysteries, fostering conservation through insightful discoveries.",
    emailinfo: "rc@ctbci.org",
  },

  {
    id: 14,
    image: tour17,
    title: "Expertise and Support",
    ptitle: "Spatial Modeling",
    isPaid: true,
    info: "Optimize planning and decision-making with our Spatial Modeling service. Analyze spatial data for insightful mapping, forecasting, and resource allocation.",
    emailinfo: "GIS@ctbci.org",
  },
  {
    id: 15,
    image: tour18,
    title: "Expertise and Support",
    ptitle: "Mapping and Cartography",
    isPaid: true,
    info: "Precision mapping services for accurate spatial representation. Our cartography expertise ensures detailed and reliable maps, facilitating informed decision-making and navigation.",
    emailinfo: "GIS@ctbci.org",
  },
  {
    id: 16,
    image: tour15,
    title: "Expertise and Support",
    ptitle: "Urban Planning and Environmental Management",
    isPaid: true,
    info: "We offer expert guidance in urban planning and environmental management, fostering sustainable communities through innovative solutions and strategic development strategies.",
    emailinfo: "GIS@ctbci.org",
  },
  {
    id: 17,
    image: tour19,
    title: "Training",
    ptitle: "Consultation and Training",
    isPaid: true,
    info: "Expert consultation and training services for personalized guidance, skill enhancement, and strategic insights to optimize performance and achieve organizational goals.",
    emailinfo: "info@ctbci.org",
  },
  {
    id: 18,
    image: tour14,
    title: "Expertise and Support",
    ptitle: "Drone Mapping",
    isPaid: true,
    info: "Revolutionize mapping with our Drone Mapping Service. Precision, speed, and efficiency in capturing aerial data for detailed, accurate mapping solutions.",
    emailinfo: "GIS@ctbci.org",
  },
  {
    id: 19,
    image: tour16,
    title: "Expertise and Support",
    ptitle: "Hydrology Mapping",
    isPaid: true,
    info: "Accurate hydrology mapping services: Precise analysis of water distribution, flow, and quality for informed decision-making in environmental planning and management.",
    emailinfo: "GIS@ctbci.org",
  },
  {
    id: 20,
    image: tour26,
    title: "Talk series",
    ptitle: "C-Talk",
    isPaid: false,
    info: "C-Talk series fosters conservation dialogue, uniting communities for environmental stewardship. Engage, learn, and act together for a sustainable future.",
    emailinfo: "info@ctbci.org",
  },
  {
    id: 21,
    image: tour23,
    title: "Expertise and Support",
    ptitle: "Research Assistance",
    isPaid: true,
    info: "Get expert Research Assistance for comprehensive data analysis, literature reviews, and academic guidance. Elevate your research with personalized support and insights.",
    emailinfo: "consbio@ctbci.org",
  },
  {
    id: 22,
    image: tour24,
    title: "Expertise and Support",
    ptitle: "Herbarium Assistance",
    isPaid: false,
    info: "Herbarium Assistance: Preserve plant specimens with precision. Our service organizes, identify, and digitizes collections for easy access and research.",
    emailinfo: "Plant@ctbci.org",
  },
  {
    id: 23,
    image: tour20,
    title: "Training",
    ptitle: "Participatory Rural Appraisal (PRA)",
    isPaid: true,
    info: "PRA empowers communities in development, engaging members in needs assessment using methods like mapping and walks.",
    emailinfo: "Social@ctbci.org",
  },
  {
    id: 24,
    image: tour25,
    title: "Training",
    ptitle: "Participatory Learning and Action (PLA)",
    isPaid: true,
    info: "PLA: Emphasizes learning and action, using participatory methods like storytelling and group discussions for community engagement.",
    emailinfo: "Social@ctbci.org",
  },
  {
    id: 25,
    image: tour22,
    title: "Training",
    ptitle: "Rapid Rural Appraisal (RRA)",
    isPaid: true,
    info: "RRA: Faster, cost-effective rural assessment method, emphasizing rapid, participatory insights on social, economic, and environmental conditions.",
    emailinfo: "Social@ctbci.org",
  },
  {
    id: 26,
    image: tour27,
    title: "Training",
    ptitle: "Asset-Based Community Development (ABCD)",
    isPaid: true,
    info: "ABCD mobilizes community strengths, prioritizing empowerment over deficits, fostering resilience, and leveraging local resources for development.",
    emailinfo: "socialecology@ctbci.org",
  },
  {
    id: 27,
    image: tour28,
    title: "Training",
    ptitle: "Social Impact Assessment (SIA)",
    isPaid: true,
    info: "SIA assesses social impacts, engaging communities for project understanding, mitigation, and positive outcome enhancement.",
    emailinfo: "socialecology@ctbci.org",
  },
  {
    id: 28,
    image: tour21,
    title: "Training",
    ptitle: "Community-Based Participatory Research (CBPR)",
    isPaid: true,
    info: "CBPR is a collaborative research approach involving community members, researchers, and stakeholders to address community-identified issues and generate practical, relevant knowledge.",
    emailinfo: "socialecology@ctbci.org",
  },
  {
    id: 29,
    image: tour29,
    title: "Training",
    ptitle: "Appreciative Inquiry (AI)",
    isPaid: true,
    info: "AI is a strengths-based approach that focuses on identifying and building on the positive aspects of individuals, organizations, and communities. It is often used in organizational development and community building.",
    emailinfo: "Social@ctbci.org",
  },
];
const Services = () => {
  const location = useLocation();
  const btnValue = location?.state?.btnValue || "All";
  const [members, setMembers] = useState(btnValue);
  const [course, setCourse] = useState("");
  const [tours, setTours] = useState(data);
  const [subject, setSubject] = useState(tours);
  console.log(btnValue);

  const btnStyle = {
    background: "transparent",
    border: "solid 2px gray",
    padding: "0.5rem",
    borderRadius: "15%",
  };
  const defaultStyle = {
    padding: "0.5rem",
    background: "transparent",
    borderRadius: "15%",
    border: "none",
  };
  //  useEffect(()=>{
  //   async fetchData(url){

  //     const newPeople =  await axios.get(url);
  //     setPeople(newPeople);
  //   }
  //   fetchData(url);
  //  },[])
  const handleTours = (title) => {
    if (title !== "All") {
      const newTours = data.filter((tour) => {
        return tour.title === title;
      });
      setTours(newTours);
      setCourse("");
      setSubject(newTours);
      setMembers(title);
      return;
    }
    setCourse("");
    setTours(data);
    setSubject(data);
    setMembers(title);
  };

  const handleAmount = (title) => {
    let newSubject;
    if (title === "paid") {
      newSubject = tours.filter((tour) => tour.isPaid === true);
      setCourse("paid");
    } else {
      newSubject = tours.filter((tour) => tour.isPaid === false);
      setCourse("free");
    }
    setSubject(newSubject);
  };

  useEffect(() => {
    handleTours(btnValue);
  }, [btnValue]);

  return (
    <section className="section" id="tours">
      <div className="section-title featured-services">
        <h2>
          featured <span>Services</span>
        </h2>
        <em>Every service charge powers diverse conservation missions, turning your support into a force for positive environmental impact!</em>
      </div>

      <div className="nav-center">
        <ul
          id="nav-links"
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("All")}
              style={members === "All" ? btnStyle : defaultStyle}
            >
              {" "}
              All{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Assessment")}
              style={members === "Assessment" ? btnStyle : defaultStyle}
            >
              {" "}
              Assessment{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Training")}
              style={members === "Training" ? btnStyle : defaultStyle}
            >
              {" "}
              Training{" "}
            </button>
          </li>
          
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Activities")}
              style={members === "Activities" ? btnStyle : defaultStyle}
            >
              {" "}
              Activities{" "}
            </button>
          </li>


          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Technical Support")}
              style={members === "Technical Support" ? btnStyle : defaultStyle}
            >
              {" "}
              Technical Support{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Expertise and Support")}
              style={
                members === "Expertise and Support" ? btnStyle : defaultStyle
              }
            >
              {" "}
              Expertise & Support{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Talk series")}
              style={members === "Talk series" ? btnStyle : defaultStyle}
            >
              {" "}
              Talk
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-center">
        <ul
          id="nav-links"
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleAmount("paid")}
              style={course === "paid" ? btnStyle : defaultStyle}
            >
              {" "}
              paid{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleAmount("free")}
              style={course === "free" ? btnStyle : defaultStyle}
            >
              {" "}
              free{" "}
            </button>
          </li>
        </ul>
      </div>

      <div className="section-center featured-center">
      {subject.map((tour) => {
          const { id, image, title, ptitle, info, emailinfo } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  {members !== title && <h5> {title}: </h5>}
                </div>
                <h4>{ptitle}</h4>
                <p>{info}</p>
                <a href={`mailto:${emailinfo}`}>Contact: {emailinfo}</a>
              </div>
            </article>
          );
        })}

        {/* <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article> */}
      </div>

    </section>
  );
};
export default Services;
