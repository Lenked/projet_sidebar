
// eslint-disable-next-line react/prop-types
export const TopNav = ({ toggleAnotherSidebar }) => {
  return (
    <div className="div-nav-menu" onClick={toggleAnotherSidebar} style={{cursor: 'pointer'}}>
      <img className="link" alt="Link" src="https://c.animaapp.com/KKjsGrF1/img/link.svg" style={{marginLeft: '20px', paddingTop: '10px'}} />
    </div>
  );
};
