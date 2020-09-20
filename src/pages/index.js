import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I have experience in middleware support for Java web based applications. Currently working with HSDI (HSBC Soft Dev of India)at Pune as App support and integration Consultant.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Consultant Specialist</h3>
              <div className="subheading mb-3">HSDI (HSBC SOFT DEV OF INDIA) </div>
              <p>
              <ul>
              <li>Integrate application with other channel partner systems in Bank.</li>
              <li>Co-ordinate with Backend channel systems like HUB, core banking, GRS, File transmission, Chanel systems to help Testing team for required setup and environment availability. </li>
              <li>Application release deployment with co-ordination and planning./li</li>
              <li>Loging Bugs/issues in Jira, followup on the same towards fixing and code releases.</li>
              <li>Coordinate with vendor to resolve jira issues and deliveries.</li>
              <li>Bash script for small in-house work around tasks required for applications.</li>
              <li>ControlM v9 job setup and monitor.</li>
              <li>CICD pipeline setup in progress with help of Git, Jenkins and Ansible</li>
              <li>Handling basic DB related tasks with help help of DBA.</li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Aug 2019 - Till Date</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">WAS & WPS support Offshore</h3>
              <div className="subheading mb-3">LTI (L & T Infotech Ltd.)</div>
              <p>
                <ul>
              <li>Providing administrative support for IBM Websphere Application server & IBM WebSphere Portal Server, IBM HTTP Server </li>
              <li>Production changes </li>
              <li>Handling Incidents Tickets for housekeeping, application issues, access issues, performance issues</li>
              <li>Fix pack upgrades, hardening etc</li>
              <li>SSL certificate updates for WebSphere environments</li>
              <li>Automating restarts of application servers</li>
              <li>Installation and configuration of WebSphere cell using Scripting framework.</li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2014 – July 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">WAS support Offshore team</h3>
              <div className="subheading mb-3">IBM India Pvt. Ltd., Bangalore </div>
              <p>
                <ul>
              <li>Providing administrative support for IBM Websphere Application server and IBM HTTP Server as and when informed by Customer. </li>
              <li>Support includes providing assistance for production changes, incidents troubleshooting, fix pack upgrades, housekeeping work.</li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec  2013 – Sep 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Websphere Admin </h3>
              <div className="subheading mb-3">Wipro Infotech Ltd</div>
              <p>
              <ul>
              <li>Work on assigned tickets for configuration changes in dmgr console, restarting the services, deployment of application, ldap users managements, setting up security for websphere, analysis of JVM  logs, submit, manage, monitor PMR, gc related issues, analysis of heap dumps, analysis of thread dump, analysis of JVM performance with TPM, configuration backup, updating fixpacks, production changes, IHS related issues, httpd.conf and plugin-cfg.xml file changes, IHS access and error log analysis, IHS and was certificate password update, trustore update in .kdb and .jks certificate etc.</li>
              <li>Work on assigned incidents for production boxes alerts of high CPU utilization, IHS request monitoring, disk space full issues, application slow response or 500 errors, etc.</li>
              <li>Prepare application availability checklist as per schedule and share the same with customer</li>
              <li>Work on documentation for customer specific activity.</li>
              <li>Provide service improvement plans.</li>
              <h5><u>Added responsibilities at Wipro Technologies Pune</u></h5>
              <li>Preparing Shift roster for Team Members</li>
              <li>Providing MIS reports for managers related with effort hours calculation.</li>
              <li>Provide Man hours efforts calculation for the team to the Management.</li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2008 – Dec 2013</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Openview Technologies Pvt. Ltd</h3>
              <div className="subheading mb-3">IT Support Engineer</div>
              <p>
              <ul>
              <li>Prepare daily ‘DCL’ report for IT head office located at Mumbai.</li>
              <li>Maintain & monitor Lease Line connectivity.</li>
              <li>Administration of Windows 2K server.</li>
              <li>Troubleshooting of Hardware, Network, Printer, Switch based problems.</li>
              <li>Maintain, monitor & update SAV Server & Clients.</li>
              <li>Monitor & install Microsoft update for OS.</li>
              <li>Troubleshoot Outlook related problems.</li>
              <li>Daily backup of File Servers & Mail Serves through Symantech Veritas 10D.</li>
              <li>Monitor & Manage Mdemoan Mail Exchange server.</li>
              <li>Maintain Inventory of all IT Material.</li>
              <li>Communicate with MTNL, HP, HCL for Legal requirements.</li>
              <li>Co-ordinate with Head Office IT Department.</li>
              <li>Handle issues related with SAP Front End 7.</li>              
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2007 –February 2008</span>
            </div>
          </div>




        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          <li><b>M. Com</b> – From MKCL Pune, Pune University in 2009-2010.</li>
          <li><b>B. Com.</b> - From B.Y.K. College, Nasik, from Pune University, Secured 58% in 2002-03.</li>
          <li><b>H.S.C</b> –  From B.Y.K. College, Nasik, from Pune University, Secured 57% in 1999-2000.</li>
          <li><b>S.S.C</b> - From T.J. Chuvan Bitco High School, Nasik, from Maharashtra 57% 1997-98.</li>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul>


          <li><b>Platform :</b> 	Aix 6.1, Red Hat Ent Linux 5, Win server.</li>
          <li><b>Languages:</b>	Bash Unix scripting & Basic Python  Scripting</li>
          <li><b>Applications:</b>	IBM Websphere Application Server 6.1, 7 & 8 IBM HTTP Server 6.1, 7 & 8.5 Tomcat Server 7, Weblogic 10.3, 12c. Apache Web Server 2.2, MQ 7, IIS-6, IBM Update installer, IBM Installation Manager.</li>
          <li><b>Tools:</b>		Putty, xManager, WinSCP, wsadmin, bash, RDP, BMC Remedy 7.5, HP Sitescope Monitoring, Dell Foglight Monitoring, LDAP Admin,  ADExplorer.</li>
          <li><b>DevOps Tools:</b>	Jenkins, GitHub, Ansible, Basic Docker and Kubernetes  </li>
          <li><b>Known Tech:</b>	Apache Web Server, Apache Application Server,  Websphere </li>
          <li><b>Basic knowledge :</b>		Edge Components, IBM Installation Manager.</li>
	
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="Certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul>
          <li>DevOps Training and Certification completed from Intellipaat</li>
            <li>IBM Certified Specialist for AIX Systems Support AIX 5.3L</li>
            <li>IBM Websphere Appliation Server Certified WAS 6.1 & 7.0</li>
            <li>IBM Websphere Appliation Server Certified WAS ND 8.5.5</li>
            <li>RHEL 5 Certified</li>
            <li>ITIL Foundation V3 Certification</li>

          </ul>  

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >

      </section>
    </div>
  </Layout>
);

export default IndexPage;
