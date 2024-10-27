import { useContext } from 'react';
import { ThemeContext } from '../App'; // Adjust the import based on your folder structure

const Footer = () => {
  const theme = useContext(ThemeContext);

  const footerStyles = {
    backgroundColor: theme === 'dark' ? 'rgb(22, 24, 29)' : '#fff',
    color: theme === 'dark' ? '#fff' : 'rgb(22, 24, 29)',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyles}>
      <p>
        "The best way to predict the future is to create it." - Peter Drucker
      </p>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
