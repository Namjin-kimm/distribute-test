import { Box, Button, InputBase, Typography } from "@mui/material"
import { useState } from "react"

export default function Board(){
    const style = {
        fontWeight: 500,
        fontSize: 20
    }

    const inputBaseSx = {
        border: "1px solid lightgrey",
        borderRadius: 1,
        paddingLeft: "5px",
      }

    const [info, setInfo] = useState({
        title : '',
        writer: '',
        content: ''
    })
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');

    const insertContent = () => {
        // console.log(import.meta.env.VITE_APP_SERVER_URL);
        // console.log('전체 ENV:', import.meta.env);
        const url = '/api/board/insert'
        const requestOptions = {
            method: 'POST',
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify(info)
        }
        fetch(import.meta.env.VITE_APP_SERVER_URL + url, requestOptions)
            .then((res) => {
                if(!res.ok){
                    throw new Error("서버 응답 에러")
                }
                return res.json();
            })
            .then((result) => {
                console.log(result);
            })
    }


    return (
        <>
            <Box>
                <Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={style} textAlign={"left"}>제목</Typography>
                        <Button onClick={insertContent}>등록</Button>
                    </Box>
                    <InputBase sx={inputBaseSx} onChange={e => {setInfo({...info, title: e.target.value})}}/>
                </Box>
                <Box>
                    <Typography sx={style} textAlign={"left"}>작성자</Typography>
                    <InputBase sx={inputBaseSx} onChange={e => {setInfo({...info, writer: e.target.value})}}/>
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography sx={style} textAlign={"left"}>내용</Typography>
                    <InputBase fullWidth multiline sx={inputBaseSx} minRows={10} onChange={e => {setInfo({...info, writer: e.target.value})}}/>
                </Box>
            </Box>
        </>
    )
}