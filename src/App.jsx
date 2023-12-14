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
    <>
      <div className="inner">
        {showPopup ? (
      <div className="popup">
        <h3>Üye olduğunuz için teşekkürler!</h3>
        <p>Onay postası {email} adresine gönderildi. Lütfen açın ve içindeki onay butonuna tıklayarak üyeliğinizi başlatın.</p>
        <button className='close-btn' onClick={handleClosePopup}>Pencereyi Kapat</button>
      </div>
    ) : (
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
          <span>E-Posta Adres:</span>
          <input type="text" placeholder='eposta@şirket.com' value={email} onChange={handleEmailChange} style={{borderColor: isValid ? '' : '#FF6155', backgroundColor: isValid ? '':'#FF6155'}} />
          {!isValid && <div style={{ color: '#FF6155' }}>Geçersiz mail adresi</div>}    
          <button className='hav-reg' onClick={handleRegisterClick} disabled={!isValid}>Havadise Aylık Kaydol</button>
        </div>
        <div className="web-sec">
          <img src="web-mask.svg" alt="web-svg" />
        </div>
      </div>
    )}
      </div>
    </>
)
}

export default App
