import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProfileCard from '../ProfileCard';

const HomePage = () => {

    const profiles = [
        { name: 'John', image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 5, bgColor: 'lightblue' },
        { name: 'Jane', image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 10, bgColor: 'lightgreen' },
        { name: 'Alex', image:  'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 2, bgColor: 'lightyellow' },
        { name: 'Chris', image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 8, bgColor: 'lightpink' },
        { name: 'Sam', image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 3, bgColor: 'lightcoral' },
        { name: 'Mia', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 6, bgColor: 'lightgray' },
        { name: 'Eli', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 7, bgColor: 'lightblue' },
        { name: 'Taylor', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 9, bgColor: 'lightgreen' },
        { name: 'Jordan', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 4, bgColor: 'lightyellow' },
        { name: 'Jordan', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 4, bgColor: 'lightyellow' },
        { name: 'Jordan', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 6, bgColor: 'lightyellow' },
        { name: 'Jordan', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600', distance: 4, bgColor: 'lightyellow' },
      ];
    

    return (
        <div className="home-page" style={{ backgroundColor: '#f9f9f9' }}>
            <Container className="py-5">
                <Row className="align-items-center">

                    {/* LEft Column for Welcome Section */}
                    <Col xs={12} md={6} className="text-center">
                        <div className="welcome-section">
                            <h1>
                                Hi
                            </h1>

                            {/* Container for the profile image and text */}
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Profile"
                                    className="rounded-circle"  // Optional: Make it a circle if you like
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}  // Control the size and cropping
                                />
                            </div>

                            <p className="lead"><span className="text-danger">Jon Doe!</span> Welcome Back 👋</p>
                            <h2>Meet the <span className="text-danger">Chosen One</span></h2>
                        </div>
                    </Col>


                    {/* Right Column for Profiles */}
                    <Col xs={12} md={6}>
                        <Container>
                            <Row>
                                {profiles.map((profile, index) => (
                                    <Col key={index} xs={12} sm={6} md={4} lg={2}>
                                        <ProfileCard
                                            name={profile.name}
                                            image={profile.image}
                                            distance={profile.distance}
                                            bgColor={profile.bgColor}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <footer className="mt-5 p-4 text-white" style={{ backgroundColor: '#E53865' }}>
                <Row>
                    <Col xs={12} md={6}>
                        <Container>
                            <Row>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>How It Works</div>
                                </Col>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>FAQ</div>
                                </Col>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>About Us</div>
                                </Col>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>Terms & Conditions</div>
                                </Col>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>Privacy Policy</div>
                                </Col>
                                <Col xs={4} sm={2} md={2}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>Support</div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col xs={12} md={6} className="text-center">
                        <div className="d-flex justify-content-end mb-3">
                            {/* Google Play Button */}
                            <Button variant="outline-secondary" size="sm" className="m-2 border-white text-white">
                                <i className="bi bi-google-play"></i> Google Play
                            </Button>

                            {/* App Store Button */}
                            <Button variant="outline-secondary" size="sm" className="m-2 border-white text-white">
                                <i className="bi bi-app-store"></i> App Store
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div className="text-white">
                    <p style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>
                        © 2023 Hukup All Rights Reserved
                    </p>
                </div>

            </footer>


        </div>
    );
};

export default HomePage;


