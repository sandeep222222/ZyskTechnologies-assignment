import React, {useState} from 'react';
import styles from './FAQ.module.css';
import AvatarGroup from '../../assets/AvatarGroup.png';
import ExpandMoreIcon from '../../assets/Accordion-Expand.png';
import ExpandLessIcon from '../../assets/Acoordion-Collapse.png';
import Button from '@mui/material/Button';

const faqData = [
    {
      "question": "Is there a free trial available?",
      "answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      "question": "Can I change my plan later?",
      "answer": "Yes, you can upgrade or downgrade your plan anytime directly from your account dashboard. Changes will take effect immediately, and any unused balance will be prorated to your new plan."
    },
    {
      "question": "What is your cancellation policy?",
      "answer": "You can cancel your plan at any time. When you cancel, your account will remain active until the end of the current billing cycle, and you won't be charged again. We also offer a refund within the first 7 days if you're unsatisfied."
    },
    {
      "question": "Can other info be added to an invoice?",
      "answer": "Yes, you can include additional information such as a VAT number or billing address in your invoices. Simply update the billing section in your account settings before the next billing cycle."
    },
    {
      "question": "How does billing work?",
      "answer": "Billing is processed on a monthly or annual basis, depending on your subscription. You'll receive an invoice at the start of each billing period, and payments will be automatically charged to your saved payment method."
    },
    {
      "question": "How do I change my account email?",
      "answer": "To change your account email, navigate to your account settings and update your email address. A confirmation email will be sent to verify the change before it's finalized."
    }
  ]  

  const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
      <div className={styles.accordionContainer} onClick={onClick}>
        <div className={styles.accordionHeader}>
          <h1>{title}</h1>
          <img 
          src={isOpen ? ExpandLessIcon : ExpandMoreIcon} 
          alt={isOpen ? "Collapse icon" : "Expand icon"} 
          className={styles.icon}
        />
        </div>
        {isOpen && (
          <div className={styles.accordionOptions}>
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };


function FAQ() {

    const [openIndex, setOpenIndex] = useState(null); // to keep track of the open accordion

  // Toggle function to open/close a specific FAQ
  const toggleOptions = (index) => {
    setOpenIndex(openIndex === index ? null : index); // if already open, close it; otherwise, open
  };

  return (
    <div className={styles.mainContainer}>
        <h2>Frequently asked questions</h2>
        <p className={styles.subHeading}>Everything you need to know about the product and billing.</p>
        <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.question}
            content={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleOptions(index)}
          />
        ))}
        </div>
        <div className={styles.stillHaveQuestionsContainer}>
            <div><img src={AvatarGroup} alt="team's avatar icons"/></div>
            <p className={styles.stillHaveQuestionsText}>Still have questions?</p>
            <p  className={styles.cantFindAnswers}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <Button variant="contained" style={{backgroundColor:'#7F56D9', textTransform: 'none'}} className={styles.getInTouchButton}>Get in touch</Button>
        </div>
    </div>
  )
}

export default FAQ;