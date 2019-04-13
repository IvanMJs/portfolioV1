/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Blog from '../views/Blog'

import avatar from '../images/perfil.jpeg'
// eslint-disable-next-line no-unused-vars
import blog from '../images/blog.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi!, <br /> I'm Iván Meyer.
        </BigTitle>
        <Subtitle>I'm developer, curious, observer and lover of technology.I make
          this web with <a href="https://reactjs.org/">React</a>  and <a href="https://www.gatsbyjs.org/">Gatsby</a>
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>
          Projects and more in my <a href="https://github.com/ivanmeyer91">Github</a>
        </Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Quoting"
            link="https://cotizadorprestamo.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
                Loan quote made in React.
          </ProjectCard>
          <ProjectCard
            title="Playlist-in-JS"
            link="https://ivanmeyer91.github.io/Lista-de-reproduccion-en-JS/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            It's a list made with a bit of javascript, I put some of my favorite songs, I hope you like it!
          </ProjectCard>
          <ProjectCard
            title="Dj Machine"
            link=" https://bateria.netlify.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            It's done in javascript, start the loop and enjoy
          </ProjectCard>
          <ProjectCard
            title="Travel agency"
            link="https://github.com/ivanmeyer91/AgenciaDeViajes"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Travel agency that is made of a course, where it is done with nodes and a database connection.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Blog offset={2.2}>
        <BigTitle>
          <h1>My blog</h1>
        </BigTitle>
        <Subtitle>
          Things of my interest and tastes and TECHNOLOGY <a href="Blog">here</a>
        </Subtitle>
      </Blog>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Iván" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts.But I'm studying and
            learning a lot from him.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I spend many personal hours in learning new technologies and their evolution I like challenges, teamwork.
          Currently I work at <a href="https://cablasociados.com/#_">CABL & Asociados</a> as a Web Developer During one
          summer I discovered the possibilities offered by communication networks and then I realized how much I enjoyed
          it when translating the technology into a language that the public understood So I started with both inside
          and remote courses and started developing to be able to show my skills on what I can offer
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ivanmeyer1991@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.instagram.com/ivan_meyer_/">Instagram</a> &{' '}
            <a href="https://www.facebook.com/ivan.meyer3">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Made with gatsby and react.{' '}
          <a href="https://github.com/ivanmeyer91/portfolioV1">Github Repository</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
