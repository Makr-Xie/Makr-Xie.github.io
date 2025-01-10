import React, { useEffect, useState } from 'react';
import piexif from 'piexifjs';
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './index.css';


const PHOTO_METADATA_KEY = 'photoGalleryImageMetadata'; 

const PhotoGallery = () => {
    const [imageMetadata, setImageMetadata] = useState([]);

    useEffect(() => {
        const cachedMetadata = localStorage.getItem(PHOTO_METADATA_KEY);
        if (cachedMetadata) {
            setImageMetadata(JSON.parse(cachedMetadata));
        } else {
            const loadAndProcessImages = async () => {
                const images = import.meta.glob('../../assets/photos/*.{jpg,jpeg,png}', { eager: true });
                const imageEntries = Object.entries(images).map(([path, module]) => ({
                    src: module.default,
                    fileName: path.split('/').pop(), // 提取文件名
                }));

                const metadataArray = [];
                for (const img of imageEntries) {
                    try {
                        const metadata = await getImageMetadata(img.src);
                        metadataArray.push({ src: img.src, fileName: img.fileName, ...metadata });
                    } catch (error) {
                        console.error(`Error processing image ${img.src}:`, error);
                        metadataArray.push({
                            src: img.src,
                            fileName: img.fileName,
                            Model: 'Unknown',
                            ISO: 'Unknown',
                            Aperture: 'Unknown',
                            ShutterSpeed: 'Unknown',
                            Lens: 'Unknown',
                            DateTimeOriginal: null,
                            FocalLength: 'Unknown'
                        });
                    }
                }

                metadataArray.sort((a, b) => {
                    const dateA = parseExifDate(a.DateTimeOriginal);
                    const dateB = parseExifDate(b.DateTimeOriginal);
                    return dateB - dateA; 
                });

                setImageMetadata(metadataArray);
                localStorage.setItem(PHOTO_METADATA_KEY, JSON.stringify(metadataArray));
            };

            loadAndProcessImages();
        }
    }, []);

    const parseRational = (value) => {
        if (Array.isArray(value) && value.length === 2) {
            return value[0] / value[1];
        }
        return value || 'Unknown'; 
    };

    const cleanLensModel = (lensModel) => {
        const regex = /^(.+?f\/\d+L)/;
        const match = lensModel.match(regex);
        return match ? match[1] : lensModel;
    };

    const parseExifDate = (exifDate) => {
        if (!exifDate) return new Date("1970-01-01T00:00:00"); 
        const [date, time] = exifDate.split(" "); 
        const formattedDate = date.replace(/:/g, "-");
        return new Date(`${formattedDate}T${time}`);
    };

    const getImageMetadata = async (imgSrc) => {
        const response = await fetch(imgSrc);
        const arrayBuffer = await response.arrayBuffer();
        const base64String = btoa(
            new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        const exifData = piexif.load(`data:image/jpeg;base64,${base64String}`);

        return {
            Model: exifData['0th'][piexif.ImageIFD.Model] || 'Unknown',
            ISO: exifData['Exif'][piexif.ExifIFD.ISOSpeedRatings] || 'Unknown',
            Aperture: exifData['Exif'][piexif.ExifIFD.FNumber]
                ? parseRational(exifData['Exif'][piexif.ExifIFD.FNumber]).toFixed(1)
                : 'Unknown',
            ShutterSpeed: exifData['Exif'][piexif.ExifIFD.ExposureTime] || 'Unknown',
            Lens: exifData['Exif'][piexif.ExifIFD.LensModel]
                ? cleanLensModel(exifData['Exif'][piexif.ExifIFD.LensModel])
                : 'Unknown',
            DateTimeOriginal: exifData['Exif'][piexif.ExifIFD.DateTimeOriginal] || null,
            FocalLength: exifData["Exif"][piexif.ExifIFD.FocalLength]
                ? `${parseRational(exifData["Exif"][piexif.ExifIFD.FocalLength]).toFixed(1)}mm`
                : "Unknown",
        };
    };



    return (
        <div className='container'>
            <Sidebar />
            <div className='gallery-header'>
                <h>My Photos</h>

                <p>I picked up camera since my high school, and below are some pics. Hope you will like them.</p>
            </div>
            <div className="gallery-column">
                {imageMetadata.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img className="gallery-img" src={image.src} alt={`Gallery Image ${index}`} loading="lazy"/>
                        <div className="gallery-info">
                            <div className="exif">
                                <h>EXIF</h>
                                <p>
                                    <span className="material-symbols-outlined">photo_camera</span>
                                    {image.FocalLength}
                                    <span className="material-symbols-outlined">camera</span>
                                    f/{image.Aperture}
                                    <span className="material-symbols-outlined">speed</span>
                                    1/{image.ShutterSpeed}s
                                    <span className="material-symbols-outlined">iso</span>
                                    {image.ISO}
                                </p>
                            </div>
                            <div className="camera">
                                <h>CAMERA</h>
                                <p>  {image.Model} </p>
                            </div>
                            <div className="exif">
                                <h>LENS</h>
                                <p> {image.Lens}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default PhotoGallery