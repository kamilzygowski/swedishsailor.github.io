import styled from 'styled-components';

export const VideoBackground = styled.video`
width:100%;
height:100%;
-o-object-fit: cover;
object-fit:cover;
background:#232a34;
position:fixed;
object-fit:cover;
margin-top:14px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const VideoBackgroundDE = styled.video`
width:100%;
height:110%;
-o-object-fit: cover;
object-fit:cover;
background:#232a34;
position:fixed;
margin-top:-64px;
background-position: top;

@media screen and (max-width: 768px) {
    display: none;
}
`;