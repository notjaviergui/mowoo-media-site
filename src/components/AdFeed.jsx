import React from "react";
import { Link } from "react-router-dom";
export const projects = [
  {
    title: "Inopera",
    category: "Product creative",
    image: "/images/inopera-creative.webp",
    alt: "Inopera headphones on a wooden desk",
    className: "project-inopera",
  },
  {
    title: "Mayu",
    category: "Brand presence",
    image: "/images/Clients/Mayu.jpg",
    alt: "Mayu by Aromas del Perú brand identity",
    className: "project-mayu",
  },
  {
    title: "Miami Mojito Company",
    category: "Brand identity",
    image: "/images/Clients/MiamiMojito.jpeg",
    alt: "Miami Mojito Company illustrated identity",
    className: "project-mojito",
  },
  {
    title: "Suches Cabins",
    category: "Brand presence",
    image: "/images/Clients/Suches Cabins.jpeg",
    alt: "Suches Cabins mountain and cabin identity",
    className: "project-cabins",
  },
  {
    title: "Intl Rentals",
    category: "Brand identity",
    image: "/images/Clients/INLT rentals.png",
    alt: "Intl Rentals colorful identity",
    className: "project-rentals",
  },
];
export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-image ${project.className}`}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width="700"
          height="700"
        />
      </div>
      <div className="project-caption">
        <h3>{project.title}</h3>
        <span>{project.category}</span>
      </div>
    </article>
  );
}
export default function AdFeed() {
  return (
    <section className="work-section section-shell" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A glimpse of the creative</p>
          <h2>
            Different brands.
            <br />
            The same attention to detail.
          </h2>
        </div>
        <Link to="/pages/clients" className="text-link">
          View our work <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="project-grid">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
