/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SwiperCentered from '../Swiper/SwiperCentered'
import { TextField } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Collabs = () => {

    const collabSection = [
        { imgUrl: `/collaborate1.png`, heading: `Thinking Big`, content: `After digging deep to understand holistically your challenges and business objectives, we chart your technology path that will keep your business future-proof.`, viewSide: `left` },
        { imgUrl: `/collaborate2.png`, heading: `Starting Small`, content: `At the beginning of the transformation journey, we start with simple use cases that bring you immediate results.`, viewSide: `right` },
        { imgUrl: `/collaborate3.png`, heading: `Creating Value Fast`, content: `We then build an MVP, testing the first use cases and collecting feedback. Along the way, we introduce enhancements to align business deliverables and add new use cases.`, viewSide: `left` },
        { imgUrl: `/collaborate4.png`, heading: `Innovating at Scale`, content: `We are expanding the functionality of your system, keeping it flexible on the tech stack, hugely adaptable to humans, and easily scalable to evolve along with your business growth.`, viewSide: 'right' },
    ]

    const sliderData = [
        { imgUrl: `/AI.jpg`, heading: `Revolutionizing Industries with AI Technology` },
        { imgUrl: `/brain.jpg`, heading: `Unleashing the Power of the Intelligent Mind: Exploring the Boundaries of Human Potential` },
        { imgUrl: `/slider1.jpg`, heading: `Mastering the Art of Software Development: Crafting Tomorrow's Digital Solutions Today` },
        { imgUrl: `/slider2.jpg`, heading: `Igniting Creativity: Unveiling the Power of Innovative Ideas` },
        { imgUrl: `/slider3.jpg`, heading: `Pioneering Mobile Experiences: Crafting the Future of App Development` },
        { imgUrl: `/slider4.jpg`, heading: `Gateway to Tomorrow: Exploring Advanced Portals for the Digital Age` },
        { imgUrl: `/slider5.jpg`, heading: `Elevating Data: Unveiling the Potential of Cloud Database Services` },
        { imgUrl: `/slider6.jpeg`, heading: `Fortifying Digital Fortresses: Prioritizing Authentication and Security in the Cloud` },
        { imgUrl: `/slider7.jpg`, heading: `Intelligent Solutions: Empowering Industries with Smart Software Innovations` },
    ]

    return (
        <div style={{backgroundColor:'#f1f1f3'}}>
            <div className='w-100 bg-black py-5' >
                <div className="container py-5">
                    <h2 className='text-white pb-5'>How we collaborate with you</h2>
                    <div className="row">
                        {
                            collabSection?.map((val,key)=>(
                                <div key={key} className="col-md-6 mb-5">
                                    <div className="row">
                                        { val?.viewSide == 'right' && <div className="col-md-1"></div> }
                                        <div className="col-md-3">
                                            <img src={val?.imgUrl} className='w-100 max-width-150-on-phone' alt={val?.imgUrl} />
                                        </div>
                                        <div className="col-md-8">
                                            <h3 className='text-white'>{val?.heading}</h3>
                                            <div className='text-secondary fw-bold'>{val?.content}</div>
                                        </div>
                                        { val?.viewSide == 'left' && <div className="col-md-1"></div> }
                                    </div>
                                </div>
                            ))
                        }

                        <div className="col-md-4">
                            <button type='button' className='btn btn-lg bg-white text-dark no-rounded w-100 fw-bold'>Let's Collaborate</button>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </div>
            </div>
            <div className='w-100 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                            <h1 className='pb-5'>Latest Thinking</h1>
                        </div>
                    </div>
                </div>
                <SwiperCentered sliderData={sliderData} />
            </div>
            <div id='contact_us' className="w-100 contact-us py-5">
                <div className="container text-white py-5">
                    <br /><br /><br />
                    <h1>Contact us</h1>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <TextField
                                    id="name"
                                    label="Name"
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        style: { color: '#fff', borderBottom: '1px solid #fff' },
                                        placeholderTextColor: '#fff'
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        style: { color: '#fff', borderBottom: '1px solid #fff' },
                                        placeholderTextColor: '#fff'
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        style: { color: '#fff', borderBottom: '1px solid #fff' },
                                        placeholderTextColor: '#fff'
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextField
                                    id="message"
                                    label="Message"
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        style: { color: '#fff', borderBottom: '1px solid #fff' },
                                        placeholderTextColor: '#fff'
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }
                                    }}
                                />
                            </div>
                            <div className="col-md-12 mt-4">
                                <button type='button' className='btn btn-lg bg-white text-dark no-rounded w-100 fw-bold'>Send Message</button>
                            </div>
                        </div>
                    </form>
                    <br /><br /><br />
                </div>
            </div>

            <div className="w-100 bg-black py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-2 mb-5">
                            <img src="/logo.png" className='w-50' alt="/logo.png" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-9 mb-5">
                            <h2 className='text-white'>We are an enterprise software development company that is inspired by the future</h2>
                        </div>
                        <div className="col-md-2 mb-5">
                            <h3 className='text-white'>Offices:</h3>
                            <h5 className='text-secondary'>Patel Nagar, City Center, Gwalior, M.P., India</h5>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-9 mb-5">
                            <h5 className='text-white'>
                                <a href="mailto:divaishisoftdevsolutions@gmail.com" target='_blank' className='text-white text-decoration-none'>
                                    <EmailIcon color='white' /> divaishisoftdevsolutions<AlternateEmailIcon color='white' />gmail.com
                                </a>
                            </h5>
                            <h5 className='text-secondary'>
                                <a href="tel:+918770089556" target='_blank' className='text-secondary text-decoration-none'>
                                    <LocalPhoneIcon /> +91 87700 89556
                                </a>
                            </h5>
                            <h5 className='text-secondary'>
                                <a href="tel:+919752736273" target='_blank' className='text-secondary text-decoration-none'>
                                    <LocalPhoneIcon /> +91 97527 36273
                                </a>
                            </h5>
                        </div>
                        <div className='text-secondary d-flex flex-wrap align-items-center justify-content-between'>
                            <div><small>Privacy Policy</small></div>
                            <div><small>©{new Date().getFullYear()} DivaishiSoft Development Solutions</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collabs