import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, desc, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
      </div>
      <div className="proj-imgbx">
        <h4>{title}</h4>
        <span>{desc}</span>
      </div>
    </Col>
  );
};
