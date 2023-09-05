import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'klqrwtpw'); // Reemplaza con tu upload preset
    formData.append("cloud_name", "SantiG")

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/SantiG/image/upload`,
        formData
      );

      console.log('Imagen subida:', response.data);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <div>
    
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload}>Subir imagen a Cloudinary</button>
    </div>
  );
};

export default CloudinaryUploader;