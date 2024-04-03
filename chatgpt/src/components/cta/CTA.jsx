import './cta.css';
import { CTA_TEXT, CTA_TITLE } from './ctaConstants';

function CTA() {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{CTA_TEXT}</p>
        <h3>{CTA_TITLE}</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

export default CTA;
