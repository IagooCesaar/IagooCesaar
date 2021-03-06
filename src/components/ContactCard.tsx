import React from 'react';
import { 
  FiInstagram,
  FiTwitter,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMessageCircle,
  FiGlobe
} from 'react-icons/fi'

import '../styles/components/contactCard.css';

interface ContactCardProps {
  cardData: {
    kind: string,
    content: string
  }
}

const ContactCard: React.FC<ContactCardProps> = ({cardData}) => {
  const {content, kind} = cardData;
  
  function myIcon() {
    const size = "68px"
    const color = "#fff";

    console.log(kind)

    switch(kind.toLowerCase()) {
      case "instagram":
        return <FiInstagram size={size} color={color} />  
      case "linkedin":
          return <FiLinkedin size={size} color={color} />  
      case "twitter":
        return <FiTwitter size={size} color={color} />  
      case "email":
        return <FiMail size={size} color={color} />  
      case "github":
        return <FiGithub size={size} color={color} />  
      case "whatsapp":
        return <FiMessageCircle size={size} color={color} />         
  
      default:
        return <FiGlobe size={size} color={color} />
    }
  }

  return (
    <div className="contactCard" >
      <a 
        href={content} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {myIcon()}
        <span>{kind}</span>
      </a>
    </div>
  );
}

export { ContactCard };