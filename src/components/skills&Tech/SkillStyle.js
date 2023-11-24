import styled from "styled-components"

const SkillStyle = styled.div`
.color{
    color: #fff; 
  -webkit-text-stroke: 1px ${props=>props.theme.colors.mainColor};
  text-stroke: 1px #000; 
}
.mainBox{
    margin-top:10%;
}
.heading{
    font-size:1.5rem;
    font-weight:700;
}
.mainBox .title {
    font-size: 1.5rem;
    font-weight: 600;
}
.skillsTitle{
    font-size:1.5rem;
    text-transform: uppercase;
    font-weight:800
}
.leftbox{
    padding:4%;
}
h5{
    margin:1rem 0rem;
    font-size:1.2rem;
    font-weight:700;
}
.languageSection{
    margin:0rem 2rem;
}
.rightBox{
    padding:4%;
}
img{
    margin-top:.2rem;
}
.ToolBox{
    padding:2rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}


`
export default SkillStyle;