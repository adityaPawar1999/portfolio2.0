import styled from "styled-components";

const HomeStyle = styled.div`

  .cards {
    margin-top:8%;
    position: relative;
    height: 300px;
}

  .imgStyle {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-img-overlay {
    position: absolute;
    top: 35%;
    left: 5%;
    right: 0;
    bottom: 0;
    color: white;
  }

  .name {
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.white};
  }

  .location {
    font-weight: 700;
  }

  .locationIcon {
    color: ${(props) => props.theme.colors.mainColor};
    font-size: 1.7rem;
  }
@media only screen and (max-width: 600px) {
  .name {
    font-size: 2rem;
  }

  
  }
`;
export default HomeStyle;
