import React from "react";
import "./About.css";

const Accordion = () => {
  return (
    <div>
      <h2 className="faq-heading">FAQs</h2>{" "}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              What is SoftSell?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                SoftSell is a technology-driven company that provides
                cutting-edge software solutions, IT consulting, and digital
                transformation services for businesses of all sizes. We
                specialize in custom software development, cloud integration,
                CRM/ERP solutions, and technical support.
              </strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              What services does SoftSell offer?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                We offer a wide range of services, including:
                <br />
                1. Custom software development
                <br />
                2. Mobile and web application development
                <br />
                3. IT consulting
                <br />
                4. Cloud services (AWS, Azure, Google Cloud)
                <br />
                5. CRM/ERP implementation
                <br />
                6. Maintenance and technical support
                <br />
                7. UI/UX design
                <br />
                8. Cybersecurity solutions
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive">
              How do I contact SoftSell for a quote or consultation?
            </button>
          </h2>
          <div
            id="collapsefive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                You can reach out via our website contact form, email us at
                info@softsell.com, or call our support line. We offer a free
                initial consultation to discuss your goals and propose a
                solution.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour">
              Does SoftSell provide ongoing maintenance and support?
            </button>
          </h2>
          <div
            id="collapsefour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                Yes. We offer comprehensive post-launch maintenance, bug fixes,
                performance optimization, and long-term support packages
                tailored to your needs.
              </strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Who can benefit from SoftSell’s services?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                Our services are ideal for startups, SMEs, and large enterprises
                across industries such as retail, healthcare, finance,
                education, and logistics.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
