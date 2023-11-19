---
title: CV
---

import DocusaurusImageUrl from '@site/static/img/profile-pic.png';

export const Block = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '4px',
      color: '#fff',
      padding: '0.4rem',
    }}>
    {children}
  </span>
);

export const BlockF = ({ children, color, fillPercentage }) => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    width: '120px',
    backgroundColor: '#fff', // Default background color
    borderRadius: '4px',
    border: '2px solid #000', // Add a 2px black border
    overflow: 'hidden',
  };

  const fillStyle = {
    flex: `0 0 ${fillPercentage}%`,
    backgroundColor: color,
    color: '#fff',
    padding: '0.4rem',
    borderRadius: '2px', // Adjust border radius to match the container
  };

  return (
    <div style={containerStyle}>
      <div style={fillStyle}>{children}</div>
    </div>
  );
};

<img src={DocusaurusImageUrl} width="24%" />

# Andrei Solovev

Hi! My name is Andrei. Currently, I'm employed at Samokat, an instant grocery delivery service, where I serve as a Delivery Manager. Before this role, I had extensive experience at Accenture as an Analyst (handling various tasks from QA to BI), as well as at Sber as a Data Analyst before joining Samokat as a System Analyst. This diverse journey has equipped me with a range of skills and experience with various technical solutions. At present, I am passionate about designing new processes and optimizing existing ones, not forgetting about satisfaction of my team, management, and stakeholders 😏 Feel free to reach out if you have anything to discuss or if you have any questions about my personal experience!

## 💼 Professional Experience 

#### Delivery Manager @ Samokat.tech <Block color = "#1E1E1E">since Jun 2023</Block>

:::info[**Main focus**]
Converting business tasks to data processes regarding infrastructure products of an instant grocery delivery company
:::

* Leading 2 cross-functional teams (less than 15 people each) of analysts, developers, QA, BI and support specialists
* Planning sprints & people demand
* Conducting final interviews and making decisions regarding potential team members

#### Senior System Analyst @ Samokat <Block color = "#1E1E1E">Sep 2022 - Jun 2023</Block>

:::info[**Main focus**]
System analysis regarding infrastructure products of an instant grocery delivery company
:::

* Did system analysis, wrote tech specs of services & API contracts and tracked its development
* Proposed drafts of near-real-time services architecture and discussed it with data architects
* Conducted technical interviews and shared interview feedback regarding SA candidates

#### Senior Data Analyst @ Sber <Block color = "#1E1E1E">Dec 2020 - Sep 2022</Block>

:::info[**Main focus**]
Data analysis regarding project of delivering banking services to client
:::

* Performed analysis within different systems, built new data sources, did ad-hoc analysis
* Developed and conducted support of Python models used for forecasting bank card deliveries
* Did system analysis, wrote tech specs of data marts

#### Analyst @ Accenture <Block color = "#1E1E1E">Apr 2017 - Dec 2020</Block>

:::info[**Main focus**]
Different type of analysis on projects within retail and delivery services industries
:::

* Performed business- and system-analysis
* Wrote test scenarios, filled in bug reports
* Built visualizations in Tableau according to business users needs and supported them

## 🥷🏼 Skills

#### Management

* Project delivery
* Cross-functional teams leadership
* Interviewing

#### IT
* SQL
* Python
* Tableau
* System & business analysis
* Near-real time architecture design
* Integrations design (sync/async)

## 🎓 Education

#### Higher School of Economics @ Moscow, Russia <Block color = "#1E1E1E">Sep 2017 - Jun 2019</Block>
Financial Analyst (CFA Partner Program) master's degree in English

#### Hogskolan i Boras @ Boras, Sweden <Block color = "#1E1E1E">Sep 2015 - Feb 2016</Block>
ERASMUS exchange program in English

#### Plekhanov Russian Economic University @ Moscow, Russia <Block color = "#1E1E1E">Sep 2013 - Jun 2017</Block>
Corporate Finance bachelor's degree in English

## 🪩 Life

#### Languages
* English <BlockF color="#EB4863" fillPercentage={90}></BlockF>
* Russian <BlockF color="#EB4863" fillPercentage={100}></BlockF>
* Spanish <BlockF color="#EB4863" fillPercentage={10}></BlockF>

#### Passions
* Playing 1 min chess blitzes (challenge me on [chess.com](https://www.chess.com/member/s0l0vy3v) 😉)
* Optimising both life & work with various productivity hacks
* Compulsive shopping

## 📮 Contacts

- **[LinkedIn](https://www.linkedin.com/in/andreisolovev)**
- **[Telegram](https://t.me/andreisolovyev)**