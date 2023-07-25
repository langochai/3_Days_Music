import { useState} from 'react';

const FileUpload = ({inputType,setValue}) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	const handleUpload = async () => {
		if (!selectedFile) return;

		const formData = new FormData();
		formData.append('file', selectedFile);

		try {
			const response = await fetch("http://localhost:3000/admin/upload", {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();
			console.log(data.firebaseUrl)
			setValue(inputType,data.firebaseUrl,false)
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<label>{inputType}:  </label>
			<input type="file" onChange={handleFileChange} />
			<p style={{cursor:"pointer"}} onClick={handleUpload}>Upload</p>
		</div>
	);
};

export default FileUpload;