import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
const ImagePicker = ({
  label,
  aspectRatio,
  icon,
  imgUrl,
  onChangeFile,
  roundedFull,
  onClearFile,
  name,
  size,
}) => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleImagePick = () => {
    fileRef.current.click();
  };
  const handleFile = (event) => {
    let imgFile;
    if (event.target.files && event.target.files.length === 1) {
      imgFile = event.target.files[0];
      setError(false);
      setFile(imgFile);
    }
    onChangeFile(name, imgFile);
  };
  const handleImageClear = (event) => {
    event.preventDefault();
    onClearFile(name);
    setPreview(null);
    setFile(null);
  };

  return (
    <React.Fragment>
      <div className="flex items-center">
        <span className="text-xs font-medium text-gray-700">{label}</span>
      </div>
      <input
        onChange={handleFile}
        type="file"
        name={name}
        accept="image/*"
        className="hidden"
        ref={fileRef}
      />
      <div
        className={`relative mt-2 ${
          (aspectRatio === "16x9" && "pb-16/9") ||
          (aspectRatio === "2x3" && "pb-2/3") ||
          "pb-12/12"
        }`}
      >
        {(preview || imgUrl) && (
          <img
            alt="preview"
            className={`absolute z-10 h-full w-full object-cover ${
              (roundedFull && "rounded-full") || "rounded-lg"
            }`}
            src={(preview && preview) || imgUrl}
          />
        )}
        {preview && (
          <div className="absolute z-30 top-0 m-3 right-0">
            <button
              onClick={handleImageClear}
              className="bg-red-600 focus:outline-none inline-flex items-center justify-center text-white w-5 h-5 rounded-full"
            >
              <FiX size={16} />
            </button>
          </div>
        )}
        <div
          onClick={handleImagePick}
          className={`absolute z-20 opacity-75 h-full flex-col w-full object-cover ${
            (roundedFull && "rounded-full") || "rounded-md"
          } ${
            (imgUrl && "text-gray-600 bg-gray-300 border-gray-300") ||
            "bg-gray-100"
          } border border-dashed cursor-pointer flex items-center justify-center ${
            preview && "hidden"
          }`}
        >
          {icon}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImagePicker;
