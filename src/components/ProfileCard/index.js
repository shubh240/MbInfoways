import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ProfileCard = ({ name, image, distance, bgColor }) => {
  return (
    <Card className="text-center border-0">
      <div
        style={{
          backgroundColor: bgColor || 'transparent',
          width: '150px',
          height: '150px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <Card.Img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Near {distance} Miles</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard