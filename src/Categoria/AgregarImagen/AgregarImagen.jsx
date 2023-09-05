import React, { useState } from 'react';
import { useFormik } from 'formik';
import { subirArchivo } from '../../FirebaseConfig';
import '../AgregarImagen/agregarImagen.css';
import Swal from 'sweetalert2';
import LoadingCircular from '../LoadingCircular/LoadingCircular';

const AgregarImagen = ({ setUrlImagen, urlImagen }) => {
    const [objeto, setObjeto] = useState('');
    const [loading, setLoadig] = useState(false)
    const { handleSubmit, setFieldValue, values } = useFormik({
        initialValues: {
            file: null,
        },
        onSubmit: async (values) => {
            setLoadig(true)
            if (values.file) {
                try {
                    const imageUrl = await subirArchivo(values.file);
                    setUrlImagen(imageUrl);
                    setLoadig(false)

                } catch (error) {
                    console.error('Error al subir el archivo', error);
                }
            } else {
                console.error('Por favor, seleccione un archivo antes de enviarlo.');
            }
        },
        validateOnChange: false,
    });

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        setFieldValue('file', file);
        setObjeto(file);
    };

    return (
        <div>
            <form className='form__agregarImagen' onSubmit={handleSubmit}>
                <div className='container__input__subirImagen'>
                    <label className='custom-file-upload'>
                        <input
                            className='input__suibirImagen'
                            type='file'
                            name='file'
                            onChange={handleFileChange}
                        />
                        Subir archivo
                        {
                            loading &&
                            <LoadingCircular />
                            
                        }
                    </label>
                    {urlImagen && (
                        <div className='image-preview'>
                            <img
                                className='imagen__agregarImagen'
                                src={urlImagen}
                                alt='Imagen seleccionada'
                            />
                        </div>
                    )}
                    
                    
                </div>
                <button className='button__agregarImagen' type='submit'>
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default AgregarImagen;
