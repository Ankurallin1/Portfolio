import React from "react";
import PageContainer from "../../Components/PageHeaderContainer/index";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { resume } from "../../utils/ResumeInfo";
import './style.css';
import {MdWork} from 'react-icons/md';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageContainer
                HeaderText="My Resume"
                icon={<BsInfoCircleFill color="#50ceb1" size={40} />}
            />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resume.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)',
                  size:'38px'
                }}
                date="June 2023 - present"
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',
                  size:'98px',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
          {resume.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                date=""
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
