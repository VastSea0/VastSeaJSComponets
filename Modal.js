import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table , Row, Col, Form, Button, Modal , Navbar, Nav, NavDropdown} from "react-bootstrap";
import '../App.css';



const HeadMenuVeli = () => {
 
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  <>
<Navbar collapseOnSelect expand="lg" className="blue">
<Container>
  <Navbar.Brand href="/dashboard/veli">VastSea Saver - Veli</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
  
<Nav.Link onClick={handleShow}>Hakkımızda</Nav.Link>
      <NavDropdown title="Üyeler" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="/veli/uyeler/ogretmenler/"  >Öğretmenler</NavDropdown.Item>
       
        
      </NavDropdown>
    </Nav>
    <Nav>
   <Nav.Link  href="http://www.vastsea.com.tr/#iletisim"  >İletişim</Nav.Link>
      <Nav.Link eventKey={2} href="http://vastseablog.com/VastSea.pdf" >
        Gizlilik Ve Çerez Politikalarımız
      </Nav.Link>

      <NavDropdown title="Panelim" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="#" onClick={handleNavigateToNotification}  >Bildirim Gönder</NavDropdown.Item>
        
       
        
        
        
      </NavDropdown>
    
      <Nav.Link eventKey={2}   onClick={handleSignOut} href="#cikis">
      Oturumu kapat
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Hakkımızda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <p>VastSea Saver, öğretmen-veli randevu sistemini kolay ve kullanıcı dostu bir şekilde sunar. Projemiz, 12 Ekim 2023 tarihinde kullanıcılarımıza duyuruldu ve daha sonra projenin detayları ve amacı değiştirildi. Bu değişiklik, daha büyük sorunlara çözüm bulma ve bu çözümleri en uygun, güvenilir ve doğru şekilde kullanıcılarımıza ulaştırma arzusundan kaynaklandı. Bizim temel amacımız, sorunlara pratik çözümler sunmak ve bunları geniş kitlelere erişilebilir kılmaktır.
 </p>
 <p>Özellikle kullanıcı arayüzü ve güvenliğine büyük önem verdiğimiz bu projemiz, şu anda "BETA 100" adlı kararlı olmayan bir sürümde bulunuyor. En yakın zamanda ise kararlı bir sürüm ile tüm kullanıcılara açılacak. Bu sürüm, projenin "BETA" aşamasının 29 Ekim Cumhuriyet Bayramı'nda sonlanmasının ve Cumhuriyetimizin 100. yılına bu projeyi armağan etmenin bir ifadesidir.
 </p>
 <p>Bu projenin tek bir kişi tarafından geliştirilmiş olması nedeniyle bazı hataların gözden kaçabileceğini unutmayın. Bu yüzden sizden gelecek her türlü geri bildirim ve destek bizim için değerlidir. Herhangi bir hata veya eksiklik fark ederseniz veya projeye katkıda bulunmak istediğiniz bir öneriniz varsa lütfen bize bildirin. Projemiz, Şehit Mehmet Günenç Anadolu Lisesi'nin desteğiyle Egehan Kahraman tarafından geliştirilmiş ve VastSea tarafından güçlendirilmiştir. Atatürk'ün miras bıraktığı bu güzel ülkeye ve tüm dünya genelindeki sevgili kullanıcılara Egehan tarafından sunulmuştur. Bu projenin geliştirme amacı kar amacı gütmek değildir, bu nedenle teşekkür veya destek amaçlı yapılacak her türlü bağışa açıktır. Sadece teşekkür ederek bile bize yardımda bulunabilirsiniz.</p>
      
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Kapat
              </Button>
           
            </Modal.Footer>
          </Modal>

</>
  );
};

export default HeadMenuVeli;

    
