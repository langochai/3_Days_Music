const FileUpload = ({inputType,setValue,whenDone}) => {
	const handleFileChange = async (event) => {
		const formData = new FormData();
		formData.append('file', event.target.files[0]);

		try {
			let data
			const response = await fetch("http://localhost:3000/admin/upload", {
				method: 'POST',
				body: formData,
			});
			data = await response.json();
			console.log(data.firebaseUrl)
			if (data) whenDone(true)
			else whenDone(false)
			setValue(inputType,data.firebaseUrl,false)
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<label>{inputType==="fileUrl"? "File" : "Image"}:  </label>
			<input type="file" onChange={handleFileChange} />
		</div>
	);
};

export default FileUpload;