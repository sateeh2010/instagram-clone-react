import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { storage } from './firebase';

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
    };
    return (
        <div>
            <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)}/>
            <input type="file" onChange={handleChange} />

            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}
