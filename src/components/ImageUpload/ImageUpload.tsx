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


    const handleUpload = (e:any) => {
        e.preventDefault()

        Promise.all(
            media.map((file) => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'reDiPresetName');
                formData.append('cloud_name', 'dequtvxxc');

                return fetch(`https://api.cloudinary.com/v1_1/dequtvxxc/image/upload`, {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => data.url);
            })
        )
            .then(mediaUrls => {
                // Update state or perform other actions with mediaUrls

                sessionStorage.setItem('imgUrl',mediaUrls[0])
            })
            .catch(error => {
                // Handle errors here
                console.error('Upload error:', error);
            });
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
