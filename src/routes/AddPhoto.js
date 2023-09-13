import { useState } from "react";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Center = styled.div`
  max-width: 100vw;
  min-width: 390px;
  height: 100vh;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TextSub = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  text-align: start;
  margin-left: 5px;
`;

const Img = styled.div`
  margin-bottom: 30px;
`;

const CustomFileUpload = styled.label`
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 525px;
  cursor: pointer;
  background-color: #f7f7f7;
  color: #333;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #e0e0e0;
  }

  input[type="file"] {
    display: none;
  }
`;

export default function AddPhoto() {
  const [mainImg, setMainImg] = useState(null);
  const [photoSentence, setPhotoSentence] = useState("");

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", mainImg); // 'file'는 서버에서 이미지를 받는 필드명
    formData.append(
      "post",
      new Blob([JSON.stringify({ post: photoSentence })], {
        type: "application/json",
      })
    );
    console.log(formData.get("file"));

    axios
      .post(`http://27.96.135.222:8080/api/post/add`, formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((result) => {
        console.log("up");
        console.log(result);
        // navigate('/');
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  };

  const onMainUpload = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setMainImg(file);
  };

  const takeitback = (e) => {
    setMainImg(null);
    setPhotoSentence("");
  };

  return (
    <>
      <Page>
        <Center>
          <div style={{ padding: "20px" }}>
            <Header>
              <Title> 이미지 업로드 </Title>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <TextSub onClick={takeitback}>취소</TextSub>
                <TextSub onClick={onSubmit}>완료</TextSub>
              </div>
            </Header>
            <Img>
              {mainImg == null ? (
                <CustomFileUpload>
                  <input accept="image/*" type="file" onChange={onMainUpload} />
                  <AiFillCamera size={24} />
                </CustomFileUpload>
              ) : (
                mainImg && (
                  <img
                    width={"350px"}
                    src={URL.createObjectURL(mainImg)}
                    alt="Main"
                  />
                )
              )}
            </Img>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%" }}
              value={photoSentence}
              onChange={(e) => setPhotoSentence(e.target.value)}
            />
          </div>
        </Center>
      </Page>
    </>
  );
}
