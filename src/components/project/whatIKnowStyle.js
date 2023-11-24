import styled from "styled-components";

const WhatIKnowStyle = styled.div`
.color{
color: #fff; 
-webkit-text-stroke: 1px ${props=>props.theme.colors.mainColor};
text-stroke: 1px #000; 
}
a{
  text-decoreation:none;
  color:#fff;
}
.mainBox{
  margin-top:10%;
}
.heading{
  font-size:1.5rem;
  font-weight:700;
}
  .leftbox{
    padding:5%;
  }
  .projectTitle{
    font-weight:700;
  margin-bottom:5%;
  }

  .imgBox {
    position: relative;
  }
  .imgStyle {
    height: 200px;
    width: 100%;
    object-fit: cover;
    filter:brightness(40%);
  }
  .title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%);
      font-size:1rem;
      font-weight:700;
      color:${props => props.theme.colors.white };
      width:60%;
      height:50px;
      text-align:center;
      opacity:.9;
      padding:1rem .5rem;
  }
  .projectLinks{
     position: absolute;
    bottom: 0%;
    z-index:200;
    left: 5%;
    cursor:pointer;
   
  }
  .siteLink{
    padding-left:.5rem;
  }
  .siteLink:hover{
    color:${props=>props.theme.colors.mainColor}
  }
  .gitLink{
    padding-left:.5rem;
  }
  .gitLink:hover{
    color:${props=>props.theme.colors.textColor}
  }
  .descr {
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textColor};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .imgBox:hover .descr {
    display: block;
    opacity: 8;
    font-size:.9rem;
    font-weight:500;
    color: ${props => props.theme.colors.white}; 
  }
  .imgBox:hover .title {
    display: none;
  }
  .imgBox:hover img{
      filter: brightness(70%);
  }

.rightBox{
  padding:5%;
}
.miniProjectHeading{
  font-weight:700;
  margin-bottom:5%;
}
 .miniProjectCard{
  padding-left:1rem;
  border-radius:5px;
} 
.miniProjectTitle{
  padding-top:1rem;
  color: ${props=>props.theme.colors.mainColor};
  font-weight:700;
  padding-bottom:.5rem;
  border-bottom:1px solid orange;
}
.miniProjectDescription{
  color: ${props=>props.theme.colors.textColor};
  font-weight:500;
  font-size:14px;
  opacity:.7;
}
.miniProjectCard:hover{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
`;

export default WhatIKnowStyle;
