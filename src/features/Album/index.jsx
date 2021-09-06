import React from 'react';
import AlbumList from './Components/AlbumList';

AlbumFeatures.propTypes = {
    
};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 bài nhạc trẻ hay nhất',
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/8/7/5/78756e0e73ba99aafd67de76f4b742fb.jpg'

        },
        {
            id: 2,
            name: 'Top 100 nhạc âu mỹ hay nhất',
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg'
        },
        {
            id: 3,
            name: 'Top 100 nhạc Hàn Quốc hay nhất',
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg'
        }
];

    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeatures;