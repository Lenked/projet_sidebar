import {  useState } from "react";
import "../App.css";

export const DivLeftCol = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [openList, setOpenList] = useState([false, false, false, false, false, false, false, false, false, false])

  const handleChangeList = (index) => {
    const updatedList = openList.map((item, i) => i === index ? !item : false);
    setOpenList(updatedList);
  }

  return (
    <div className={`div-left-col`}>
      <div className="div-profile">
        <div className="div-profile-pic">
          <div className="img-jpg" />
        </div>
        <div className="div-profile-info">
          <div className={`text-wrapper`}>Welcome,</div>
          <div className={`heading`}>
            <div className="div">John Doe</div>
          </div>
        </div>
      </div>
      <div className="div-navbar">
        <a
          className="link"
          href="https://colorlib.com/polygon/gentelella/index.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="i-fa-paw" alt="I fa paw" src="https://c.animaapp.com/xS3eDbWw/img/i-fa-paw.svg" />
          <a
            className={`text-wrapper-2`}
            href="https://colorlib.com/polygon/gentelella/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gentelella Alela!
          </a>
        </a>
      </div>
      <div className="div-sidebar-menu">
        <div className="div-menu-section">
          <div className="general-wrapper">
            <div className="text-wrapper-3">GENERAL</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
           
            <div className={`item ${openList[0] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[0] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(0)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-9.svg" />
                <div className="home"> Home</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[0] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-2">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard2
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard3
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[1] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[1] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(1)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-8.svg" />
                <div className="home"> Forms</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[1] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        General
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-3">
                    <div className="link-3">
                      <a
                        className="text-wrapper-5"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Advanced
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Forms 
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        test  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[2] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[2] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(2)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-7.svg" />
                <div className="home"> UI Elements</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[2] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        General
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-3">
                    <div className="link-3">
                      <a
                        className="text-wrapper-5"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Advanced
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Forms 
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        test  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[3] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[3] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(3)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-6.svg" />
                <div className="home"> Tables</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[3] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        First
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-2">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Second
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[4] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[4] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(4)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-5.svg" />
                <div className="home"> Data Presentation</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[4] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-2">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard2
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[5] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[5] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(5)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-4.svg" />
                <div className="home"> Layouts</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[5] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            {/* ... Ajoutez d'autres éléments du menu ici ... */}
          </div>
        </div>
        <div className="div-menu-section">
          <div className="general-wrapper">
            <div className="text-wrapper-3">LIVE ON</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
           
            <div className={`item ${openList[6] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[6] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(6)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-3.svg" />
                <div className="home"> Additionnal Pages</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-2.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[6] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        E-COM
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-2">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Projects
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Project2
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[7] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[7] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(7)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-2.svg" />
                <div className="home"> Extras</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[7] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        General
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-3">
                    <div className="link-3">
                      <a
                        className="text-wrapper-5"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Advanced
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Forms 
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        test  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[8] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[8] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(8)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-1.svg" />
                <div className="home">Multilevels Menu</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[8] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        General
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-3">
                    <div className="link-3">
                      <a
                        className="text-wrapper-5"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Advanced
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Forms 
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        test  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                  <div className="item-4">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        testeur  
                      </a>
                    </div>
                    <div className="after-2" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            <div className={`item ${openList[9] ? 'item-active' : ''}`}>
              <div className={`link-2 ${openList[9] ? 'link-2-active' : ''} `}  onClick={() => handleChangeList(9)}>
                <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before.svg" />
                <div className="home"> Landing-page</div>
                <img
                  className="span-fa-chevron-down"
                  alt="Span fa chevron down"
                  src="https://c.animaapp.com/xS3eDbWw/img/span-fa-chevron-down-8.svg"
                  onClick={toggleMenu}
                />
              </div>
              <div className={`list-2 ${openList[9] ? 'show' : 'hide'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        First
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                  <div className="item-2">
                    <div className="link-3">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Second
                      </a>
                    </div>
                    <div className="after" />
                    <div className="before-2" />
                  </div>
                </div>
            </div>
            {/* ... Ajoutez d'autres éléments du menu ici ... */}
          </div>
        </div>
        {/* ... Ajoutez d'autres sections du menu ici ... */}
        
      </div>
      <div className="div-sidebar-footer">
        <img className="link-4" alt="Link" src="https://c.animaapp.com/xS3eDbWw/img/link-3.svg" />
        <img className="link-4" alt="Link" src="https://c.animaapp.com/xS3eDbWw/img/link-2.svg" />
        <img className="link-4" alt="Link" src="https://c.animaapp.com/xS3eDbWw/img/link-1.svg" />
        <a href="https://colorlib.com/polygon/gentelella/login.html" rel="noopener noreferrer" target="_blank">
          <img className="link-5" alt="Link" src="https://c.animaapp.com/xS3eDbWw/img/link.svg" />
        </a>
      </div>
    </div>
  );
};
