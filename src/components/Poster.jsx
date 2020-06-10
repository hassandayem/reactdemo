import React from "react";
import { URL_IMG, IMG_SIZE_LARGE } from "../const";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { Glyphicon } from "react-bootstrap";

export default function Poster(props) {
  const StyledImg = styled.div`
    &:hover .image {
      opacity: 0.3;
      transform: translateY(-2px);
    }
    .image {
      transition: 0.3s ease-in-out all;
      border-radius: 10px;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
      margin-right: 10px;
    }
    &:hover .title {
      opacity: ${props.info ? 1 : 0};
    }
  `;
  const Info = styled.div`
    position: absolute;
    top: 75%;
    margin: 10px;
    color: black;
    font-weight: bold;
    opacity: 0;
  `;
  return (
    <StyledImg>
      <Image
        className="image"
        style={{ marginTop: "20px", marginBottom: "20px" }}
        key={props.id}
        src={URL_IMG + IMG_SIZE_LARGE + props.path}
        responsive
      />
      {props.info && (
        <Info className="title">
          <h3>{props.title}</h3>
          <Glyphicon glyph={"star"} /> {props.voteAverage} &nbsp;&nbsp;{" "}
          {props.release_date.substring(0, 4)}
        </Info>
      )}
    </StyledImg>
  );
}
