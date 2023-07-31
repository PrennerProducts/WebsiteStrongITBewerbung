import React from 'react';

const MyCard = ({ imageSrc, title, description, listItems }) => {
  return (
    <div
      style={{
        borderRadius: '30px',
        margin: '10%',
        marginTop: '7%',
        marginBottom: '0px',
        border: '1px solid #ccc',
        padding: '1rem',
        backgroundColor: 'rgba(14, 12, 12, 0.719)',
        elevation: '10',
        fontFamily: 'Source Code Pro, monospace',
        fontWeight: '400',
        color: 'white',
      }}
    >
      <img
        src={imageSrc}
        alt="card.png"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '30px',
        }}
      />
      <div style={{ marginTop: '1rem' }}>
        <h3>{title}</h3>
        <p style={{ textAlign: 'left' }}>{description}</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          {listItems.map((item, index) => (
            <li key={index} style={{ textAlign: 'left' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCard;
