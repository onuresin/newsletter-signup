import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setisValid] = useState(true)
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setisValid(validateEmail(newEmail));
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //mail adreslerini kontrol etmek kullanılan regex ifadesi. Yada reular expression (düzenli ifade olarak adlandırılır)
    return emailRegex.test(inputEmail);
  }

  const handleRegisterClick = () => {
    if (isValid) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
      <div className="inner">
        <div className="mobile-sec">
          <img src="mobile-mask.svg" alt="mobile-svg" />
        </div>
        <div className="content">
            <span className="top">
                <h4>Güncel Kalın!</h4>
                <h6>Aylık güncellemeler alan 60.000'den fazla ürün yöneticisine katılın:</h6>
                <ul>
                  <li><img src="check.svg" alt="checked"/>Ürünleri keşfet ve senin için önemli olanı inşa et.</li>
                  <li><img src="check.svg" alt="checked"/>Ölçüm güncellemelerin başarılı olmasını sağlamak için.</li>
                  <li><img src="check.svg" alt="checked"/>Ve çok daha fazlası!</li>
                </ul>
            </span>       
        </div>
        <div className="web-sec">
          <img src="web-mask.svg" alt="web-svg" />
        </div>
      </div>
  )
}

export default App
