import styled from "styled-components";

const ProjectStyle =styled.div`
min-height:46vh;
margin-top:13%;
color:gray;
.title{
    padding-top:8rem;
}
`
const Error=()=>{
    return(<>
    <ProjectStyle>
        <h2 className="text-center title">Invalid URL</h2>
    </ProjectStyle>
    </>)
}
export default Error;