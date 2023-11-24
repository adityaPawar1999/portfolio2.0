import styled from "styled-components";

const AboutStyle = styled.div`
margin-top:10%;
padding:7%;
display:flex;
align-item:center;
justify-content:center;
a{
    text-decoration:none;
    color:gray;
}
.color{
    color: #fff; 
    -webkit-text-stroke: 1px ${props=>props.theme.colors.mainColor};
    text-stroke: 1px #000; 
}
.heading{
    padding:5% 0;
}
.title{
    font-size:2.5rem;
    font-weight:800;
    color:${props=>props.theme.colors.textColor};
}
.description{
    padding-top:1rem;
    color:${props=>props.theme.colors.gray};
    font-weight:600;
    font-size:.9rem;        
}
.links{
    color:${props=>props.theme.colors.gray};
}
.link{
    padding-right:.5rem;
}

.gitLink:hover{
    color:#333;
}
.mailLink:hover{
    color:#3498db;
}

.linkedLink:hover{
    color:#0077b5;
}

.callLink:hover{
    color:#27ae60;
}
.imgStyle{
    width:250px;
    height:250px;
    border-radius:50%;
    object-fit:cover;
}
`
export default AboutStyle;