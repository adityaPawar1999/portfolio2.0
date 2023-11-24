import styled from "styled-components";

const FooterStyle = styled.div`
    position:relative;
    margin-top:5%;
    width: 100%;
    background-color: #212121;
    color:#fff;
    padding:2rem ;
.title{
    
  font-weight:700;
}
    .SocialSite{
        
    padding:2rem 2rem;   
    display:flex;
    align-item:center;
    justify-content:center;
    gap:1rem;
}
a{
    text-decoration:none;
    color:#fff;
}
.dialBox{   
    padding-bottom:2rem;
}
.dial{
    display:flex;
    gap:1rem;

}
.dial:hover{
    color:${props=>props.theme.colors.mainColor};
}
.footerLink {
    display: flex;
    justify-content: space-around; /* Adjust as needed */
  }
  
  .links {
    text-decoration: none;
    color:${props=>props.theme.colors.white};
    padding: 10px;
    /* Add additional styling as needed */
  }
  
  .links:hover {
    color:${props=>props.theme.colors.textColor};
    background-color: #eee; /* Set your desired hover background color */
  }
  
`
export default FooterStyle;