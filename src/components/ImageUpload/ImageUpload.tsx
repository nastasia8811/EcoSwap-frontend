import React, { useState, ChangeEvent } from 'react';


const ImageUpload:React.FC = () => {
    const [media, setMedia] = useState<File[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (Object.values) {
            const files = [...Object.values(target.files!)];
            setMedia(files);
        }
    };


    const handleUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'dequtvxxc';
        const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || 'reDiPresetName';

        Promise.all(
            media.map((file) => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);
                formData.append('cloud_name', cloudName);

                return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => data.url);
            })
        )
            .then(mediaUrls => {
                sessionStorage.setItem('imgUrl',mediaUrls[0])
            })
            .catch(() => {});
    };

    return (
        <div>
            <input type="file" multiple onChange={handleChange} />
            <button onClick={handleUpload} disabled={media.length === 0}>
                Upload
            </button>
        </div>
    );
};

export default ImageUpload;
