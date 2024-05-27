/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable indent */
import React, { useState } from 'react';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ContainerFaq = styled('Box')({
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
//   maxWidth: '80vw',
  height: '100%',
  position: 'relative',
  paddingTop: '15vh',
  backgroundColor:'#f1f1f3',
paddingBottom:'5%'
});

const SectionFaq = styled('Box')({
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  padding: 0,
  display: 'flex',
    maxWidth: '80vw',
    margin: 'auto',


});

const SectionHeading = styled(Typography)({
  color: 'var(--secondary_dark__surface)',
  textAlign: 'left',
  wordBreak: 'normal',
  overflowWrap: 'break-word',
  maxWidth: '100rem',
  marginTop: 0,
  marginBottom: 0,
});

const ContentContainer = styled('Box')({
  width: '100%',
});

const AccordionWrapper = styled('Box')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const ProcessAccordionHeading = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const AccordionHeading = styled(Typography)({
  gridColumnGap: '.75rem',
  color: 'var(--secondary_dark__surface)',
  textTransform: 'none',
  wordBreak: 'normal',
  flex: '1 auto',
  alignItems: 'center',
  marginTop: '1rem',
  marginBottom: '1rem',
  fontWeight: 700,
  display: 'flex',
  fontSize:'2rem',
  marginLeft: '30px',
  whiteSpace: 'normal',
});

const SubheadingAccordion = styled(Typography)({
  color: 'var(--base_dark)',
  marginTop: 0,
  marginBottom: '2rem',
  paddingLeft: '4rem',
  position: 'sticky',
});

const FaqAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState({});
  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const accordionData = [
    { header: 'Innovation Consulting', data: `Make your digital transformation journey super simple, safe, and aligned with your specific business needs. We're good at strategy planning for both enterprises and SMBs, IT audit, business process analysis, and more.` },
    { header: 'Digital Transformation', data: `Achieve lower costs, utmost scalability and maximum velocity with our legacy software modernization, cloud, and DevOps services. Our enterprise software development company is here to help you remove the roadblocks to innovation.` },
    { header: 'Software Engineering', data: `Build enterprise software solutions that perform. We can cover you along the whole way or fill in specific skill gaps in business analysis, UX/UI, testing, development, or support across web, mobile, desktop, cloud, and embedded platforms.` },
    { header: 'Big Data & Analytics', data: `Use your torrents of data to drive decision-making across the company. From Data Governance & Data Management to Data Analytics and Data Science, we make business, not IT, own your data.` },
    { header: 'Android Development', data: `Android applications come with their set of user base and customer expectations. We, as a leading android applications development company, help businesses align their ideas with those expectations and an Android-specific user base. Our android apps development services help you choose the best Android platform and the way you can top the store.` },
    { header: 'Extended Reality', data: `Deliver immersive experiences through AR, VR, or MR to create new products, boost productivity, or launch into the metaverse. XR solutions help you bypass distance challenges and be innovative for real.` },
  ];


  return (
    <ContainerFaq >
      <SectionFaq>
        <SectionHeading variant="h2" >
          FAQ
          <br />
        </SectionHeading>
        <ContentContainer>
          <AccordionWrapper>
            <Box id="w-node-_435c6f0f-0ff4-744e-e35a-0d0d1f5f22fc-982880b6">
              {accordionData.map((val, index) => (
                <Accordion
                  key={index}
                  expanded={openAccordion[index]}
                  onChange={() => toggleAccordion(index)}
                  sx={{
                    backgroundColor: 'var(--base-light__surface) !important',
                    boxShadow: 'none !important',
                  }}
                >
                  <AccordionSummary
                    expandIcon={null} // Remove the default expand icon
                    aria-controls={`panel${index + 1}-content`}
                
                  >
                    <ProcessAccordionHeading>
                      <div>
                        {openAccordion[index] ? (
                          <RemoveSharpIcon sx={{ fontSize: 40, color: 'var(--base-light__border)' }} />
                        ) : (
                          <AddSharpIcon sx={{ fontSize: 40, color: 'var(--base-light__border)' }} />
                        )}
                      </div>
                      <AccordionHeading variant="h3">{val.header}</AccordionHeading>
                    </ProcessAccordionHeading>
                  </AccordionSummary>
                  <AccordionDetails>
                    <SubheadingAccordion variant="body1">{val.data}</SubheadingAccordion>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </AccordionWrapper>
        </ContentContainer>
      </SectionFaq>
    </ContainerFaq>
  );
};

export default FaqAccordion;
