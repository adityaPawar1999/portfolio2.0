import styled from 'styled-components';

const StyleNAV = styled.div`
z-index:1000;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
position:fixed;
top: 0;
width: 100%;
padding:.5rem 0;
background:${props => props.theme.colors.white};

z-index: 1000;
  .links {
    text-decoration: none;
    color:${props =>props.theme.colors.textColor};
    font-weight: 700;
    padding: 1.5rem;
    transition: .5s ;  // Corrected property name
  }

  .links:hover {
    color:${props =>props.theme.colors.mainColor};    
  }

  .active {
    color: ${props => props.theme.colors.mainColor};
  }
  .menuBtn {
    display: none;
  }
  .cancelBtn {
    display: none;
  }
  .mobileSetting{
    position:relative;
    display:none;
  }
  @media (max-width: 768px) {
  .logo{
  padding-left:1rem;
    .mobileSetting{
      display:block;
    }
  .links {
      display: none;
    }
    .menuBtn {
      display: block;
      padding-right:5rem;
    }
    .cancelBtn {
      display: block;
      padding-right:5rem;
    }

    .mobileNavigation {
      position:absolute;
      backdrop-filter: blur(5px);
      height: 100vh;
      width: 100%;
      display: block;
    }

    .Mobilelinks {
      display: flex;
      align-items: center;  // Corrected property name
      justify-content: center;
      padding-top: 3rem;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 640px) {
    .mobileSetting{
    display:block;
  }
.links {
    display: none;
  }
  .menuBtn {
    display: block;
    padding-right:5rem;
  }
  .cancelBtn {
    display: block;
    padding-right:5rem;
  }

  .mobileNavigation {
    position:absolute;
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100%;
    z-index:999;
    display: block;
  }

  .Mobilelinks {
    text-decoration: none;
    color:${props =>props.theme.colors.textColor};
    font-weight: 700;
    transition: .5s ;
    display: flex;
    align-items: center;  // Corrected property name
    justify-content: center;
    padding-top: 3rem;
    font-size: 2rem;
  }
  .Mobilelinks:hover {
    color:${props =>props.theme.colors.mainColor};    
  }

  .active {
    color: ${props => props.theme.colors.mainColor};

  }
}
`;

export default StyleNAV;
