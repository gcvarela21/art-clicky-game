import React, { useState } from 'react';
import ImageBlock from './ImgBlock';

// render all images page and click events
function MainPage() {

    const [imgUrl, setImgUrl] = useState([
        {
            url: 'https://i.pinimg.com/originals/7c/a7/48/7ca748ad4d7ca7fedf141a4be79e5ad6.jpg',
            title: '1'
        },
        {
            url: 'https://i.pinimg.com/originals/ce/78/4a/ce784acaa488e63bec7a8aea101a9b7f.jpg',
            title: '2'
        },
        {
            url: 'https://i.pinimg.com/originals/11/50/41/115041ff3293459d063b66c268c748e4.jpg',
            title: '3'
        },
        {
            url: 'https://beaugerard.files.wordpress.com/2017/12/1.jpg',
            title: '4'
        },
        {
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/6a/6a4e/6a4ea0e7-9878-4496-9aeb-af0a0b959251/b2ca2c1c-cd38-8a32-45f1-19934268ffb9.jpg',
            title: '5'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Jean_auguste_dominique_ingres_princesse_albert_de_broglie.jpg',
            title: '6'
        },
        {
            url: 'https://historylists.org/images/salome.jpg',
            title: '7'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/La_velata.jpg',
            title: '8'
        },
        {
            url: 'https://i.pinimg.com/originals/77/45/ae/7745ae54032ca4b8291e229459d3c7a1.jpg',
            title: '9'
        },
        {
            url: 'https://i.pinimg.com/originals/f8/67/37/f86737d4f027f84aa0ff2093accfe5d8.jpg',
            title: '10'
        },
        {
            url: 'https://i.pinimg.com/originals/4c/bf/66/4cbf661bf7d99ee53c5a3cb8184d802f.png',
            title: '11'
        },
        {
            url: 'http://victorian-era.org/images/Victorian-Era-Artists-1.jpg',
            title: '12'
        }
    ]
);



function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
    function test() {

        const shuffledData = shuffle(imgUrl)
        console.log(shuffledData);
        setImgUrl(shuffledData);
        
    }

    // const imgList = imgUrl.map((IMG) =>
    //     <ImageBlock url={IMG.url} title={IMG.title} />

    // );

    // step 1: add eventListner to the img not the row 
    // step 2: make react reload when state has been changed
    // step 3: write the logic if they click the same img 
    return (
        <div className='row' onClick={test}>
            {/* {imgList} */}

            {imgUrl.map(IMG => (
           <ImageBlock url={IMG.url} title={IMG.title} />
        ))}
        </div>
    )


}
export default MainPage;