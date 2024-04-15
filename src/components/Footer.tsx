import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px', // Reduced padding on sides
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '100%', // Adjusted width to fill the container
  padding: '0 20px', // Added padding on sides
  display: 'flex',
  alignItems: 'center', // Center content vertically
  justifyContent: 'space-between', // Distribute content evenly
  flexWrap: 'wrap', // Allow content to wrap to new line on small screens
};

const iconContainerStyle: React.CSSProperties = {
  display: 'flex',
  marginLeft:'50px'
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem', // Reduced icon size
  margin: '0 10px',
  color: '#D80000', // Changed icon color to #D80000
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  margin: '5px 0', // Adjust margin for better spacing
  padding: '5px 10px', // Added padding
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
      <p style={{ marginLeft: '10px' }}>
      &copy; 2024 <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span>
       </p>

        <div style={iconContainerStyle}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={iconStyle} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><YouTubeIcon style={iconStyle} /></a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={iconStyle} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={iconStyle} /></a>
        </div>
        <div>
          <a href="/refund-cancellation" style={linkStyle}>R&C Policy</a>
          <a href="/terms-of-use" style={linkStyle}>Terms of Use</a>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
