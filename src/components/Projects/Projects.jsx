import React from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BREAKPOINTS } from '../../style/constants';
import { useLilac } from '../../hooks';

const ContainerProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.hd}) {
    margin-top: 50px;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    grid-area: projects;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 60px;
  margin-top: 50px;
  overflow: hidden;
`;

const Card = styled.div`
  transition: transform 300ms ease 100ms;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 5px 58px -7px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 40px 40px 40px 40px;
  width: 280px;

  p {
    font-family: Source Sans Pro, sans-serif;
    color: var(--color-primary);
  }

  &:hover {
    transform: scale(1.1) !important;
  }

  transform: ${({ selected }) => `translate(${selected},0);`};

  @media (max-width: ${BREAKPOINTS.lilac.potato}) {
    padding: 40px 15px 30px 15px;
    max-width: 260px;

    &:hover {
      transform: scale(1) !important;
    }
  }
`;

const ImageButton = styled.div`
  height: 150px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  img {
    width: ${({ imageWidth }) => (imageWidth ? `${imageWidth}rem;` : '10rem;')};
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  letter-spacing: 1px;
  padding: 1rem;

  @media (max-width: ${BREAKPOINTS.lilac.potato}) {
    text-align: left;
    margin-top: 1rem;
    padding: 0rem 1rem 0rem 1rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;

  @media (max-width: ${BREAKPOINTS.lilac.potato}) {
    margin-top: 1rem;
  }
`;

export const Projects = ({ projects }) => {
  useLilac();

  return [
    <ContainerProjects>
      <h1>proyectos</h1>
      <motion.div
        drag="x"
        style={{ width: 1500 }}
        dragConstraints={{ left: -600, right: 600 }}
      >
        <CardContainer>
          {projects.map(
            ({
              id,
              cta,
              name,
              imageWidth,
              brandImage,
              description,
            }) => (
              <Card key={id}>
                <ImageButton imageWidth={imageWidth}>
                  <a
                    target="_blank"
                    href={cta.href}
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={`Logo de ${name}`}
                      src={`/images/brand/${brandImage}`}
                    />
                  </a>
                </ImageButton>
                <DescriptionContainer>
                  <p>{description}</p>
                </DescriptionContainer>
                <ButtonContainer>
                  <lilac-button
                    inverted
                    target=""
                    href={cta.href}
                    color="secondary"
                  >
                    {cta.title}
                  </lilac-button>
                </ButtonContainer>
              </Card>
            ),
          )}
        </CardContainer>
      </motion.div>
    </ContainerProjects>,
  ];
};

Projects.propTypes = {
  projects: PropTypes.arrayOf([object]).isRequired,
};
