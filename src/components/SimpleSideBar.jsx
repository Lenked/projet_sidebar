import { useState } from "react";
import "../App.css";

export const SimpleSidebar = () => {

  const [isOpenListMenu, setIsOpenListMenu] = useState(false);

  const toggleOpenListMenu = () => {
    setIsOpenListMenu(!isOpenListMenu);
  };
  return (
    <div className="simple-sidebar">
      <div className="div-navbar">
        <a
          className="link"
          href="https://colorlib.com/polygon/gentelella/index.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="i-fa-paw" alt="I fa paw" src="https://c.animaapp.com/xS3eDbWw/img/i-fa-paw.svg" />
        </a>
      </div>
      <div className="div-sidebar-menu">
        <div className="div-menu-section">
          <div className="list">
            <div className="overlap-group">
              <div className={`item`} style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
                <div className={`link-2 ${isOpenListMenu ? 'show-list' : 'hide-list'}`} onClick={toggleOpenListMenu}>
                  <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-9.svg" style={{ width: 40 }} />
                  <div className="home link-text"> Home</div>
                </div>
                <div className={`list-2 ${isOpenListMenu ? 'show-list' : 'hide-list'}`}>
                  <div className="item-2">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard 1
                      </a>
                    </div>
                  </div>
                  <div className="item-3">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index2.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard 2
                      </a>
                    </div>
                  </div>
                  <div className="item-4">
                    <div className="div-wrapper">
                      <a
                        className="text-wrapper-4"
                        href="https://colorlib.com/polygon/gentelella/index3.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Dashboard 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-link" style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
                <img className="img" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-8.svg" style={{ width: 40 }} />
                <div className="text-wrapper-6 link-text"> Forms</div>

              </div>
            </div>
            {/* Ajoutez d'autres éléments ici */}
          </div>
        </div>
        <div className="div-menu-section-2">
          <div className="list-3">
            <div className="item-link-6" style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
              <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-3.svg" style={{ width: 40 }} />
              <div className="additional-pages link-text"> Additional Pages</div>

            </div>
            <div className="item-link-6" style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
              <img className="before" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-2.svg" style={{ width: 40 }} />
              <div className="text-wrapper-6 link-text"> Extras</div>

            </div>
            <div className="item-link-6" style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
              <img className="img" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before-1.svg" style={{ width: 40 }} />
              <div className="multilevel-menu link-text"> Multilevel Menu</div>

            </div>
            <div className="item-link-6" style={{ cursor: 'pointer', paddingTop: '10px', paddingBottom: '10px' }}>
              <img className="before-3" alt="Before" src="https://c.animaapp.com/xS3eDbWw/img/--before.svg" style={{ width: 40 }} />
              <div className="text-wrapper-6 link-text"> Landing Page</div>
              <div className="span-label">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
