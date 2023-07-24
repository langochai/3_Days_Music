import {useEffect, useState} from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    useEffect(() => {
        console.log(selectedFile)
    })
    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch("http://localhost:3000/api/upload", {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;